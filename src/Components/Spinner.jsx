import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

export const Spinner = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
        </>
    )
}