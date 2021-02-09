import React, { Component } from 'react';
import { Rating } from 'react-native-ratings';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Image,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';


import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';


const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);


export default class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      modalVisible: false
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  togglecheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }


  render() {

    return (
      <DismissKeyboard>
        <Block flex={1} middle>
          <View style={styles.main}>
            <TextInput
              style={styles.input}
              onChangeText={text => onChangeText(text)}
              placeholder='Search for a busines'
            />
            <ScrollView>
              <Block flex={1} style={{width:'100%', height:'100%' }}>
                <Block row flex style={styles.card} >
                  {/* <Block row flex style={{ borderWidth: 2, borderColor: 'black' }}> */}
                  <Block flex={0.3} middle>
                    <Image
                      style={{ height: 90, width: 90, borderRadius: 50 }}
                      source={require('../assets/imgs/house.jpg')}
                    />
                  </Block>
                  <Block flex={0.1} middle>
                    <View style={styles.verticleLine}></View>
                  </Block>
                  <Block flex={0.6}>
                    <Text style={styles.header}>Air Conditioning Heating</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <Rating

                        type='star'
                        ratingCount={5}
                        imageSize={20}
                      />
                    </View>
                    <Text style={{ color: 'lightgrey' }}>15-April-2010 </Text>
                    <Text></Text>
                    <Text style={styles.header}>Get good features from us </Text>
                  </Block>
                </Block>
                <Block row flex style={styles.card} >
                  {/* <Block row flex style={{ borderWidth: 2, borderColor: 'black' }}> */}
                  <Block flex={0.3} middle>
                    <Image
                      style={{ height: 90, width: 90, borderRadius: 50 }}
                      source={require('../assets/imgs/house.jpg')}
                    />
                  </Block>
                  <Block flex={0.1} middle>
                    <View style={styles.verticleLine}></View>
                  </Block>
                  <Block flex={0.6}>
                    <Text style={styles.header}>Air Conditioning Heating</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <Rating

                        type='star'
                        ratingCount={5}
                        imageSize={20}
                      />
                    </View>
                    <Text style={{ color: 'lightgrey' }}>15-April-2010 </Text>
                    <Text></Text>
                    <Text style={styles.header}>Get good features from us </Text>
                  </Block>
                </Block>
                <Block row flex style={styles.card} >
                  {/* <Block row flex style={{ borderWidth: 2, borderColor: 'black' }}> */}
                  <Block flex={0.3} middle>
                    <Image
                      style={{ height: 90, width: 90, borderRadius: 50 }}
                      source={require('../assets/imgs/house.jpg')}
                    />
                  </Block>
                  <Block flex={0.1} middle>
                    <View style={styles.verticleLine}></View>
                  </Block>
                  <Block flex={0.6}>
                    <Text style={styles.header}>Air Conditioning Heating</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <Rating

                        type='star'
                        ratingCount={5}
                        imageSize={20}
                      />
                    </View>
                    <Text style={{ color: 'lightgrey' }}>15-April-2010 </Text>
                    <Text></Text>
                    <Text style={styles.header}>Get good features from us </Text>
                  </Block>
                </Block>
                <Block row flex style={styles.card} >
                  {/* <Block row flex style={{ borderWidth: 2, borderColor: 'black' }}> */}
                  <Block flex={0.3} middle>
                    <Image
                      style={{ height: 90, width: 90, borderRadius: 50 }}
                      source={require('../assets/imgs/house.jpg')}
                    />
                  </Block>
                  <Block flex={0.1} middle>
                    <View style={styles.verticleLine}></View>
                  </Block>
                  <Block flex={0.6}>
                    <Text style={styles.header}>Air Conditioning Heating</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <Rating

                        type='star'
                        ratingCount={5}
                        imageSize={20}
                      />
                    </View>
                    <Text style={{ color: 'lightgrey' }}>15-April-2010 </Text>
                    <Text></Text>
                    <Text style={styles.header}>Get good features from us </Text>
                  </Block>
                </Block>
                <Block row flex style={styles.card} >
                  {/* <Block row flex style={{ borderWidth: 2, borderColor: 'black' }}> */}
                  <Block flex={0.3} middle>
                    <Image
                      style={{ height: 90, width: 90, borderRadius: 50 }}
                      source={require('../assets/imgs/house.jpg')}
                    />
                  </Block>
                  <Block flex={0.1} middle>
                    <View style={styles.verticleLine}></View>
                  </Block>
                  <Block flex={0.6}>
                    <Text style={styles.header}>Air Conditioning Heating</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <Rating

                        type='star'
                        ratingCount={5}
                        imageSize={20}
                      />
                    </View>
                    <Text style={{ color: 'lightgrey' }}>15-April-2010 </Text>
                    <Text></Text>
                    <Text style={styles.header}>Get good features from us </Text>
                  </Block>
                </Block>
                <Block row flex style={styles.card} >
                  {/* <Block row flex style={{ borderWidth: 2, borderColor: 'black' }}> */}
                  <Block flex={0.3} middle>
                    <Image
                      style={{ height: 90, width: 90, borderRadius: 50 }}
                      source={require('../assets/imgs/house.jpg')}
                    />
                  </Block>
                  <Block flex={0.1} middle>
                    <View style={styles.verticleLine}></View>
                  </Block>
                  <Block flex={0.6}>
                    <Text style={styles.header}>Air Conditioning Heating</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <Rating

                        type='star'
                        ratingCount={5}
                        imageSize={20}
                      />
                    </View>
                    <Text style={{ color: 'lightgrey' }}>15-April-2010 </Text>
                    <Text></Text>
                    <Text style={styles.header}>Get good features from us </Text>
                  </Block>
                </Block>
                <Block row flex style={styles.card} >
                  {/* <Block row flex style={{ borderWidth: 2, borderColor: 'black' }}> */}
                  <Block flex={0.3} middle>
                    <Image
                      style={{ height: 90, width: 90, borderRadius: 50 }}
                      source={require('../assets/imgs/house.jpg')}
                    />
                  </Block>
                  <Block flex={0.1} middle>
                    <View style={styles.verticleLine}></View>
                  </Block>
                  <Block flex={0.6}>
                    <Text style={styles.header}>Air Conditioning Heating</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <Rating

                        type='star'
                        ratingCount={5}
                        imageSize={20}
                      />
                    </View>
                    <Text style={{ color: 'lightgrey' }}>15-April-2010 </Text>
                    <Text></Text>
                    <Text style={styles.header}>Get good features from us </Text>
                  </Block>
                </Block>
              </Block>

            </ScrollView>
          </View>
        </Block>
      </DismissKeyboard>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    width: width,
    height: height,
    backgroundColor: nowTheme.COLORS.WHITE,
    paddingVertical: '20%',
    paddingHorizontal: '6%'
  },
  checklabel: {
    marginTop: '5%'
  },
  containermodel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  tm: {
    fontWeight: 'bold'
  },
  size: {
    fontSize: 15
  },
  buttonbox: {

    marginTop: '10%'
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: 'black',
    marginLeft: "50%"
  },
  header: {
    fontSize: 13
  },
  button: {

    backgroundColor: "#c70039",
    padding: 10,
    width: '60%',
    borderRadius: 30
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '12%'
  },
  centeredView: {
    flex: 1,

    marginTop: 12,

  },
  centeredViewnxt: {
    flex: 1,


  },
  modalView: {

    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    height: 150,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "white",
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  openButtonbuss: {
    backgroundColor: "white",
    marginRight: "7%"


  },
  textStyle: {
    marginTop: 0,
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  textStyletext: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",

    textAlign: "center",
    marginBottom: 10,
  },
  container: {



  },
  buttonpro: {
    backgroundColor: "#800000",
    paddingHorizontal: 40,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    marginTop: '8%'
  },
  input: {
    width: "100%",
    padding: "2%",
    // marginTop: '4%',

    borderWidth: 1,
  },
  linecontainer: {
    paddingTop: 70,
    width: '20%',
    // marginBottom: 20,
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  card: {
    marginTop: '6%',
    marginHorizontal:'2%',
    padding: '3%',
    // borderWidth: 1,
    borderRadius: 15,
    backgroundColor:'white',
    elevation:4,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2
    }
  }

})