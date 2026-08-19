import { FiCode, FiBriefcase, FiAward } from "react-icons/fi";
import { PiGraduationCapBold } from "react-icons/pi";
import { stats } from "../data/portfolioData";
import "./Stats.css";

const icons = {
  code: <FiCode />,
  briefcase: <FiBriefcase />,
  cap: <PiGraduationCapBold />,
  trophy: <FiAward />,
};

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__card">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <span className="stats__icon">{icons[stat.icon]}</span>
            <div>
              <strong className="stats__value">{stat.value}</strong>
              <span className="stats__label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
