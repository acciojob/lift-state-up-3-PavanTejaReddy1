
function Child1({setSelectedOption}) {
    function handleSelection() {
        setSelectedOption("Option 1")
    }

  return (
    <div className='child1'>
      <h2>Child Component1</h2>
      <button onClick={handleSelection}>Option 1</button>
    </div>
  )
}

export default Child1
