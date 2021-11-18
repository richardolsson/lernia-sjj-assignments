import React from "react";

export default function MinRatingFilter(props) {
  const onChange = (ev) => {
    props.onChange(ev.target.value);
  };

  return (
    <div className="filter">
      <input
        type="range"
        min="0"
        max="5"
        step="0.5"
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
}
