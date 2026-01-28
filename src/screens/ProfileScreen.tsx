import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';
import { Spacing, Typography, CommonStyles } from '../constants/styles';
import { storage, StorageKeys } from '../services/storage';
import { UserProfile } from '../types';

export default function ProfileScreen() {
    const [profile, setProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        const data = await storage.getItem<UserProfile>(StorageKeys.USER_PROFILE);
        setProfile(data);
    };

    return (
        <View style={CommonStyles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Profile</Text>

                {profile?.name && (
                    <View style={styles.infoCard}>
                        <Text style={styles.label}>Name</Text>
                        <Text style={styles.value}>{profile.name}</Text>
                    </View>
                )}

                <View style={styles.infoCard}>
                    <Text style={styles.label}>Member Since</Text>
                    <Text style={styles.value}>
                        {profile?.createdAt
                            ? new Date(profile.createdAt).toLocaleDateString()
                            : 'Unknown'}
                    </Text>
                </View>

                <View style={styles.placeholderCard}>
                    <Text style={styles.placeholderText}>Settings</Text>
                    <Text style={styles.placeholderSubtext}>Coming in Phase 3</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: Spacing.md,
    },
    title: {
        fontSize: Typography.sizes.xxl,
        fontWeight: Typography.weights.bold,
        color: Colors.text,
        marginBottom: Spacing.lg,
    },
    infoCard: {
        ...CommonStyles.card,
        marginBottom: Spacing.md,
    },
    label: {
        fontSize: Typography.sizes.sm,
        color: Colors.textMuted,
        marginBottom: Spacing.xs,
    },
    value: {
        fontSize: Typography.sizes.lg,
        color: Colors.text,
        fontWeight: Typography.weights.medium,
    },
    placeholderCard: {
        ...CommonStyles.card,
        alignItems: 'center',
        padding: Spacing.lg,
        marginTop: Spacing.md,
    },
    placeholderText: {
        fontSize: Typography.sizes.base,
        color: Colors.textMuted,
        marginBottom: Spacing.xs,
    },
    placeholderSubtext: {
        fontSize: Typography.sizes.sm,
        color: Colors.textMuted,
    },
});
