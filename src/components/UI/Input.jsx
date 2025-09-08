import React from 'react';
import styles from './Input.module.scss';

// 재사용 가능한 컴포넌트로 만들고 싶음.
const Input = ({ label, inputAttr, ref }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      {/*<input type='text' />*/}
      {/*<input type='password' />*/}
      {/*<input type='date' />*/}

      {/*  재사용 가능한 컴포넌트*/}
        <input ref={ref} {...inputAttr} />
    </div>
  );
};

export default Input;
