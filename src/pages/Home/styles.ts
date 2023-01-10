import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background: ${(props) => props.theme.colors["purple-700"]};
`;
