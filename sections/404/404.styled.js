import styled from 'styled-components'


export const ErrorContainer = styled.div`
    width:100%;
    .box {
        background-color:${({theme}) =>theme.colors.gunmetal};
        padding:30px 0;
        margin:0 auto;
        width:50%;;
        box-shadow:${({theme}) =>theme.BX_shadow.BX_shadow_1};
        border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
        @media screen and (max-width:${({ theme }) => theme.responsive.LG}){
            width:90%;
        }
    }
`