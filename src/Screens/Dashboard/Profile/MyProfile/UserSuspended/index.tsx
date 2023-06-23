import { } from 'react-native';
import React from 'react';
import { CustomButton, Text, View} from '../../../../../components';
import { Styles } from './style';


const UserSuspended = () => {
  return (
    <View style={Styles.main_cont}>
       <View style={Styles.child}>
        <Text variant='header' fontSize={18}>Page Doesn't Exist</Text>
        <View style={{padding:10, width:'80%',marginTop:-10}}>
            <Text variant='xs' style={{textAlign:'center'}} fontSize={10}>
                Looks like this page has been deleted or doesn't exist anymore. Please check the link again
            </Text>
        </View>
        <View style={{height:40, width:'40%'}}>
            <CustomButton label='Go Back' color='#FFFFFF' onPress={()=>console.log('better')} />
        </View>
       </View>
    </View>
  )
}

export default UserSuspended;
