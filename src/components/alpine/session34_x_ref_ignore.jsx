const Session34 = () => {
    return (
        <>
            <div className="" x-data="{message: 'hello'}">
                {/*ignore from begin rendered as alpine component */}
                <div x-ignore>
                    {/* <button x-on:click="message='bye'">change</button> */}
                    <p x-text="message"></p>
                </div>
            </div>
            {/* focus input when clicked */}
            <div className="" x-data>
                <input type="text" x-ref="input" placeholder="Enter name ..."/>
                <button x-on:click="$refs.input.focus()">focus</button>
                <p x-ref="text">lorem10</p>
                <button x-on:click="$refs.text.remove()">remove</button>
            </div>
        </>
    );
};

export default Session34;
