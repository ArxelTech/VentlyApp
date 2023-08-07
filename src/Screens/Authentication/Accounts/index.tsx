import React, {FC, useState, useEffect} from 'react';
import { Image, ScrollView, StatusBar, Dimensions, Pressable, TouchableOpacity, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { Styles } from './style';
import { Text, View } from '../../../components';
import useForm from '../../../hooks/useForm';
import { loginSchema, updateUsernameSchema } from '../../../Services/validation';
import { SubmitButton, TextInput } from '../../../components/FormComponents';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../Theme/theme';
import { Colors, Switch } from 'react-native-ui-lib';
import { useSignupState } from '../../../states/useSignupState';
import * as DocumentPicker from 'expo-document-picker';
import useToast from '../../../hooks/useToast';
import { useMutation } from 'react-query';
import HttpClient from '../../../utils/httpService';
import * as ImagePicker from 'expo-image-picker';
import mime from "mime";



const data = require('../../../../assets/data/dropdown.json');

interface Iprops{
  label: string;
}

// Dropdown function

const { height } = Dimensions.get('screen');
const Accounts = ({ navigation }: any) => {
const { fullName, id, avatar, setAll } = useSignupState((state) => state);
const { showToast } = useToast()
const [business, setBusiness] = useState(false);

const { mutate, isLoading } = useMutation({
  mutationFn: (data: any) => HttpClient.put(`/user/avatar/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }),
  onSuccess: () => {
    showToast({ message: 'Profile updated successfully', position: 'bottom', preset: 'success' });
  },
  onError: (error: string) => {
    showToast({ message: error, position: 'bottom', preset: 'failure' });
  },
});

const { mutate: updateMutation, isLoading: updateIsLoading } = useMutation({
  mutationFn: (data: any) => HttpClient.put(`/user/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }),
  onSuccess: () => {
    showToast({ message: 'Profile updated successfully', position: 'bottom', preset: 'success' });
    navigation.navigate("interests");
  },
  onError: (error: string) => {
    showToast({ message: error, position: 'bottom', preset: 'failure' });
    setAll({ avatar: '' });
  },
});


const handleFilePicker = React.useCallback(async() => {
  console.log(`this is the id ${id}`);
  // const result = await DocumentPicker.getDocumentAsync({
  //   type: 'image/*'
  // });
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    // aspect: [16, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const uri = result.assets[0].uri;
    setAll({ avatar: uri });
    const newBackUri =  "file://" + uri.split("file:///").join("");
    const file: any = {
      uri,
      type: mime.getType(newBackUri),
      name: uri.split("/").pop()
      // size: result.assets[0].fileSize,
    }
    const formData = new FormData();
    formData.append('avatar', file);
    mutate(formData);
  }

}, [])


  const {  renderForm } = useForm({
    defaultValues: {
      username: '',
    },
    validationSchema: updateUsernameSchema,
  });

  const handleSubmit = React.useCallback((data: any) => {
    console.log(`this is the id ${id}`);
      updateMutation({ ...data, isBusiness: business})
  }, []);
  return renderForm(
      <View backgroundColor='backgroundColor' style={Styles.parent}>
        <View style={Styles.child}>
          <StatusBar barStyle='dark-content' />
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1, minHeight: height, paddingHorizontal: 20 }}>
          <View style={Styles.header}>
            <Text variant='header' textAlign={'center'}>Welcome {fullName}</Text>
            <Text variant='body' textAlign={'center'}>Lets finish setting up your account</Text>  
            <View style={Styles.imgUpload}>
                  { avatar === '' && (
                    <Pressable onPress={handleFilePicker} style={Styles.profileImg}>   
                      { !isLoading && <Ionicons name='camera' size={25} color='white' /> }  
                      { isLoading && <ActivityIndicator color={Colors.brandColor} size='large' /> }              
                    </Pressable>
                  )}

                  { avatar !== '' && (
                    <Pressable onPress={handleFilePicker} style={Styles.profileAvatar}>
                      <ImageBackground source={{ uri: avatar }} style={Styles.profileImg}>
                      { !isLoading && <Ionicons name='camera' size={25} color='white' /> }  
                      { isLoading && <ActivityIndicator color={Colors.brandColor} size='large' /> } 
                      </ImageBackground> 
                                   
                    </Pressable>
                  )}
            </View>  
          </View>
          <View style={Styles.bottom}>
            <Text variant='body' marginTop='m' textAlign='center'>Create Username</Text>
            <TextInput name='username' placeholder='@' label='' leftIcon={<Ionicons size={25} color='lightgrey' />}  /> 
            
            <View style={Styles.switchContainer}>
              <Text variant='body'>Business Account?</Text>
              <Switch value={business} onValueChange={() => setBusiness(prev => !prev)} onColor={Colors.brandColor} offColor='lightgrey' />
            </View>

            <View style={{ marginTop: 5 }}>
              <SubmitButton label='Continue' onPress={handleSubmit} isLoading={updateIsLoading} color='white' />
            </View>
          </View>
          </ScrollView>
        </View>
      
      </View>
     
  )
}

export default Accounts;