// ConsentSection.tsx
import React from 'react';

interface TermProps {
  title: string;
  checkboxId: string;
  question: string;
  agreementText: string;
  children: React.ReactNode;
  additionalCheckboxes?: { id: string; question: string; agreementText: string }[];
}

const Term: React.FC<TermProps> = ({ title, checkboxId, question, agreementText, children, additionalCheckboxes }) => {
  return (
      <div className="term_content">
        <span className="agree_title">{title}</span>
        <div className="term_box">
          {children}
        </div>
        <div className="agree_box">
          <span className="agree_question">{question}</span>
          <input id={checkboxId} className="checkbox" type="checkbox"/>
          <span className="agree">{agreementText}</span>
        </div>
        {additionalCheckboxes && additionalCheckboxes.map((checkbox, index) => (
            <div key={index} className="agree_box">
              <span className="agree_question">{checkbox.question}</span>
              <input id={checkbox.id} className="checkbox" type="checkbox" />
              <span className="agree">{checkbox.agreementText}</span>
            </div>
        ))}
      </div>
  );
};

export default Term;
