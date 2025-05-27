import { useState } from 'react';
import NameInput from './componets/NameInput';
import DraftOrder from './componets/DraftOrder';

const App = () => {
  const [names, setNames] = useState([]);
  const [shuffledNames, setShuffledNames] = useState([]);

  const handleAddName = (name)=> {
    if (name && !names.includes(name)) {
      setNames([...names, name])
    }
  }

  const handleShuffle = ()=> {
  const array = [...names];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];   
  }
  setShuffledNames(array);
  }

  const handleClear = ()=> {
    setNames([])
    setShuffledNames([])
  }

  return (
    <section className='app'>
      <h1>Fantasy Draft Order</h1>
      <NameInput onAddName={handleAddName} />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* <button onClick={handleShuffle}>Shuffle Draft Order</button> */}
      {shuffledNames.length > 0 && <DraftOrder names={shuffledNames} />}
      <div>
        {names.length > 0 && <button onClick={handleShuffle}>Shuffle Draft Order</button>}
        {(names.length > 0 || shuffledNames.length > 0) && (
          <button style={{marginLeft: '1rem', backgroundColor: '#e74c3c'}} onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
    </section>
  )
}

export default App;