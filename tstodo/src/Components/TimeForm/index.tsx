import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

export default function TimeForm() {
  const [realtime, setrealtime] = useState(new Date());
  // useEffect(() => {
  //   setInterval(() => {
  //     setrealtime(Date.now());
  //   }, 1000);
  // }, [realtime]);
  const TimeFrame = styled.div`
    background-color: white;

    max-width: 20em;
    margin: 6em auto;
    border-radius: 10px;
    box-shadow: 0em 1em 2em 1em #e0e0e0;
  `;
  const Time = styled.p`
    text-align: center;
  `;
  return (
    <TimeFrame>
      <Time>
        <Time>{moment(realtime).format("YYYY년   MM월    DD일")}</Time>
        <Time>{moment(realtime).format(" HH시  :mm 분")}</Time>
      </Time>
    </TimeFrame>
  );
}
