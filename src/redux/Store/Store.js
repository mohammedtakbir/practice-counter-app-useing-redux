import { createStore } from "redux";
import counterReducer from "../Reducer/CounterReducer";


const store = createStore(counterReducer);
export default store;