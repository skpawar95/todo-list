import { Provider } from "react-redux"
import store from './redux/store'
import Todo from "./components/Todo"
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import './App.css'



function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Todo />
      </PersistGate>
    </Provider>
  )
}

export default App
