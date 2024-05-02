/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {css } from '@emotion/react';

export const GlobalStyles = css`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  color: #fff;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #1DB954;
`;

export const ErrorText = styled.span`
  color: #E74C3C;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  table-layout: fixed;

  & thead {
    background-color: #333;
    color: #fff;
  }

  & tbody {
    color: #ddd;
  }

  & tr:nth-of-type(even) {
    background-color: #242424;
  }

  & td {
    padding: 5px;
    border: 1px solid #444;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TableNum = styled.td`
  padding: 5px;
  border: 1px solid #444;
  width: 30px;
`;

export const TableText = styled.td`
  border: 1px solid #444;
  width: 70px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #444;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  width: 50px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TableActions = styled.td`
  padding: 5px;
  border: 1px solid #444;
  text-align: center;
  vertical-align: middle;
  width: 25px;
`;
export const PlusIcon = styled.div`
  display: inline-block; 
  margin-top: 20px; 
  border: 1px solid gray; 
  color: green; 
  padding: 5px; 
  cursor: pointer; 
`;