"use client"
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeChangeButton() {
    let [isdark, setIsdark] = useState(false);
    function changeTheme() {
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
                setIsdark(true)
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
                setIsdark(false)
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
                setIsdark(false)
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
                setIsdark(true)
            }
        }
    }
    return (
        <button className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400" onClick={changeTheme}>
            {isdark ? <Moon /> : <Sun />}
        </button>
    );
}