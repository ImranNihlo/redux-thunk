export const loadTodo = () => {
    return (dispatch) => {
        dispatch({type: "start"})

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "load",
                    payload: json
                })
            })
    }
}

export const removeCard = (id) => {
    return (dispatch) => {
        dispatch({type: "deleting", payload: id});

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "delete",
                    payload: id
                })
            })
    }
}

export const checkTodo = (id, completed) => {
    return (dispatch) => {
        dispatch({type: "checking", payload: id});

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
                    type: "check",
                    payload: id
                })
            })
    }
}