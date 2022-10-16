import React, {useState} from "react";

export default {
    title: "React.memo"
}


const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Hello")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["123", "456", "789"])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={()=>setUsers(["" + new Date().getTime(), ...users])}>add user</button>
        <Counter count={count}/>
        <Users users={users}/>
    </>

}