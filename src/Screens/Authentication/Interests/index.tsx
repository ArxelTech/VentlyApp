import React from 'react';
import { ScrollView, StatusBar, Pressable, ActivityIndicator, Modal } from 'react-native';
import { Styles } from './style';
import { Text, View } from '../../../components';
import { CustomButton } from '../../../components';
import { useMutation, useQuery } from 'react-query';
import HttpClient from '../../../utils/httpService';
import useToast from '../../../hooks/useToast';
import { Colors } from 'react-native-ui-lib';
import SettingUpModal from '../../../components/Authentication/SettingUpModal';
import { useDetails } from '../../../states/useDetails';
import { useSignupState } from '../../../states/useSignupState';

interface IINterests {
  id: string;
  interest: string;
}

const Interests = ({ navigation }: any) => {
  const { showToast } = useToast();
  const { id } = useSignupState((state) => state)
  const [interests, setInterests] = React.useState<string[]>([]);

  const { isLoading, data } = useQuery(['getinterrests'], () => HttpClient.get('/interests'), {
    onError: (error: string) => {
        showToast({ message: error, position: 'bottom', preset: 'failure' });
    }
  });

  const updateInterest = useMutation({
    mutationFn: (data: { interests: string[], userId: string }) => HttpClient.put('/interests/user/update', data),
    onSuccess: (data) => {
      showToast({ message: 'Profile updated successfully', position: 'bottom', preset: 'success' });
      navigation.navigate("login");
    },
    onError: (error: string) => {
      showToast({ message: error, position: 'bottom', preset: 'failure' });
    },
  })

  const handleSelect = React.useCallback((name: string) => {
    if (interests.includes(name)) {
      setInterests(interests.filter((item) => item !== name));
    } else {
      setInterests([...interests, name]);
    }
  }, [interests]);

  return (
      <View style={Styles.parent} backgroundColor='backgroundColor'>
          <StatusBar barStyle='dark-content' />
    
          <View>
              <Text variant='subheader'>Select Your Interests</Text>
              <Text variant='body'>We've Suggested a couple of users and event categories you might be interested in following. Please follow at least 3 interest categories</Text>    
          </View>

          <View style={Styles.interests}>
            
            {isLoading && (
              <ActivityIndicator color={Colors.brandColor} size={'large'} />
            )}

            {
              !isLoading && (data?.data.data as IINterests[]).length > 0 && (
                <ScrollView style={{ width: '100%', paddingTop: 20 }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }} >
                  {
                    (data?.data.data as IINterests[]).map((item, index) => (
                      <Pressable onPress={() => handleSelect(item.interest)} style={[Styles.btn_A, { backgroundColor: interests.includes(item.interest ) ? Colors.brandColor : '#EEEEEE' }]} key={index}>
                        <Text variant='body' color={interests.includes(item.interest) ? 'white':'grey'}>{item.interest}</Text>
                      </Pressable>
                    ))
                  }
                </ScrollView>
              )
            }
            
          </View>

          <View style={{ width: '100%', height: 150, justifyContent: 'center', alignItems: 'center',}}>
            <View style={{ height: 55, width: '100%' }}>
              <CustomButton label='Save' onPress={() => updateInterest.mutate({ interests, userId: id })} color='white' />
            </View>
          </View>

          <SettingUpModal show={updateInterest.isLoading} />
            
      </View>
  )
}

export default Interests;