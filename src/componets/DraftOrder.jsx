const DraftOrder = ({ names }) => {
  return (
    <div>
      <h2>Draft Order</h2>
      <ol>
        {names.map((name, index)=> (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  )
}

export default DraftOrder;