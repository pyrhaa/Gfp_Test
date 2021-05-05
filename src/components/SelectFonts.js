import React from 'react';

//Création components SelectFont

const SelectFonts = ({ setSelection }) => {
  const handleFilterChange = (e) => {
    setSelection({
      txt: e.target.selectedOptions[0].textContent,
      id: e.target.value
    });
  };
  return (
    <>
      <label className='fw-bold mb-2' htmlFor='sort'>
        Afficher des polices
      </label>
      <select
        key='sort'
        className='form-select mb-4'
        onChange={handleFilterChange}
      >
        <option value='date'>Les plus récentes</option>
        <option value='popularity'>Les plus populaires</option>
        <option value='trending'>Top 10 trending</option>
      </select>
    </>
  );
};

export default SelectFonts;
