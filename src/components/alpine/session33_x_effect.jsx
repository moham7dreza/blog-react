const Session33 = () => {
    return (
        <>
        {/* when element changed */}
            <div className="" x-data="{message: 'hello'}" x-effect="alert(message)">
                <button x-on:click="message='bye'">change</button>
                <p x-text="message"></p>
            </div >
            {/* when changed multiple 2 calc */}
            <div className="" x-data="{counter: 1, calc: 2}" x-effect="calc=counter*2">
                <button x-on:click="counter += 1">add</button>
                <p x-text="counter"></p>
                <p x-text="calc"></p>
            </div >
        </>
    )
}

export default Session33