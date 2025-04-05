import React from 'react';
import StyleCss from "./Textinput.module.css";

const TextInput = ({label,placeholderLabel,onChange,Error,type}) => {
  return (
    <div id={StyleCss.textcontanier} className='flex flex-col'>
      <label className='text-white text-base' id={StyleCss.labels}>{label}</label>
      <input className='' id={StyleCss.inputtext} type={type} onChange={onChange} placeholder={placeholderLabel}/>
      <p className='text-red-600' id={StyleCss.errorfont}>{Error}</p>
    </div>
  )
}

export default TextInput