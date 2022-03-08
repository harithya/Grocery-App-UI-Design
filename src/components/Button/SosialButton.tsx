import { Image, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Button, Text } from '@ui-kitten/components'
import { constant, theme } from '../../pages/utils'

interface Props {
    variant: "google" | "facebook"
}
const SosialButton: FC<Props> = ({ variant }) => {
    const variants = {
        google: {
            title: "Google",
            icon: require("../../assets/img/sosial/google.png")
        },
        facebook: {
            title: "Facebook",
            icon: require("../../assets/img/sosial/facebook.png")
        }
    }
    return (
        <Button
            style={(variant == "google") ? styles.google : styles.facebook}
            accessoryLeft={(eva) => <Image source={variants[variant].icon} style={styles.icon} />}
            size={"small"}>
            {(eva) => <Text appearance={"hint"} category="label" style={variant == "facebook" ? theme.textWhite : undefined}>{variants[variant].title}</Text>}
        </Button>
    )
}

export default SosialButton

const styles = StyleSheet.create({
    google: {
        borderColor: "#BDBDBD",
        backgroundColor: "white",
        marginBottom: 18
    },
    facebook: {
        marginBottom: 18,
        borderColor: "#2D9CDB",
        backgroundColor: "#2D9CDB"
    },
    icon: {
        position: "absolute",
        left: constant.container
    }
})