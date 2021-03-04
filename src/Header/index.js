import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

function Header({ title, onBack }){
      const checkBackBtn = () =>{
            if (onBack === null){
              return null ;
            }
            return ( 
              <TouchableOpacity style={styles.back} onPress={onBack}>
                   <Text style={styles.backText}>
                       Back
                   </Text>
              </TouchableOpacity>

            )
      }

      return(
        <SafeAreaView>
          <View style={styles.head}> 
            {checkBackBtn}
          <Text style={styles.title}>
              {title}
          </Text>
          </View>
      </SafeAreaView>
      )
}

Header.defaulProps = {
  title: 'Header',
  onBack: null
}

const styles = StyleSheet.create({
    head:{
          width:'100%',
          height:60,
          backgroundColor:'#ffe4c4',
          justifyContent:'center',
          alignItems:'center',
          
    },
    title:{
          fontSize:25,
    },
    back:{
          position:'absolute',
          top: 20,
          left: 10,       
    },
   backText:{
        fontSize:20,
  }

});


export default Header;
