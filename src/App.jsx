import './App.css'
import {useState} from "react";
import {Header} from "./Components/Layouts/Header.jsx";
import {Footer} from "./Components/Layouts/Footer.jsx";
import {Category} from "./Pages/Category.jsx";

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
            {/*// <!-- ========== HEADER ========== -->*/}
            <Header/>
            {/*// <!-- ========== END HEADER ========== -->*/}

            {/*// <!-- ========== MAIN CONTENT ========== -->*/}
            <main id="content" role="main">
                <Category/>
                {/*<HeroForm/>*/}
                {/*<Masonry/>*/}
                {/*/!*<Gallery/>*!/*/}
                {/*<Slider/>*/}
                {/*<Reviews/>*/}
                {/*<IconSection/>*/}
                {/*<Stats/>*/}
            </main>
            {/*// <!-- ========== END MAIN CONTENT ========== -->*/}

            {/*// <!-- ========== FOOTER ========== -->*/}
            <Footer/>
            {/*// <!-- ========== END FOOTER ========== -->*/}
            {/*<Counter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} resetCount={resetCount}/>*/}
            {/*<TestClass count={undefined}/>*/}
        </>
    );
}

export default App
