import { View, StyleSheet, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import SearchBar from '../SearchBar'
import { color, constant, theme } from '../../pages/utils'
import { Icon } from '@ui-kitten/components'
import { StyleProp } from 'react-native'

interface Props {
    style?: StyleProp<ViewStyle>,
    isActive?: boolean
}
const HomeHeader: FC<Props> = (props) => {
    const getColorIcon = () => props.isActive ? color.gray3 : color.white
    return (
        <View style={[styles.container, props.style, props.isActive && styles.active]}>
            <View style={styles.header}>
                <SearchBar style={props.isActive && styles.searchBarActive} />
                <View style={styles.iconContainer}>
                    <Icon name='email-outline' fill={getColorIcon()} style={[styles.icon, theme.marginRight10]} />
                    <Icon name='bell-outline' fill={getColorIcon()} style={styles.icon} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: constant.container,
        backgroundColor: color.background,
        paddingTop: 10,
        paddingBottom: 10,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
    },
    icon: {
        height: 26,
        width: 26,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    active: {
        backgroundColor: color.white,
        borderBottomWidth: 1,
        borderBottomColor: color.border
    },
    searchBarActive: {
        borderWidth: 1,
        borderColor: color.border
    }
})
export default HomeHeader