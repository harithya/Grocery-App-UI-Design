import { ImageStyle, StatusBar, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { color } from '../../pages/utils'
import Background from './Background'

interface Props {
    style?: StyleProp<ViewStyle>,
    statusBarColor?: string,
    backgroundStyle?: StyleProp<ImageStyle>,
    disableBackground?: boolean
}
const Container: FC<Props> = ({ children, style, statusBarColor, backgroundStyle, disableBackground }) => {
    return (
        <>
            <StatusBar barStyle={(statusBarColor == "white") ? "dark-content" : "light-content"} backgroundColor={statusBarColor ?? color.background} />
            <View style={[styles.container, style]}>
                {!disableBackground && <Background style={backgroundStyle} />}
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

})