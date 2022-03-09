import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { helper } from '../../../pages/utils'

interface Props {
    index: number,
    image: any
}
const SpesialDealItem: FC<Props> = (props) => {
    return (
        <View style={helper.space(props.index)}>
            <Image source={props.image} style={styles.img} />
        </View>
    )
}

export default SpesialDealItem

const styles = StyleSheet.create({
    img: {
        height: 130,
        width: 130,
        borderRadius: 10
    }
})