import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { AuthLayout, Input } from '../../components'
import { theme } from '../utils'
import { Button, Text } from '@ui-kitten/components'
import { PageProps } from '../types'

const LoginScreen: FC<PageProps> = (props) => {
    return (
        <AuthLayout>
            <View style={theme.container}>
                <Input
                    label='Email'
                    placeholder='yourmail@gmail.com'
                />
                <Input
                    label='Password'
                    rightIcon='eye-off-outline'
                    placeholder='your password'
                />
                <Text status={"primary"} appearance="hint" category={"label"} style={styles.textForgot}>Forgot Password</Text>
                <Button onPress={() => props.navigation.navigate("Home")}>Login</Button>
                <Text
                    category={"label"}
                    style={styles.textRegister}
                    status="primary">
                    Not have an account ? <Text status={"primary"} category={"label"}>Register</Text>
                </Text>
            </View>
        </AuthLayout>
    )
}

const styles = StyleSheet.create({
    textForgot: {
        textAlign: "right",
        marginTop: -10,
        marginBottom: 18
    },
    textRegister: {
        textAlign: "center",
        ...theme.fontRegular,
        marginTop: 18
    }
})

export default LoginScreen