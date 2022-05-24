import React, {useState, useEffect} from 'react'
import List from './List'
import AddPeople from './AddPeople'

function App() {
  const[list, setList] = useState([])
  useEffect(() => {
    getNames().then(data => setList(data))
  }, [])
  let counter = 0
  return (
    <>
      <h1>Ruby-React Test</h1>
      <AddPeople setList={setList} />
      {list.sort((a, b) => a.id - b.id).map((data) => <List key={counter++} data={data} order={counter} setList={setList} />)}

    </>
  )
}

const getNames = async () => {
  const res = await fetch('http://localhost:3000/people')
  const data = await res.json()
  console.log(data)
  return data
}
export default App