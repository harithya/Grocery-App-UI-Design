import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text } from '@ui-kitten/components'
import { color, constant, theme } from '../../pages/utils'

const Address = () => {
    return (
        <View style={styles.container}>
            <View style={theme.flexStart}>
                <Icon name="compass-outline" fill={color.white} style={[styles.icon, theme.marginRight10]} />
                <Text status={"control"}>Send to</Text>
            </View>
            <View style={styles.addressContainer}>
                <Text status={"control"} style={styles.textAddress} numberOfLines={1}>Pamulang Barat Residence No.5, RT 05/ ...</Text>
                <Icon name="chevron-down-outline" fill={color.white} style={styles.icon} />
            </View>
        </View>
    )
}

export default Address

const styles = StyleSheet.create({
    icon: {
        height: 18,
        width: 18,
    },
    container: {
        marginTop: 10,
        marginBottom: 20,
        ...theme.flexStart,
        paddingHorizontal: constant.container
    },
    textAddress: {
        ...theme.fontSemiBold,
        width: Dimensions.get("screen").width - 170
    },
    addressContainer: {
        marginLeft: 10,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    }
})