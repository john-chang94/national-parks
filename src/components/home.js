import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const image = require('../../assets/arid.jpg')

export default function Home() {
    return (
        <ImageBackground source={image} style={styles.bg}>
            <View style={styles.bgCover} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    bgCover: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.25)'
    }
})