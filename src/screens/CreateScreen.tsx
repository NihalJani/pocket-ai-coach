import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { Spacing, Typography, CommonStyles } from '../constants/styles';

export default function CreateScreen() {
    return (
        <View style={CommonStyles.container}>
            <View style={[CommonStyles.centerContent, CommonStyles.padding]}>
                <Text style={styles.emptyText}>Create Coach</Text>
                <Text style={styles.emptySubtext}>Form will be implemented in Phase 2</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    emptyText: {
        fontSize: Typography.sizes.lg,
        color: Colors.textMuted,
        marginBottom: Spacing.xs,
    },
    emptySubtext: {
        fontSize: Typography.sizes.sm,
        color: Colors.textMuted,
        textAlign: 'center',
    },
});
