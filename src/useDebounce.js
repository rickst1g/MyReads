import { useState, useEffect } from "react";

export function useDebounce (value, delay) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debounced;
};

//Reference: https://www.youtube.com/watch?v=n52A60Z7Ha0 function for deBounce