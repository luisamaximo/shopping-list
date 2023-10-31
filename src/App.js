import React, {useState} from 'react';
import './App.css';
import InputText from './components/InputText';
import ListDisplay from './components/ListDisplay';


function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <InputText handleClick={(item) => {
        setItems(items.concat(item))
      }}/>
      <ListDisplay items={items}/>
    </div>
  );
}

export default App;
