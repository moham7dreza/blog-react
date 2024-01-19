const Session32 = () => {
    return(
        <>
            {/*text*/}
            <div className="bg-slate-300" x-data="{ message: '' }">
                <input type="text" x-model="message"/>
                <p x-text="message" className={'text-stone-500'}></p>
            </div>
            {/*checkbox*/}
            <div className="bg-slate-300" x-data="{ message: [] }">
                <input type="checkbox" x-model="message" value={'1'}/>
                <input type="checkbox" x-model="message" value={'2'}/>
                <input type="checkbox" x-model="message" value={'3'}/>
                <input type="checkbox" x-model="message" value={'4'}/>
                <p x-text="message" className={'text-stone-500'}></p>
            </div>
            {/*radio*/}
            <div className="bg-slate-300" x-data="{ message: '' }">
                <input type="radio" x-model="message" value={'1'}/>
                <input type="radio" x-model="message" value={'2'}/>
                <input type="radio" x-model="message" value={'3'}/>
                <input type="radio" x-model="message" value={'4'}/>
                <p x-text="message" className={'text-stone-500'}></p>
            </div>
            {/*select box*/}
            <div className="bg-slate-300" x-data="{ message: '' }">
                <select name="" id="" x-model={'message'}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <p x-text="message" className={'text-stone-500'}></p>
            </div>
            {/*validation with lazy*/}
            <div className="bg-slate-300" x-data="{ age: '' }">
                <label htmlFor="" className={'text-stone-500'}>age : </label>
                <input type="text" x-model="age"/>
                {/*<input type="text" x-model.number="age"/>*/}
                {/*check when focus out of input*/}
                {/*<input type="text" x-model.lazy="age"/>*/}
                {/*check with delay*/}
                {/*<input type="text" x-model.debounce.1000ms="age"/>*/}
                <p x-text='typeof age'></p>
                <p x-show="age < 18" className={'text-red-500'}>age not valid</p>
            </div>
        </>
    )
}

export default Session32