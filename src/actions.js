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