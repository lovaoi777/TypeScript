import React, { useState, useCallback } from "react";
import { CheckBox, ListFrame, Title, Content, RemoveBtn } from "./style";
import { AiFillDelete } from "react-icons/ai";

const ListForm = ({ element, onRemove }) => {
  const { id, text, checked } = element;
  const [remove, setremove] = useState(false);

  const RemoveFrame = useCallback(
    (e: any) => {
      setremove((e) => !e);
    },
    [setremove]
  );

  return (
    <ListFrame>
      <CheckBox
        type="checkbox"
        // onClick={(e) => !e.target.checked || console.log(e.target.checked)}
        onClick={RemoveFrame}
      />
      <Title>{id}.</Title>
      <Content>{text}</Content>
      {remove === true ? (
        <RemoveBtn onClick={(e) => onRemove(id)}>
          <AiFillDelete />
        </RemoveBtn>
      ) : (
        " "
      )}
    </ListFrame>
  );
};

export default ListForm;
