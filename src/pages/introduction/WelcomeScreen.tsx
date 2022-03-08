import { View, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import { Container, Logo } from '../../components'
import { color, theme } from '../utils'
import { Button, Text } from '@ui-kitten/components'
import { PageProps } from '../types'

const WelcomeScreen: FC<PageProps> = (props) => {
    const handleNavigation = () => props.navigation.navigate("Auth")
    return (
        <Container style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo />
                <Image source={require('../../assets/img/welcome.png')} style={styles.img} />
                <Text status={'control'} style={styles.title}>Kangsayur is a solution for <Text status={'control'} style={[styles.title, styles.bold]}>Grocery Shopping </Text>
                    every you need</Text>
            </View>
            <View style={theme.footer}>
                <Button status={'basic'} onPress={handleNavigation}>Get Started</Button>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primary
    },
    logoContainer: {
        marginTop: 36,
        alignItems: 'center',
        marginBottom: 50,
    },
    img: {
        height: 290,
        marginTop: 49,
        marginBottom: 68,
        resizeMode: 'contain'
    },
    title: {
        lineHeight: 28,
        ...theme.fontRegular,
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 25
    },
    bold: {
        ...theme.fontSemiBold
    },
})
export default WelcomeScreen