
import React, { useState, useEffect } from 'react'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

export default function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // returns the <html> element
    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === 'dark') {
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    })

    return (
        <>
            {theme === 'dark' ? (
                <BiSolidSun onClick={() => setTheme("light")}
                    className='text-2xl cursor-pointer' />
            ) : (
                <BiSolidMoon onClick={() => setTheme("dark")}
                    className='text-2xl cursor-pointer' />
            )}
        </>
    )
}
