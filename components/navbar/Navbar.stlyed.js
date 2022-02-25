import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion';

export const StyledNavbar = styled(Navbar)`
    position:fixed;
    left:0;
    right:0;
    z-index:100;
    transition:${({theme}) => theme.transition.trans};

    &.colorChange {
        box-shadow:${({ theme }) => theme.BX_shadow.BX_shadow_1};
        background-color:${({ theme }) => theme.colors.dark};
    }
`

export const Logo = styled(Navbar.Brand)`
    text-transform:uppercase;
    font-size: ${({ theme }) => theme.fontSize.fz_2};
    margin-right:30px;
    font-weight: ${({ theme }) => theme.fontWeight.fw_3};
    cursor:pointer;
    text-shadow:${({ theme }) => theme.BX_shadow.BX_shadow_1};

    span {
        display:inline-block;
        transform:rotate(20deg);
        font-size: ${({ theme }) => theme.fontSize.fz_3};
        color:${({ theme }) => theme.colors.button};
    }
`
export const NavContent = styled(Nav)`
    margin-left:60px;
    @media screen and (max-width:${({ theme }) => theme.responsive.LG}) {
        margin: 10px 0;
    }
`

export const NavItem = styled(motion(Nav.Link))`
    font-size: ${({ theme }) => theme.fontSize.fz_1};
    margin-right:30px;
    letter-spacing:3px;
    cursor:pointer;
    position:relative;

    &:before {
        content:'';
        position:absolute;
        width:0%;
        height:30%;
        background: ${({ theme }) => theme.colors.button};
        color: ${({ theme }) => theme.colors.rawblack} !important;
        left:0;
        bottom:0;
        transition:0.4s;
        z-index:-1;
    }

    &:hover :before {
        width:100%;
        height:30%;
    }

    @media screen and (max-width:${({ theme }) => theme.responsive.LG}) {
        margin: 10px 0;
    }
    .active {
        background: ${({ theme }) => theme.colors.button};
        color: ${({ theme }) => theme.colors.gunmetal};
        padding:8px;
        font-size:13px;
    }
`

export const NavBarCollapse = styled(Navbar.Collapse)`
    display:flex;
    justify-content:center;
`
//