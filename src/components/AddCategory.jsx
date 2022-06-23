import { useState } from "react";
import "../index.css";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    // setInputValue( iv => iv = target.value );
    setInputValue(target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory( inputValue.trim() );
    setInputValue( "" );
  }
  return (
    // <form onSubmit={ (event) => onSubmit( event ) }></form>
    <form onSubmit={ onSubmit }>
      <div className="px-2 md:flex md:justify-center border-b-2 pb-4">
        <input
          type="text"
          className="md:w-2/5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};
