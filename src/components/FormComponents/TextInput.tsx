import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { View, Text } from '..'
import { StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../Theme/theme';
import { TextInput as Input } from 'react-native'

interface IProps {
    name: string;
    leftIcon?: JSX.Element;
    isPassword?: boolean;
    rightIcon?: JSX.Element;
    label: string;
}

export const TextInput = ({ name, leftIcon, isPassword = false, rightIcon, label, placeholder, ...rest }: IProps & TextInputProps) => {
    const theme = useTheme<Theme>();
    const { control, formState: {errors} } = useFormContext()
  return (
    <>
      <Text variant='xs'>{label}</Text>
      <View paddingVertical='s' paddingHorizontal='m' backgroundColor='textInputBackground' style={{...Style.parent, borderColor: '#ECECEC' }}>
        {leftIcon && leftIcon}
        <Controller 
          control={control}
          rules={{
              required: false,
          }}
          name={name}
          render={({ field: { onChange, onBlur, value }}) => (
              <Input onChangeText={onChange} onBlur={onBlur} value={value} secureTextEntry={isPassword} {...rest} style={{ flex: 1, paddingHorizontal: 10 }} />
          )}
        />
        {rightIcon && rightIcon}
      </View>
      {errors[name] && <Text variant='xs' color='brandColor'>{errors[name]?.message as string}</Text>}
    </>
  )
}

const Style = StyleSheet.create({
    parent: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});