import { motion } from "framer-motion";
import styled from "styled-components";


export const SocialContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    background-color:${({ theme }) => theme.colors.rawblack};
    padding:15px;
`

export const SocialTag = styled(motion.p)`
    background-color:${({ theme }) => theme.colors.button};
    color:${({ theme }) => theme.colors.rawblack};
    font-size: ${({ theme }) => theme.fontSize.fz_1};
    cursor:pointer;
    padding:10px;
    margin:5px;
`