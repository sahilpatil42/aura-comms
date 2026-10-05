import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Quest {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  xpReward: number;
  gemReward: number;
  completed: boolean;
  claimed: boolean;
  icon: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  role: string;
  xp: number;
  isCurrentUser?: boolean;
  streak: number;
}

export interface PathNode {
  id: string;
  scenarioId: string;
  unit: number;
  moduleIndex: number;
  title: string;
  subtitle: string;
  category: 'google-ads' | 'meta-ads' | 'programmatic' | 'general';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  xp: number;
  stars: number; // 0 to 3
  status: 'completed' | 'active' | 'locked';
  icon: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  keyMetric: string;
}

interface GamificationState {
  streak: number;
  gems: number;
  hearts: number;
  maxHearts: number;
  totalXp: number;
  league: string;
  leagueRank: number;
  completedNodeIds: string[];
  activeNodeId: string;
  quests: Quest[];
  
  // Profile & Platform Customization
  userAvatar: string;
  userAvatarColor: string;
  userName: string;
  userHandle: string;
  activeTrackId: string;
  activeTrackTitle: string;
  selectedPlatform: string;
  
  // Actions
  addXp: (amount: number) => void;
  addGems: (amount: number) => void;
  spendGems: (amount: number) => boolean;
  spendHeart: () => boolean;
  refillHearts: () => void;
  completeNode: (nodeId: string, stars?: number) => void;
  claimQuest: (questId: string) => void;
  incrementStreak: () => void;
  setProfileAvatar: (avatar: string, color?: string) => void;
  setProfileDetails: (name: string, handle: string) => void;
  setActiveTrack: (trackId: string, trackTitle: string) => void;
  setSelectedPlatform: (platformId: string) => void;
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set, get) => ({
      streak: 14,
      gems: 450,
      hearts: 5,
      maxHearts: 5,
      totalXp: 2450,
      league: 'Obsidian League',
      leagueRank: 3,
      completedNodeIds: ['node-1', 'node-2'],
      activeNodeId: 'node-3', // "Module 3: The CPL Spike Crisis"
      userAvatar: '🦉',
      userAvatarColor: '#58cc02',
      userName: 'Sahil M.',
      userHandle: '@sahil_media',
      activeTrackId: 'google-ads',
      activeTrackTitle: 'Google Ads',
      selectedPlatform: 'google-ads',
      quests: [
        {
          id: 'q-1',
          title: 'Crisis Tamer',
          description: 'Complete 2 Voice Roleplay exercises',
          progress: 2,
          total: 2,
          xpReward: 30,
          gemReward: 15,
          completed: true,
          claimed: false,
          icon: 'mic',
        },
        {
          id: 'q-2',
          title: 'Daily XP Master',
          description: 'Earn 50 XP today in marketing simulations',
          progress: 35,
          total: 50,
          xpReward: 20,
          gemReward: 10,
          completed: false,
          claimed: false,
          icon: 'bolt',
        },
        {
          id: 'q-3',
          title: 'BLUF Virtuoso',
          description: 'Lead with Bottom-Line-Up-Front in 1 dialogue turn',
          progress: 1,
          total: 1,
          xpReward: 25,
          gemReward: 20,
          completed: true,
          claimed: true,
          icon: 'verified',
        },
        {
          id: 'q-4',
          title: 'Terminology Guard',
          description: 'Complete an answer with 0 flagged jargon slip-ups',
          progress: 0,
          total: 1,
          xpReward: 40,
          gemReward: 25,
          completed: false,
          claimed: false,
          icon: 'shield',
        },
      ],

      addXp: (amount: number) =>
        set((state) => ({ totalXp: state.totalXp + amount })),

      addGems: (amount: number) =>
        set((state) => ({ gems: state.gems + amount })),

      spendGems: (amount: number) => {
        const { gems } = get();
        if (gems >= amount) {
          set({ gems: gems - amount });
          return true;
        }
        return false;
      },

      spendHeart: () => {
        const { hearts } = get();
        if (hearts > 0) {
          set({ hearts: hearts - 1 });
          return true;
        }
        return false;
      },

      refillHearts: () => set((state) => ({ hearts: state.maxHearts })),

      completeNode: (nodeId: string, stars = 3) =>
        set((state) => {
          const completedNodeIds = state.completedNodeIds.includes(nodeId)
            ? state.completedNodeIds
            : [...state.completedNodeIds, nodeId];
          
          // Advance active node to next
          const num = parseInt(nodeId.replace('node-', ''), 10);
          const nextNodeId = `node-${num + 1}`;

          return {
            completedNodeIds,
            activeNodeId: nextNodeId,
            totalXp: state.totalXp + 15,
            gems: state.gems + 10,
          };
        }),

      claimQuest: (questId: string) =>
        set((state) => {
          const quest = state.quests.find((q) => q.id === questId);
          if (!quest || !quest.completed || quest.claimed) return state;

          return {
            totalXp: state.totalXp + quest.xpReward,
            gems: state.gems + quest.gemReward,
            quests: state.quests.map((q) =>
              q.id === questId ? { ...q, claimed: true } : q
            ),
          };
        }),

      incrementStreak: () =>
        set((state) => ({ streak: state.streak + 1 })),

      setProfileAvatar: (avatar: string, color?: string) =>
        set((state) => ({
          userAvatar: avatar,
          userAvatarColor: color || state.userAvatarColor,
        })),

      setProfileDetails: (name: string, handle: string) =>
        set({ userName: name, userHandle: handle }),

      setActiveTrack: (trackId: string, trackTitle: string) =>
        set({ activeTrackId: trackId, activeTrackTitle: trackTitle }),

      setSelectedPlatform: (platformId: string) =>
        set({
          selectedPlatform: platformId,
          activeTrackId: platformId,
        }),
    }),
    {
      name: 'aura_gamification_v1',
    }
  )
);
