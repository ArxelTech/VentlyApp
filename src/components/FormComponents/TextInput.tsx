import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { View, Text } from '..'
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../Theme/theme';
import { TextInput as Input } from 'react-native'

interface IProps {
    name: string;
    leftIcon?: JSX.Element;
    isPassword?: boolean;
    rightIcon?: JSX.Element;
}

export const TextInput = ({ name, leftIcon, isPassword = false, rightIcon }: IProps) => {
    const theme = useTheme<Theme>();
    const { control } = useFormContext()
  return (
    <View paddingVertical='s' backgroundColor='textInputBackground' style={{...Style.parent, borderColor: theme.colors.darkGrey }}>
        {leftIcon && leftIcon}
      <Controller 
        control={control}
        rules={{
            required: false,
        }}
        name={name}
        render={({ field: { onChange, onBlur, value }}) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} />
        )}
      />
      {rightIcon && rightIcon}
    </View>
  )
}

const Style = StyleSheet.create({
    parent: {
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});