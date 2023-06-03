import { Pressable, } from 'react-native'
import { Text, View } from '../'
import React from 'react'

interface IProps {
    borderRadius?: number;
    label: string;
    icon: JSX.Element;
    backgroundColor?: string;
    color?: string | any;
    borderWidth?: number;
    borderColor?: string;
    action: () => void
}

const AuthButton = ({ borderColor, borderWidth = 0, color = 'black', icon, label, borderRadius = 10, action, backgroundColor }: IProps) => {
  return (
    <Pressable 
    onPress={() => action()}
    style={{
        backgroundColor: backgroundColor ? backgroundColor: 'lightgrey',
       borderWidth,
       borderColor: borderColor ? borderColor:'transparent',
       borderRadius,
       paddingHorizontal: 20,
       flexDirection: 'row',
       alignItems: 'center',
       height: 60,
    }}>
      <View
        style={{
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
      >
        {icon}
      </View>
      <View style={{
        flex: 0.8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
      }}>
        <Text variant='body' color={color ? color: 'black'}>{label}</Text>
      </View>
    </Pressable>
  )
}

export default AuthButton