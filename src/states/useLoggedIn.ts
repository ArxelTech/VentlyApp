import { create } from 'zustand';

interface UserState {
    isLoggedIn: boolean;
    setIsLoggedIn: (data: boolean) => void
  }


export const useIsLoggedIn = create<UserState>((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (data: boolean) => set(() => ({ isLoggedIn: data  })),
  }));