import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const data = [
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_r85gdp64fjq?alt=media&token=65d05bae-6d76-47e1-8ab1-375450095092',
    title: 'Pablo Rojas Mejia',
    content: 'Tipo de Sangre: A'
  },
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_vwngirnr8o?alt=media&token=aabaa3ec-02d5-45f8-91bc-d2baf9525c1f',
    title: 'Pamela Aranda Lopez',
    content: 'Tipo de Sangre: O+'
  },
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_83rpoxa509f?alt=media&token=b9a23ee4-e7a3-4edf-9612-96ab2b57da31',
    title: 'Alvaro Mejia Fuentes',
    content: 'Tipo de Sangre: O+'
  },
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_z5tq60hfnu?alt=media&token=47d756d3-056b-4b0e-b627-2375d128cdf5',
    title: 'Ajhmeth Bahit Dominguez',
    content: 'Tipo de Sangre: O+'
  },
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_ruc2gdrpoya?alt=media&token=c04f4d2d-174b-4a4b-ae50-2f2ac7da78e7',
    title: 'Samanta Fernandez Lopez',
    content: 'Tipo de Sangre: O+'
  },
  /*{
    uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_5uvcpamssoa?alt=media&token=38f16dda-11f5-4427-b2f0-58c71b83fe17',
    title: 'Felipe Galindo Mendez',
    content: 'Tipo de Sangre: A'
  },*/
];

class sliderDonaciones extends Component {
    
  renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    const Donar=  () => {
        console.log("Haz pesionado Donar");
        
    }
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
        >
          <View style={styles.rightTextContainer}>
            <Icon
                name="cards-heart"
                size={26}
                color="red"
                onPress={Donar}
            />
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={this.renderItem}
        itemWidth={0.7 * width}
        inActiveOpacity={0.3}
        containerWidth={width - 10}
        ref={(c) => {
          this.numberCarousel = c;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    borderColor: '#ecf0f1',
    elevation: 2,
    borderWidth: 0.1,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#fff',
    borderWidth: 7,
    borderColor: '#fff',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  rightText: { color: 'white' },
  lowerContainer: {
    flex: 1,
    margin: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  contentText: { 
    fontSize:12
  }
});
export default sliderDonaciones;
