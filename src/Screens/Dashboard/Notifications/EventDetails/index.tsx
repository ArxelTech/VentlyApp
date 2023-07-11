import React from 'react';
import { CustomButton, Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddTickets from './addTicket';


const image = require('../../../../../assets/images/grmy.png');
const logo = require('../../../../../assets/images/Layer_3.png');

const EventDetails = () => {
  const [tickets, setTickets] = React.useState(false)

  const addTickets = () => {
    setTickets(!false)
  }
  const cancelTickets = () => {
    setTickets(false)
  }
  return (
    <View style={Styles.main_Container}>
       {/* <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} > */}
         
       {
                  tickets && 
                  
                      <AddTickets props={cancelTickets}/>
                 
                  
                }
          <View style={Styles.container}>
               
                <View style={Styles.logoContainer}>
                        <Image style={Styles.logo} 
                        resizeMode='contain'
                        source={logo}/>
                </View>
                <View style={Styles.eventTitle}>
                  <Text variant='xs' fontWeight='800' style={{color:'white'}}>BOLE FESTIVAL 2020</Text>
                </View>
                <View style={Styles.goBack}>
                <Ionicons name='arrow-back' size={25} color='lightgrey' />
                </View>
                <View style={Styles.commentIcon}>
                     {/* comment image goes here ones provided by Sir michael Aj */}
                </View>
                
                <View style={Styles.imageContainer}>
                  <View style={{width:'100%',  borderRadius:6, backgroundColor:'#000000c0',opacity:10,}}>
                        <ImageBackground style={Styles.image} imageStyle={{borderRadius:6, backgroundColor:'#000000c0', opacity:10}}  source={image}>
                        </ImageBackground>
                  </View>
                </View>
                {/* Add tickets modal */}
               

                <View style={Styles.commentSession}>
                    <View style={Styles.comment}>
                        <Text variant='header' textAlign='center' fontSize={14}>VIP Tickets Have Been Sold Out</Text>
                        <Text variant='xs' textAlign='center' fontSize={12}>All 2500 VIP tickets for Bole Festival 2020 have been 
                        <Text variant='xs' fontSize={12} style={{color:'#FF406E'}}> sold out in 0 hours, 30 minutes</Text></Text>
                    </View>
                </View>
                <View>
                <View style={{ marginTop: 10, height:50 }}>
                                <CustomButton label='Add More Tickets' onPress={addTickets} color='white' />
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
