import {useState} from "react";
import PropTypes from "prop-types";

const Counter = ({count, increaseCount, decreaseCount, resetCount}) => {
    const e = <img src={''} alt={'test image'}/>
    const user = 'test';
    const users = [
        {
            'id': '1',
            'name': 'test'
        },
        {
            'id': '2',
            'name': 'test 2'
        }
    ]
    const style = {
        color: 'blue',
        backgroundColor: 'gray'
    }
    const changeType = () => {
        setType('sending')
    }
    const [type, setType] = useState('pending')
    return (
        <>
            <div className={'flex space-x-3'}>
                <button onClick={increaseCount}>increaseCount</button>
                <button style={{backgroundColor: count < 1 ? 'red' : 'green', padding: '1rem'}} disabled={count < 1}
                        onClick={decreaseCount}>decreaseCount
                </button>
                <button onClick={resetCount}>resetCount</button>
            </div>
            {user ? e : null}
            {users.map(user => <h1 key={user.id}>{user.name}</h1>)}
            counter : {Math.floor(Math.random() * 1000)}
            <p style={style}>func prop : {count}</p>
            <p className={'test-class'}>type state : {type}</p>
            <button onClick={changeType}>change type</button>
            <p style={{color: count > 0 ? 'red' : 'blue'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam atque cum dolore, doloremque illo incidunt iste laudantium magnam quae quasi quidem quo repellat
                sed, sequi sunt suscipit, tempora tenetur voluptatum.</p>
        </>
    )
}

export default Counter

Counter.defaultProps = {
    count: 11111,
}

Counter.propTypes = {
    count: PropTypes.number
}