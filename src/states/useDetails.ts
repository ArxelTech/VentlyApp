import { create } from 'zustand';

interface UserState {
    accessToken: string;
    refreshToken: string 
    avatar: string, 
    createdAt: string, 
    email: string, 
    emailVerified: boolean, 
    facebookId: string, 
    fullName: string, 
    googleId: string, 
    id: string, 
    interests: string[], 
    isBusiness: boolean, 
    service: string[], 
    updatedAt: string
    username: string 
    verified: boolean
    setAll: (data: Partial<UserState>) => void
  }

  

export const useDetails = create<UserState>((set) => ({
    accessToken: '',
    refreshToken: '',
    avatar: '',
    createdAt: '',
    email: '',
    emailVerified: false,
    facebookId: '',
    fullName: '',
    googleId: '',
    id: '',
    interests: [],
    isBusiness: false,
    service: [],
    updatedAt: '',
    username: '',
    verified: false,
    setAll: (data: any) => set((state) => ({ ...state, ...data  })),
  }));