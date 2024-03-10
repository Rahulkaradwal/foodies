'use client';
import React, { useRef } from 'react';
import styles from './image-picker.module.css';

function ImagePicker({ label, name }) {
  const inputRef = useRef();
  const handleClick = () => {
    const image = inputRef.current.click();
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.controls}>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
