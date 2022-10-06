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
        const interval = setInterval(()=>{
            console.log('tick' + counter)
            setCounter(state=>state+1)
        }, 1000)

        return ()=>{clearInterval(interval)}

    },[])



    return <div>
        Hello , counter: { counter } - fake: {fake}
        {/*<button onClick={()=>setFake(fake+1)}>Fake +</button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}> Count +</button>*/}
    </div>

}



export const ResetEffect = () => {

    const [counter, setCounter] = useState<number>(1)
    console.log('Component rendered' + counter)

    useEffect(()=>{
        console.log('Effect occurred'+ counter)

        return ()=>{
            console.log('RESET EFFECT'+ counter)
        }
    }, [counter])

    const increase = ()=>{setCounter(counter + 1 )}

    return <div>
        Hello, counter: {counter} <button onClick={increase}>+</button>
    </div>

}





export const KeysTrackerExample = () => {

    const [text, setText] = useState<string>('')
    console.log('Component rendered' + text)

    const handler = (e: KeyboardEvent)=>{
        console.log(e.key)
        setText(text + e.key)
    }

    useEffect(()=>{
    window.addEventListener('keypress', handler)

        return ()=>{
            window.removeEventListener('keypress', handler)
        }

    }, [text])



    return <div>
        Typed text: {text}

    </div>

}