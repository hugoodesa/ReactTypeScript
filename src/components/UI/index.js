import styled from "styled-components/";

export const ContainerBody = styled.div`
  background-color: #363a3d;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: max-content;
  width: 100%;
`;

export const Container = styled.div`
  height: 25%;
  width: 100%;
  background-color: #363a3d;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  background-color: lightgrey;
  width: fit-content;
  padding: 5px;
  margin: 10px;
`;
export const Button = styled.button`
  border-radius: 5px;
  background-color: #93b7be;
  width: fit-content;
  padding: 15px;
  color: black;
  font-weight: lighter;
  margin: 5px;
  color: #f1fffa;

  &:hover {
    background-color: #785964;
  }
`;

export const Table = styled.table`
  padding: 30px;
  text-align: center;
  border-spacing: 0;
  border-collapse: collapse;
  height: 220px;
`;

export const THead = styled.thead`
  text-align: center;
  color: #f1fffa;
  background-color: #785964;
`;

export const TDthead = styled.th`
  padding: 25px;
  text-align: center;
  border: none;
  text-align: center;
  margin: 5px;
`;

export const TRbody = styled.tr`
  text-align: center;
  border-bottom: 1px solid #785964;
  text-align: center;
  padding: 15px;
  font-size: 15px;
  font-weight: lighter;
  color: #f1fffa;
  &:hover {
    background-color: #454545;
    color: #f1fffa;
  }
`;

export const TRfoot = styled.tr`
  text-align: center;
  font-size: 20px;
  color: #f1fffa;
  height: 35px;
`;

export const TDtotais = styled.td`
  text-align: center;
  color: #f1fffa;
  background-color: #785964;
`;
