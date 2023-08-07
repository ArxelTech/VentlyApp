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

export const TextInput = (props: IProps & TextInputProps) => {
  const { name, leftIcon, isPassword = false, rightIcon, label, placeholder } = props;
    const theme = useTheme<Theme>();
    const { control, formState: {errors} } = useFormContext()
  return (
    <>
      <Text variant='body' marginBottom='s'>{label}</Text>
      <View paddingVertical='s' paddingHorizontal='m' backgroundColor='textInputBackground' style={{...Style.parent, borderColor: '#ECECEC' }}>
        {leftIcon && leftIcon}
        <Controller 
          control={control}
          rules={{
              required: false,
          }}
          name={name}
          render={({ field: { onChange, onBlur, value }}) => (
              <Input onChangeText={onChange} onBlur={onBlur} value={value} secureTextEntry={isPassword} {...props} style={{ flex: 1, paddingHorizontal: 10, fontSize: 16, fontFamily: 'Heebo', backgroundColor: '#F5F5F5' }} />
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
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});