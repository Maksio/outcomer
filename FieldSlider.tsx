// FieldSlider.tsx
import React, { ChangeEvent, useCallback } from "react";
import styles from "./FieldSlider.module.css";
import { FieldSliderProps } from "./FieldSlider.types";

export const FieldSlider: React.FC<FieldSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  className = "",
  label,
  showValue = true,
}) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <div
      className={`${styles.sliderContainer} ${className} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.sliderWrapper}>
        <input
          type='range'
          className={styles.inputRange}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
        />
        {showValue && <div className={styles.valueDisplay}>{value}</div>}
      </div>
    </div>
  );
};
