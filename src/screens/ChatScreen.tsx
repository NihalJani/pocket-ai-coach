import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Colors } from '../constants/colors';
import { Spacing, Typography, BorderRadius, CommonStyles } from '../constants/styles';

export default function ChatScreen() {
    return (
        <KeyboardAvoidingView
            style={CommonStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={[CommonStyles.centerContent, CommonStyles.padding]}>
                <Text style={styles.infoText}>Chat coming in Phase 2</Text>
                <Text style={styles.subText}>Gemini integration will be added</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Message (disabled)"
                    placeholderTextColor={Colors.textMuted}
                    editable={false}
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    infoText: {
        fontSize: Typography.sizes.lg,
        color: Colors.textMuted,
        marginBottom: Spacing.xs,
    },
    subText: {
        fontSize: Typography.sizes.sm,
        color: Colors.textMuted,
        textAlign: 'center',
    },
    inputContainer: {
        padding: Spacing.md,
        backgroundColor: Colors.backgroundSecondary,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    input: {
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        color: Colors.text,
        fontSize: Typography.sizes.base,
    },
});
