import React, {useMemo, useState} from "react"

export default {
    title: "useMemo"
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState(2)
    const [b, setB] = useState(2)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResult = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                const fakeValue = Math.random();
                fake++;
            }
            tempResult *= i;
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input onChange={(e)=>setB(+e.currentTarget.value)}/>
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
        console.log("Users")
        return <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    }
    const Users = React.memo(UsersSecret)


    export const HelpsToReactMemo = () => {
        console.log("HelpsMemo")
        const [count, setCount] = useState(0)
        const [users, setUsers] = useState(["Tamara", "Pafnutiy", "Egor"])

        const newArray = useMemo(() =>{
            return users.filter(el => el.includes("a"))
        }, [users])

        return <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={()=>setUsers(["Sveta" + new Date().getTime(), ...users])}>add user</button>
            {count}
            <Users users={newArray}/>
        </>

    }