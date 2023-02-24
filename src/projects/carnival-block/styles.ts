import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  gap: 6.25rem;
`;

export const HeaderCarnival = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 33rem;

  background: #f8f8ff;

  > img {
    position: relative;
    height: 33rem;

  
    max-width: 25rem;
    max-height: 21rem;

    &:first-child {
      position: absolute;
      top: 5.125rem;
      left: 0;
    }
    &:nth-child(2) {
        position: absolute;
        top: 17.2rem;
        right: 0;
    }

    @media screen and (max-width: 425px) {
        max-width: 14rem;
        object-fit: cover;

    }
  }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;

    height: 332px;
    width: 100%;


  
`;