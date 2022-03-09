import { Image, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Button, Icon, Text } from '@ui-kitten/components'
import { color, helper, theme } from '../../../pages/utils'

interface Props {
    index: number
}
const ProductItem: FC<Props> = ({ index }) => {
    return (
        <View style={[styles.card, helper.space(index)]}>
            <Image source={{ uri: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }} style={styles.img} />
            <View style={styles.body}>
                <Text style={theme.fontSemiBold} numberOfLines={2}>Fresh Carrot</Text>
                <View style={styles.price}>
                    <View style={theme.flexStart}>
                        <Text style={theme.fontSemiBold} status="primary" category={"p2"}>Rp 21,000</Text>
                        <Text appearance={"hint"} category="c1" style={theme.fontRegular}> / KG</Text>
                    </View>
                    <Text appearance={"hint"} category="p2" style={styles.discount}>Rp 23,000</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        size={"small"}
                        style={styles.button}
                        appearance={"outline"}
                        accessoryLeft={(eva) => <Icon {...eva} fill={color.primary} name="plus-outline" />}
                    />
                </View>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    card: {
        width: 157,
        backgroundColor: color.white,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 4,
        marginBottom: 18,
        borderRadius: 10
    },
    img: {
        height: 131,
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: "cover"
    },
    body: {
        padding: 10
    },
    price: {
        marginTop: 5
    },
    discount: {
        ...theme.fontRegular,
        marginTop: 5,
        fontSize: 12,
        textDecorationLine: "line-through"
    },
    button: {
        height: 28,
        width: 28,
    },
    buttonContainer: {
        marginTop: 2,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    }
})