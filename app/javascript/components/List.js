import React from "react";
import { Accordion, Button } from "@mantine/core";
import styled from "styled-components";
import EditModal from "./EditModal.js";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function List({ data, order, setList }) {
  const [opened, setOpened] = React.useState(false);
  const deleteItem = async () => {
    const res = await fetch(`http://localhost:3000/people/${data.id}`, {
      method: "DELETE",
    });
    const deleteConfirmed = await res.status;
    if (deleteConfirmed === 200) {
      setList(prevList => prevList.filter((item) => item.id !== data.id));
    }
  };



  return (
    <Div>
      <Accordion>
        <Accordion.Item label={data.name + " " + order}>
          <h1>{data.about}</h1>
        </Accordion.Item>
      </Accordion>
      <Div>
      <EditModal opened={opened} setOpened={setOpened} data={data} setList={setList}/>
      <Button onClick={deleteItem}>Delete</Button>
      </Div>
    </Div>
  );
}

export default List;
