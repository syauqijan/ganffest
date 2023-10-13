import React, { ReactNode } from "react";
import styles from "./FormWrapper.module.css"; // Import CSS module

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.formGrid}> 
        {children}
      </div>
    </>
  );
}
