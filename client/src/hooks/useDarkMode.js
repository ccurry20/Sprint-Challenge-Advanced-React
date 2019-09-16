import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (darkmode) => {
    const [value, setValue] = useLocalStorage("darkmode", false)

    if (value) {
        document.body.classList.add("dark-mode")
        } else {
        document.body.classList.remove("dark-mode")
        }

        return [
            value,   
            setValue
        ]
        }