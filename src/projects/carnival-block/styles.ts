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
  padding: 0 2rem;

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
  @media screen and (max-width: 768px) {
    height: 40rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  align-self: center;
  justify-self: center;

  gap: 2.5rem;
  z-index: 9;
  height: 20.75rem;
`;

export const TextHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  > p {
    font-size: 1rem;
    line-height: 26px;
    color: #e45858;
  }

  > h1 {
    font-size: 2.875rem;
    line-height: 60px;
    color: #121214;
    max-width: 40rem;

    > strong {
      color: rgba(98, 70, 234, 1);
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: -6rem;
    > h1 {
      font-size: 2rem;
    }
    > p {
      font-size: 0.9rem;
    }
  }
`;

export const SearchHeaderContent = styled.div`
  display: flex;
  height: 8rem;
  background: #ffffff;
  padding: 2.5rem;
  flex-wrap: wrap;

  gap: 1.5rem;
  border-radius: 8px;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
    height: 24rem;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const FilterByName = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 21.75rem;
  background: #f4f4ff;
  border-radius: 8px;

  > input {
    width: 100%;
    height: 100%;
    background: #f4f4ff;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 0.75rem;
    padding-left: 2.7rem;

    &:focus {
      border: 1px solid rgba(98, 70, 234, 1);
    }
    background-image: url("/assets/carnival-block/images/search.png");
    background-repeat: no-repeat;
    background-position: 14px center;
  }

  @media screen and (max-width: 425px) {
    max-width: 18rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FilterByCity = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 21.75rem;
  background: #f4f4ff;
  border-radius: 8px;
  cursor: pointer;

  > p {
    font-size: 0.75rem;
    line-height: 1rem;
    color: #7c7cba;
    padding-left: 2.7rem;
  }

  > div {
    margin-top: 18rem;
  }

  background-image: url("/assets/carnival-block/images/gps.png"),
    url("/assets/carnival-block/images/optionImage.png");
  background-repeat: no-repeat;
  background-position: 14px, 310px center;

  @media screen and (max-width: 425px) {
    background-position: 14px, 180px center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;

export const OptionGroudContainer = styled.div`
  margin-top: 0.5rem;
  border-radius: 8px;
  padding: 0.2rem;
  box-shadow: 10px 25px 64px -18px rgba(0,0,0,0.75);
  display: none;

  &:hover {
    color: red;
  }

`;


export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;

  width: 10.5rem;

  font-size: 14px;
  line-height: 24px;
  color: #ffffff;

  border: none;
  background: #6246ea;
  border-radius: 8px;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

