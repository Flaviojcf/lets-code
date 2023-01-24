import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  @media screen and (max-width:1880px) {
    flex-direction: column;
    
  }
`;

export const TypesButtons = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors["buttons-cursors"].black};

  width: 80%;
  padding: 6.8rem 4.75rem;

  @media screen and (max-width:1880px) {
   width: 100% ;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width:940px) { 
    padding: 1rem;
  }
`;

export const TextButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 0.25rem;

  > h1 {
    font-size: 2rem;
    line-height: 32px;
    color: white;
  }

  > p {
    font-size: 1.5rem;
    line-height: 23px;
    color: white;
    opacity: 50%;
    max-width: 59rem;
  }

  @media screen and (max-width:940px) { 
    text-align: center;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1370px;
  height: 36rem;

  background: ${(props) => props.theme.colors["buttons-cursors"]["purple-400"]};
  border-radius: 8px;
  padding: 0rem 1rem;


  @media screen and (max-width:940px) { 
    padding: 0rem;
  }


`;

export const TypesTitlesButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 10rem;


  > p {
    font-family: 0.6875rem;
    line-height: 13px;
    color: white;
  }

  @media screen and (max-width:940px) { 
    display: none;
  }
 
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  height: 32rem;
  
`;

export const ButtonsStates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.1rem;
  margin-top: 5rem;
  margin-left: 1rem;

  @media screen and (max-width:940px) { 
    display: none;
  }



   > p {
    font-family: 0.6875rem;
    line-height: 13px;
    color: white;
  }
`;

export const ButtonsStatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  margin-top: 2rem;
  padding: 1.5rem;
  


  background: ${(props) => props.theme.colors["buttons-cursors"].black};
`;



export const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 11rem;

  background: ${(props)=>props.theme.colors["buttons-cursors"]["purple-700"]};
  border-radius: 24px;
  color: white;
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
`;



export const TestButtons = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  background: ${(props) => props.theme.colors["buttons-cursors"]["purple-400"]};

  padding: 6rem 2rem;

  @media screen and (max-width:1880px) {
   width: 100%;
   height: 406px;
   align-items: center;
   padding: 1rem;
   text-align: center;
  }
`;


export const TextTestButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  >h1 {
    font-size: 2rem;
    line-height: 32px;
    color: white;
  }
  > p {
    font-size: 19px;
    line-height: 23px;
    opacity: 67%;
    color: white;
  }
`;

export const ButtonsForTest = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;

  >button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 317px;
    height: 48px;
    border-radius: 24px;
    color: white;
    border: none;
  }

  >button:first-child {
    background: ${(props)=>props.theme.colors["buttons-cursors"]["purple-700"]};
  }

  >button:nth-child(2) {
    background-color: #3C3748;
    opacity: 56%;
  }

  >button:nth-child(3){
    background: ${(props) => props.theme.colors["buttons-cursors"]["purple-400"]};
    gap: 8px;
  }

`;