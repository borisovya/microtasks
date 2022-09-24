import React, { useState} from "react";

export default {
    title: 'useState Demo',
}

function generateData() {
    console.log('Generating data in progress ...')
    return 1
}

export const UseStateExample = () => {
    console.log('useState ')

    // const initialData = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData) //useState может в качестве инит знчаения рез вызов функции использовтаь


    const changer = (state: number) => state + 1

    return <div>
        <button onClick={()=>setCounter(changer)}>+</button>
        {counter}
    </div>

}