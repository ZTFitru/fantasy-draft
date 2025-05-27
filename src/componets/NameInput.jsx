import { useState } from 'react';

const NameInput = ({ onAddName }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault()
    onAddName(name.trim())
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default NameInput;