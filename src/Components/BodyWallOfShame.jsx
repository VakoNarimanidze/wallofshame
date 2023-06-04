



 export default function BodyWallOfShame({users,setUsersArray}) {
   function Increase(id){
        setUsersArray((prev) =>
            prev.map((event) => {
                if (event.id === id) {
                    return { ...event, count: event.count + 1 };
                }
                return event;
            })
        );
    };

    return (
        <tbody>
            {users.map((event) => {
                return (
                    <tr className="bodyTr" key={event.id}>
                        <td>{event.name}</td>
                        <td>{event.excuse}</td>
                        <td>{event.count}</td>
                        <td>
                            <button onClick={() => Increase(event.id)}>
                                Increase
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};