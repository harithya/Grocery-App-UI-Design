import { View, StyleSheet } from 'react-native'
import React, { FC, useEffect } from 'react'
import { PageProps } from '../types'
import { Container, Logo } from '../../components'
import { color, theme } from '../utils'

const SplashScreen: FC<PageProps> = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace("Welcome");
        }, 1500);
    }, [])

    return (
        <Container style={styles.container}>
            <View style={[theme.toCenter, theme.flex1]}>
                <Logo height={50} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primary
    }
})

export default SplashScreen