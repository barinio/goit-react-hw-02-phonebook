import styled from 'styled-components';

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ItemRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & td:nth-child(1) {
    width: 200px;
    word-wrap: break-word;
  }
  & td:nth-child(2) {
    width: 150px;
    word-wrap: break-word;
  }
  & td:nth-child(3) {
    & button {
      text-transform: uppercase;
      font-size: 15px;
      padding: 3px;
      border-radius: 5px;
      cursor: pointer;
      background-color: #ed2939;
      color: white;
      font-weight: 600;
      &:is(:focus, :hover) {
        color: white;
        background-color: #b11226;
      }
    }
  }
  border-bottom: 3px dashed #8080ff;
  padding: 3px;
`;
export const ItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 250px;
  padding: 5px;
`;
export const NameText = styled.p``;
