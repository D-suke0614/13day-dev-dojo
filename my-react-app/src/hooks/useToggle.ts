import {useState, useCallback } from "react";

export default function useToggle(initialValue:boolean = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue(prevValue => !prevValue)
  }, [])
  return [value, toggle] as const
}