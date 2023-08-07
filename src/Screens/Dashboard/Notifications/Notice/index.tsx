import { StyleSheet,Image, FlatList, Pressable, ImageBackground} from 'react-native';
import {Text, View } from'../../../../components';
import React from 'react';
import { Styles }  from './style';
import { Ionicons } from '@expo/vector-icons';

const image = require('../../../../../assets/images/erik.png');

const Notice = () => {
  const [isEvent, setIsEvent] = React.useState(false);

  let events = [
    {
        id:1,
        // img:'../../../../../../assets/images/scott.png',
        title:'Nazi Federation Event',
        subtile:'Friday, 29 October 2020 | 1 - 7pm',
        location:'La Casa Royale, Bronx, NYC',
        tickets:'Tickets from $90 - $400'
    } ,
    
]

  return (
    <View style={[Styles.main_cont, Styles.flexRow]}>
        <View style={Styles.container}>
            <View style={[Styles.header, Styles.flexRow]}>
                <View style={{width:'30%'}}>
                    <Ionicons name='arrow-back-outline' size={25} color='black'/>
                </View>
                <View style={{width:'70%'}}>
                    <Text variant='subheader' fontSize={18} fontWeight={'800'}>Violation Notice</Text>
                </View>
            </View>
            <View style={[Styles.flexRow,{height:100}]}>
                {isEvent && 
                    <Text variant='xs' textAlign='center'>This Event has been deleted from your account for violating Community Guidelines</Text>
                }
                {!isEvent && 
                    <Text variant='xs' textAlign='center'>This picture has been deleted from your account for violating Community Guidelines</Text>
                }
                
            </View>
            {/* Event Notice */}
            <View style={Styles.flexRow}>
                {isEvent &&
                  <View style={Styles.noticeImg}>
                    {events.map(item =>{
                            return(
                                <>
                                <Pressable 
                                    //    onPress={inviteVendor}
                                >
                                    <View style={Styles.eventsContainer} key={item.id}>
                                        <View style={Styles.subContainer}>
                                            <View style={Styles.eventImg}>
                                                <ImageBackground source={image} 
                                                style={{
                                                    width:'100%',
                                                    height:'100%',
                                                }}
                                                resizeMode='cover'
                                                imageStyle={{borderRadius:10}}
                                                ></ImageBackground>
                                            </View>
                                        <View style={Styles.text}>
                                    <Text variant='header' fontSize={10}>{item.title}</Text>
                                        <View style={[Styles.title, {marginTop:-25}]}>
                                            <View style={Styles.icon}>
                                                <Image source={require('../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                            </View>
                                            <View style={Styles.date}>
                                                <Text variant='subheader' style={{fontSize:8}}>{item.subtile}</Text>
                                            </View> 
                                        </View>
                                        <View style={[Styles.title, {marginTop:-25}]}>
                                            <View style={Styles.icon}>
                                                <Image source={require('../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                            </View>
                                            <View style={Styles.date}>
                                                <Text variant='subheader' style={{fontSize:8}}>{item.location}</Text>
                                            </View> 
                                        </View>
                                        <View style={[Styles.title, {marginTop:-25}]}>
                                            <View style={Styles.icon}>
                                                <Ionicons name='flower-outline' size={20} color='#FC1055'  />
                                            </View>
                                            <View style={Styles.date}>
                                                <Text variant='subheader' style={{fontSize:8}}>{item.tickets}</Text>
                                            </View> 
                                        
                                        </View>
                                    </View>        
                                    </View>
                                    </View>
                                </Pressable>
                                </>
                            
                            )
                        })}

                  </View>
                }
                {/* Picture Notice */}
                {
                 !isEvent &&
                    <View style={Styles.noticeImg}>
                    <Image
                    source={image}
                    style={Styles.image}
                    resizeMode='cover'
                    />
                 </View>
                }
               
            </View>
            
            <View style={[Styles.flexRow,{height:100}]}>
                <Text variant='xs' textAlign='center'>If you feel this has been done in error please contact support at support@vent.ly</Text>
            </View>
            <View style={[Styles.flexRow,{height:20}]}>
                <Text variant='xs' textAlign='center'>Ticket ID : 273729297</Text>
            </View>
        </View>
       
    </View>
  )
}

export default Notice ;
