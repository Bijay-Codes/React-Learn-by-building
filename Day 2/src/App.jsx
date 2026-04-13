import { useState } from "react";
import './App.css';
export default App;

function App() {
    const [amount, setAmount] = useState('');
    const [people, setPeople] = useState('');
    return (
        <div className="Data-div">
            <Input val={amount} type={'number'} callback={(e) => handleChange(setAmount, e.target)} />
            <Input val={people} type={'number'} callback={(e) => handleChange(setPeople, e.target)} />
            <div className="split">{getSplit(amount, people)}</div>
            <ResetButton setAmt={setAmount} setPpl={setPeople} />
        </div>
    )
};

function Input({ val, type, callback }) {
    return (
        <input value={val} type={type} onChange={callback} />
    )
}
function ResetButton({ setAmt, setPpl }) {
    return (
        <button className="reset" onClick={() => {
            setAmt('');
            setPpl('');
        }
        }> Reset</button >
    );
}
function handleChange(setfunct, evnt) {
    setfunct(evnt.value);
}

function getSplit(amt, per) {
    if ((!amt || amt <= 0) || (!per || per <= 0)) {
        return 0;
    } else {
        return amt / per;
    }
}