import { StyleSheet } from 'react-native';
import { Colors } from './colors';

// Spacing scale
export const Spacing = {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
};

// Border radius
export const BorderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
};

// Typography
export const Typography = {
    sizes: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 24,
        xxl: 32,
    },
    weights: {
        normal: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
    },
};

// Common styles
export const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    padding: {
        padding: Spacing.md,
    },
    card: {
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: BorderRadius.md,
        borderWidth: 1,
        borderColor: Colors.border,
        padding: Spacing.md,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
