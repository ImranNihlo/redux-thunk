import {useDispatch, useSelector} from "react-redux";
import {loadTodo} from "./actions";
import {useEffect} from "react";
import "./style.css"

function App() {

    const todos = useSelector(state => state.todos)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodo());
    }, []);

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
                                        <h3>
                                            {item.id}
                                        </h3>
                                        <div className="title">
                                            {item.title}
                                        </div>
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
