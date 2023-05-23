import React from 'react';
import { Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';

const image = require('../../../../../assets/images/scott.png');

const index = () => {
  return (
    <View style={Styles.main_Container}>
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
          <View>
            <Image style={Styles.image}  source={image}/>
          </View>
          <View style={Styles.addComment}>
                    <View style={Styles.commentIcon}>
                    </View>
          </View>
          <View style={Styles.commentSession}>
              <View style={Styles.comment}>
                  <Text variant='header' textAlign='center' fontSize={14}>No Comments Yet</Text>
                  <Text variant='xs' textAlign='center' fontSize={12}>No comments have been added here yet. Be the first to <Text variant='xs' fontSize={12} style={{color:'#FF406E'}}>add a comment</Text></Text>
              </View>
          </View>
       </ScrollView>  
    </View>
  )
}

export default index;
