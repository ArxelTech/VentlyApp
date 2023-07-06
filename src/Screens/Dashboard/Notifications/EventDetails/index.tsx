import React from 'react';
import { CustomButton, Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, Pressable } from 'react-native';

const image = require('../../../../../assets/images/grmy.png');

const EventDetails = () => {
  return (
    <View style={Styles.main_Container}>
       {/* <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} > */}
          <View style={Styles.container}>
                <View style={Styles.commentIcon}>
                            {/* comment image goes here ones provided by Sir michael Aj */}
                </View>
                <View>
                    <Image style={Styles.image}  source={image}/>
                </View>

                <View style={Styles.commentSession}>
                    <View style={Styles.comment}>
                        <Text variant='header' textAlign='center' fontSize={14}>VIP Tickets Have Been Sold Out</Text>
                        <Text variant='xs' textAlign='center' fontSize={12}>All 2500 VIP tickets for Bole Festival 2020 have been 
                        <Text variant='xs' fontSize={12} style={{color:'#FF406E'}}> sold out in 0 hours, 30 minutes</Text></Text>
                    </View>
                </View>
                <View>
                <View style={{ marginTop: 10, height:50 }}>
                                <CustomButton label='Add More Tickets' onPress={()=>window.alert('pop')} color='white' />
                            </View>
                            <View style={{ marginTop: 10 }}>
                            
                            <Pressable style={{backgroundColor:'#FFFFFF', height:50,borderColor:'#FF415B', borderWidth:1, display:'flex', justifyContent:'center', alignItems:'center', borderRadius:6}}
                            >
                                <Text variant='xs' style={{color:'#FF406E'}}>Share</Text>
                            </Pressable>
                            </View>
                </View>
          </View>
       {/* </ScrollView>   */}
    </View>
  )
}

export default EventDetails;
