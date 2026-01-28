import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Colors } from '../constants/colors';
import { Spacing, Typography, BorderRadius, CommonStyles } from '../constants/styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={CommonStyles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <View>
                            <Text style={styles.title}>PocketAI Coach</Text>
                            <Text style={styles.tagline}>Instant AI guidance, anytime</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile', undefined)}
                            style={styles.profileButton}
                        >
                            <Text style={styles.profileButtonText}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.quickActions}>
                    <TouchableOpacity
                        style={[styles.actionCard, styles.primaryCard]}
                        onPress={() => navigation.navigate('Browse', undefined)}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.actionTitle}>Browse Coaches</Text>
                        <Text style={styles.actionSubtitle}>Explore available AI coaches</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.actionCard, styles.secondaryCard]}
                        onPress={() => navigation.navigate('Create', {})}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.actionTitle}>Create Coach</Text>
                        <Text style={styles.actionSubtitle}>Build your custom AI assistant</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.recentSection}>
                    <Text style={styles.sectionTitle}>Recent Coaches</Text>
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No coaches yet</Text>
                        <Text style={styles.emptySubtext}>Create or browse coaches to get started</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContent: {
        padding: Spacing.md,
    },
    header: {
        marginBottom: Spacing.xl,
        paddingTop: Spacing.md,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: Typography.sizes.xxl,
        fontWeight: Typography.weights.bold,
        color: Colors.text,
        marginBottom: Spacing.xs,
    },
    tagline: {
        fontSize: Typography.sizes.base,
        color: Colors.textMuted,
    },
    quickActions: {
        marginBottom: Spacing.xl,
    },
    actionCard: {
        ...CommonStyles.card,
        marginBottom: Spacing.md,
        padding: Spacing.lg,
    },
    primaryCard: {
        borderColor: Colors.accentPrimary,
        borderWidth: 2,
    },
    secondaryCard: {
        borderColor: Colors.accentSecondary,
        borderWidth: 2,
    },
    actionTitle: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text,
        marginBottom: Spacing.xs,
    },
    actionSubtitle: {
        fontSize: Typography.sizes.sm,
        color: Colors.textMuted,
    },
    recentSection: {
        marginBottom: Spacing.lg,
    },
    sectionTitle: {
        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.semibold,
        color: Colors.text,
        marginBottom: Spacing.md,
    },
    emptyState: {
        ...CommonStyles.card,
        padding: Spacing.xl,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: Typography.sizes.base,
        color: Colors.textMuted,
        marginBottom: Spacing.xs,
    },
    emptySubtext: {
        fontSize: Typography.sizes.sm,
        color: Colors.textMuted,
    },
    profileButton: {
        backgroundColor: Colors.backgroundSecondary,
        paddingVertical: Spacing.xs,
        paddingHorizontal: Spacing.md,
        borderRadius: BorderRadius.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    profileButtonText: {
        color: Colors.text,
        fontSize: Typography.sizes.sm,
        fontWeight: Typography.weights.medium,
    },
});
