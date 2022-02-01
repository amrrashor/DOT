// import { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { darkTheme, lightTheme } from '../../utilities/theme';


// const Toggler = () => {
//     const [theme, setTheme] = useState("light");

//     const themeToggler = () => {
//         theme === "light" ? setTheme("dark") : setTheme("light");
//     }


//     return (
//         <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
//             <button onClick={() => themeToggler()}>toggle</button>
//         </ThemeProvider>
//     )
// }
// export default Toggler