import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Products from '../screens/Products';

const Stack = createStackNavigator();

function Rootnavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigatior ScreenOptions={{
              headerShow: false
            }}>;
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Products" component={Products} />
               
            </Stack.Navigatior>
        
        </NavigationContainer>
    )
}


export default Rootnavigation;
