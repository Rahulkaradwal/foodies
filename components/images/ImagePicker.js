'use client';
import React, { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

function ImagePicker({ label, name }) {
  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.click();
  };

  const handlePreview = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return setImagePreview(null);
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePreview(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!imagePreview && <p>No image picked yet</p>}
          {imagePreview && (
            <Image src={imagePreview} alt="Image selected by user" fill />
          )}
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          onChange={handlePreview}
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
