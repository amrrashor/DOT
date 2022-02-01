import { motion } from "framer-motion";
import styled from "styled-components";


export const TagContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:start;
    padding:15px;
    margin-bottom:20px;
    background-color: ${({ theme }) => theme.colors.rawblack};
`

export const Tag = styled(motion.p)`
    background-color: ${({ theme }) => theme.colors.button};
    color:${({ theme }) => theme.colors.rawblack};
    font-weight:${({ theme }) => theme.fontWeight.fw_1};
    cursor:pointer;
    padding:8px;
    margin:5px;
    font-size:15px;
`