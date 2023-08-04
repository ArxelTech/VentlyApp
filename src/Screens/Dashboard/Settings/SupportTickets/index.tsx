import {CustomButton, Text, View } from '../../../../components';
import React from 'react';
import useForm from '../../../../hooks/useForm'
import { loginSchema } from '../../../../Services/validation'
import { TextInput } from '../../../../components/FormComponents'
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

const supportTickets = [
   {
    id: 1,
    title: 'Content Reported',
    subtitle: 'Photo from Sandra Travolski ',
    img:require('../../../../../assets/images/vita.png'),
    TicketStatus: true,
   },
   {
    id: 2,
    title: 'Content Reported',
    img:require('../../../../../assets/images/vita.png'),
    subtitle: 'Photo from Sandra Travolski ',
    TicketStatus: true,
   },
   {
    id: 3,
    title: 'Content Reported',
    img:require('../../../../../assets/images/vita.png'),
    subtitle: 'Photo from Sandra Travolski ',
    TicketStatus: false,
   },

]

const SupportSettings = () => {

    const {  renderForm } = useForm({
        defaultValues: {
          name: '',
          email: '',
          username:''
        },
        validationSchema: loginSchema,
      });
  return renderForm(
    <View style={[Styles.parent]}>
        <View style={[Styles.child]}>
            <View style={[Styles.main_cont]}>
                <View style={Styles.header}>
                        <View style={{flex: 1.8}}>
                            <Ionicons name='arrow-back-outline' size={20} color='black'/>
                        </View>
                        <View style={{flex: 4.2}}>     
                            <Text variant='subheader' fontWeight={'700'} fontSize={18}>Support Tickets</Text> 
                        </View>  
                </View>
            </View>
            <View style={[Styles.body]}>
               <View style={[Styles.bodyContainer]}>
                  {supportTickets.map((item) => {
                    return(
                    <View style={{paddingBottom:20}}>
                        <View style={Styles.supportCard} key={item.id}>
                            <View style={{width:'60%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <View style={{width:'90%', height:'90%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <View>
                                        <Text variant='subheader' style={{lineHeight:20}} fontWeight={'700'} fontSize={14}>{item.title}</Text>
                                        <Text variant='xs' style={{lineHeight:20}} fontSize={12}>{item.subtitle}</Text>
                                        <Text variant='subheader' fontWeight={'700'} fontSize={12} style={[item.TicketStatus?{color:'green'}:{color:'red'}, {lineHeight:20}]} >{item.TicketStatus? 'OpenTicket' : 'Closed'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:'40%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <View style={{width:'85%',height:'85%'}}>
                                    <Image 
                                        source={item.img}
                                        style={{width:'100%', height:'100%', borderRadius:6}}
                                        resizeMode='cover'  
                                        />
                                </View>
                            </View>
                        </View> 
                    </View>
                        
                    )
                  }) 
                    }
                </View>
            </View>
        </View>
    </View>
  )
}

export default SupportSettings;
