import React from 'react';
import Descriptioncss from '../../components/FormComponents/Description.module.css'

const Description = ({ label, placeholderLabel,onChange,Error }) => {
  return (
    <div id={Descriptioncss.descriptionContainer} className='flex flex-col'>
      <label className='text-white text-base' id={Descriptioncss.labels}>{label}</label>
      <textarea className='' id={Descriptioncss.textarea} onChange={onChange}  placeholder={placeholderLabel}></textarea>
      <p className='text-red-500' id={Descriptioncss.errorfont}>{Error}</p>
    </div>
  );
};


export default Description;

