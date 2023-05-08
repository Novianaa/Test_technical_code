import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState()
  const [num, setNum] = useState()
  const arrNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const handleInput = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    // if (arrNum.some(e.target.value)) {
    //   alert('input harus number')
    // }

  }
  const handleSegitiga = (e) => {
    e.preventDefault()
  }
  console.log('first', input)
  return (
    <>
      <form className='wrapper-form'>
        <input type="text" id="num" onChange={handleInput} />
        <div className="wrapper-btn">
          <button onClick={handleSegitiga} > Generate Segitiga</button>
          <button> Generate Bilangan Ganjil</button>
          <button> Generate Bilangan Prima</button>

        </div>
      </form>
    </>
  );
}

export default App;
