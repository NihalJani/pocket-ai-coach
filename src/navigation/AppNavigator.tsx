import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Colors } from '../constants/colors';
import { storage, StorageKeys } from '../services/storage';

// Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import CreateScreen from '../screens/CreateScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    const [isLoading, setIsLoading] = useState(true);
    const [isOnboarded, setIsOnboarded] = useState(false);

    useEffect(() => {
        checkOnboarding();
    }, []);

    const checkOnboarding = async () => {
        const onboardingComplete = await storage.getItem<boolean>(
            StorageKeys.ONBOARDING_COMPLETE
        );
        setIsOnboarded(!!onboardingComplete);
        setIsLoading(false);
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={Colors.accentPrimary} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isOnboarded ? 'Home' : 'Onboarding'}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.background,
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.border,
                    },
                    headerTintColor: Colors.text,
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                    cardStyle: {
                        backgroundColor: Colors.background,
                    },
                }}
            >
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: true,
                        title: 'Home',
                        headerRight: () => null,
                    }}
                />
                <Stack.Screen
                    name="Browse"
                    component={BrowseScreen}
                    options={{ title: 'Browse Coaches' }}
                />
                <Stack.Screen
                    name="Create"
                    component={CreateScreen}
                    options={{ title: 'Create Coach' }}
                />
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{ title: 'Chat' }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: 'Profile' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
