import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../SearchBar'
import { color, constant, theme } from '../../pages/utils'
import { Icon } from '@ui-kitten/components'
import Address from './Address'

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar />
                <View style={styles.iconContainer}>
                    <Icon name='email-outline' fill={color.white} style={[styles.icon, theme.marginRight10]} />
                    <Icon name='bell-outline' fill={color.white} style={styles.icon} />
                </View>
            </View>
            <Address />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: constant.container
    },
    header: {
        alignItems: "center",
        marginTop: 14,
        flexDirection: "row",
    },
    icon: {
        height: 26,
        width: 26,
        // marginTop: -14
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
})
export default HomeHeader