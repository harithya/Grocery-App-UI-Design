import { ScrollView, StyleSheet, Keyboard, } from 'react-native'
import React, { FC, useState, useEffect } from 'react'

interface Props {

}
const FormContent: FC<Props> = (props) => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => setIsKeyboardOpen(true))
        Keyboard.addListener("keyboardDidHide", () => setIsKeyboardOpen(false))
    }, [isKeyboardOpen])
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
            {props.children}
        </ScrollView>
    )
}

export default FormContent

const styles = StyleSheet.create({})