import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Pressable, ScrollView, Dimensions } from 'react-native';
import {Text, View } from '../../../components';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './style';
import { CustomButton } from '../../../components';
import { TextInput } from '../../../components/FormComponents'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation';

const { height } = Dimensions.get('screen');

const event = ['Single Day Event'] 

const Index = () => {
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
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '20%',}}>
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
										<Pressable onPress={() => setCurrentStep(currentStep + 1)}>
											<Text variant='xs'>Skip</Text>
										</Pressable>
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
										<Pressable onPress={() => setCurrentStep(currentStep + 1)}>
											<Text variant='xs'>Skip</Text>										</Pressable>
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
					<View style={{width: '100%', height: 8, backgroundColor: '#ccc'}}>
						{/* HORIZONTAL LOADER */}
								<View style={{alignItems: 'flex-start'}}>
									<View style={{height: 8, backgroundColor: '#FF406E', width: '20%', position: 'absolute', top: 0, zIndex: 10}} />
								</View>
						{/* CONDITIONS TO INCREASE LOADER */}
								<View style={{flexDirection: 'row', width: '100%', position: 'relative', zIndex: 20}}>
									{steps.map((label, i) =>
										<View key={i} style={{ width: 100}}>
											{i > currentStep && i != currentStep && /* Not selected */
												<View style={{		
													width: 160, height: 8, marginLeft: -50, }}>
												</View>
											}
											{i < currentStep && /* Checked */
												<View style={{ width: 110, height: 8, backgroundColor: '#FF406E',zIndex: 10}}>
												</View>
											}
											{i == currentStep && /* Selected */
												<View style={{width: 50, height: 8, backgroundColor: '#FF406E',zIndex: 10,}}>
												</View>
											}
											<Text variant='xs' style={{fontSize: 12}}>{label}</Text>
										</View>
									)}
								</View>
					</View>
				</View>
				<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} 
				  > 	
					{/* CONDITIONAL PAGE RENDERING */}
						<View> 
							{/* Create New Event */}
							{currentStep == 1 &&
							    <View style={{}}>	
									<View style={{height: 250,  width: '100%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
										<View style={{width: '80%', height: '80%',  display: 'flex', alignItems: 'center', justifyContent:'center', borderWidth: 1, borderStyle:'solid', borderColor:'lightgrey' }}>
											<Ionicons name='camera' size={50} color='lightgrey' /> 
											<View style={{marginTop: 10}}>
												<Text variant='xs'>TAP TO ADD EVENT COVER PHOTO</Text>
											</View>
									    </View>	             
									</View>
									{/* Event name & Type */}
									<View style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>
									  <View style={{width:'80%', backgroundColor: 'white'}}>
									    <Text variant='header' style={{fontSize: 15, }}>Event Name & Type</Text>
										<View style={{ marginTop: 10}}>
										  <TextInput name='eventName' label=''  />
										</View>
										<View style={{marginTop:10}}>
										  <TextInput name='eventType' label='' rightIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
										</View>
									{/* Time & Date */}
										<View style={{marginTop:15}}>
											<Text variant='header' style={{fontSize: 15, }}>Time & Date</Text>
										
											<View style={{ marginTop: 10 }}>
											<TextInput name='eventType' label='' rightIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
											</View>

											<View style={{ marginTop: 15 }}>
												<TouchableOpacity 
												style={{display:'flex', justifyContent: 'center', alignItems: 'center',
												borderColor:'#ECECEC', borderWidth: 1, borderRadius:10,  backgroundColor: '#F5F5F5',
													width:'100%', height:60, elevation: 10}} onPress={() => {console.log('data')}}>
													<Pressable style={{display: 'flex', flexDirection: 'row',
													justifyContent:'center', alignItems:'center', width:'100%' }}>
													<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
														<Image source={require('../../../../assets/images/clock.svg')} resizeMode='contain' style={{ width: '30%', height: 30 }} />
													</View>
													<View style={{ width: '60%', padding: 5}}>
														<Text variant='xs'>Select A Date</Text>
													</View>
													</Pressable> 
												</TouchableOpacity> 
											</View>
											<View style={{ marginTop: 15 }}>
												<TouchableOpacity 
												style={{display:'flex', justifyContent: 'center', alignItems: 'center',
												borderColor:'#ECECEC', borderWidth: 1, borderRadius:10,  backgroundColor: '#F5F5F5',
													width:'100%', height:60, elevation: 10}} onPress={() => {console.log('data')}}>
													<Pressable style={{display: 'flex', flexDirection: 'row',
													justifyContent:'center', alignItems:'center', width:'100%' }}>
													<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
														<Image source={require('../../../../assets/images/calendar.svg')} resizeMode='contain' style={{ width: '30%', height: 30 }} />
													</View>
													<View style={{ width: '60%', padding: 5}}>
														<Text variant='xs'>Select A Date</Text>
													</View>
													</Pressable> 
												</TouchableOpacity> 
											</View>
										</View> 
										{/* Location */}
										<View style={{marginTop:15}}>
											<Text variant='header' style={{fontSize: 15, }}>Location</Text>
											<View style={{ marginTop: 10 }}>
												<TouchableOpacity 
												style={{display:'flex', justifyContent: 'center', alignItems: 'center',
												borderColor:'#ECECEC', borderWidth: 1, borderRadius:10,  backgroundColor: '#F5F5F5',
													width:'100%', height:60, elevation: 10}} onPress={() => {console.log('data')}}>
													<Pressable style={{display: 'flex', flexDirection: 'row',
													justifyContent:'center', alignItems:'center', width:'100%' }}>
													<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
														<Image source={require('../../../../assets/images/clock.svg')} resizeMode='contain' style={{ width: '30%', height: 30 }} />
													</View>
													<View style={{ width: '60%', padding: 5}}>
														<Text variant='xs'>Select Location</Text>
													</View>
													</Pressable> 
												</TouchableOpacity> 
											</View>
											<Text variant='xs' textAlign='right' style={{fontSize: 15, marginTop:5 }}>Type in Location Instead?</Text>
											
										</View> 
										{/* Media */}
										<View style={{marginTop:60}}>
											<Text variant='header' style={{fontSize: 15, }}>Media</Text>
											<View style={{ marginTop: 10 }}>
												<TouchableOpacity 
												style={{display:'flex', justifyContent: 'center', alignItems: 'center',
												borderColor:'#ECECEC', borderWidth: 1, borderRadius:10,  backgroundColor: '#F5F5F5',
													width:'100%', height:60, elevation: 10}} onPress={() => {console.log('data')}}>
													<Pressable style={{display: 'flex', flexDirection: 'row',
													justifyContent:'center', alignItems:'center', width:'100%' }}>
													<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
														{/* <Image source={require('../../../../assets/images/clock.svg')} resizeMode='contain' style={{ width: '30%', height: 30 }} /> */}
													</View>
													<View style={{ width: '60%', padding: 5}}>
														<Text variant='xs'>Select Photos</Text>
													</View>
													</Pressable> 
												</TouchableOpacity> 
											</View>
											<Text variant='xs' textAlign='right' style={{fontSize: 15, marginTop:5 }}>+ Add Video</Text>	
										</View> 
										{/* Event Description */}
										<View style={{marginTop:40}}>
											<Text variant='header' style={{fontSize: 15, }}>Event  Description</Text>
											<View style={{marginTop:10, height: 250, backgroundColor: '#F5F5F5', borderRadius: 10, padding: 10}}>
										       <Text variant='xs'>Give a proper description of this event</Text>
										    </View>
											{/* <Text variant='xs' textAlign='right' style={{fontSize: 15, marginTop:5 }}>+ Add Video</Text>	 */}
										</View> 
										{/* Additional Settings */}
										<View style={{marginTop:15}}>
											<Text variant='header' style={{fontSize: 15, }}>Additional Settings</Text>
											<View style={{ marginTop: 10 }}>
												<TouchableOpacity 
												style={{display:'flex', justifyContent: 'center', alignItems: 'center',
												borderColor:'#ECECEC', borderWidth: 1, borderRadius:10,  backgroundColor: '#F5F5F5',
													width:'100%', height:60, elevation: 10}} onPress={() => {console.log('data')}}>
													<Pressable style={{display: 'flex', flexDirection: 'row',
													justifyContent:'center', alignItems:'center', width:'100%' }}>
													<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
														{/* <Image source={require('../../../../assets/images/clock.svg')} resizeMode='contain' style={{ width: '30%', height: 30 }} /> */}
													</View>
													<View style={{ width: '60%', padding: 5}}>
														<Text variant='xs'>Select Photos</Text>
													</View>
													</Pressable> 
												</TouchableOpacity> 
											</View>
											<Text variant='xs' textAlign='left' style={{fontSize: 15, marginTop:5 }}>Tickets</Text>	
											<Text variant='xs' textAlign='right' style={{fontSize: 15, marginTop:5 }}>Enabled</Text>	
										</View> 

								       <View style={{ position: 'relative', marginTop:10, paddingBottom:40, }}>
										
												{
													(currentStep+1) < steps.length /* add other conditions here */ &&
														<TouchableOpacity style={[Styles.centerElement, 
															{bottom: 0, right: 0, width: '100%', height: 80, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
															 elevation: 10, borderRadius: 0
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
														{ width: '100%', height: 80, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
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
									</View>
								</View>
							}
							{/*Set up Tickets  */}
							{currentStep == 2 &&	
								<View>	
									<View style={{ backgroundColor:'blue', padding:30, marginTop:15, display:'flex', 
									flexDirection:'row', justifyContent:'center',}}>
										<Text variant='xs' style={{fontSize: 15}}>
											If your event requires tickets this is where you need to set it up 
											otherwise you can skip this page
										</Text>		             
									</View>							
									<View style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>
									<View style={{width:'80%', backgroundColor: 'white'}}>
										<Text variant='header' style={{fontSize: 15, }}>Ticket 01</Text>
										<View style={{ marginTop: 15, borderColor:'#ccc', borderWidth: 1, borderRadius:5}}>
										  <TextInput name='eventName' label=''  />
										</View>
										<View style={{ marginTop: 15, borderColor:'#ccc', borderWidth: 1, borderRadius:5}}>
										   <TextInput name='eventType' label='' leftIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
										</View>
										<View style={{marginTop:15}}>
											<View style={{marginTop:10, height: 150, backgroundColor: '#F5F5F5', borderRadius: 10, padding: 10}}>
										       <Text variant='xs'>Give a proper description of this event</Text>
										    </View>
											{/* <Text variant='xs' textAlign='right' style={{fontSize: 15, marginTop:5 }}>+ Add Video</Text>	 */}
										</View> 
										<View style={{ marginTop: 15, borderColor:'#ccc', borderWidth: 1, borderRadius:5}}>
										   <TextInput name='eventType' label=''  />
										</View>
										<View style={{ position: 'relative', marginTop:10, paddingBottom:40, }}>
											
													{
														(currentStep+1) < steps.length /* add other conditions here */ &&
															<TouchableOpacity style={[Styles.centerElement, 
																{ width: '100%', height: 80, paddingTop: 10,paddingBottom:10, display:'flex', justifyContent:'center', alignItems: 'center', 
																 elevation: 10, borderRadius: 0
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
															{ width: '100%', height: 80, paddingTop: 10,paddingBottom:10, display:'flex', justifyContent:'center', alignItems: 'center', 
															 elevation: 10, borderRadius: 0
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
									</View>
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
				</ScrollView>	
		        </View>				
	    </View>
		
  )
};

export default Index;
