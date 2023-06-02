import { View, Text } from 'react-native'
import React from 'react'
import { create } from 'zustand'

interface HookState {
  showToast: boolean;
  message: string;
  position: 'top' | 'bottom';
  preset: 'success' | 'failure' | 'general' | 'offline'
  setAll: (data: any) => void
}

interface IProps {
  position: 'top' | 'bottom';
  preset: 'success' | 'failure' | 'general' | 'offline'
}


const useToastStore = create<HookState>((set) => ({
  showToast: false,
  message: '',
  preset: 'general',
  position: 'bottom',
  setAll: (data: any) => set((state) => ({ ...state, ...data  })),
}));

const useToast = () => {

  const { setAll, showToast: isVisible, message, preset, position } = useToastStore((state) => state);

  const onDismiss = React.useCallback(() => {
    setAll({ showToast: false, message: '' });
  }, []);

  const showToast = React.useCallback(({ message, position = 'bottom', preset ='general' }: { message: string } & IProps) => {
    setAll({ showToast: true, message, position, preset });
  }, []);

  return {
    showToast,
    onDismiss,
    isVisible,
    message,
    position,
    preset,
  }
}

export default useToast