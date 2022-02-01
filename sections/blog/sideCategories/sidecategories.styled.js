import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriesContainer = styled.div`
    width:100%;
    background-color: ${({ theme }) => theme.colors.rawblack};
    padding:15px;
    margin-bottom:20px;

    .single {

    }
`


export const Single = styled(motion.p)`
    margin: 15px 0;
    cursor:pointer;
    font-size: ${({ theme }) => theme.fontSize.fz_1};
    text-transform:capitalize;
    font-weight:${({ theme }) => theme.fontWeight.fw_1};
`