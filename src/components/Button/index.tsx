import { ButtonHTMLAttributes } from "react";

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  SecondType?: boolean;
};

export default function index(  { SecondType , ...props}: ButtonProps) {
  return (
    <button 
      className={SecondType ? styles.button2 : styles.button1}
            {...props}
    />     
  )
}

