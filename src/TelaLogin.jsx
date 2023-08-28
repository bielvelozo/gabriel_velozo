import React from 'react'
import {View, Text , InputText, StyleSheet} from 'react-native'

const FlexDimensionsBasics = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex:1 , backgroundColor:'powderblue'}}></View>
            <View style={styles.heading}>Tela de Login</View>
        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize:20,
        fontWeight: 'bold',
        marginBottom:20,
    }
})

export default FlexDimensionsBasics