import { useState, useEffect } from "react";

/**
 * [useStore hook]
 * web storage 사용 시 발생하는 hydration error 방지용 custom hook
 * @param store
 * @param callback
 * @returns
 */
export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
