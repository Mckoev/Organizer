import './tasks.css'
import List from '../../components/tasks/List'
import {LISTS_NAMES, TITLES} from '../../components/tasks/initialData'
import {
    shoppingList,
    todoList,
    longtermTasks
} from '../../components/tasks/initialData'
import {initLongtermTasks, initShopList, initTodoList} from "../../mock/mock";

function Tasks() {
    return (
        <div className="page page-tasks">
            <div className="bg"></div>
            <div className="overlay"></div>
            <div className="wrapper">
                <List name={LISTS_NAMES.shoppingList} initialStandartValue={initShopList} store={shoppingList}
                      textTitle={TITLES.PURCHASE}/>
                <List name={LISTS_NAMES.todoList} initialStandartValue={initTodoList} store={todoList}
                      textTitle={TITLES.TODO}/>
                <List name={LISTS_NAMES.longtermTasks} initialStandartValue={initLongtermTasks} store={longtermTasks}
                      textTitle={TITLES.TASK}/>
            </div>
        </div>
    )
}

export default Tasks
