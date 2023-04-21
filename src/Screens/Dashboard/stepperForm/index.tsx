import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import {Text, View } from '../../../components';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './style';
import { CustomButton } from '../../../components';
import { TextInput } from '../../../components/FormComponents'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation';

const event = ['Single Day Event'] 

const index = () => {
	const { renderForm } = useForm({
		defaultValues: {
			eventName: '',
			eventType: ''
			
		},
		validationSchema: loginSchema
	})
	const [steps, setStep] = useState(['', '', '', '']);
	const [currentStep, setCurrentStep ] = useState(1);

  return renderForm(
    <View style={Styles.main_Container}>
		<View style={{ flex: 1, flexDirection: 'column',}}>
				{/* EVENT TITLE  */}
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff000', height: '10%',}}>
					{/* CONDITIONAL HEADER RENDERING */}
					<View style={[{height: 50}, {marginTop: 20}, {display:'flex'},{flex:1}, {flexDirection: 'row'}, {alignItems:'flex-start'},{justifyContent: 'center'},]}>
						<TouchableOpacity style={[Styles.centerElement, {width: 50, height: 40}]} onPress={() => {currentStep > 1 && setCurrentStep(currentStep -1)}}>	
							  <Ionicons name="arrow-back" size={30} color="#000" />
						</TouchableOpacity>
					</View>
					
					<View style={[Styles.centerElement, {height: 50}, {marginTop: 20}, {display:'flex'},{flex:5}, {alignItems:'flex-start'},{justifyContent: 'flex-start'}]}>
						{/* HEADER  */}
						<View style={{width:'100%'}}>
							{
								currentStep == 1 &&		
								<Text  variant='header' style={{fontSize: 22, color: '#000'}}>Create A New Event</Text>	
								
							}

							{
								currentStep == 2 &&
								<View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
									<View style={{ width: '50%'}}>
									<Text variant='header' style={{fontSize: 22, color: '#000'}}>Set Up Tickets</Text>
									</View>
									<View style={{width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
									<TouchableOpacity style={[Styles.centerElement, 
										{bottom: 0, left: 15, width: 80, height: 30, 
										backgroundColor: 'transparent', elevation: 10, borderRadius: 20, borderStyle: 'solid', borderWidth: 1}]} 
										onPress={() => {
										if((currentStep+1) < steps.length){
										({currentStep: currentStep + 1});
										}
									}}>
										<Pressable onPress={() => setCurrentStep(currentStep + 1)}>Skip</Pressable>
									</TouchableOpacity>
									</View>	
								</View>	
							}

							{
								currentStep == 3 && 
								<View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
									<View style={{ width: '50%'}}>
									<Text variant='header' style={{fontSize: 22, color: '#000'}}>Invite Ventors</Text>
									</View>
									<View style={{width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
									<TouchableOpacity style={[Styles.centerElement, 
										{bottom: 0, left: 15, width: 80, height: 30, 
										backgroundColor: 'transparent', elevation: 10, borderRadius: 20, borderStyle: 'solid', borderWidth: 1}]} 
										onPress={() => {
										if((currentStep+1) < steps.length){
										({currentStep: currentStep + 1});
										}
									}}>
										<Pressable onPress={() => setCurrentStep(currentStep + 1)}>Skip</Pressable>
									</TouchableOpacity>
									</View>	
								</View>	
							}
						</View>
                         {/* SUBHEADER - EVENT TYPE */}
						<Text variant='subheader' style={{fontSize: 15, }}>{event}</Text>
					</View>
				</View>
				
		        <View>
					<View style={{width: '100%', height: 10, backgroundColor: '#ccc'}}>
						{/* HORIZONTAL LOADER */}
								<View style={{alignItems: 'flex-start'}}>
									<View style={{height: 10, backgroundColor: '#FF406E', width: '20%', position: 'absolute', top: 0, zIndex: 10}} />
								</View>
						{/* CONDITIONS TO INCREASE LOADER */}
								<View style={{flexDirection: 'row', width: '100%', position: 'relative', zIndex: 20}}>
									{steps.map((label, i) =>
										<View key={i} style={{ width: 100}}>
											{i > currentStep && i != currentStep && /* Not selected */
												<View style={{		
													width: 160, height: 10, marginLeft: -50, }}>
												</View>
											}
											{i < currentStep && /* Checked */
												<View style={{ width: 120, height: 10, backgroundColor: '#FF406E',zIndex: 10}}>
												</View>
											}
											{i == currentStep && /* Selected */
												<View style={{width: 50, height: 10, backgroundColor: '#FF406E',zIndex: 10,}}>
												</View>
											}
											<Text variant='xs' style={{fontSize: 12}}>{label}</Text>
										</View>
									)}
								</View>
							</View>
						</View>
					{/* CONDITIONAL PAGE RENDERING */}
						<View style={{backgroundColor: '#ccc'}}>
							{/* Create New Event */}
							{currentStep == 1 &&
							    <View>	
									<View style={{height: 250,  width: '100%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', backgroundColor: 'green',}}>
										<View style={{width: '80%', height: '80%',  display: 'flex', alignItems: 'center', justifyContent:'center', borderWidth: 1, borderStyle:'solid', borderColor:'lightgrey' }}>
											<Ionicons name='camera' size={50} color='lightgrey' /> 
											<View style={{marginTop: 10}}>
												<Text variant='xs'>TAP TO ADD EVENT COVER PHOTO</Text>
											</View>
									    </View>	             
									</View>
									<View style={{height:'100%',display:'flex', flexDirection:'row', justifyContent:'center', backgroundColor: 'blue'}}>
									  <View style={{width:'80%', backgroundColor: 'yellow'}}>
									    <Text variant='header' style={{fontSize: 18, }}>Event Name & Type</Text>
										<View style={{ marginTop: 10 }}>
										  <TextInput name='eventName' label=''  />
										</View>
										<View style={{ marginTop: 10 }}>
										<TextInput name='eventType' label='' rightIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
										</View>

									    <Text variant='header' style={{fontSize: 18, }}>Time & Date</Text>
										
										<View style={{ marginTop: 10 }}>
										 <TextInput name='eventType' label='' rightIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
										</View>

										<View style={{ marginTop: 10 }}>
										 
										</View>
									   
									  </View>		 
									</View>
								</View>

							}
							{/*Set up Tickets  */}
							{currentStep == 2 &&	
								<View style={{height: 200, alignSelf: 'center', backgroundColor: 'green', width: '100%'}}>
									<Text variant='xs' style={{fontSize: 30}}>Step 3</Text>
								</View>
							}	
							{/* Invite Vendors */}
							{currentStep == 3 &&	
								<View style={{height: 200, alignSelf: 'center', backgroundColor: 'green', width: '100%'}}>
									<Text variant='xs' style={{fontSize: 30}}>Step 4</Text>
								</View>
							}
							{/* CONTINUE BUTTON */}
							
				</View>		
		</View>		
						<View style={{ position: 'relative'}}>
								{
									(currentStep+1) < steps.length /* add other conditions here */ &&
										<TouchableOpacity style={[Styles.centerElement, 
											{bottom: 0, right: 0, width: '100%', height: 100, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
											 backgroundColor: '#ccc', elevation: 10, borderRadius: 0
											}]} 
											onPress={() => {
											  if((currentStep+1) < steps.length){
												({currentStep: currentStep + 1});
												}
											}}>
										     <CustomButton  label='Continue'  borderRadius={10} backgroundColor='#FF406E'  color='white'
											  onPress={() => setCurrentStep(currentStep + 1)}
											  />
										</TouchableOpacity>	
								    
								}
								{(currentStep+1) == steps.length /* add other conditions here */ &&	
									<TouchableOpacity style={[Styles.centerElement, 
										{bottom: 0, right: 0, width: '100%', height: 100, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
										 backgroundColor: '#ccc', elevation: 10, borderRadius: 0
										}]} 
										onPress={() => {
										  if((currentStep+1) < steps.length){
											({currentStep: currentStep + 1});
											}
										}}>
										 <CustomButton  label='finish'  borderRadius={10} backgroundColor='#FF406E'  color='white'
										  onPress={() => setCurrentStep(currentStep + 1)}
										  />
									</TouchableOpacity>		
								}
					</View>	
	</View>

  )
};

export default index;

const styles = StyleSheet.create({})

		{/* {steps && 
					<Text style={{color: 'red'}}>Conditionally rendered </Text>
				}
				{steps ? null: <Text>This value is false</Text>}

					<Pressable onPress={() => {setCurrentStep(currentStep+1 )}}> click</Pressable> */}