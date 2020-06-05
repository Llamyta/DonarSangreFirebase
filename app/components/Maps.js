import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  Dimensions,
  Button
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout }
  from 'react-native-maps';
import { request, PERMISSIONS } from 'react-native-permissions';
// import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';
import getDirections from 'react-native-google-maps-directions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default class CarouselMap extends Component {


  static navigationOptions = {
    title: 'San Francisco',
  };

  state = {
    markers: [],
    coordinates: [
      { name: 'Belga', latitude: -17.387509, longitude: -66.1555032, image: { uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_8ha0wkclhcy?alt=media&token=d7573d49-878b-44e6-bdf1-8bc9f347d137' },telf:4444444, correo:'belga123@gmail.com' },
      { name: 'Los Angeles', latitude: -17.3785676, longitude: -66.166922, image: { uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_pdv4zlgx3wl?alt=media&token=5a4d3c06-419d-408f-8bca-e461f8fc7133' }, telf:777777, correo:'clinicalosangeles@gmail.com'},
      { name: 'SEDES', latitude: -17.3883176, longitude: -66.1514658, image: { uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_e4occ2n40am?alt=media&token=8eeb39c8-6454-4da5-9b4b-b6215075f8f4' } ,telf:75913669, correo:'sedescbba@gmail.com'},
    ]
  }

  componentDidMount() {
    this.requestLocationPermission();
  }


  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
      else {
        var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        console.log('Android: ' + response);
      }
    }
  }

  locateCurrentPosition = () => {
    // Geolocation.getCurrentPosition(
    //   position => {
    //     console.log(JSON.stringify(position));

    //     let initialPosition = {
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //       latitudeDelta: 0.045,
    //       longitudeDelta: 0.020
    //     }

    //     this.setState({ initialPosition });
    //   },
    //   error => Alert.alert(error.message),
    //   { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    // )
  }

  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.001
    })

    this.state.markers[index].showCallout()
  }

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.020
    });

    this._carousel.snapToItem(index);
    ;
  }
  handleGetDirections = (item) => {

    // console.log(item.latitude);
    // console.log(item.longitude);
    // Geolocation.getCurrentPosition(
    //   position => {
    //     const data = {
    //       source: {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //       },
    //       destination: {
    //         latitude: item.latitude,
    //         longitude: item.longitude
    //       },
    //       params: [
    //         {
    //           key: "travelmode",
    //           value: "driving"
    //         },
    //         {
    //           key: "dir_action",
    //           value: "navigate"
    //         }
    //       ]

    //     }

    //     getDirections(data)
    //   },
    //   error => Alert.alert(error.message),
    //   { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    // )


  }

  renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <View style={styles.Imagen}>
        <Image style={styles.cardImage} source={item.image} />
      </View>
      <View style={styles.Texto}>
        <View style={styles.txt}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={{paddingTop:'10%'}}>Contacto: {item.telf}</Text>
          <Text style={{paddingTop:'3%'}}>{item.correo}</Text>
        </View>
        <View style={styles.icono} >
          <Icon
            name="google-maps"
            color="#fff"
            size={26}
            onPress={() => this.handleGetDirections(item)}
            style={styles.boton}
          />
        </View>
      </View>
    </View>

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => this._map = map}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={this.state.initialPosition}>
          {
            this.state.coordinates.map((marker, index) => (
              <Marker
                key={marker.name}
                ref={ref => this.state.markers[index] = ref}
                onPress={() => this.onMarkerPressed(marker, index)}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              >
                <Callout>
                  <Text>{marker.name}</Text>
                </Callout>

              </Marker>
            ))
          }

        </MapView>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '2%'
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: 200,
    width: 310,
    borderRadius: 20,
  },
  Imagen: {

  },
  cardImage: {
    height: 200,
    width: 180,
    bottom: 0,
  },
  Texto: {
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'flex-end',
    marginTop:'10%'

  },
  txt:{
    alignSelf:'center',
    paddingHorizontal:'5%'
  },
  icono:{
    backgroundColor:'#1196BA',
    width:80,
    height:40,
    borderTopLeftRadius:20, 
    justifyContent:'center',
    alignItems:'center',
   
  },
  cardTitle: {
    color: '#05375a',
    fontSize: 18,
    fontWeight: 'bold',
  },


});