import { create } from 'zustand';

interface State {
    id: string;
    fullName: string;
    email: string;
    avatar: string;
    setAll: (data: Partial<State>) => void;
}

export const useSignupState = create<State>((set) => ({
    id: '',
    fullName: '',
    email: '',
    avatar: '',
    setAll: (data: Partial<State>) => set((state) => ({ ...state, ...data }))
}))

