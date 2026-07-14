import { useState } from "react"

export default function App() {
    const [friends, setFriends] = useState([]);
    const [text, setText] = useState('');
    return (
        <main className="bg-(--page-bg) h-screen p-4">
            <div className="m-auto bg-(--surface-bg) max-w-300 text-grey-900 gap-6 flex flex-col justify-start items-center p-6 rounded-lg">
                <AddFriendPane setFunction={setFriends} prev={friends} text={text} setText={setText} />
                <div className="bg-(--surface-muted-bg) w-full max-w-[80%] min-h-40 flex flex-col items-center rounded-2xl border border-(--accent-bg)/20">
                    <StatusPane friends={friends} />
                    <div className="flex flex-col w-fit p-4 gap-4 self-start">{
                        friends.map(friend => {
                            return <FriendList key={friend.id}
                                setFunction={setFriends}
                                friends={friends}
                                friendState={friend}
                                id={friend.id} />
                        })
                    }
                    </div>
                </div>
            </div>
        </main>
    )
}

function StatusPane({ friends }) {
    return (
        <div className="flex gap-6 items-start p-4 w-fit max-w-300 max-h-200">
            <span className="p-2 bg-(--primary-bg) text-(--primary-fg) rounded-lg px-4">
                {friends.length === 0 ? 'Total Friends- ' + 0 : 'Total Friends- ' + friends.length}</span>
            <span className="p-2 bg-(--accent-bg) text-(--accent-fg) rounded-lg px-4">
                {countClose(friends)}
            </span>
        </div>
    )
}

function AddFriendPane({ setFunction, prev, text, setText }) {
    return (
        <div className="flex gap-2 p-1">
            <input className="bg-(--secondary-bg) text-(--secondary-fg) border-t rounded-lg p-3"
                value={text}
                type="text"
                placeholder="Name- meaw?"
                onChange={(e) => { setText(e.target.value) }} />
            <button className="bg-(--primary-bg)/80 text-(--primary-fg) rounded py-1 px-4" onClick={() => addToList(setFunction, prev, setText, text)}>Add to List</button>
        </div>
    )
}

function FriendList({ friends, setFunction, friendState, id }) {
    return (
        <div className="flex justify-center items-center gap-4 bg-(--surface-bg) p-4 rounded-xl text-(--surface-fg)">
            <span className={`capitalize ${friendState.isClose ? 'text-(--accent-bg)' : ''}`}>{friendState.name}</span>
            <input className={`w-4 ,aspect-1/1 ${friendState.isClose ? 'accent-(--accent-bg)' : 'accent-cyan-300'}`} type="checkbox" id={`check${id}`} onChange={() => handleCheck(friends, setFunction, id)} />
            {friendState.isClose ? <label htmlFor={`check${id}`}>is Close</label> : <label htmlFor={`check${id}`}>Mark Close</label>}
            <button className="bg-(--danger-color) text-(--danger-fg) rounded-lg px-2 py-1 border-t" onClick={() => handleRemove(friends, id, setFunction)} >Remove</button>
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
    let updated = state.map(data => {
        if (data.id === id) {
            return { ...data, isClose: !data.isClose }
        } else {
            return data;
        }
    })
    setFunction(updated);
}

function handleRemove(list, id, setFunction) {
    const updated = list.filter(data => {
        if (id !== data.id) {
            return true;
        }
    })
    setFunction(updated)
}