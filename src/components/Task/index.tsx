import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import { style } from "../../components/Task/styles";

type TaksProps = {
    name: string;
    onCompleted: (check: boolean) => void;
    onRemoveTask: (check: boolean) => void;
}

export function Task({name, onCompleted, onRemoveTask}:TaksProps) {
    const [check, setCheck] = useState(false);

    const backgroundColorCheck = check ? "#5E60CE" : "transparent";
    const borderColorCheck = check ? "#5E60CE" : "#4EA8DE";
    const textDecorationLineTextCheck = check ? "line-through" : "none";
    const colorTextCheck = check ?  "#808080" : "#f2f2f2"

    function handleCheckClick() {
        onCompleted(!check)
        setCheck(prevState => !prevState);
    } 
    return (
        <View style={style.container}>
            <TouchableOpacity 
                onPress={handleCheckClick}
                style={style.containerCheckTouch}
            >
                <View style={[
                        {
                            backgroundColor: backgroundColorCheck,
                            borderColor: borderColorCheck
                        },
                        style.containerCheck]}>
                    {
                        check ? 
                        <Icon name="check" size={16} color="#F2F2F2" /> : null
                    }
                </View>
                <Text style={
                    [{
                        textDecorationLine: textDecorationLineTextCheck, textDecorationStyle: "solid", color: colorTextCheck},style.textTask
                    ]}
                >
                    {name}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => onRemoveTask(check)}
                style={style.containerTrash}
            >
                <Icon
                    name="trash-2" 
                    size={18}
                    color="#808080"
                />
            </TouchableOpacity>
        </View>
    )
}