import { StyleSheet, Dimensions, Image, StyleProp, ImageStyle } from 'react-native'
import React, { FC } from 'react'

interface Props {
    style?: StyleProp<ImageStyle>
}
const Background: FC<Props> = (props) => {
    return (
        <Image source={require('../../assets/img/oval.png')} style={[styles.background, props.style]} />
    )
}

export default Background

const styles = StyleSheet.create({
    background: {
        top: -90,
        right: 0,
        left: 0,
        zIndex: -999999,
        height: Dimensions.get("screen").width + 10,
        width: Dimensions.get("screen").width,
        position: "absolute",
        resizeMode: 'cover'
    }
})