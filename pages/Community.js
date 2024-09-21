import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CommunityScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Community</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'black',
        width: '100%',
        paddingTop: 10,
    },
    text: {
        fontSize: 24,
        padding: 10,
        color: 'white',
    },
});