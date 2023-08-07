import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable, ActivityIndicator } from 'react-native'
import { Theme } from "../Theme/theme";
import { Text } from "./Text";

interface IProps {
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  backgroundColor?: string;
  size?: "large" | "mediumn" | "small" | "xSmall";
  borderRadius?: number;
  color?: string;
  onPress: () => void;
}

export const CustomButton = ({
  label,
  isLoading = false,
  backgroundColor,
  borderRadius = 5,
  color,
  onPress,
}: IProps) => {
  const theme = useTheme<Theme>();
  return (
      <Pressable 
      onPress={() => onPress()}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor || theme.colors.brandColor,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {!isLoading && <Text variant='body' style={{ color }}>{label}</Text>}
        {isLoading && <ActivityIndicator size='large' color={theme.colors.brandColor} />}
      </Pressable>
  );
};
