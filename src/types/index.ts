// Phase 1
export interface UserProfile {
    name?: string;
    createdAt: string;
}

// Phase 2 - Core Features
export interface Coach {
    id: string;
    name: string;
    instructions: string;
    createdAt: string;
    isFree?: boolean; // For sample/hardcoded coaches
}

export interface UserContext {
    values: string;
    goals: string;
    updatedAt: string;
}

export interface ChatMessage {
    id: string;
    coachId: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export interface UsageStats {
    coachCount: number;
    dailyChatCount: number;
    lastResetDate: string;
}

export interface Entitlement {
    isPremium: boolean;
    expirationDate?: string;
}

// Phase 3 - Enhancements
export interface ChatSession {
    coachId: string;
    messages: ChatMessage[];
    lastAccessedAt: string;
}

export interface ExportedCoach {
    version: string; // For import compatibility
    coach: Coach;
    exportedAt: string;
}

// Navigation types
export type RootStackParamList = {
    Onboarding: undefined;
    Home: undefined;
    Browse: undefined;
    Create: { editId?: string }; // Support editing in later phases
    Chat: { coachId: string };
    Profile: undefined;
};
