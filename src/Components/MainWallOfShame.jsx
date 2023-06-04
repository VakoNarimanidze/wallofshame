import { useState } from "react"
import TableWallOfShame from "./TableWallOfShame"
import "./WallOfShame.scss"


export default function MainWallOfShame({ users }) {
    const [name, setName] = useState('')
    const [excuse, setExcuse] = useState('')
    const [usersArray, SetUsersArray] = useState(users)
    

    function Click() {
        if (name.trim() !== '' && excuse.trim() !== '') {
            let id = usersArray.length;
            SetUsersArray((prev) => [...prev, {
                id: id++,
                name: name,
                excuse: excuse,
                count: 1,
                
            }
            ])
            setName('')
            setExcuse('')
        }
    }

    return (
        <div className="MainWallOfShameContainer">
            <div className="flex">
                <div>
                <h1>Wall Of Shame</h1>
                <h5>{usersArray.length } members</h5>
            </div>
            <div className="inputs">
                <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} value={name} />
                <input className="SecondInput" type="text" placeholder="Excuse" onChange={(event) => setExcuse(event.target.value)} value={excuse} />
                <button onClick={Click}>Create</button>
            </div>
            </div>
            <TableWallOfShame
                users={usersArray}
                setUsersArray={SetUsersArray}
            />
        </div>
    )
}