import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}


export const DifficultCounting = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA=1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}

        </div>
        <div>
            Result for b: {resultB}

        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users were re-rendered')
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsRectMemo = () => {
    console.log('HELPS REACTMEMO')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Maga'])

    const NewArray = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime() ]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>+User</button>
        {count}
        <Users users={NewArray}/>
    </>
}



const BooksSecret = (props: { books: Array<string>, addBook: ()=>void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>+Book</button>
        {props.books.map((book, i) => <div>{book}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML'])

    const NewArray = useMemo(()=>{
        return books.filter(b=>b.toLowerCase().indexOf('a') > -1)
    }, [books])



    const memoizedAddBook = useMemo(()=>{
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])


    const memoizedAddBook2 = useCallback(()=>{
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {/*<button onClick={addBook}>+Book</button>*/}
        {count}
        <Book books={NewArray} addBook={memoizedAddBook2}/>
    </>
}