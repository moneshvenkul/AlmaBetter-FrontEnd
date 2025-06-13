import React from "react";
import { useState, useEffect, useContext, useCallback, createContext } from "react";

const ThemeContext = createContext();

const Child = () => {
    const theme = useContext(ThemeContext);
    return <div style={{ color: theme.color }}>Child Component</div>;
}

const HooksExample = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState({ color: "blue" });
    

    useEffect(() => {
        console.log("Component mounted or updated");
        return () => {
            console.log("Cleanup on unmount or before next effect");
        };
    }, [count]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => ({
            color: prev.color === "blue" ? "green" : "blue"
        }));
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Hooks Example</h1>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Child/>
            </div>
        </ThemeContext.Provider>
    );
}

export default HooksExample;