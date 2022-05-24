import React,{useRef} from 'react'
import {Button, Input} from '@mantine/core'

function AddPeople({setList}) {
  const nameInputRef = useRef()
  const aboutInputRef = useRef()
  const handleClick = async () => {
    const name = nameInputRef.current.value
    const about = aboutInputRef.current.value
    const didItwork = await fetch('http://localhost:3000/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
       })
    })
    const yes = await didItwork.json()
    console.log('yes', yes)
    if(yes.name && yes.about) {
      setList(prevList => [...prevList, {id:yes.id, name, about}])
      nameInputRef.current.value = ''
      aboutInputRef.current.value = ''
    }else{
      alert('Something went wrong, try again')
    }

  }
  return (
    <>
    <Button onClick={handleClick}>Add People</Button>
    <Input ref={nameInputRef} placeholder="enter name here" />
    <Input ref={aboutInputRef} placeholder="Enter a fun fact hear" />
    </>
  )
}

export default AddPeople