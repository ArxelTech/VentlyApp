import { useTheme } from "@shopify/restyle";
import React from "react";
import { Button } from "react-native-ui-lib";
import { Theme } from "../../Theme/theme";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  backgroundColor?: string;
  size?: "large" | "mediumn" | "small" | "xSmall";
  borderRadius?: number;
  color?: string;
  onPress: (data: any) => void;
}

export const SubmitButton = ({
  label,
  disabled = false,
  isLoading = false,
  backgroundColor,
  size = "large",
  borderRadius = 5,
  color,
  onPress,
}: IProps) => {
  const theme = useTheme<Theme>();
  const { handleSubmit } = useFormContext();
  return (
    <Button
      onPress={handleSubmit(onPress)}
      label={isLoading ? "submitting" : label}
      size={size}
      color={color || theme.colors.textColor}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor || theme.colors.brandColor}
      disabled={disabled}
    />
  );
};
