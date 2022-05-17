import React from 'react';
import ReactLoading from "react-loading";
import {checkTodo, removeCard} from "../redux/actions";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

function Todo(props) {

    const dispatch = useDispatch();
    const user = props.users.find(item => item.id === props.todo.userId);

    const handleDelete = (id) => {
        dispatch(removeCard(id))
    };

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }

    return (
        <div className={props.todo.completed ? "card blue" : " card red"}>
            {props.todo.checking ? (
                <div className="spin">
                    <ReactLoading  color="black" type="spin" width={18} height={18}/>
                </div>
            ) : (
                <input type="checkbox"
                       checked={props.todo.completed}
                       onChange={() => handleCheck(props.todo.id, props.todo.completed)}

                />
            )}
            <h3>
                {props.todo.id}
            </h3>
            <div className="title">
                {props.todo.title}
            </div>
            <div className="name">
                директор - {user.name}
            </div>
            <button
                onClick={() => handleDelete(props.todo.id)}
                disabled={props.todo.deleting}
            >
                удалить
            </button>
        </div>
    );
}

Todo.propTypes = {
    checking: PropTypes.bool,
    completed: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    onclick: PropTypes.func,
    disabled: PropTypes.bool
}


export default Todo;