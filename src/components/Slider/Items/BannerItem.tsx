import { StyleSheet, Image, View } from 'react-native'
import React, { FC } from 'react'

interface Props {
    index: number
}
const BannerItem: FC<Props> = (props) => {
    return (
        <View style={[styles.slider, (props.index != 0) && styles.space]}>
            <Image source={require('../../../assets/img/slider/1.png')} style={styles.img} />
        </View>
    )
}

export default BannerItem

const styles = StyleSheet.create({
    slider: {
        height: 180,
        width: 338,
    },
    img: {
        height: 180,
        width: 338,
        resizeMode: "contain",
    },
    space: {
        marginLeft: 20
    }
})