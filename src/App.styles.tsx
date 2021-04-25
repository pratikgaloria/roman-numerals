import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f8f3e3;
`;

export const Form = styled.div`
  display: grid;
  align-content: center;
  grid-gap: 24px;
  padding: 24px;

  height: 100vh;

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 376px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  padding: 24px;

  border: 1px solid #f8c25c;
  border-radius: 2px;
  font-size: 14px;
  text-align: center;

  @media (min-width: 376px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  padding: 24px;

  background-color: #f8c25c;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Result = styled.div<{ error?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  text-align: center;
  font-size: 24px;
  color: ${(props) => (props.error ? "#ff2047" : "inherit")};
`;
