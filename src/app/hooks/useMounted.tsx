"use client";
import { useEffect, useState } from "react";

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to defer the state update
    // This avoids the synchronous setState issue
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return mounted;
};
export default useMounted;