import { View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { FC } from 'react'
import Container from '../Container'
import { Icon, Text } from '@ui-kitten/components'
import { color, constant, theme } from '../../pages/utils'
import Background from '../Container/Background'

const AuthLayout: FC = (props) => {
    return (
        <Container disableBackground>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Background />
                <View style={styles.back}>
                    <TouchableOpacity>
                        <Icon name='arrow-ios-back-outline' fill={color.white} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text category={'h1'} status="control">Login</Text>
                    <Image source={require('../../assets/img/login.png')} style={styles.img} />
                </View>
                {props.children}
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -constant.container,
        paddingBottom: constant.container
    },
    icon: {
        height: 24,
        width: 24,
        position: "absolute",
        top: 20,
        left: 0,
    },
    body: {
        ...theme.content,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    img: {
        height: 317,
        width: 158,
        resizeMode: "contain"
    },
    back: {
        ...theme.content,
        position: "relative",
        marginBottom: constant.container
    }
})

export default AuthLayout