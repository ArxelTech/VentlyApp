import React from 'react';
import { Text, View, CustomButton } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';

const image = require('../../../../../assets/images/scott.png');

const index = () => {
  return (
    <View style={Styles.main_Container}>
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
        <View style={Styles.parent}>
            <View style={Styles.highlight}>
                <Text variant='header' textAlign='center' fontSize={14}>No Highlights Yet</Text>
                <Text variant='xs' textAlign='center' fontSize={12}>
                    No photo highlights have been added yet.You can set which highlights are displayed here in 
                    the event settings. Highlights can only be added once an event goes live
                </Text>
                <TouchableOpacity style={Styles.btn} onPress={() => {console.log('pressed')}}>
                  <Text variant='xs' color='white'>Go To Event Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
       </ScrollView>  
    </View>
  )
}

export default index;
