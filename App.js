import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import Home from './pages/Home';
import Community from './pages/Community';
import New from './pages/New';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from './pages/Account';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: true}}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Tab.Navigator>
                <Tab.Screen
                    name="Mes réglages"
                    component={HomeStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="musical-notes-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Communauté"
                    component={Community}
                    options={{
                        headerShown: true,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="chatbubbles-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="New"
                    component={New}
                    options={{
                        headerShown: true,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="add-circle-outline" color={color} size={size} />
                        ),
                    }}
                    key={Math.random()}
                />
                <Tab.Screen
                    name="Mon compte"
                    component={Account}
                    options={{
                        headerShown: true,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-circle-outline" color={color} size={size} />
                        ),
                    }}
                    key={Math.random()}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});