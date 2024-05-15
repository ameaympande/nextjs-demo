import React from "react";
import styles from "./input.module.css";



const InputField = ({ name, type, onChange, value, placeholder }) => {
  return (
    <div className="mb-4">
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
