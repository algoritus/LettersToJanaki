import { useState } from "react";

export default function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);

      return saved
        ? JSON.parse(saved)
        : initialValue;

    } catch {
      return initialValue;
    }
  });


  const updateValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(
        key,
        JSON.stringify(newValue)
      );

    } catch (error) {
      console.log(error);
    }
  };


  return [value, updateValue];
}