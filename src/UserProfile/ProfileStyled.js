import styled from "styled-components";

const StyledProfile = styled.div`
  .profile {
    color: black;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #5c5470;
    border-radius: 15px;
    align-items: center;
    .description {
      background: #5c5470;
      border-radius: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      justify-content: center;
      margin-top: 1rem;
      .avatar {
        height: 125px;
        width: 125px;
        background: #dbd8e3;
        border-radius: 500px;
      }
    }
    .stats {
      margin-top: 1rem;
      margin-bottom: 1rem;
      background: #352f44;
      color: black;
      border-radius: 15px;
      width: 80%;
      gap: 10px;
      display: flex;
      justify-content: center;
      padding: 0;
      li {
        display: flex;
        flex-direction: column;
        .label {
          color: ;
        }
      }
    }
  }
`;
export default StyledProfile;
