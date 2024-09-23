import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account({ onLogout }) {
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem('token');
            setToken(storedToken);
        };

        fetchToken();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mon compte</Text>
            <Text style={styles.token}>Token: {token}</Text>
            <Button title="Se déconnecter" onPress={onLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    token: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
});