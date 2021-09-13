import React from 'react';

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  const inputStyle = {
    display: 'inline',
    width: '5%',
    marginBottom: '1rem',
  };

  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ fontFamily: 'monospace' }}>
          <input
            id={id}
            type="radio"
            value={option}
            style={inputStyle}
            onChange={onChange}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
