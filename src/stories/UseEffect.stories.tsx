import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect Demo',
}


export const UseEffectExample = () => {
    console.log('Example start')
    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1) //useState может в качестве инит знчаения рез вызов функции использовтаь

    useEffect(()=>{

        console.log('useEffect')
        document.title = counter.toString()
    },[counter])


    return <div>
        Hello , { counter } {fake}
        <button onClick={()=>setFake(fake+1)}>+</button>
    </div>

}

export const SetTimeOutExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1) //useState может в качестве инит знчаения рез вызов функции использовтаь


    useEffect(()=>{

        setInterval(()=>{
            console.log('tick' + counter)
            setCounter(state=>state+1)

        }, 1000)



    },[])




    return <div>
        Hello , counter: { counter } - fake: {fake}
        {/*<button onClick={()=>setFake(fake+1)}>Fake +</button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}> Count +</button>*/}


    </div>

}