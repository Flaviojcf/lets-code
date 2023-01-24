import styled from "styled-components";


interface ButtonsContainer {
  background: string;
  border: string;
  disabled:Boolean;
}

export const ButtonsStyles = styled.div`
  display: flex;
  justify-content: space-between;



  @media screen and (max-width:940px) { 
    align-items: center;

    
  }

`;

export const ButtonStyles = styled.button<ButtonsContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.5rem;

  height: 3rem;
  width: 11rem;

  background: ${(props)=>props.background};
  border-color: ${(props)=>props.border};
  border: ${(props)=>props.border === 'none' ? '0px' : '1px solid'};

  opacity: ${(props)=>props.disabled === true ? '50%' : '100%'};

  border-radius: 24px;
  color: white;

  @media screen and (max-width:940px) { 
    width: 100%;
    max-width: 6rem;
    height: 2rem;
    font-size: 8px;
  }

  @media screen and (max-width:425px) {
    max-width: 4.5rem;
    font-size: 6.5px;

    > img {
      width: 0.5rem;
      height: 0.5rem;
    }
   }
`;

export const CursorImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;



  > img {
    width: 100%;
    cursor: pointer;
  }

  @media screen and (max-width:940px) { 
   display: none;

  }
`;