import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} color="white" />
      <input
        onChange={handleChange}
        onKeyUp={handleSubmit}
        className={s.input}
        type="text"
        value={value}
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
}
