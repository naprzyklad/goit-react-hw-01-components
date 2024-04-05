import styled from "styled-components";

const StyledStatus = styled.div`
ul{
  padding-left: 0px;
}
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        background-color: black;
        border-radius: 1rem;
        padding: 0.5rem 8rem 0.5rem 2rem;
        color: white;
        letter-spacing: 2px;
        box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 1);
        .status {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .online {
          background-color: green;
        }

        .offline {
          background-color: red;
        }

        .avatar {
          border-radius: 50%;
          margin-right: 10px;
        }

        .name {
          font-weight: bold;
        }
      }

    }
  }
`;

export default StyledStatus;
