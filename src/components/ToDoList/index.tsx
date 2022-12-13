import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "../../components/ToDoList/styles";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";
import { Task } from "../Task";

interface TaskContainer {
    id: number;
    task: string;
}

export function ToDoList(){
    const [toDoList, setToDoList] = useState<TaskContainer[]>([]);
    const [colorFocusInput, setColorFocusInput] = useState<"#0D0D0D" | "#8284FA">("#0D0D0D")
    const [valorInput, setValorInput] = useState('')
    const [completedCount, setCompletedCount] = useState(0)
    const [countNew, setCountNew] = useState(0);

    function handleAddCountNew() {
        const idTask = toDoList.length + 1
        if(valorInput.length > 0) {
            setCountNew(prevState => prevState + 1)
            setToDoList(prevState => [...prevState, {
                id: idTask,
                task: valorInput
            }])
            setValorInput('')
        }
    }

    function handleCompleted(check: boolean) {
        if(check) {
            setCompletedCount(prevState => prevState + 1)
        } else if(!check){
            setCompletedCount(prevState => prevState - 1)
        } 
    }

    function handleRemoveTask(id: number, check: boolean) {
        setToDoList(prevState => prevState.filter(task => task.id !== id))
        setCountNew(prevState => prevState - 1)
        if(completedCount > 0 && check) {
            setCompletedCount(prevState => prevState - 1)
        }
    }

    function customOnFocus() {
        setColorFocusInput("#8284FA")
    }
    function customOnBlur() {
        setColorFocusInput("#0D0D0D")
    } 

    return (
        <View style={style.container}>
            <View style={style.containerInput}>
                <TextInput
                    style={[{borderColor: colorFocusInput,},style.input]} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setValorInput}
                    value={valorInput}
                    onFocus={customOnFocus}
                    onBlur={customOnBlur}
                />
                <TouchableOpacity 
                    style={style.buttonAdd}
                    onPress={handleAddCountNew}
                >
                    <Icon 
                        name="plus-circle" 
                        color="#fff" 
                        size={16}
                    />
                </TouchableOpacity>
            </View>
            <View style={style.containerToDo}>
                <View style={style.containerToDoCount}>
                    <Text style={style.containerToDoTextNew}>
                        Criadas {countNew}
                    </Text>
                    <Text style={style.containerToDoTextConclude}>
                        Concluidas {completedCount}
                    </Text>
                </View>
                <FlatList
                    data={toDoList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <Task 
                            onRemoveTask={(check) => handleRemoveTask(item.id, check)}
                            onCompleted={(check) => handleCompleted(check)} 
                            key={item.id} 
                            name={item.task}
                        />
                    )}
                    showsVerticalScrollIndicator = {false}
                    ListEmptyComponent = {
                        () => ( <View style={style.containerListEmpty}>
                            <Icon name="file-text" size={56} color="#626161"/>
                            <Text style={style.textListEmptyOne}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={style.textListEmptySecond}>
                                Crie tarefas e organize seus itens a fazer

                            </Text>
                        </View>
                        )
                    }
                />
            </View>
        </View>
    )
}