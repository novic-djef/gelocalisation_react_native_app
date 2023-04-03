import { View, Image, TouchableOpacity, StyleSheet, Alert, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
//import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, Polyline} from  "react-native-maps";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY } from "@env"; 
import { ActivityIndicator, Button, Card, FAB, List, Portal, Provider, Title } from 'react-native-paper';



export default function Home() {

const state = 1;

  const [markers, setMarkers] = useState({ open: false });

  const onStateChange = ({ open }) => setMarkers({ open });
  const { open } = markers;

const [origine, setOrigine] = useState({
  latitude: 4.062986, 
  longitude: 9.779995,
});
const [destination, setDestination] = useState({
  latitude: 4.083956, 
  longitude: 9.767295,
});

useEffect(() => {
    getLocationPermission();
}, [])

async function getLocationPermission() {
  let { status } = await Geolocation.requestForegroundPermissionsAsync();
  if(status !== 'granted') {
    Alert('Premission denied');
    return;
  }
  let Geolocation = await Geolocation.getCurrentPositionAsync({});
  const current = {
    latitude: Geolocation.coords.latitude,
    longitude: Geolocation.coords.longitude
  }
  setOrigine(current);
}

  return (
    <>
    <View style={styles.Containe}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            console.log("merci")
          } }>
       <MaterialCommunityIcons name="menu" color="#1a2525" style={{margin: 8, marginRight: 12,}}  size={28} />

          {/* <Image
            alt=""
            source={{
              uri: 'https://avatars.githubusercontent.com/u/91409096?v=4',
              
            }}
            style={styles.avatar} /> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          } }>
        <View style={{
          position: 'absolute',
          backgroundColor: "#3498db",
          borderRadius: 25,
          width: 23,
          height: 23,
          marginBottom: -20,
          marginLeft: 22,

        }}>
          <Text style={{
          color: "white",
          fontSize: 18,
          fontWeight: 600,
          //marginRight: 12,
          marginLeft: 6,
          
          
        }}>3</Text>
        </View>
          <MaterialCommunityIcons name="bell-outline" color="#1a2525" style={{margin: 8, marginRight: 12,}}  size={28} />
        
  
        </TouchableOpacity>
      </View>
    </View>
    <Provider>
    <View style={styles.Container}>
    
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: origine.latitude,
            longitude: origine.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          {
            state == 1 ?

        <>
         <TouchableOpacity 
              onPress={() => {console.log("vous avez cliqué")}}
              >
            <Marker
            draggable
            coordinate={origine}
            onDragEnd={(direction) => setOrigine(direction.nativeEvent.coordinate)} 
            >
              <Image 
                source={require('../../../datas/img/png/user_place.png')}
                style={{}}
              />
            </Marker>
            </TouchableOpacity>
           
          <Marker
            draggable
            coordinate={destination}
            //image={cartImag}
            onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)} 
            >
               <Image 
                source={require('../../../datas/img/png/home_network.png')}
                style={{}}
              />
              
            </Marker>
     

            <Marker
            draggable
            coordinate={{latitude: 4.093956, longitude: 9.767295}}
            >
               <Image 
                source={require('../../../datas/img/png/home_network.png')}
                style={{}}
              />
            </Marker>
               <Marker
            draggable
            coordinate={{latitude: 4.093996, longitude: 9.797295}}
            >
               <Image 
                source={require('../../../datas/img/png/home_network.png')}
                style={{}}
              />
            </Marker>
            <Marker
            draggable
            coordinate={{latitude: 4.093956, longitude: 9.777895}}
            >
               <Image 
                source={require('../../../datas/img/png/home_network.png')}
                style={{}}
              />
            </Marker>
            <Marker
            draggable
            coordinate={{latitude: 4.099956, longitude: 9.767295}}
            >
               <Image 
                source={require('../../../datas/img/png/home_network.png')}
                style={{}}
              />
            </Marker>
            </>
            : null 
        }

{
            state == 2 ?

        <>
            <Marker
            draggable
            coordinate={origine}
            onDragEnd={(direction) => setOrigine(direction.nativeEvent.coordinate)} 
            >
           
            </Marker>
          <Marker
            draggable
            coordinate={destination}
            onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)} 
            >
           
            </Marker>

            </>
            : null 
        }

            <MapViewDirections 
             origin={origine}
             destination={destination}
             apikey={GOOGLE_MAPS_KEY}
             strokeColor='black'
             strokeWidth={6}
            
            />
          <Polyline
            coordinates={[origine, destination]}
            strokeColor='white'
            strokeWidth={1} />
         
           
        </MapView>
        {
          state == 2 ?
          <Card >
            <Card.Content>
              <List.Item
              style={{marginBottom: 203, right: 33,}}
                title="bonjour"
                description="nnsbjshjfqhbdhsjbd"
                left={() =>
                  <View style={{width: 20,  right: 33}}>
                <MaterialCommunityIcons
                  style={{color: '#000', marginTop: 20,}}
                name="walk" color="red" size={30}/>
                </View>
                }
                right={() => 
                    
                      <View style={{width: "60%", left: 32 }}>
                      <Button mode='contained' style={{marginBottom: 10}}> Annuler</Button>
                      <Button>Appelez</Button>
                      </View>
                  
                }
              />
            </Card.Content>
          </Card>
          : null
        }
        <Portal>
{
  state == 1 ?
<FAB.Group
        open={open}
        visible
        style={styles.fab}
        icon={open ? 'close' : 'plus'}
        actions={[
          { icon: 'magnify',
            label: 'Rechercher',
            onPress: () => console.log('Pressed add') },
          {
            icon: 'account-group',
            label: 'Mon Groupe',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'map-marker-radius-outline',
            label: 'Reponsitionner',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'map-legend',
            label: 'Changer de carte',
            onPress: () => console.log('Pressed notifications'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
      : null 
}
{
  state == 3 ?
  <View style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
 
  }}>
    <ActivityIndicator 
    animating={true} />
    <Title 
    style={{
           margin: 20,
           marginTop: 40, 
           textAlign: "center", 
           color: "#0c0C0F"
           }}
           > Veillez patienter quelque instant SVP... </Title>
    <Button 
      style={{position: "absolute", margin: "2%", bottom: 0, width: "96%"}}
      mode='contained'> Annuler</Button>
    
  </View>
  : null
}
   
    </Portal>
 
      </View>
      </Provider>
      </>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: "center",
  
  },
  containe: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  map: {
    width: '100%',
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImg: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
    fab: {
      position: 'absolute',
      margin: 16,
      marginTop: 625,
      marginLeft: 110,
      right: 0,
      bottom: 0,
      backgroundColor: "transparent"
    },

})
