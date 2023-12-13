import React from "react"
import "./style.css"
import ReactDOM from "react-dom"
import { createStore } from "redux"

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1

    case "DECREMENT":
      return state - 1

    default:
      return state
  }
}

const store = createStore(counter)

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="container">
      <h1 className="counter">{value}</h1>
      <div className="button-grid">
        <button onClick={onIncrement}>Збільшити</button>
        <button onClick={onDecrement}>Зменшити</button>
      </div>
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById("root"),
  )
}

store.subscribe(render)
render()
