import { View, Image } from "react-native"
import { ToDoList } from "../../components/ToDoList"
import { style } from './styles'

export function Home() {
    return (
        <View style={style.container}>
            <View style={style.containerImage}>
                <Image source={require('../../../assets/Logo.png')}/>
            </View>
            <ToDoList />
        </View>
    )
}