//styled components
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
        background-color: ${({theme}) => theme.colors.dark};
        color: ${({theme}) => theme.colors.white};
    }

    a {
        color: ${(props) => props.theme.colors.white};
        text-decoration: none !important;
        cursor: pointer;
    }

     *,
     *::before,
     *::after {
        box-sizing: border-box;
        outline: 0
    }

    img {
        max-width: 100%;
        object-fit: contain !important;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
    }
    
    .box {
        background-color:${({theme}) => theme.colors.gunmetal};
        box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
        padding:20px;
        margin:10px 0;
        border-radius:${({theme}) => theme.brderRadi.borderRadius_2}
    }
    .up{
        margin-bottom:3px;
    }
    .space {
        padding-top:80px;
    }
    .extra_space {
        padding-top:100px;
    }
`

export default GlobalStyle