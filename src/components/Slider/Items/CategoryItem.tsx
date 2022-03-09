import { Image, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { theme } from '../../../pages/utils'
import { Text } from '@ui-kitten/components'

interface Props {
    image: any,
    index: number,
    title: string
}
const CategoryItem: FC<Props> = (props) => {
    return (
        <View style={[styles.container, (props.index !== 0) && styles.space]}>
            <View style={styles.body}>
                <Image source={props.image} style={styles.img} />
            </View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        ...theme.toCenter,
    },
    body: {
        backgroundColor: "rgba(81, 188, 125, 0.2)",
        height: 65,
        width: 65,
        ...theme.toCenter,
        borderRadius: 15,
        opacity: 20
    },
    space: {
        marginLeft: 20
    },
    img: {
        height: 45,
        width: 45,
        resizeMode: "contain"
    },
    title: {
        fontSize: 13,
        textAlign: "center",
        marginTop: 8,
        width: "100%",
    }
})