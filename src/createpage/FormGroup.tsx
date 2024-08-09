// FormGroup.js 또는 FormGroup.tsx
import React from 'react';

interface FormGroupProps {
  label: string;
  type: string;
  id: string;
  info?: string;
}

const FormGroup:React.FC<FormGroupProps> = ({ label, type, id, info }) => {
  return (
      <>
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} />
          {info && <span className="info">{info}</span>}
        </div>
        <div className="long_line"></div>
      </>
  );
};

export default FormGroup;
