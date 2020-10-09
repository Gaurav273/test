import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const DetailsScreen = ({ route, navigation }) => {
  
 const { firstname,email,password ,confirm_password} = route.params;

    return (
      <View style={styles.container}>
     
      <View style={styles.header}>
      <Text style={styles.text_header}>Details</Text>
       </View>
 <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >

          <Text>firstname: {JSON.stringify(firstname)}</Text>
            <Text>email: {JSON.stringify(email)}</Text>
              <Text>password: {JSON.stringify(password)}</Text>
                <Text>confirm_password: {JSON.stringify(confirm_password)}</Text>

                  </Animatable.View>
                  {/* </LinearGradient> */}
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      backgroundColor: '#4be4ac'
    },

   text_header: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30
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
});
