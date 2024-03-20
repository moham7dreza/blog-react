import './App.css'
import {useEffect, useState} from "react";
import {Header} from "./Components/Layouts/Header.jsx";
import {Footer} from "./Components/Layouts/Footer.jsx";
import {Item} from "./Pages/Item/Item.jsx";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {useFetch} from "./Hooks/useFetch.js";
import {ItemContext} from "./Context/ItemContext.js";

const App = () => {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [categories, setCategories] = useState({})
    const [menus, setMenus] = useState({})
    const [items, setItems] = useState({})
    const [posts, setPosts] = useState({})

    const [itemCategoriesResponse] = useFetch('http://127.0.0.1:8000/api/v1/items/categories/index')

    useEffect(() => {
        if (itemCategoriesResponse && itemCategoriesResponse.status === 'success') {
            // toast.success('categories fetched')
            setCategories(itemCategoriesResponse.data)
        }
        console.log(categories)
    }, [categories, itemCategoriesResponse]);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    }, [isDarkMode]);

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

    const itemContext = {
        count, setCount,
        loading, setLoading,
        isDarkMode, setIsDarkMode,
        categories, setCategories,
        menus, setMenus,
        items, setItems,
        posts, setPosts,
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>test</title>
                </Helmet>
                <ItemContext.Provider value={itemContext}>
                    <ToastContainer theme={isDarkMode ? 'dark' : 'light'} position={'top-left'} draggable/>

                    {/*// <!-- ========== HEADER ========== -->*/}
                    <Header/>
                    {/*// <!-- ========== END HEADER ========== -->*/}

                    {/*// <!-- ========== MAIN CONTENT ========== -->*/}
                    <main id="content" role="main">
                        <Routes>
                            <Route path={'/item'} element={<Item/>}/>
                        </Routes>
                        {/*<Item/>*/}
                        {/*<Post/>*/}
                        {/*<Category/>*/}
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
                </ItemContext.Provider>
            </HelmetProvider>
        </>
    );
}

export default App
