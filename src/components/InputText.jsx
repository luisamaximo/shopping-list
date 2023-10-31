import React, { useState } from 'react';

const InputText = (props) => {
    const {handleClick} = props;
    const [input, setInput] = useState('');
    
    return (
    <>
      <button onClick={() => {
        handleClick(input);
        setInput(''); 
      }}>
        add item
      </button>

      <input value={input} onChange={e => setInput(e.target.value)}/>
      </>
    )
  }

  export default InputText