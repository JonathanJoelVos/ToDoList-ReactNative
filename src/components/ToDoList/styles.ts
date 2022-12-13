import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        width: 327,
    },
    containerInput: {
        flexDirection: "row",
        marginTop: -27
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: "#262626",
        marginRight: 4,
        padding: 16,
        color: "#F2F2F2",
        borderRadius: 6,
        borderStyle:"solid",
        borderWidth: 1,
        fontSize: 16,
        marginBottom: 32,
        fontFamily: "Inter_400Regular"
    },
    buttonAdd: {
        backgroundColor: "#1E6F9F",
        width: 52,
        height: 52,
        borderRadius: 6,
        justifyContent: "center",
        alignItems:"center",
    },
    textButtonAdd: {
        color: "#F2F2F2",
        fontSize: 24,
        fontWeight: "bold"
    },
    containerToDo: {
        width: '100%',
        height:'100%',
    }, 
    containerToDoCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#808080",
    },
    containerToDoTextNew: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: "#4EA8DE"
    }, 
    containerToDoTextConclude: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: "#8284FA",
    }, 
    containerListEmpty: {
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 48,
    },
    textListEmptyOne: {
        fontFamily: 'Inter_700Bold',
        marginTop: 16,
        fontSize: 14,
        color: "#808080"
    },
    textListEmptySecond: {
        fontFamily: "Inter_400Regular",
        fontSize: 14,
        color: "#808080"
    }
})