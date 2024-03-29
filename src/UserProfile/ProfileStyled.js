import styled from "styled-components";

const StyledProfile = styled.div`
  .profile {
    color: black;
    height: 100%;
    .description {
      background: #5c5470;
      border-radius: 2rem;
      width: 150px;
      height: 270px;

      .avatar {
        height: 125px;
        width: 125px;
        background: #dbd8e3;
        border-radius: 500px;
      }
    }
    .stats {
      background: #352f44;
      color: black;
      border-radius: 15px;
    }
  }
`;
export default StyledProfile;
