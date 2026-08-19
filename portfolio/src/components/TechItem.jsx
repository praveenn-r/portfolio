import { useState } from "react";

const RADIUS = 60;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function TechItem({ icon, name }) {
  const [isActive, setIsActive] = useState(false);

  const activate = () => setIsActive(true);
  const deactivate = () => setIsActive(false);

  return (
    <div
      className={`tech-item ${isActive ? "is-active" : ""}`}
      tabIndex={0}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onFocus={activate}
      onBlur={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
    >
      <div className="tech-item__circle-wrap">
        <svg
          className="tech-item__ring"
          viewBox="0 0 140 140"
          aria-hidden="true"
        >
          <circle
            className="tech-item__ring-base"
            cx="70"
            cy="70"
            r={RADIUS}
          />
          <circle
            className="tech-item__ring-arc"
            cx="70"
            cy="70"
            r={RADIUS}
            style={{
              strokeDasharray: CIRCUMFERENCE,
            }}
          />
        </svg>
        <span className="tech-item__icon">{icon}</span>
      </div>

      <div className="tech-item__stem">
        <span className="tech-item__stem-fill" />
      </div>

      <span className="tech-item__node">
        <span className="tech-item__node-fill" />
      </span>

      <span className="tech-item__name">{name}</span>
    </div>
  );
}

export default TechItem;
