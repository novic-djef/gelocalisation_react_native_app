
  import React, { useRef, useState } from 'react';
  import {
    StyleSheet,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Animated,
  } from 'react-native';
  import Swiper from 'react-native-swiper';
  
  
  const { width, height } = Dimensions.get('window');
  
  const slides = [
    {
      title: 'Bienvenue sur iLink-World!',
      message: 'Le moyen le plus simple et le plus sûr de\'envoi et de reception d\' argent en toute securité partout dans le monde. suivre toutes les traces de vos transactions grâce à la geolocalisation intègre dans notre systeme... la transparence et notre devise',
      action: 'Démarrer',
    },
    {
      title: 'iLink-World c\'est L’avenir',
      message: 'Le Volet Nano-Credit vous donne la possibilité d\'epagnez votre argent individuellement ou en groupe(tontine plus de 3 personnes), fait des prêts du groupe ou des prêts individuel pour fructifier votre business ou résoudre vos problèmes sans avoir à justifier quoique se soit.   ',
      action: 'Continue',
    },
    {
      title: "Voici la bonne nouvelle",
      message: 'Le volet Nano-Santé Vous donne la possibilité de souscrire à une assurance santé ainsi que votre épouse/époux, vos enfants à un prix relativement bas défiant tous concurrence iLink-World est là pour vous simplifier la vie ',
      action: 'Créez votre compte?',
    },
  ];
  
  
  export default function Welcome({navigation}) {
    const [slide, setSlide] = useState(0);
   // const [ goto, setGoto ] = useState(true);
  
    // const passage = () => {
    //   navigation.navigate("HomeScreen")
    // }
    const swiper = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;
    const contentOpacity = useRef(new Animated.Value(1)).current;
  
    const animatedBackgroundLeft = scrollX.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 0, -1],
    });
  
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={{ left: animatedBackgroundLeft }}>
          <Image
            source={{ uri: 'https://withfra.me/shared/Landing.1.png' }}
            resizeMode="contain"
            style={styles.slideImage}
          />
        </Animated.View>
        <Swiper
          ref={swiper}
          showsPagination={false}
          loop={false}
          onIndexChanged={setSlide}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false },
          )}
          onTouchStart={() => {
            Animated.timing(contentOpacity, {
              toValue: 0,
              duration: 250,
              useNativeDriver: true,
            }).start();
          }}
          onTouchEnd={() => {
            Animated.timing(contentOpacity, {
              toValue: 1,
              duration: 250,
              useNativeDriver: true,
            }).start();
          }}
          scrollEventThrottle={1}>
          {slides.map((item, index) => {
            return (
              <Animated.View
                key={index}
                style={[styles.slide, { opacity: contentOpacity }]}>
                <Text style={styles.slideTitle}>{item.title}</Text>
                <Text style={styles.slideText}>{item.message}</Text>
                
                <TouchableOpacity
                  onPress={() => {
                    if( slide + 1 == 3) {
                      navigation.navigate("HomeScreen")
                    }else{
                      swiper.current.scrollTo(slide + 1, true)
                    }
                    
                    
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{item.action}</Text>
                   
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </Swiper>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c1f26',
    },
    slide: {
      flex: 1,
      backgroundColor: 'transparent',
      position: 'relative',
      justifyContent: 'flex-end',
      paddingHorizontal: 36,
    },
    slideImage: {
      width: width * slides.length,
      height: 0.6 * height,
      position: 'absolute',
      top: 47,
      left: -130,
      right: -150,
    },
    slideTitle: {
      fontSize: 22,
      fontWeight: '700',
      color: '#fff',
      marginBottom: 12,
      textAlign: 'center',
    },
    slideText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#a9b1ff',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#1e5afb',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 36,
      marginVertical: 48,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
      textAlign: 'center',
    },
  });