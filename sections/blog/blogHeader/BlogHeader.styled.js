import styled from "styled-components";


export const Header = styled.div`
    width:100%;

    .content {
        position:relative;
        max-height:65vh;

        @media screen and (max-width:${({ theme }) => theme.responsive.mobile}) {
            padding:40px 0;

            img {
                width:100%;
                height:100%;
            }
        }
    }

    .detail{
        position:absolute;
        display:flex;
        flex-direction:column;
        justify-content:center;
        z-index:2;
        top:10%;
        left:0;
        padding:50px;;
        background-color:${({theme}) => theme.colors.lightblack};
        max-width:755px;
        box-shadow:${({theme}) => theme.BX_shadow.BX_shadow_1};

        p {
            margin:5px 0;
        }

        h4 {
            font-size:${({theme}) =>theme.fontSize.fz_4};
        }

        @media screen and (max-width:${({ theme }) => theme.responsive.mobile}) {
            top:0;
            bottom:0;
            right:0;
            left:0;
            padding:10px;
            
            h4 {
                font-size:${({theme}) =>theme.fontSize.fz_2};
            }
        }
    }
`

export const Badge = styled.span`
    position:absolute;
    bottom:0;
    right:0;
    padding:6px;
    opacity:5;
    background-color:${({ theme }) => theme.colors.button};
    color:${({ theme }) => theme.colors.rawblack};
    font-size:${({ theme }) => theme.fontSize.fz_1};
    font-weight:${({theme}) =>theme.fontWeight.fw_2};
    text-transform:uppercase;
    letter-spacing:1px;
    box-shadow:${({ theme }) => theme.BX_shadow.BX_shadow_1};
    width:90px;
    text-align:center;
`