import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
    // Phase 1
    USER_PROFILE: 'user_profile',
    ONBOARDING_COMPLETE: 'onboarding_complete',

    // Phase 2
    COACHES: 'coaches',
    USER_CONTEXT: 'user_context',
    CHAT_SESSIONS: 'chat_sessions',
    USAGE_STATS: 'usage_stats',
    ENTITLEMENTS: 'entitlements',

    // Phase 3
    SETTINGS: 'settings',
};

/**
 * Type-safe wrapper around AsyncStorage
 */
export const storage = {
    /**
     * Get an item from storage
     */
    async getItem<T>(key: string): Promise<T | null> {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value === null) return null;
            return JSON.parse(value) as T;
        } catch (error) {
            console.warn(`Error reading ${key} from storage:`, error);
            return null;
        }
    },

    /**
     * Set an item in storage
     */
    async setItem<T>(key: string, value: T): Promise<void> {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
            console.warn(`Error writing ${key} to storage:`, error);
        }
    },

    /**
     * Remove an item from storage
     */
    async removeItem(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.warn(`Error removing ${key} from storage:`, error);
        }
    },

    /**
     * Get all keys from storage
     */
    async getAllKeys(): Promise<readonly string[]> {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (error) {
            console.warn('Error getting all keys from storage:', error);
            return [];
        }
    },

    /**
     * Clear all items from storage
     */
    async clear(): Promise<void> {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.warn('Error clearing storage:', error);
        }
    },
};
