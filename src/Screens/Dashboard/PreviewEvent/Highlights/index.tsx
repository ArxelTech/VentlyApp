// import * as React from 'react';
// import {
//   Text, 
//   View,
//   SafeAreaView } from 'react-native';

// import Carousel from 'react-native-snap-carousel';

// // interface Iprop {
// //   title:String,
// //   text:String,
// // }

// export default function () {

//     const [activeIndex, setActiveIndex ] = React.useState(0)
//     let [carousel, setCarouselItem ] = React.useState({
//       carouselItems: [
//         {
//             title:"Item 1",
//             text: "Text 1",
//         },
//         {
//             title:"Item 2",
//             text: "Text 2",
//         },
//         {
//             title:"Item 3",
//             text: "Text 3",
//         },
//         {
//             title:"Item 4",
//             text: "Text 4",
//         },
//         {
//             title:"Item 5",
//             text: "Text 5",
//         },
//       ]
//     })

//     React.useEffect(() => {
//       setCarouselItem(carousel);
//       return () => {
//         setCarouselItem(carousel)
//       }
//     })


//    const _renderItem = () => {
//         return (
//           <View style={{
//               backgroundColor:'floralwhite',
//               borderRadius: 5,
//               height: 250,
//               padding: 40,
//               marginLeft: 5,
//               marginRight: 5, }}>
//               {carousel.carouselItems.map((item) => 
//               <View>
//               <Text style={{fontSize: 30}}>{item.title}</Text>
//               <Text>{item.text}</Text>
//               </View>
//               )}

//           </View>

//         )
//     }

//         return (
//           <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
//             <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
//                 <Carousel
//                   layout={"default"}
//                   ref={ref => carousel = ref}
//                   data={carousel}
//                   sliderWidth={300}
//                   itemWidth={300}
//                   renderItem={_renderItem}
//                   onSnapToItem = { index => ({setActiveIndex:index}) } />
//             </View>
//           </SafeAreaView>
//         );
//     }

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})


