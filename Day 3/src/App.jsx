import { useState } from "react"

export default function App() {
    const [friends, setFriends] = useState([]);
    const [text, setText] = useState('');
    return (
        <div className="m-auto bg-green-200 w-1/2 aspect-square text-grey-900 flex flex-col justify-center items-center p-4 rounded-lg">
            <StatusPane friends={friends} />
            <AddFriendPane setFunction={setFriends} prev={friends} text={text} setText={setText} />
            {
                friends.map((friend, i) => {
                    return <FriendList key={friend.id} setFunction={setFriends} friends={friends} friendState={friend} id={i} />
                })
            }
        </div>
    )
}

function StatusPane({ friends }) {
    return (
        <div className="bg-green-400 m-4 flex flex-row gap-4 whitespace-nowrap rounded">
            <span className="total">{friends.length === 0 ? 'Total Friends- ' + 0 : 'Total Friends- ' + friends.length}</span>
            <span className="close">{countClose(friends)}</span>
        </div>
    )
}

function AddFriendPane({ setFunction, prev, text, setText }) {
    return (
        <div className="flex gap-2 p-1">
            <input className="bg-green-300 border-t-1 rounded-lg"value={text} type="text" placeholder="Name-" onChange={(e) => { setText(e.target.value) }} />
            <button className="bg-blue-100 rounded-full py-1 px-4" onClick={() => addToList(setFunction, prev, setText, text)}>Add to List</button>
        </div>
    )
}

function FriendList({ friends, setFunction, friendState, id }) {
    return (
        <div className="flex justify-center items-center gap-2">
            <span className="text-blue-600 capitalize ">{friendState.name}</span>
            <input type="checkbox" id={`check${id}`} onChange={() => handleCheck(friends, setFunction, id)} />
            {friendState.isClose ? '' : <label className="text-blue-500" htmlFor={`check${id}`}>Mark as Close Friend</label>}
            <button className="bg-red-300 rounded-lg px-2 py-1 border-t-1" onClick={() => handleRemove(friends, id, setFunction)} >Remove</button>
        </div >
    )
}

function addToList(setFunction, prev, setText, text) {
    if (!(text.trim())) {
        setText('');
        return;
    }
    let textObject = {
        id: crypto.randomUUID(),
        name: text,
        isClose: false
    };
    let updated = [textObject, ...prev];
    setFunction(updated);
    setText('');
}

function countClose(list) {
    if (list.length === 0) {
        return 'Close Friends- ' + 0;
    }
    let count = 0;
    list.forEach((friend) => {
        friend.isClose ? count++ : '';
    })
    return 'Close Friends- ' + count;
}

function handleCheck(state, setFunction, id) {
    let updated = state.map((data, i) => {
        if (i === id) {
            return { ...data, isClose: !data.isClose }
        } else {
            return data;
        }
    })
    setFunction(updated);
}

function handleRemove(list, index, setFunction) {
    const updated = list.filter((data, i) => {
        if (index !== i) {
            return true;
        }
    })
    setFunction(updated)
}