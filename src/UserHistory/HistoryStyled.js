import styled from "styled-components";

const HistoryStyled = styled.div`
  display: flex;
  justify-content: center;
  .transaction-history {
    border-collapse: collapse;
    margin-bottom: 16px;
    font-size: 14px;
    color: #333;
    border: 1px solid #ddd;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export default HistoryStyled;
