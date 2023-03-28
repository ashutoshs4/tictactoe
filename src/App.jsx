import { useState } from "react";

function App() {
  const [buttonValue, setButton] = useState([]);
  const [userValue1, setUserValue1] = useState([]);
  const [userValue2, setUserValue2] = useState([]);
  const [count, setCount] = useState(1);
  const [winCount, setWinCount] = useState(1);

  const winData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const onButtonClick = (getCardValue) => {
    if (buttonValue.includes(getCardValue)) {
      alert("Already Filled");
    } else {
      setButton([...buttonValue, getCardValue]);
      setCount(count + 1);
      console.log(count);
      if (count % 2 == 0) {
        setUserValue2([...userValue2, getCardValue]);
      } else {
        setUserValue1([...userValue1, getCardValue]);
      }
    }
  };

  function multipleInArray(arr, values) {
    return values.every((value) => {
      return arr.includes(value);
    });
  }

  if (
    multipleInArray(userValue1, winData[0]) ||
    multipleInArray(userValue1, winData[1]) ||
    multipleInArray(userValue1, winData[2]) ||
    multipleInArray(userValue1, winData[3]) ||
    multipleInArray(userValue1, winData[4]) ||
    multipleInArray(userValue1, winData[5]) ||
    multipleInArray(userValue1, winData[6]) ||
    multipleInArray(userValue1, winData[7])
  ) {
    alert("O Win");
  }

  if (
    multipleInArray(userValue2, winData[0]) ||
    multipleInArray(userValue2, winData[1]) ||
    multipleInArray(userValue2, winData[2]) ||
    multipleInArray(userValue2, winData[3]) ||
    multipleInArray(userValue2, winData[4]) ||
    multipleInArray(userValue2, winData[5]) ||
    multipleInArray(userValue2, winData[6]) ||
    multipleInArray(userValue2, winData[7])
  ) {
    alert("X Win");
  }

  multipleInArray(userValue1, winData[0]);
  multipleInArray(userValue1, winData[1]);
  multipleInArray(userValue1, winData[2]);
  multipleInArray(userValue1, winData[3]);
  multipleInArray(userValue1, winData[4]);
  multipleInArray(userValue1, winData[5]);
  multipleInArray(userValue1, winData[6]);
  multipleInArray(userValue1, winData[7]);

  multipleInArray(userValue2, winData[0]);
  multipleInArray(userValue2, winData[1]);
  multipleInArray(userValue2, winData[2]);
  multipleInArray(userValue2, winData[3]);
  multipleInArray(userValue2, winData[4]);
  multipleInArray(userValue2, winData[5]);
  multipleInArray(userValue2, winData[6]);
  multipleInArray(userValue2, winData[7]);

  return (
    <>
      <div
        className="d-flex  bg-secondary align-items-center justify-content-center"
        style={{
          height: "100vh",
        }}
      >
        <div className="">
          <button
            id="1"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(1)}
          >
            {userValue1.includes(1) ? "O" : null}
            {userValue2.includes(1) ? "X" : null}
          </button>
          <button
            id="2"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(2)}
          >
            {userValue1.includes(2) ? "O" : null}
            {userValue2.includes(2) ? "X" : null}
          </button>
          <button
            id="3"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(3)}
          >
            {userValue1.includes(3) ? "O" : null}
            {userValue2.includes(3) ? "X" : null}
          </button>
          <br />
          <button
            id="4"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(4)}
          >
            {userValue1.includes(4) ? "O" : null}
            {userValue2.includes(4) ? "X" : null}
          </button>
          <button
            id="5"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(5)}
          >
            {userValue1.includes(5) ? "O" : null}
            {userValue2.includes(5) ? "X" : null}
          </button>
          <button
            id="6"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(6)}
          >
            {userValue1.includes(6) ? "O" : null}
            {userValue2.includes(6) ? "X" : null}
          </button>
          <br />

          <button
            id="7"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(7)}
          >
            {userValue1.includes(7) ? "O" : null}
            {userValue2.includes(7) ? "X" : null}
          </button>
          <button
            id="8"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(8)}
          >
            {userValue1.includes(8) ? "O" : null}
            {userValue2.includes(8) ? "X" : null}
          </button>
          <button
            id="9"
            className="p-5 outline-none m-3"
            onClick={() => onButtonClick(9)}
          >
            {userValue1.includes(9) ? "O" : null}
            {userValue2.includes(9) ? "X" : null}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
