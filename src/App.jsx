import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Session32 from "./components/alpine/session_32_x_model.jsx";
import Session33 from './components/alpine/session33_x_effect.jsx';
import Session34 from './components/alpine/session34_x_ref_ignore.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* <Session32/> */}
            {/* <Session33 /> */}
            <Session34 />
            <div>

                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
