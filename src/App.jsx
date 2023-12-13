import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import combineReducers from "./components/reducer"
import Counter from "./components/counter"

const store = createStore(combineReducers)

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
