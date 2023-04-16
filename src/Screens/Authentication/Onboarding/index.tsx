import React from 'react'
import { Styles } from './style'
import { CustomButton, Text, View } from '../../../components'
import { Image } from 'react-native';
import PagerView from 'react-native-pager-view';
// import Slider  from 'react-native';
import data from '../../../data';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../Theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  navigation?: NativeStackNavigationProp<any>;
}

const Onboarding = ({ navigation }: IProps) => {
  const [index, setIndex] = React.useState(0);

  // global theme
  const theme = useTheme<Theme>();

  const handleScroll = React.useCallback((indx: number) => {
    setIndex(indx);
  }, [])
  return (
    <View style={Styles.parent}>
      <View style={Styles.iconBox}>
        <Image source={require('../../../../assets/images/Logo/ventlyLogo.png')} style={{ width: '100%', height: 50 }} resizeMode='contain' />
      </View>

      {/* SCROLL CONTAINER */}

      <View style={Styles.sliderConatainer}>
         {/* <PagerView style={{ flex: 1 }} onPageScroll={(e) => handleScroll(e.nativeEvent.position)}> */}
          {data.map((item, index) => (
            <View key={index.toString()}>
              <Image  source={item.img} style={{ width: '100%', height: '100%'}} resizeMode='contain'/>
            </View>
          ))}
        {/* </PagerView>  */}
      </View>

      {/* INDICATORS */}
      <View style={Styles.indicatorContainer}>
        {data.map((item, indx) => (
          <View key={indx} style={{...Styles.indicator, backgroundColor: indx === index ? theme.colors.brandColor:'#FF406E', opacity: indx === index ? 1: 0.2 }} />
        ))}
      </View>

      {/* WRITE UP CONTAINER */}
      <View style={Styles.textContainer} paddingHorizontal='m'> 
        <Text variant='subheader' textAlign='center'>{data[index].title}</Text>
      </View>

      {/* BOTTON CONTAINER */}
      <View style={Styles.buttonContainer} paddingHorizontal='m'>
        <View style={{ flex: 1, height: 60, marginRight: 20 }}>
          <CustomButton label='Login' onPress={() => navigation?.navigate('method', {type: 'login'})} color='white' borderRadius={10} />
        </View>

        <View style={{ flex: 1, height: 60 }}>
          <CustomButton label='Get Started' onPress={() => navigation?.navigate('method', {type: 'signup'})} color='black' borderRadius={10} backgroundColor='#EEEEEE' />
        </View>
      </View>
    </View>
  )
}

export default Onboarding;