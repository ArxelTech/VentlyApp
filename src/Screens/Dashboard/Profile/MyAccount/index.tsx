import React, { useState, useEffect} from 'react';
import { Image, Dimensions, ScrollView, SafeAreaView, ImageBackground,Switch, Button, Pressable } from 'react-native';
import { Styles } from './style';
import { CustomButton, Text, View } from '../../../../components';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../../Theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import amir from '../../../../../assets/images/amir.png';
  // const navigation = NativeStackNavigationProp;

// interface IProps {
//     navigation?: NativeStackNavigationProp<any>
// }

const amir = require('../../../../../assets/images/amir.png');
const verify = require('../../../../../assets/images/verify.png');
const incognito = require('../../../../../assets/Profile_Images/chat.png');
const tickets = require('../../../../../assets/Profile_Images/tickets.png');
const calendar = require('../../../../../assets/Profile_Images/calendar.png');

const { height } = Dimensions.get('screen');
const Theme = theme;

const MyAccounts = ({navigation}: { navigation: NativeStackNavigationProp<any> }) =>  {

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
  <SafeAreaView style={Styles.main_container}>
     <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
        <View style={[Styles.pageTitle, {display:'flex', justifyContent:'flex-end', alignItems:'center'}]}>
          <Text variant='header' fontSize={16}>My account</Text>
        </View>
        <View style={[Styles.header, Styles.flexRow]}>
          <View style={[Styles.profileDetails, Styles.flexRow]}>
            <View style={[Styles.displayPhoto]}>
              <ImageBackground style={{height:'100%', width:'100%'}} 
                imageStyle={{borderRadius:5}} resizeMode='cover' source={amir}>  
              </ImageBackground>
            </View>
            <View style={[Styles.userName]}>
              <View style={[Styles.name,{display:'flex', flexDirection:'row'}]}>
                <Text variant='subheader' style={{fontWeight:'800'}} fontSize={15}>Jessica Anderson</Text>
                <View style={[{display:'flex', justifyContent:'flex-end',padding:6}]}>
                  <Image
                    style={{width:10, height:10}}
                    source={verify}
                    />
                </View>
              </View>
              <View style={Styles.gmail}>
                <Text variant='xs' fontSize={10} style={{color:'#B0B1B8'}}>jessicaanderson@gmail.com</Text>
                <Text variant='xs' fontSize={10}style={{color:'#B0B1B8'}} >@jessyanderson</Text>
              </View>
              <View style={[Styles.profileCategory, {display:'flex', flexDirection:'row'}]}>
                  <View style={Styles.flexRow}>
                    <Ionicons name='heart' size={10} color='lightgrey' style={{padding:6}} />
                    <Text variant='subheader' fontSize={12}>Business Profile</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width:'100%', height:45, display:'flex',flexDirection:'row',justifyContent:'space-evenly' }}>
          <View style={{ width:'40%',}}>
            <CustomButton label='Edit Profile' onPress={()=>navigation.navigate('editProfile')} color='white' />
          </View>
          <View style={{ width:'40%',}}>
            <CustomButton label='View Profile' backgroundColor='#00000029'
               onPress={()=>navigation.navigate('myProfile')}/>
           
          </View>
        </View>
        <View style={{ height:500, width:'100%'}}>
         <View style={{display:'flex',alignItems:'center', marginTop:20}}>
            <View style={{ height:'100%', width:'90%'}}>
              {/* Mapping goes here */}
              <View style={{  height:80, paddingTop:20, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <View style={[{ height:50,  width:'20%'},Styles.flexRow]}>
                  <Image 
                    source={incognito}
                    style={{
                      width:40,
                      height:40,
                    }}
                  />
                </View>
                <View style={{ height:50, width:'60%'}}>
                  <View style={{display:'flex', justifyContent:'flex-start',alignItems:'flex-start'}}>
                  <Text variant='subheader' style={{marginTop:-5}} fontSize={14}>Private Mode</Text>
                  </View>
                  <Text variant='xs' fontSize={10} style={{marginTop:-12}}>Attend all events privately, nobody </Text>
                  <Text variant='xs' fontSize={10} style={{marginTop:-10}}>would have access to your information</Text>

                </View>
                <View style={[{ height:50, width:'20%'}]}>
                    <View style={Styles.toggle}>
                      <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                </View>
              </View>
              <View style={{ height:80, paddingTop:20,display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <View style={[{ height:50,  width:'20%'},Styles.flexRow]}>
                  <Image 
                    source={incognito}
                    style={{
                      width:40,
                      height:40,
                    }}
                  />
                </View>
                <View style={{ height:50, width:'60%'}}>
                  <View style={{display:'flex', justifyContent:'flex-start',alignItems:'flex-start'}}>
                  <Text variant='subheader' style={{marginTop:-5}} fontSize={14}>Messages</Text>
                  </View>
                  <Text variant='xs' fontSize={10} style={{marginTop:-12}}>Read and manage all your conversations</Text>
                  <Text variant='xs' fontSize={10} style={{marginTop:-10}}> here</Text>
                </View>
                <View style={[{ height:50, width:'20%'}]}>
                    <View style={Styles.btn}>
                      <Pressable style={Styles.notification}>
                        <Text variant='xs' style={{color:'white'}}>10+</Text>
                      </Pressable>
                    </View>
                </View>
              </View>
              <View style={{ height:80, paddingTop:20,display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <View style={[{ height:50,  width:'20%'},Styles.flexRow]}>
                  <Image 
                    source={tickets}
                    style={{
                      width:40,
                      height:40,
                    }}
                  />
                </View>
                <View style={{ height:50, width:'60%'}}>
                  <View style={{display:'flex', justifyContent:'flex-start',alignItems:'flex-start'}}>
                  <Text variant='subheader' style={{marginTop:-5}} fontSize={14}>My Tickets</Text>
                  </View>
                  <Text variant='xs' fontSize={10} style={{marginTop:-12}}>Share and manage all your event tickets  </Text>
                  <Text variant='xs' fontSize={10} style={{marginTop:-10}}>seamlessly</Text>
                </View>
                <View style={[{ height:50, width:'20%'}]}>
                    {/* <View style={Styles.toggle}>
                      <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View> */}
                </View>
              </View>
              <View style={{ height:80, paddingTop:20,display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <View style={[{ height:50,  width:'20%'},Styles.flexRow]}>
                  <Image 
                    source={calendar}
                    style={{
                      width:40,
                      height:40,
                    }}
                  />
                </View>
                <View style={{ height:50, width:'60%'}}>
                  <View style={{display:'flex', justifyContent:'flex-start',alignItems:'flex-start'}}>
                  <Text variant='subheader' style={{marginTop:-5}} fontSize={14}>My Events</Text>
                  </View>
                  <Text variant='xs' fontSize={10} style={{marginTop:-12}}>Attend all events privately, nobody </Text>
                  <Text variant='xs' fontSize={10} style={{marginTop:-10}}>would have access to your information</Text>
                </View>
                <View style={[{ height:50, width:'20%'}]}>
                    <View style={Styles.toggle}>
                      {/* <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      /> */}
                    </View>
                </View>
              </View>
            </View>
         </View>
        </View>
      </ScrollView>
  </SafeAreaView>
  )
}

export default MyAccounts;
