import PropTypes from "prop-types";
import StyledStatus from "./StatusStyled";
export const UserStatus = ({ status }) => {
  const { avatar, name, isOnline, id } = status;
  return (
    <>
      <StyledStatus>
        <ul>
          {status.map(({ avatar, name, isOnline, id }) => (
            <li className="item" key={id}>
              <span
                className={`status ${isOnline ? "online" : "offline"}`}
              ></span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          ))}
        </ul>
      </StyledStatus>
    </>
  );
};

UserStatus.propTypes = {
  status: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
