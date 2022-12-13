import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: "#262626",
        padding: 12,
        minHeight: 64,
        alignItems:"center",
        borderRadius: 6,
        marginTop: 8,
        flexDirection: "row",
    },
    textTask: {
        fontFamily: "Inter_400Regular",
        fontSize: 14,
        width: 235
    },
    containerCheck: {
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 1000,
        marginRight: 8,
    },
    containerTrash: {
        marginLeft: 8
    },
    containerCheckTouch: {
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
    }
})