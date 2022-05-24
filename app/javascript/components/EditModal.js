import React, { useState, useRef } from "react";
import { Modal, Button, Group, Input } from "@mantine/core";

function EditModal({ opened, setOpened, data, setList}) {

  const nameInputRef = useRef();
  const aboutInputRef = useRef();

  const editItem = async () =>{
    const res = await fetch(`http://localhost:3000/people/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: nameInputRef.current.value,
        about: aboutInputRef.current.value,
      }),
    });
    console.log( await res.json())
    const editConfirmed = await res.status;
    if (editConfirmed === 200) {
      setList(prevList => prevList.map((item) =>{
        if(item.id === data.id){
          item.name = nameInputRef.current.value;
          item.about = aboutInputRef.current.value;
        }
        return item;
      }));
      nameInputRef.current.value = ''
      aboutInputRef.current.value =''

    }else{
      alert('Something went wrong, try again')
    }
  }





  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <Button onClick ={editItem}>Edit Person</Button>
        <Input ref={nameInputRef} placeholder={data.name} />
        <Input ref={aboutInputRef}  placeholder={data.about} />
      </Modal>

      <Button onClick={() => setOpened(true)}>Edit</Button>
    </>
  );
}

export default EditModal;
