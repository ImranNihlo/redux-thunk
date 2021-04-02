import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkTodo, loadTodo, removeCard} from "./actions";
import ReactLoading from 'react-loading';


function App() {

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodo());
    }, []);

    const handleDelete = (id) => {
        dispatch(removeCard(id))
    };

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }



    return (
        <div>
            <div className="container">
                <div>
                    <h1><u>График лицензирования организаций</u></h1>
                    <div className="main-line">
                        <h3>не прошли лицензирование -</h3>
                        <div className="line-red"></div>
                    </div>
                    <div className="main-line">
                        <h3>прошли лицензирование -</h3>
                        <div className="line-blue"></div>
                    </div>
                </div>
                <div className="row">
                    {loading ? <div className="load">идет загрузка</div> : (
                        todos.map(item => {
                                return(
                                    <div className={item.completed ? "card blue" : " card red"}>
                                        {item.checking ? (
                                            <div className="spin">
                                                <ReactLoading  color="black" type="spin" width={18} height={18}/>
                                            </div>
                                        ) : (
                                            <input type="checkbox"
                                                   checked={item.completed}
                                                   onChange={() => handleCheck(item.id, item.completed)}

                                            />
                                        )}
                                        <h3>
                                            {item.id}
                                        </h3>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            disabled={item.deleting}
                                        >
                                            удалить
                                        </button>
                                    </div>
                                )
                            }

                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
