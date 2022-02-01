import styled from "styled-components";
import { motion } from "framer-motion";


export const WorkContainer = styled.div`
    width:100%;
    margin:100px 0;
`

export const Tab = styled.div`
    width:${(props) => props.active ? "25%" : "8%"};
    cursor: pointer;
    background-color: ${(props) => props.active ? "#81e6d9" : ""};
    color: ${(props) => props.active ? "#000" : ""};
    border: 1px solid #81e6d9;
    transition:  0.4s;
    padding:8px;
    border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
    margin: 30px 15px 30px 0;
    box-shadow: ${(props) => props.active ? props.theme.BX_shadow_BX_shadow_1 : "none"};

    @media screen and (max-width: ${({ theme }) => theme.responsive.mobile}) {
        width:${(props) => props.active ? "80%" : "15%"};
    }

    span {
        display: flex;
        justify-content:center;
    }
`

export const Content = styled(motion.div)`
    display: ${(props) => props.active ? "block" : "none"};

    .detail {
        position:relative;
        width:100%;
        max-height:60vh;
        overflow:hidden;
    } 
    img{
        width:100%;
    }

    .desc {
        position:absolute;
        display:flex;
        flex-direction:column;
        justify-content:center;
        z-index:2;
        left:0;
        top:10%;
        padding:50px;
        max-width:50%;
        background-color:${({theme}) => theme.colors.lightblack};
        box-shadow:${({ theme }) => theme.BX_shadow.BX_shadow_1};
        
        @media screen and (max-width: ${({ theme }) => theme.responsive.mobile}) {
            max-width:100%;
            padding:15px;
            top:0;

            .work_icon {
                display:none;
            }
        }
    }

    .layer {
        position:absolute;
        background-color:rgba(0,0,0,0.6);
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
`