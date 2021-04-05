export const loadTodo = () => {
    return (dispatch) => {
        dispatch({type: "todos/load/start"});

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "todos/load/success",
                    payload: json
                })
            })
    }
}

export const removeCard = (id) => {
    return (dispatch) => {
        dispatch({type: "todos/remove/start", payload: id});

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "todos/remove/success",
                    payload: id
                })
            })
    }
}

export const checkTodo = (id, completed) => {
    return (dispatch) => {
        dispatch({type: "todos/check/start", payload: id});

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "PATCH",
            body: JSON.stringify({ completed: !completed}),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "todos/check/success",
                    payload: id
                })
            })
    }
}

export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: "users/load/start"});

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "users/load/success",
                    payload: json
                })
            })
    }
}