import { ImageBackground, StatusBar, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { color } from '../../pages/utils'

interface Props {
    style?: StyleProp<ViewStyle>,
    statusBarColor?: string,
}
const Container: FC<Props> = ({ children, style, statusBarColor }) => {
    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={statusBarColor ?? color.background} />
            <View style={[styles.container, style]}>
                <ImageBackground source={require('../../assets/img/oval.png')} style={styles.background} >
                    {children}
                </ImageBackground>
            </View>
        </>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    background: {
        height: 500,
        flex: 1,
        resizeMode: 'contain'
    }
})