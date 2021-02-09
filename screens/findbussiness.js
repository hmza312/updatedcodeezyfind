
import React from 'react';
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
    TouchableOpacity
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';


import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';


const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            email: null,
            password: null,
            repeat: null,
            modalVisible: false,
            errors: {
                email: "",

                password: "",
            }
        };
    }

    login = () => {
        this.setModalVisible(true);
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <DismissKeyboard>
                <Block flex={1} middle>
                    <Block flex={1} style={styles.SignupContainer}>
                        <Block flex={1} middle >
                            <Block flex={1} middle space="between">
                                <Block middle flex={1}>
                                    <Block flex={1} space="evenly">
                                        <Block flex={0.5} >
                                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                                <Input
                                                    placeholder="Email"
                                                    style={styles.inputs}
                                                    autoCapitalize="none"

                                                    iconContent={
                                                        <Icon
                                                            size={16}
                                                            color="#ADB5BD"
                                                            name="profile-circle"
                                                            family="NowExtra"
                                                            style={styles.inputIcons}
                                                        />
                                                    }
                                                />

                                            </Block>

                                            <View style={styles.centeredView}>
                                                <View style={styles.modalView}>
                                                    <Text style={styles.textStyle}>Select Account Type</Text>
                                                    <View style={styles.containermodel}>
                                                        <View style={{
                                                            borderColor: '#800080', borderRadius: 10,
                                                            padding: 10,


                                                            elevation: 2,
                                                            borderWidth: 1, height: 120
                                                        }}>
                                                            <View style={styles.openButton} >
                                                                <Image
                                                                    source={require('../assets/imgs/user.png')}


                                                                />
                                                                <TouchableHighlight

                                                                    onPress={() => {
                                                                        this.setModalVisible(!this.state.modalVisible);
                                                                    }}
                                                                >

                                                                    <Text style={styles.textStyletext}>Individual</Text>
                                                                </TouchableHighlight>
                                                            </View>
                                                        </View>
                                                        <View style={{
                                                            borderColor: '#800080', borderRadius: 10,
                                                            padding: 10,
                                                            marginLeft: 20,

                                                            elevation: 2,
                                                            borderWidth: 1, height: 120
                                                        }}>
                                                            <View style={styles.openButtonbuss} >
                                                                <Image
                                                                    source={require('../assets/imgs/business.png')}


                                                                />
                                                                <TouchableHighlight

                                                                    onPress={() => {
                                                                        this.setModalVisible(!this.state.modalVisible);
                                                                    }}
                                                                >

                                                                    <Text style={styles.textStyletext}>Business</Text>
                                                                </TouchableHighlight>
                                                            </View>
                                                        </View>
                                                    </View>

                                                </View>
                                            </View>


                                        </Block>
                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>


            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    imageBackgroundContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
    },
    imageBackground: {
        width: width,
        height: height
    },
    captionTextStyle: {
        color: "red"
    },
    SignupContainer: {
        width: width,
        height: height,
        backgroundColor: nowTheme.COLORS.WHITE,
    },
    socialConnect: {
        backgroundColor: nowTheme.COLORS.WHITE
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderColor: "rgba(136, 152, 170, 0.3)"
    },
    socialButtons: {
        width: 120,
        height: 40,
        backgroundColor: '#fff',
        shadowColor: nowTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1
    },
    socialTextButtons: {
        color: nowTheme.COLORS.PRIMARY,
        fontWeight: '800',
        fontSize: 14
    },
    inputIcons: {
        marginRight: 12,
        color: nowTheme.COLORS.ICON_INPUT
    },
    inputs: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 21.5
    },
    passwordCheck: {
        paddingLeft: 2,
        paddingTop: 6,
        paddingBottom: 15
    },
    createButton: {
        width: width * 0.4,
        marginTop: 25,
        marginBottom: 40
    },
    containermodel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        marginBottom: 4,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        height: 300,
        alignItems: "center",
        shadowColor: "#000",
        overflow: "hidden",
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


    },
    openButtonbuss: {
        backgroundColor: "white",


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
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonpro: {
        alignItems: "center",
        textAlign: "center"
        , backgroundColor: "#800000",
        paddingHorizontal: 40,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        marginTop: '8%'
    },
});

export default Signup;