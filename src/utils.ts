import { useState, useEffect, SetStateAction, Dispatch } from "react";

function usePersistedState<Type>(
  key: string,
  defaultValue: Type
): [Type, Dispatch<SetStateAction<Type>>] {
  const [state, setState] = useState(() =>
    sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key))
      : defaultValue
  );
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export { usePersistedState };
