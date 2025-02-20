import {FiMoon, FiSun} from "react-icons/fi";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ItemContext} from "../../Context/ItemContext.js";

export const Header = () => {
    const {isDarkMode, setIsDarkMode} = useContext(ItemContext)
    return (
        <>
            {/*<header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">*/}
            {/*    <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"*/}
            {/*         aria-label="Global">*/}
            {/*        <div className="flex items-center justify-between">*/}
            {/*            <a className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"*/}
            {/*               href="#" aria-label="Brand">Brand</a>*/}
            {/*            <div className="sm:hidden">*/}
            {/*                <button type="button"*/}
            {/*                        className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"*/}
            {/*                        data-hs-collapse="#navbar-collapse-with-animation"*/}
            {/*                        aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">*/}
            {/*                    <svg className="hs-collapse-open:hidden flex-shrink-0 size-4"*/}
            {/*                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
            {/*                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
            {/*                         strokeLinejoin="round">*/}
            {/*                        <line x1="3" x2="21" y1="6" y2="6"/>*/}
            {/*                        <line x1="3" x2="21" y1="12" y2="12"/>*/}
            {/*                        <line x1="3" x2="21" y1="18" y2="18"/>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4"*/}
            {/*                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
            {/*                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
            {/*                         strokeLinejoin="round">*/}
            {/*                        <path d="M18 6 6 18"/>*/}
            {/*                        <path d="m6 6 12 12"/>*/}
            {/*                    </svg>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div id="navbar-collapse-with-animation"*/}
            {/*             className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">*/}
            {/*            <div*/}
            {/*                className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">*/}
            {/*                <a className="font-medium text-white focus:outline-none focus:ring-1 focus:ring-gray-600"*/}
            {/*                   href="#" aria-current="page">Landing</a>*/}
            {/*                <a className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"*/}
            {/*                   href="#">Account</a>*/}
            {/*                <a className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"*/}
            {/*                   href="#">Work</a>*/}
            {/*                <a className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"*/}
            {/*                   href="#">Blog</a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</header>*/}

            {/*<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">*/}
            {/*    <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">*/}
            {/*        <div className="flex items-center justify-between">*/}
            {/*            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>*/}
            {/*            <div className="md:hidden">*/}
            {/*                <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">*/}
            {/*                    <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>*/}
            {/*                    <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">*/}
            {/*            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">*/}
            {/*                <a className="font-medium text-blue-600 md:py-6 dark:text-blue-500" href="#" aria-current="page">Landing</a>*/}
            {/*                <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Account</a>*/}
            {/*                <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Work</a>*/}
            {/*                <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Blog</a>*/}

            {/*                <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">*/}
            {/*                    <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">*/}
            {/*                        Dropdown*/}
            {/*                        <svg className="ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>*/}
            {/*                    </button>*/}

            {/*                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full md:border before:-top-5 before:start-0 before:w-full before:h-5">*/}
            {/*                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">*/}
            {/*                            About*/}
            {/*                        </a>*/}
            {/*                        <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">*/}
            {/*                            <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">*/}
            {/*                                Sub Menu*/}
            {/*                                <svg className="md:-rotate-90 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>*/}
            {/*                            </button>*/}

            {/*                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">*/}
            {/*                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">*/}
            {/*                                    About*/}
            {/*                                </a>*/}
            {/*                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">*/}
            {/*                                    Downloads*/}
            {/*                                </a>*/}
            {/*                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">*/}
            {/*                                    Team Account*/}
            {/*                                </a>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">*/}
            {/*                            Downloads*/}
            {/*                        </a>*/}
            {/*                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">*/}
            {/*                            Team Account*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">*/}
            {/*                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>*/}
            {/*                    Log in*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</header>*/}

            <header
                className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-slate-900 rounded-2xl">
                <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="flex items-center justify-between">
                            {/*<a className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"*/}
                            {/*   href="#" aria-label="Brand">Brand</a>*/}
                            <div className={'flex items-center justify-center space-x-3'}>
                                <Link to={'/'} className="flex-none text-xl font-semibold dark:text-white"
                                      aria-label="Brand">Stock</Link>
                                <button onClick={() => setIsDarkMode(!isDarkMode)}
                                        className="dark:hover:text-indigo-300 hover:text-indigo-600 dark:text-white font-bold py-2 px-4 rounded shadow-sm text-xl">
                                    {isDarkMode ? <FiSun/> : <FiMoon/>}
                                </button>
                            </div>
                            <div className="md:hidden">
                                <button type="button"
                                        className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        data-hs-collapse="#navbar-collapse-with-animation"
                                        aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                    <svg className="hs-collapse-open:hidden flex-shrink-0 size-4"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <line x1="3" x2="21" y1="6" y2="6"/>
                                        <line x1="3" x2="21" y1="12" y2="12"/>
                                        <line x1="3" x2="21" y1="18" y2="18"/>
                                    </svg>
                                    <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div id="navbar-collapse-with-animation"
                             className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                            <div
                                className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                                <div
                                    className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                                    <a className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                       href="#" aria-current="page">Landing</a>

                                    <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                       href="#">
                                        Company
                                    </a>

                                    <div
                                        className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                                        <button type="button"
                                                className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Resources
                                            <svg className="flex-shrink-0 ms-2 size-4"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </button>

                                        <div
                                            className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                                            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                <div className="flex flex-col mx-1 md:mx-0">
                                                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-5 mt-1"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                                        </svg>
                                                        <div className="grow">
                                                            <p className="font-medium text-gray-800 dark:text-gray-200">Support
                                                                Docs</p>
                                                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Explore
                                                                advice and explanations for all of
                                                                features.</p>
                                                        </div>
                                                    </a>

                                                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-5 mt-1"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <rect width="7" height="7" x="14" y="3" rx="1"/>
                                                            <path
                                                                d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/>
                                                        </svg>
                                                        <div className="grow">
                                                            <p className="font-medium text-gray-800 dark:text-gray-200">Integrations</p>
                                                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Discover
                                                                the huge range of tools that Preline integrates
                                                                with.</p>
                                                        </div>
                                                    </a>

                                                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-5 mt-1"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path d="m7 11 2-2-2-2"/>
                                                            <path d="M11 13h4"/>
                                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                                        </svg>
                                                        <div className="grow">
                                                            <p className="font-medium text-gray-800 dark:text-gray-200">API
                                                                Reference</p>
                                                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Build
                                                                custom integrations with our first-class API.</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="flex flex-col mx-1 md:mx-0">
                                                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-5 mt-1"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="10"/>
                                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                                            <path d="M12 17h.01"/>
                                                        </svg>
                                                        <div className="grow">
                                                            <p className="font-medium text-gray-800 dark:text-gray-200">Help
                                                                Center</p>
                                                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn
                                                                how to install, set up, and use Preline.</p>
                                                        </div>
                                                    </a>

                                                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-5 mt-1"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="4"/>
                                                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
                                                        </svg>
                                                        <div className="grow">
                                                            <p className="font-medium text-gray-800 dark:text-gray-200">Developer
                                                                Hub</p>
                                                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn
                                                                how to integrate or build on top of Preline.</p>
                                                        </div>
                                                    </a>

                                                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-5 mt-1"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                            <circle cx="9" cy="7" r="4"/>
                                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                        </svg>
                                                        <div className="grow">
                                                            <p className="font-medium text-gray-800 dark:text-gray-200">Community
                                                                Forum</p>
                                                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn,
                                                                share, and connect with other Preline users.</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                                                    <span
                                                        className="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">Customer stories</span>

                                                    <a className="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-slate-500/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600"
                                                       href="#">
                                                        <img className="size-32 rounded-lg"
                                                             src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                                                             alt="Image Description"/>
                                                        <div className="grow">
                                                            <p className="text-sm text-gray-800 dark:text-slate-400">
                                                                Preline Projects has proved to be most efficient
                                                                cloud based project tracking and bug tracking tool.
                                                            </p>
                                                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                                                Learn more
                                                                <svg
                                                                    className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="m9 18 6-6-6-6"/>
                                                                </svg>
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                       href="#">
                                        Join us <span
                                        className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">4</span>
                                    </a>

                                    <div className="pt-3 md:pt-0">
                                        <button type="button"
                                                className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                data-hs-overlay="#hs-modal-signin">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                                <circle cx="12" cy="7" r="4"/>
                                            </svg>
                                            Log in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/*sign in model*/}
            <div id="hs-modal-signin"
                 className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
                <div
                    className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div
                        className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">Sign in</h2>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Don't have an account yet?
                                    <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                       href="../examples/html/modal-signup.html">
                                        Sign up here
                                    </a>
                                </p>
                            </div>

                            <div className="mt-5">
                                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                   href="#">
                                    <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                        <path
                                            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                            fill="#4285F4"/>
                                        <path
                                            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                            fill="#34A853"/>
                                        <path
                                            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                            fill="#FBBC05"/>
                                        <path
                                            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                            fill="#EB4335"/>
                                    </svg>
                                    Sign in with Google
                                </a>

                                <div
                                    className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or
                                </div>

                                {/*// <!-- Form -->*/}
                                <form>
                                    <div className="grid gap-y-4">
                                        {/*// <!-- Form Group -->*/}
                                        <div>
                                            <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email
                                                address</label>
                                            <div className="relative">
                                                <input type="email" id="email" name="email"
                                                       className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                       required aria-describedby="email-error"/>
                                                <div
                                                    className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                    <svg className="size-5 text-red-500" width="16" height="16"
                                                         fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please
                                                include a valid email address so we can get back to you</p>
                                        </div>
                                        {/*// <!-- End Form Group -->*/}

                                        {/*// <!-- Form Group -->*/}
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <label htmlFor="password"
                                                       className="block text-sm mb-2 dark:text-white">Password</label>
                                                <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                   href="../examples/html/modal-recover-account.html">Forgot
                                                    password?</a>
                                            </div>
                                            <div className="relative">
                                                <input type="password" id="password" name="password"
                                                       className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                       required aria-describedby="password-error"/>
                                                <div
                                                    className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                    <svg className="size-5 text-red-500" width="16" height="16"
                                                         fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+
                                                characters required</p>
                                        </div>
                                        {/*// <!-- End Form Group -->*/}

                                        {/*// <!-- Checkbox -->*/}
                                        <div className="flex items-center">
                                            <div className="flex">
                                                <input id="remember-me" name="remember-me" type="checkbox"
                                                       className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                            </div>
                                            <div className="ms-3">
                                                <label htmlFor="remember-me" className="text-sm dark:text-white">Remember
                                                    me</label>
                                            </div>
                                        </div>
                                        {/*// <!-- End Checkbox -->*/}

                                        <button type="submit"
                                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign
                                            in
                                        </button>
                                    </div>
                                </form>
                                {/*// <!-- End Form -->*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}