import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import Container from '../Container'
import { Icon, Text } from '@ui-kitten/components'
import { color, theme } from '../../pages/utils'

const AuthLayout: FC = (props) => {
    return (
        <Container>
            <View style={theme.content}>
                <TouchableOpacity>
                    <Icon name='arrow-ios-back-outline' fill={color.white} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text category={'h1'} status="control">Login</Text>
                <Image source={require('../../assets/img/login.png')} style={styles.img} />
            </View>
            {props.children}
        </Container>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    container: {
        ...theme.content,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    img: {
        height: 317,
        width: 158,
        resizeMode: "contain"
    }
})

export default AuthLayout