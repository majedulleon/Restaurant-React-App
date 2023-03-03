import { createStore } from "redux";
import { Reducer } from "./reducer";

let myStore = createStore(Reducer);

export default myStore;