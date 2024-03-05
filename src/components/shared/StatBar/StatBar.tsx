import React from "react";

interface StatBarProps {
  statName: string;
  value: number;
}

export const StatBar = (props: StatBarProps) => {
  const { statName, value } = props;

  const barWidth = `${(value / 255) * 100}%`;

  return (
    <div className="flex items-center space-y-4" title={`${value} / 255`}>
      <div className="w-[160px]">{statName}:</div>
      <div className="flex-grow h-4 bg-secondary-light rounded-full relative">
        <div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-primary absolute"
          style={{ width: barWidth }}
        ></div>
      </div>
    </div>
  );
};

export default StatBar;
