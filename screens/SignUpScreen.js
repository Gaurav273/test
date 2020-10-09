import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        firstname: '',
        email:'',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        check_textEmailChange:false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {

        if( val.length !== 0 ) {
            setData({
                ...data,
                firstname: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                firstname: val,
                check_textInputChange: false
            });
        }
    }



     const textEmailChange = (val) => {

        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textEmailChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textEmailChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

   

    return (
    //   <View style={styles.container}>
    <LinearGradient
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                   locations={[0,0.5,0.6]}
                    colors={['#4be4ac','#00FF00', '#4be4ac']}
                    style={styles.container}
                >
          <StatusBar backgroundColor='#4be4ac' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>sign Up</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <View style={styles.action}>
                <TextInput 
                    placeholder="First name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>




             <View style={styles.action}>
                <TextInput 
                    placeholder="Email address"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textEmailChange(val)}
                />
                {data.check_textEmailChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

           
            <View style={styles.action}>
                
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

           
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            
            <View style={styles.button}>

                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.navigate('DetailsScreen',{
                        firstname:data.firstname,
                        email:data.email,
                        password:data.password,
                        confirm_password:data.confirm_password

                    })}
                >
                {/* <TouchableOpacity onPress={this._onPressButton}> */}
                <LinearGradient
                    colors={['#00FF00', '#4be4ac']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>


                <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    already have account?
                </Text>
                <Text style= {{fontWeight: 'bold',color:'#4be4ac'}}>Sign In</Text>
      
            </View>
            </View>
            </ScrollView>
        </Animatable.View>
      {/* </View> */}
      </LinearGradient>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#4be4ac'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 120
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30
    },
    text_footer: {
        color: '#2c5282',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#05375a',
        paddingBottom: 1
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
