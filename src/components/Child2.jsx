
function Child2({setSelectedOption}) {
    function handleSelection() {
        setSelectedOption("Option 2")
    }

  return (
    <div className='child2'>
        <h2>Child Component 2</h2>
        <button onClick={handleSelection}>Option 2</button>
    </div>
  )
}

export default Child2

