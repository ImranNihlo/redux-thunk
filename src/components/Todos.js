import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadTodo, loadUsers} from "../redux/actions";
import Todo from "./Todo";

function Todos(props) {

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const users = useSelector(state => state.users);
    const usersLoading = useSelector(state => state.usersLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodo());
        dispatch(loadUsers());
    }, []);

    return (
        <div className="row">
            {loading || usersLoading ? <div className="load">идет загрузка</div> : (
                todos.map(todo => {
                        return(<Todo key={todo.id} todo={todo} users={users}/>)
                    }
                ))}
        </div>
    );
}

export default Todos;