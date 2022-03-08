import { Dimensions, Image, ImageBackground, StatusBar, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
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
                <Image source={require('../../assets/img/oval.png')} style={styles.background} />
                {children}
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
        top: -90,
        right: 0,
        left: 0,
        height: Dimensions.get("screen").width + 10,
        width: Dimensions.get("screen").width,
        position: "absolute",
        resizeMode: 'cover'
    }
})