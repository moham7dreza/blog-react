import './App.css'
import {useState} from "react";
import {Header} from "./Components/Layouts/Header.jsx";
import {Footer} from "./Components/Layouts/Footer.jsx";
import {Stats} from "./Components/Stats.jsx";
import {HeroForm} from "./Components/HeroForm.jsx";
import {IconSection} from "./Components/IconSection.jsx";
import {Slider} from "./Components/Slider.jsx";
import {Reviews} from "./Components/Reviews.jsx";
import {Masonry} from "./Components/Masonry.jsx";

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
                <HeroForm/>
                <Masonry/>
                {/*<Gallery/>*/}
                <Slider/>
                <Reviews/>
                <IconSection/>
                <Stats/>
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
