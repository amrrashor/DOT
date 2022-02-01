import styled from 'styled-components'


export const ErrorContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
    .box {
        flex-direction:column;
        justify-content:center;
        align-items:center;        
        background-color:${({theme}) =>theme.colors.gunmetal};
        padding:15px;
        margin:0 auto;
        width:50%;;
        box-shadow:${({theme}) =>theme.BX_shadow.BX_shadow_1};
        border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
        @media screen and (max-width:${({ theme }) => theme.responsive.LG}){
            width:90%;
        }
    }
    p{
        padding:0 15px 15px 15px;
        text-align:center; 
    }
    h2 {
        margin:0 30px ;
    }
`