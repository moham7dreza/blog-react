import './App.css'
import Counter from "./Components/Counter.jsx";
import TestClass from "./Components/TestClass.jsx";
import {useState} from "react";

const App = () => {
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if (count < 1) {
            alert('increase count')
            return
        }
        setCount(count - 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <>
            <Counter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} resetCount={resetCount}/>
            <TestClass count={undefined}/>
        </>
    );
}

export default App
