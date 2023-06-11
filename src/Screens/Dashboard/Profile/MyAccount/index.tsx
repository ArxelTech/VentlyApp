import React, { useState, useEffect} from 'react';
import { Image, Dimensions } from 'react-native';
import { Styles } from './style';
import { Text, View } from '../../../../components';
import useForm from '../../../../hooks/useForm';
import theme from '../../../../Theme/theme';

const data = require('../../../../assets/data/dropdown.json');

interface Iprops{
  label: string;
}

const { height } = Dimensions.get('screen');
const Theme = theme;

const MyAccounts = () => {
  return (
  <View>
    <Text variant='xs'>Hello</Text>
  </View>
  )
}
