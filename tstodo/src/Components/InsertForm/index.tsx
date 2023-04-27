import React, { useCallback } from "react";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";
export default function InsertForm() {
  const [value, valueChange, setValue] = useInput();
  const Content = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: row;
  `;
  const ContentInput = styled.input`
    width: 33em;
    height: 2em;
    border-radius: 10px;
  `;
  const AddButton = styled.button`
    border-radius: 10px;
    margin-left: 1em;
    background-color: white;
  `;

  //   const onClick = useCallback(
  //     (e: String) => {
  //       value === "" ? alert("제대로 입력해주세요 ") : Insert(value);
  //       setValue("");
  //       e.preventDefault();
  //     },
  //     [Insert, value, setValue]
  //   );
  const onClick = () => {};
  return (
    <Content>
      <ContentInput
        type="text"
        // value={value}
        // onChange={valueChange}
        placeholder="글을 입력해주세요"
      />
      <AddButton onClick={onClick}>검색</AddButton>
    </Content>
  );
}
