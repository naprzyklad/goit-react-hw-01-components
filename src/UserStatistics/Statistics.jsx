import PropTypes from "prop-types";

export const UserStatistics = ({ stat }) => {
  const { id, label, percentage } = stat;
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
          {stat.map(({ id, label, percentage }) => (
            <li key={id} className="item">
              <span className="label">{label} </span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

UserStatistics.propTypes = {
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
