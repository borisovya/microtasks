import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const Counter = (props: { count: number }) => {
    return <div> {props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users were re-rendered')
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Maga'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime() ]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>Add User</button>
        <Counter count={count}/>
        <Users users={users}/>
    </>
}