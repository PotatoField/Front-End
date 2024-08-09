// FormGroup.js 또는 FormGroup.tsx
import React from 'react';
import create from "../css/Create.module.css";

interface FormGroupProps {
  label: string;
  type: string;
  id: string;
  info?: string;
}

const FormGroup:React.FC<FormGroupProps> = ({ label, type, id, info }) => {
  return (
      <>
        <div className={create.form_group}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} />
          {info && <span className={create.info}>{info}</span>}
        </div>
        <div className={create.long_line}></div>
      </>
  );
};

export default FormGroup;
