import { useTheme } from "@shopify/restyle";
import React from "react";
import { Theme } from "../../Theme/theme";
import { useFormContext } from "react-hook-form";
import { ActivityIndicator, Pressable } from "react-native";
import { Text } from '../'

interface IProps {
  label: string;
  isLoading?: boolean;
  backgroundColor?: string;
  borderRadius?: number;
  color?: string;
  onPress: (data: any) => void;
}

export const SubmitButton = ({
  label,
  isLoading = false,
  backgroundColor,
  borderRadius = 5,
  color,
  onPress,
}: IProps) => {
  const theme = useTheme<Theme>();
  const { handleSubmit } = useFormContext();
  return (
    <Pressable 
      onPress={handleSubmit(onPress)}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: backgroundColor || theme.colors.brandColor,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {!isLoading && <Text variant='xs' style={{ color }}>{label}</Text>}
        {isLoading && <ActivityIndicator size='large' color={theme.colors.brandColor} />}
      </Pressable>
 
  );
};
