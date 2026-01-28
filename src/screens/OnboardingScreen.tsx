import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Colors } from '../constants/colors';
import { Spacing, Typography, BorderRadius, CommonStyles } from '../constants/styles';
import { storage, StorageKeys } from '../services/storage';
import { UserProfile } from '../types';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

interface Props {
    navigation: OnboardingScreenNavigationProp;
}

export default function OnboardingScreen({ navigation }: Props) {
    const [name, setName] = useState('');

    const handleGetStarted = async () => {
        const profile: UserProfile = {
            name: name.trim() || undefined,
            createdAt: new Date().toISOString(),
        };

        await storage.setItem(StorageKeys.USER_PROFILE, profile);
        await storage.setItem(StorageKeys.ONBOARDING_COMPLETE, true);

        navigation.replace('Home');
    };

    const handleSkip = async () => {
        await storage.setItem(StorageKeys.ONBOARDING_COMPLETE, true);
        navigation.replace('Home');
    };

    return (
        <KeyboardAvoidingView
            style={CommonStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={[CommonStyles.centerContent, CommonStyles.padding]}>
                <Text style={styles.title}>Welcome to PocketAI Coach</Text>
                <Text style={styles.subtitle}>Your personal AI coaching companion</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>What's your name? (Optional)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        placeholderTextColor={Colors.textMuted}
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                    />
                </View>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={handleGetStarted}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryButtonText}>Get Started</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={handleSkip}
                    activeOpacity={0.8}
                >
                    <Text style={styles.secondaryButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: Typography.sizes.xxl,
        fontWeight: Typography.weights.bold,
        color: Colors.text,
        textAlign: 'center',
        marginBottom: Spacing.sm,
    },
    subtitle: {
        fontSize: Typography.sizes.base,
        color: Colors.textMuted,
        textAlign: 'center',
        marginBottom: Spacing.xl,
    },
    inputContainer: {
        width: '100%',
        marginBottom: Spacing.lg,
    },
    label: {
        fontSize: Typography.sizes.sm,
        color: Colors.text,
        marginBottom: Spacing.xs,
    },
    input: {
        backgroundColor: Colors.backgroundSecondary,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        color: Colors.text,
        fontSize: Typography.sizes.base,
    },
    primaryButton: {
        backgroundColor: Colors.accentPrimary,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        borderRadius: BorderRadius.md,
        width: '100%',
        marginBottom: Spacing.sm,
    },
    primaryButtonText: {
        color: Colors.text,
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        textAlign: 'center',
    },
    secondaryButton: {
        paddingVertical: Spacing.sm,
    },
    secondaryButtonText: {
        color: Colors.textMuted,
        fontSize: Typography.sizes.base,
        textAlign: 'center',
    },
});
