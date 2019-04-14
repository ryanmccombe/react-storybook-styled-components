import React from "react";
import styled from "styled-components";

import ReviewList from "../ReviewList/ReviewList";

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	background-image: url("${props => props.theme.image}");
	background-size: cover;
`;

const Content = styled.div`
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(${props => props.theme.color}, 0.9) 20%,
    rgba(${props => props.theme.color}, 0) 50%
  );
`;

function Screen() {
  return (
    <Wrapper>
      <Content>
        <ReviewList />
      </Content>
    </Wrapper>
  );
}

export default Screen;
