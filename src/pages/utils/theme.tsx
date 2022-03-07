import { StyleSheet } from "react-native";
import constant from "./constant";
import font from "./font";

const theme = StyleSheet.create({
    toCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: constant.container,
        flex: 1
    },
    content: {
        paddingHorizontal: constant.container,
        paddingVertical: constant.container,
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexCenterHorizontal: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    marginTop10: {
        marginTop: 10
    },
    marginTop5: {
        marginTop: 5
    },
    marginBottom10: {
        marginBottom: 10
    },
    marginBottom5: {
        marginBottom: 5
    },
    flex1: {
        flex: 1
    },
    input: {
        marginBottom: 20
    },
    toBottom: {
        position: 'absolute',
        right: constant.container,
        left: constant.container,
        bottom: constant.container
    },
    fontRegular: {
        fontFamily: font.regular
    },
    fontSemiBold: {
        fontFamily: font.semiBold,
    },
    fontBold: {
        fontFamily: font.bold
    },
    fontLight: {
        fontFamily: font.light
    },
    footer: {
        position: 'absolute',
        right: constant.container,
        left: constant.container,
        bottom: constant.container
    },
    borderRadiusNone: {
        borderRadius: 0
    },
    marginBottom0: {
        marginBottom: 0
    },
    textArea: {
        minHeight: 60,
        textAlignVertical: 'top'
    },
    relative: {
        position: 'relative'
    },
    textCenter: {
        textAlign: 'center'
    },
    logo: {
        height: 60,
        width: 140,
        resizeMode: 'contain',
    },
    actionSheet: {
        borderRadius: 0,
        height: 110
    }
})

export default theme;