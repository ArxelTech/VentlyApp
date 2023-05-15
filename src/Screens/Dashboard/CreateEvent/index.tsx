import React, {Key, useState } from 'react';
import { Image, TouchableOpacity, Pressable, ScrollView, Dimensions, StatusBar } from 'react-native';
import {Text, View } from '../../../components';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './style';
import { CustomButton } from '../../../components';
import { TextInput } from '../../../components/FormComponents'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation';
import {FlatList} from 'react-native';


const DATA = require('../../../../assets/data/vendors.json');
const { height } = Dimensions.get('screen');
const event = ['Single Day Event']; 

const CreateEvent = () => {
	const { renderForm } = useForm({
		defaultValues: {
			eventName: '',
			eventType: ''
		},
		validationSchema: loginSchema
	})
	const [steps, setStep] = useState(['', '', '', '']);
	const [currentStep, setCurrentStep ] = useState(0);
	
    return renderForm(
    <View style={Styles.main_Container}>
		<View style={{ flex: 1, flexDirection: 'column',}}>
			{/* EVENT TITLE  */}
				<View style={[Styles.EventTitle]}>
					{/* CONDITIONAL HEADER RENDERING */}
					<View style={[Styles.DynamicHeader]}>
						{ currentStep > 0 && <TouchableOpacity style={[Styles.centerElement, {width: 50, height: 40}]} onPress={() => {currentStep >= 0 && setCurrentStep(currentStep -1)}}>	
							  <Ionicons name="arrow-back" size={30} color="#000" />
						</TouchableOpacity> }
					</View>
			
					<View style={[Styles.centerElement, Styles.conditionedHeader]}>
						{/* HEADER  */}
						<View style={{width:'100%'}}>
							{
								currentStep == 0 && 
								<View style={[Styles.title_1]}>
									<View style={{flex:2, justifyContent:'center'}}>
										<Ionicons name='arrow-back-outline' size={25} color='black'/>
									</View>
									<View style={{flex:6}}>     
										<Text variant='header' style={{fontSize:20}}>Create A New Event</Text> 
									</View>    
								</View>
							}
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
									<View style={[Styles.skipBtn]}>
									<TouchableOpacity style={[Styles.centerElement, Styles.skipBtn1 ]} 
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
										<Text variant='header' style={{fontSize: 22, color: '#000'}}>Invite Vendors</Text>
									</View>
									<View style={[Styles.skipBtn]}>
									<TouchableOpacity style={[Styles.centerElement, Styles.skipBtn1]} 
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
						</View>
                         {/* SUBHEADER - EVENT TYPE */}
						 { currentStep > 0 &&
						<Text variant='subheader' style={{fontSize: 15, }}>{event}</Text>
					     }
					</View>
				</View>	
		    <View>
				{currentStep > 0 &&	<View style={{width: '100%', height: 6, backgroundColor: '#ccc'}}>
						{/* HORIZONTAL LOADER */}
							<View style={{alignItems: 'flex-start'}}>
									<View style={[Styles.loader]} />
							</View> 
						{/* CONDITIONS TO INCREASE LOADER */} 
								<View style={[Styles.Dloader]}>
									{steps.map((label, i) =>
										<View key={i} style={{ width: 100}}>
											{i > currentStep && i != currentStep && /* Not selected */
												<View style={{		
													width: 160, height: 6, marginLeft: -50, }}>
												</View>
											}
											{i < currentStep && /* Checked */
												<View style={{ width: 110, height: 6, backgroundColor: '#FF406E',zIndex: 10}}>
												</View>
											}
											{i == currentStep && /* Selected */
												<View style={{width: 50, height: 6, backgroundColor: '#FF406E',zIndex: 10,}}>
												</View>
											}
											{/* <Text variant='xs' style={{fontSize: 12}}>{label}</Text> */}
										</View>
									)} 
								</View>
					</View> } 
			</View>
			 <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} 
					>  
			    {/* CONDITIONAL PAGE RENDERING */}
				  {/* Create event */}
					{currentStep == 0 && 
					<View>
					   <View style={Styles.parent}>
							<View style={Styles.child}>
							<StatusBar barStyle='dark-content' />
							<View style={Styles.subheader}>
								<View style={{width:'80%'}}>
								<Text variant='xs' textAlign='center'>Let's help you get your event ready, What kind of event do you want to create?</Text>
								</View>
							</View>
							<View style={Styles.image}>
								<Image source={require('../../../../assets/images/husky.png')} resizeMode='contain' style={{ width: '100%', height: 200 }} />
							</View>
							<View style={Styles.dropdown}>
								<Text variant='header' style={{fontSize:15}}>Event Type</Text>
								<View style={{width:'100%', marginTop: -15}}>
								<TextInput name='accountType' label='' rightIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
								</View>
							
								<View style={{marginTop: 0}}>
								<Text variant='xs' textAlign='center'>These kind of events usually hold for just one day</Text>
								</View>
								<View style={{ marginTop: 0 }}>
								{
									(currentStep+1) < steps.length /* add other conditions here */ &&
									<TouchableOpacity style={[Styles.centerElement, 
										{ width: '100%', height: 80, paddingTop: 10,paddingBottom:10, display:'flex', justifyContent:'center', alignItems: 'center', 
										elevation: 0, borderRadius: 0
										}]} 
										onPress={() => {
										if((currentStep+1) < steps.length){
											({currentStep: currentStep + 1});
											}
										}}>
										<CustomButton  label='Continue'  borderRadius={10} backgroundColor='#FF406E'  color='white'
										onPress={() => setCurrentStep(currentStep + 1)}
										/>
									</TouchableOpacity>	}																					
								</View>
							</View>
						</View>
					</View>
									 
					</View> }
				  {/*New Event */}
				  {currentStep == 1 &&
					<View>	
						<View style={[Styles.cameraBox]}>
							<View style={[Styles.Box]}>
								<Ionicons name='camera' size={50} color='lightgrey' /> 
								<View style={{marginTop: 10}}>
									<Text variant='xs'>TAP TO ADD EVENT COVER PHOTO</Text>
								</View>
							</View>	             
						</View>
					{/* Event name & Type */}
					<View style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>
					<View style={{width:'90%', backgroundColor: 'white'}}>
						<Text variant='header' style={{fontSize: 15, }}>Event Name & Type</Text>
							<View style={{ marginTop: -15}}>
						<TextInput name='eventName' label=''  />
					</View>
					<View style={{marginTop:0}}>
						<TextInput name='eventType' label='' rightIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
					</View>
					{/* Time & Date */}
					<View style={{marginTop:5}}>
						<Text variant='header' style={{fontSize: 15, }}>Time & Date</Text>
						
						<View style={{ marginTop: -15}}>
							<TextInput name='eventType' label='' rightIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
						</View>

						<View style={{ marginTop: 15 }}>
							<TouchableOpacity 
								style={[Styles.DatePicker]} onPress={() => {console.log('data')}}>
									<Pressable style={[Styles.DatePicker1]}>
										<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
											<Image source={require('../../../../assets/images/clock.png')} resizeMode='contain'  style={{ width: '30%', height: 30 }} />
										</View>
										<View style={{ width: '60%', padding: 5}}>
											<Text variant='xs'>Select A Date</Text>
										</View>
									</Pressable> 
							</TouchableOpacity> 
						</View>
						<View style={{ marginTop: 15 }}>
							<TouchableOpacity 
								  style={[Styles.DatePicker]} onPress={() => {console.log('data')}}>
									<Pressable style={[Styles.DatePicker1]}>
										<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
											<Image source={require('../../../../assets/images/calendar.png')} resizeMode='contain' style={{ width: '30%', height: 30 }} />
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
								    style={[Styles.DatePicker]} onPress={() => {console.log('data')}}>
									<Pressable style={[Styles.DatePicker1]}>
										<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
											<Image source={require('../../../../assets/images/calendar.png')} resizeMode='contain' style={{ width: '30%', height: 30 }} />
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
							<Text variant='xs' style={{fontSize: 12, marginTop: -15}}>You can add up to 5 pictures</Text>
							<View style={{ marginTop: 10 }}>
								<TouchableOpacity 
								    style={[Styles.DatePicker]} onPress={() => {console.log('data')}}>
									<Pressable style={[Styles.DatePicker1]}>
										<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
										</View>
										<View style={{ width: '60%', padding: 5}}>
											<Text variant='xs'>Select Photos</Text>
										</View>
									</Pressable> 
								</TouchableOpacity> 
							</View>
							<Text variant='header' textAlign='right' style={{fontSize: 12, marginTop:5 }}>+ Add Video</Text>	
						</View> 
						{/* Event Description */}
						<View style={{marginTop:40}}>
							<Text variant='header' style={{fontSize: 15, }}>Event  Description</Text>
							<View style={{marginTop:10, height: 250, backgroundColor: '#F5F5F5', borderRadius: 10, padding: 10}}>
							<Text variant='xs'>Give a proper description of this event</Text>
						</View>
						</View> 
						{/* Additional Settings */}
						<View style={{marginTop:30}}>
							<Text variant='header' style={{fontSize: 15, }}>Additional Settings</Text>
							<View style={{ marginTop: 10 }}>
								<TouchableOpacity 
								 style={[Styles.DatePicker]} onPress={() => {console.log('data')}}>
									<Pressable style={[Styles.DatePicker1]}>
										<View style={{ width: '40%',padding: 5, alignItems:'flex-end'}}>
										</View>
										<View style={{ width: '60%', padding: 5}}>
											<Text variant='xs'>Select Photos</Text>
										</View>
									</Pressable> 
								</TouchableOpacity> 
							</View>
							<Text variant='header' textAlign='left' style={{fontSize: 12, marginTop:5 }}>Tickets</Text>	
							<Text variant='xs' textAlign='right' style={{fontSize: 10, marginTop:5 }}>Enabled</Text>	
						</View> 

						<View style={{ position: 'relative', marginTop:10, paddingBottom:40, }}>	
							{
							(currentStep+1) < steps.length /* add other conditions here */ &&
							<TouchableOpacity style={[Styles.centerElement, 
								{ width: '100%', height: 80, paddingTop: 10,paddingBottom:10, display:'flex', justifyContent:'center', alignItems: 'center', 
								elevation: 0, borderRadius: 0
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
						</View>		   
					  </View>		 
					</View>
				</View> }
			    {/*Set up Tickets  */}
				{ currentStep == 2 &&	
				    <View>	
						<View style={[Styles.SetupTickets]}>
							 <Text variant='xs' style={{fontSize: 12}}>
							    If your event requires tickets this is where you need to set it up 
								otherwise you can skip this page				
							 </Text>					             
						</View>							
						<View style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>			
								<View style={{width:'90%', backgroundColor: 'white'}}>
									<Text variant='header' style={{fontSize: 15, }}>Ticket 01</Text>
									<View style={{ marginTop: -15, borderRadius:5, }}>
										<TextInput name='eventName' label='' placeholder='Ticket Type .e.g - Regular, VIP etc' />
									</View>
									<View style={{ marginTop: 0, borderRadius:5}}>
										<TextInput name='eventType' label='' leftIcon={<Ionicons name='caret-down' size={20} color='black'  />}  />
									</View>	
									<View style={{marginTop:5}}>
										<View style={{marginTop:10, height: 150, backgroundColor: '#F5F5F5', borderRadius: 10, padding: 10}}>
											<Text variant='xs'>
												Additional Ticket Information - e.g : This ticket gives you access to the VIP lounge & 5 cocktails
											</Text>		
										</View>		
									</View> 		
									<View style={{ marginTop: 0, borderRadius:5}}>
										<TextInput name='eventType' label=''  />
									</View>
									<Text variant='xs' style={{fontSize: 12, marginTop:5}}>This ticket will become sold out once it gets to this number Maximum number of tickets is 100,000</Text>
									<Text variant='header' textAlign='right' style={{fontSize: 12, marginTop: 15,}}>+ Add Another Ticket</Text>
									<View style={{ position: 'relative', marginTop:10, paddingBottom:40, }}>			
										{
											(currentStep+1) < steps.length /* add other conditions here */ &&
											<TouchableOpacity style={[Styles.centerElement, 
												{ width: '100%', height: 80, paddingTop: 10,paddingBottom:10, display:'flex', justifyContent:'center', alignItems: 'center', 
												elevation: 0, borderRadius: 0
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
									 </View>		   
								  </View>		 
							</View>
					</View>		}	
				{/* Invite Vendors */}
				    {currentStep == 3 &&	
						<View style={{height: '100%', width:'100%', alignSelf: 'center'}}>
						<View style={{ padding:20, marginTop:15, display:'flex', 
						flexDirection:'row', justifyContent:'center',}}>
							<Text variant='xs' style={{fontSize: 15}}>
								This is where you can invite creatives and vendors to your event. Disc Jockeys, MCs, Cinematographers Photographers, Artistes and more.
							</Text>		             
						</View>
						<View style={{height:100, display:'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center' }}>
							<View style={{backgroundColor:'#FFFFFF', width: '90%', height:'100%', display:'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
								<Text variant='header' textAlign='center' style={{fontSize:15}}>
									Tap To Invite A Creative Or Vendor
								</Text>	
							</View>
						</View>
						<View style={{width: '100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
							<View style={{width:'90%'}}>
								<Text variant='header' textAlign='left' style={{fontSize:15}}>
								RECOMMENDED FOR YOU	
								</Text>	
								<View>
								
									<FlatList
										data={DATA.slice(0,3)}
										renderItem={({item}) => 
										<View style={{height: 120, width:'100%', display: 'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
												<View style={{ flex: 1.2, padding: 5}}>
													<Image source={item.image} resizeMode='cover'
													 style={{height:100, width:100, borderRadius: 100}}/>
												</View>
												<View style={{ flex: 1.8, padding:10}}>
													<View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
														<Text variant='header' style={{fontSize: 15}}>
															{item.user}
														</Text>
														<Image source={item.verifyImg} style={{height:15, width:15, borderRadius: 100, marginLeft:5}}/>
													</View>
													<View style={{display:'flex', flexDirection:'row', alignItems:'center', flex: 1.5, marginTop:-10}}>
														<Text variant='xs'>{item.handle}</Text>
														<Text variant='xs'>{item.career}</Text>
													</View>
													<Text variant='xs'>{item.cost}</Text>
												</View>
												<View style={{flex:1.2}}>
												
													<TouchableOpacity style={[Styles.centerElement, 
													{ width: '100%', height: 60, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
													}]} 
													>
													<CustomButton  onPress={() => {console.log('pressed')}} label='invite'  borderRadius={5} backgroundColor='#FF406E'  color='white'
																									/>
												</TouchableOpacity>	
												</View>
										</View> }
										keyExtractor={item => item.id}
									/>
								
						</View>
							</View>
						</View>
						{(currentStep+1) == steps.length /* add other conditions here */ &&	
							<TouchableOpacity style={[Styles.centerElement, 
								{ width: '100%', height: 80, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
								elevation: 0, borderRadius: 0
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
								}				
							
					</ScrollView>	
		        </View>				
	    </View>
		
  )
};

export default CreateEvent;
