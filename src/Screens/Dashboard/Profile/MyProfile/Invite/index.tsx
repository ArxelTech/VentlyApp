import { StyleSheet,Image, FlatList, ImageBackground, ScrollView, Pressable} from 'react-native';
import {Text, View } from '../../../../../components';
import React from 'react';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import SendOffer from '../../../Categories/SendOffer/sendOffer';
import OfferSent from '../../../Categories/offerSent';

const image = require('../../../../../../assets/images/scott.png');

// // const DATA = require('../../../../../../assets/data/Categories.json');


let events = [
    {
        id:1,
        // img:'../../../../../../assets/images/scott.png',
        title:'The Xperience Lagos, 6th Edition',
        subtile:'Friday, 29 October 2020 | 1 - 7pm',
        location:'La Casa Royale, Bronx, NYC',
        tickets:'Tickets from $90 - $400'
    } ,
    {
        id:2,
        // img:'../../../../../../assets/images/scott.png',
        title:'The Xperience Lagos, 6th Edition',
        subtile:'Friday, 29 October 2020 | 1 - 7pm',
        location:'La Casa Royale, Bronx, NYC',
        tickets:'Tickets from $90 - $400'
    } ,
    {
        id:3,
        // img:'../../../../../../assets/images/scott.png',
        title:'The Xperience Lagos, 6th Edition',
        subtile:'Friday, 29 October 2020 | 1 - 7pm',
        location:'La Casa Royale, Bronx, NYC',
        tickets:'Tickets from $90 - $400'
    } ,
    
    {
        id:4,
        // img:'../../../../../../assets/images/scott.png',
        title:'The Xperience Lagos, 6th Edition',
        subtile:'Friday, 29 October 2020 | 1 - 7pm',
        location:'La Casa Royale, Bronx, NYC',
        tickets:'Tickets from $90 - $400'
    } ,
    {
        id:5,
        // img:'../../../../../../assets/images/scott.png',
        title:'The Xperience Lagos, 6th Edition',
        subtile:'Friday, 29 October 2020 | 1 - 7pm',
        location:'La Casa Royale, Bronx, NYC',
        tickets:'Tickets from $90 - $400'
    } ,
    {
        id:3,
        // img:'../../../../../../assets/images/scott.png',
        title:'The Xperience Lagos, 6th Edition',
        subtile:'Friday, 29 October 2020 | 1 - 7pm',
        location:'La Casa Royale, Bronx, NYC',
        tickets:'Tickets from $90 - $400'
    } ,
    
]

const Invite = () => {
  const [invite, setInvite] = React.useState(false);
  const [sentOffer, setSentOffer ] = React.useState(false);

  const inviteVendor = () => {
    setInvite(true)
  }

  const toggleOfferSent = () => {
    setInvite(nextState => !nextState);
    setSentOffer(previousState => !previousState);
}

  return (
    <View style={[Styles.parent]}>
          {invite == true && 
                    <View style={{position:'absolute', zIndex:99, height:'100%',width:'100%'}}>
                        <SendOffer props={toggleOfferSent}/> 
                    </View>
         }
         {
            sentOffer == true && 
            <View style={{position:'absolute', zIndex:99, height:'100%',width:'100%'}}>
                <OfferSent/> 
            </View>
         }
        <View style={[Styles.child]}>
            <View style={[Styles.main_cont]}>
                <View style={Styles.header}>
                        <View style={{flex: 1}}>
                            <Ionicons name='arrow-back-outline' size={25} color='black'/>
                        </View>
                        <View style={{flex: 6}}>     
                            <Text variant='header' fontSize={16}>Select Events</Text> 
                        </View> 
                        <View style={{flex: 1}}>
                            <Ionicons name='search-outline' size={20} color='black'/>
                        </View> 
                </View>
            </View>
            <View style={{width: '100%', height: 6, backgroundColor: '#ccc'}}></View>
            
            <View style={[Styles.body]}>
            
                <View style={{padding:10}}>
                    <Text variant='xs' fontSize={12}>Please Select an event to invite this user to:</Text>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
                    {events.map(item =>{
                        return(
                            <>
                            <Pressable 
                               onPress={inviteVendor}
                             >
                                <View style={Styles.container} key={item.id}>
                                    <View style={Styles.subContainer}>
                                        <View style={Styles.image}>
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
                                            <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                        </View>
                                        <View style={Styles.date}>
                                            <Text variant='subheader' style={{fontSize:8}}>{item.subtile}</Text>
                                        </View> 
                                    </View>
                                    <View style={[Styles.title, {marginTop:-25}]}>
                                        <View style={Styles.icon}>
                                            <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
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
                </ScrollView>

            </View>
        </View>
    </View>
  )
}

export default Invite;
