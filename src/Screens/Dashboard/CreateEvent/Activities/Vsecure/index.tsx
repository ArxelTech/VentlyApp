import React, {useState} from 'react';
import { Image, ScrollView, StatusBar, Dimensions, Pressable } from 'react-native';
import { Styles } from './style';
import { Text, View, CustomButton } from '../../../../../components';
import { TextInput } from '../../../../../components/FormComponents';
import { Ionicons } from '@expo/vector-icons';
import useForm from '../../../../../hooks/useForm'
import { loginSchema } from '../../../../../Services/validation'
import theme from '../../../../../Theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  navigation?:  NativeStackNavigationProp<any>
}

const { height } = Dimensions.get('screen');
const Theme = theme;
const Vlogo = require('../../../../../../assets/images/Logo/Vlogo.png');
const hugoProductive = require('../../../../../../assets/images/hugoProductive.png');
const edit = require('../../../../../../assets/images/Logo/edit.png');
const bin = require('../../../../../../assets/images/Logo/bin.png');

const index = (({navigation}: IProps) => {

  const {  renderForm } = useForm({
    defaultValues: {
      email: '',
      // password: ''
    },
    validationSchema: loginSchema,
  });

  const [userInput, setUserInput ] = useState(false);
  const [user, addUser] = useState([]);

  const add = () => {
      setUserInput(true);
  }
  const cancel = () => {
      setUserInput(false);
  }

  return renderForm(
      <View style={Styles.main_con}>
        <View style={Styles.container}>
          <View style={[Styles.title, Styles.flexCol]}>
            <Image source={Vlogo} style={Styles.img} resizeMode='contain' />
            <View style={Styles.text}>
              <Text variant='header' textAlign='center' fontSize={20}>V-Secure Setup</Text> 
            </View>
            <View style={Styles.subtext}>
              <Text variant='xs' fontSize={12} textAlign='center' >
                Without V-Secure, Users cannot be signed in to your event, you cannot use our 
                ticketing system.and you lose track of event analytics
              </Text>
            </View>  
          </View> 
          <View style={[Styles.eventID, Styles.flexCol]}>
          <Text variant='header' textAlign='center' fontSize={14}>V-Secure EventID</Text> 
          <Text variant='xs' fontSize={12} textAlign='center' >
              1781972972890
          </Text>  
          </View>
          <View style={[Styles.team, Styles.flexCol]}>
          <Text variant='header' textAlign='center' fontSize={14}>Team Members</Text>
          <View style={Styles.subtext}>
              <Text variant='xs' fontSize={12} textAlign='center' >
              These are those with permissions to sign attendees in.
               Don't grant anyone access if you are not sure of the email address
              </Text>
            </View> 
          </View>
          <View style={Styles.table}>
            {/* Header */}
            <View style={Styles.tableContainer}>
              <View style={[Styles.subContainer, Styles.flexRow]}>
                  <View style={{width:'50%'}}>
                      <Text variant='header' fontSize={14}>Email Address</Text>
                  </View>
                  <View style={{width:'30%'}}>
                      <Text variant='header' fontSize={14}>Time Added</Text> 
                  </View>
                  <View style={{width:'20%'}}>
                      <Text variant='header' fontSize={14}>Action</Text>
                  </View>
                  </View>
                  <View style={[Styles.subContainer, Styles.flexRow]}>
                  <View style={{width:'50%'}}>
                      <Text variant='xs' fontSize={12}>michael@vent.ly</Text>
                  </View>
                  <View style={{width:'30%'}}>
                      <Text variant='xs' fontSize={12}>2hrs ago</Text> 
                  </View>
                  <View style={[Styles.flexRow, {width:'20%'}]}>
                      <View style={{width:'50%'}}>
                        <Pressable onPress={()=> console.log('edit')}>
                            <Image source={edit} resizeMode='contain' />
                        </Pressable>
                      </View>
                      <View style={{width:'50%'}}>
                        <Pressable onPress={()=> console.log('delete')}>
                            <Image source={bin}  resizeMode='contain' />
                        </Pressable> 
                      </View>
                  </View>
              </View>
              <View>
                {userInput == false &&
                  <Pressable onPress={add}>
                    <Text variant='header' fontSize={12}>+ Add User</Text>
                  </Pressable>
                }
                
                {/* 
                  <View style={[Styles.addUser,Styles.flexRow]}>
                    <View style={Styles.input}>
                        
                    <View style={Styles.doneBtn}>
                        <CustomButton label='done' onPress={()=> console.log('done')}/> 
                    </View>
                  </View> 
                  } */}
                  {userInput && 
                  <View style={[Styles.addUser]}>
                     <View style={[Styles.flexRow]}>
                            <View style={Styles.input}>
                              <View style={[Styles.border, Styles.flexRow]}>
                                <TextInput name='email' label='' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
                              </View>      
                            </View>
                            <View style={Styles.doneBtn}>
                                <View style={{height:50}}>
                                  <CustomButton label='Done' backgroundColor='#7D7D7D' onPress={()=> console.log('done')}/> 
                                </View>
                            </View>
                      </View>
                      <Pressable onPress={cancel} style={{marginTop:-20}}>
                          <Text variant='header' fontSize={12}>cancel</Text>
                      </Pressable>
                  </View>
                   }

              </View>
            </View>
          </View>
        </View>
      </View>
  )
})

export default index;