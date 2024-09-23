import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Account({ onLogout }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mon compte</Text>
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
});