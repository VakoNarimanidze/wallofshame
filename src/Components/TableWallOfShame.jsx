import BodyWallOfShame from "./BodyWallOfShame";
import './WallOfShame.scss'


export default function TableWallOfShame({users,setUsersArray}) {
    return (
        <div className="TableContainer">
            <table>
                <thead>
                    <tr className="TableTr">
                        <th className="name">Name</th>
                        <th className="excuse">Excuse</th>
                        <th className="Count" >Count</th>
                        <th></th>
                    </tr>
                </thead>
                <BodyWallOfShame
                    users={users}
                    setUsersArray={setUsersArray}
                />
            </table>
        </div>
    );
};