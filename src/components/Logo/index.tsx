import { Image, ImageStyle, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'

interface Props {
    height?: number,
    style?: StyleProp<ImageStyle>
}
const Logo: FC<Props> = ({ height, style }) => {
    return (
        <Image source={require('../../assets/img/logo.png')} style={[styles({ height: height }).logo, style]} />
    )
}

export default Logo

const styles = (props?: Props) => StyleSheet.create({
    logo: {
        height: props?.height ?? 35,
        resizeMode: 'contain',
    }
})