import { TouchableOpacity, Image, ScrollView, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CustomButton, Text, View} from '../../../components';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { SubmitButton, TextInput } from '../../../components/FormComponents';
import useForm from '../../../hooks/useForm';
import { loginSchema } from '../../../Services/validation';
import Invitation from './Invitation'

const dp = require('../../../../assets/images/divineEffiong.jpg');
const data = require('../../../../assets/data/dropdown.json');

const Notifications  = () => {
  // const state = useState;
const [visible, setVisible] = useState(false);
const [list, setList] = useState([]);
const [isNofify, setisNotify] = useState(true);
const [isFocused, setIsFocused] = useState(false);
const [invitation, setInvitaion] = React.useState(false);
const [offerAccepted, setOfferAccepted ] = React.useState(false);

const viewInvitation = () => {
  setInvitaion(true)
}

const toggleOfferAccepted = () => {
  setInvitaion(nextState => !nextState);
  setOfferAccepted(previousState => !previousState);
}

// const isFocused = state.;

let notifications = [
  {
    id: 1,
    icon: require('../../../../assets/Profile_Images/update.png'),
    message:'There is a new update for Vently available tap to update to the latest version',
    time:'12:00AM',
    isRead:false,
    isUpdate:true
   
  },
  {
    id: 2,
    icon:require('../../../../assets/Profile_Images/chat.png'),
    message:'You have 3 unread messages in your inbox. Check them out',
    time:'12:00AM',
    isRead:false,
    isUpdate:false
  },
  {
    id: 3,
    icon:require('../../../../assets/Profile_Images/tickets.png'),
    message:'Congratulations your VIP Ticket for Starboy Fest has been sold out. Tap to see details',
    time:'12:00AM',
    isRead:true,
    isUpdate:true
  },
  {
    id: 4,
    icon:require('../../../../assets/Profile_Images/invitation.png'),
    message:'Johnson Smith invited you to be a co-host for the live event - DevCon 2020',
    time:'12:00AM',
    isUpdate:false,
    
  },
  {
    id: 5,
    icon:require('../../../../assets/Profile_Images/clock.png'),
    message:'Your event is starting in 30 minutes, You wont want to miss it. People are waiting!!',
    time:'12:00AM',
    isRead:true,
    isUpdate:null
  },
  {
    id: 6,
    icon:require('../../../../assets/Profile_Images/liveRec.png'),
    message:'Your live event is ongoing, Tap here to start your recording!!',
    time:'12:00AM',
    isRead:true,
    isUpdate:true
  },
  {
    id: 6,
    icon:require('../../../../assets/Profile_Images/purse.png'),
    message:'Your wallet has been successfully topped up with $100',
    time:'12:00AM',
    isRead:true,
    isUpdate:true
  }
]

useEffect(() => {
  setList(list);
  return () => {
    setList([])
  }
}, [])



  const {  renderForm } = useForm({
    defaultValues: {
      name: '',
      email:'',
      userName: '',
      accountType: '',
      businessType: '',
    },
    validationSchema: loginSchema,
  });
  return renderForm(
    <View style={Styles.main_cont}>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {invitation == true && 
                    <View style={{position:'absolute', zIndex:9999, height:'100%',width:'100%'}}>
                        <Invitation /> 
                    </View>
         }
          <View style={Styles.child}>
            {/* header */}
            <View>
              <View style={Styles.header}>
                  <View style={Styles.nav}>
                      <View style={Styles.icon}>
                          <TouchableOpacity>
                            <Ionicons name="arrow-back" size={20} />
                          </TouchableOpacity>
                      </View>
                      <View style={Styles.text}>
                          <Text variant='header' fontSize={18}>Notifications</Text>
                      </View>
                  </View>
                </View>
              </View>
              { isNofify == !true? 
              <View style={Styles.notNotify}>
                  <Text variant='header' fontSize={14}> You're all caught Up</Text>
                  <Text variant='xs' style={{color:'#616161'}}> Looks like you don't have any new notifications</Text>
              </View> 
               : 
              <View style={Styles.notify}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, flexDirection:'column'}}>
                  <View>
                    {notifications.map(item => {
                       const focus = () => setIsFocused(previousState => !previousState);                     
                       return(
                        <View key={item.id} style={Styles.notifyBox}>
                          <TouchableOpacity 
                            style={{backgroundColor:'#AAAAAA08',
                            borderLeftWidth: isFocused? 2 : 0,
                            borderColor: isFocused? '#FF1C52' : '#AAAAAA08', 
                            borderStyle: 'solid'
                            }}
                            onPress={()=> {focus(); viewInvitation();}}
                            // onPress={}
                           >
                            <View style={Styles.flexBox}>
                                <View style={[Styles.iconContainer, Styles.flexBox]}>
                                  <View style={[item.isUpdate?
                                    {
                                      backgroundColor:'pink',
                                      width:50,
                                      height:50, 
                                      borderRadius:8,
                                      display:'flex',
                                      flexDirection:'row',
                                      justifyContent:'center',
                                      alignItems:'center'
                                    }
                                              :
                                    {
                                      backgroundColor:'lightblue',
                                      width:50,
                                      height:50, 
                                      borderRadius:8,
                                      display:'flex',
                                      flexDirection:'row',
                                      justifyContent:'center',
                                      alignItems:'center'
                                    }]}>
                                      {/* , Styles.flexBox,} */}
                                    <Image
                                      source={item.icon}
                                      resizeMode='contain'
                                      style={{
                                        width:25, 
                                        height:25}}
                                    />
                                    
                                  </View>
                                </View>
                                <View style={Styles.message}>
                                  <Text variant='subheader' style={item.isRead?{color:'#ccc'}:{color:'#000000'}} fontWeight={'900'} lineHeight={20} fontSize={12}>{item.message}</Text>
                                </View>
                            </View>
                            <View style={Styles.time}>
                              <Text variant='xs' style={{ color:'#ccc'}} fontSize={10} textAlign='right'>{item.time}</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                      )
                    })}
                    
                  </View>
                </ScrollView>
              </View> }
          </View>
        </View>
    </View>
  )
}

export default Notifications;
