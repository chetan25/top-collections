import React from "react";
import './form-input.styles.scss';

interface IProps {
    handleChange: (e: any) => void;
    label?: string;
    type: string;
    value: string;
    name: string;
    isRequired?: boolean;
}
const FormInput = (props: IProps) => {
    const {handleChange, name, type, value, label, isRequired} = props;

    return (
      <div className='group'>
          <input
              name={name}
              className='form-input'
              onChange={handleChange}
              type={type}
              value={value}
              required={isRequired}
          />
          {
              label ?
                  <label className={`${value.length  ? 'shrink' : ''}  form-input-label`}>
                      {label}
                  </label>
                  : null
          }
      </div>
    );
};

export default FormInput;