import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { color, theme } from '../../pages/utils'
import { Icon, Text } from '@ui-kitten/components'

interface Props {
    label?: string,
    placeholder?: string,
    onChangeText?: () => void,
    leftIcon?: string,
    rightIcon?: string,
    style?: StyleProp<ViewStyle>,
    containerStyle?: StyleProp<ViewStyle>,
}
const Input: FC<Props> = (props) => {
    return (
        <View style={[theme.input, props.containerStyle]}>
            {(props.label) && <Text category={'label'} style={styles.label}>{props.label}</Text>}
            <View style={[styles.formInput, props.style]}>
                <View style={styles.content}>
                    {props.leftIcon &&
                        <Icon fill={color.gray4} name={props.leftIcon} style={[styles.icon, styles.iconLeft]} />}
                    <TextInput
                        style={styles.input}
                        placeholder={props.placeholder}
                    />
                </View>
                {props.rightIcon &&
                    <Icon fill={color.gray4} name={props.rightIcon} style={styles.icon} />}
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    formInput: {
        backgroundColor: color.gray6,
        paddingHorizontal: 13,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 3,
    },
    label: {
        marginBottom: 5,
        color: color.font
    },
    input: {
        ...theme.fontRegular,
        flex: 1,
    },
    icon: {
        height: 20,
        width: 20,
    },
    iconLeft: {
        marginRight: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: "center",
        flex: 1,
    }
})