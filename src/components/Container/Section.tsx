import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Icon, Text } from '@ui-kitten/components'
import { color, constant, theme } from '../../pages/utils'

interface Props {
    title: string,
    withMore?: boolean
}
const Section: FC<Props> = (props) => {
    return (
        <View style={styles.section}>
            <View style={styles.container}>
                <Text category={"h6"}>{props.title}</Text>
                {props.withMore && <View style={theme.flexStart}>
                    <Text status={"primary"} style={theme.fontSemiBold}>See more</Text>
                    <Icon name='arrow-ios-forward-outline' fill={color.primary} style={styles.icon} />
                </View>}
            </View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        marginTop: 30,
    },
    container: {
        paddingHorizontal: constant.container,
        ...theme.flexBetween,
        marginBottom: 20,
        alignItems: "center"
    },
    icon: {
        height: 20,
        width: 20,
    },
})
export default Section