import styled from "styled-components";

const StatisticsStyled = styled.div`
  .statistics {
    box-shadow: 0px 0px 7px 11px rgba(66, 68, 90, 1);
    border-radius: 10px;
    padding: 1.5rem;
    .stat-list {
      display: flex;
      border: 3px solid white;
      border-radius: 10px;
      .item {
        border: 1px solid white;
        padding: 0.5rem;
      }
    }
  }
`;

export default StatisticsStyled;
