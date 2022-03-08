import { View, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import { Container, Logo, SosialButton } from '../../components'
import { Button, Text } from '@ui-kitten/components'
import { color, theme } from '../utils'
import { PageProps } from '../types'

const AuthScreen: FC<PageProps> = (props) => {
    const toLogin = () => props.navigation.navigate("Login")
    return (
        <Container>
            <View style={styles.logoContainer}>
                <Logo />
                <Image source={require('../../assets/img/auth.png')} style={styles.img} />
            </View>
            <View style={theme.footer}>
                <Button onPress={toLogin} style={styles.marginBottom}>Login</Button>
                <Button appearance={"outline"}>Register</Button>
                <View style={styles.titleContainer}>
                    <Text appearance={'hint'} category='c1' style={styles.title}>Or login with</Text>
                </View>
                <SosialButton variant='google' />
                <SosialButton variant='facebook' />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 36,
        alignItems: 'center',
        marginBottom: 50,
    },
    img: {
        height: 239,
        resizeMode: "contain",
        marginTop: 52
    },
    marginBottom: {
        marginBottom: 18
    },
    titleContainer: {
        marginTop: 35,
        position: "relative",
        alignItems: "center",
        flexDirection: "column",
        borderBottomWidth: 0.8,
        borderColor: color.gray3,
        marginBottom: 35

    },
    title: {
        ...theme.fontRegular,
        position: "absolute",
        marginTop: -10,
        paddingHorizontal: 20,
        backgroundColor: color.white,
    }
})

export default AuthScreen