import PropTypes from "prop-types";
import HistoryStyled from "../UserHistory/HistoryStyled";

export const UserHistory = ({ history }) => {
  return (
    <>
      <HistoryStyled>
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {history.map(({ id, type, amount, currency }) => {
              return (
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryStyled>
    </>
  );
};

UserHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
