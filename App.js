// App.js
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Home from './pages/Home';
import Community from './pages/Community';
import New from './pages/New';
import Account from './pages/Account';
import Login from './pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs({ onLogout }) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Mes réglages"
                component={Home}
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
            />
            <Tab.Screen
                name="Mon compte"
                options={{
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" color={color} size={size} />
                    ),
                }}
            >
                {() => <Account onLogout={onLogout} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(true);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                {isLoggedIn ? (
                    <Stack.Screen
                        name="MainTabs"
                        options={{ headerShown: false }}
                    >
                        {() => <MainTabs onLogout={handleLogout} />}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
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