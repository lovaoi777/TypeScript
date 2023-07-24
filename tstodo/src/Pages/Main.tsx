import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import TimeForm from "../Components/TimeForm";
import InsertForm from "../Components/InsertForm";
import ListForm from "../Components/ListForm";

const Mainframe = styled.div`
  max-width: 50em;
  min-height: 50vh;
  margin: 0 auto;
  padding: 2em 0em;
  box-shadow: 0em 1em 2em 1em #e0e0e0;
`;

const TextTitle = styled.div`
  text-align: center;
  padding: 0.5em 0;
  font-size: 2em;
`;

const TextLin = styled.div`
  text-align: center;
  padding: 0.5em 0;
  font-size: 1.5em;
`;
const Main = () => {
  const [contentText, setcontentText] = useState([]);
  const nextId = useRef(1);
  //입력
  const Insert = useCallback(
    (text: any) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setcontentText(contentText.concat(todo));
      nextId.current += 1;
    },
    [contentText]
  );

  //삭제
  const onRemove = useCallback(
    (id: any) => {
      setcontentText(contentText.filter((todo: any) => todo.id !== id));
    },
    [contentText]
  );
  return (
    <>
      <TimeForm />
      <Mainframe>
        <TextTitle>TODO LIST</TextTitle>
        <TextLin>해야할 일들 : </TextLin>
        <InsertForm />
        <div>
          {contentText.map((element) => (
            <ListForm key={element.id} element={element} onRemove={onRemove} />
          ))}
        </div>
      </Mainframe>
    </>
  );
};
export default Main;
