import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";


export const StyledContainer = styled(Container)`
    width:${({ w }) => w || "80%"};
    padding: ${({ p }) => p || "40px 0"};
    .none {
        @media screen and (max-width: ${({ theme }) => theme.responsive.LG}){
            display:none;
        }
    }
`

export const StyledRow = styled(Row)`
    justify-content: ${({ justify }) => justify || "space-evenly"};
    align-items: ${({ Align }) => Align || ''};
    flex-direction: ${({ Direction }) => Direction || "row"};
`

export const Column = styled(Col)`
    text-align: ${({ align }) => align || ""};
`

export const Flex = styled.div`
    display:flex;
    justify-content: ${({ Justify }) => Justify || "space-between"};
    flex-direction: ${({Direction}) => Direction || "row"};
    margin: ${({ m }) => m || "0 0 0 0"};
    padding: ${({ p }) => p || "0 0 0 0"};
    align-items: ${({align}) => align || ""};
`

export const MainHeading = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.fw_2};
    text-transform: capitalize;
    font-size: ${({ theme, Size }) => Size ||theme.fontSize.fz_5};
    margin: ${({ m }) => m || "30px 0"};
    text-align: ${({ align }) => align || ""};
`

export const SubHeading = styled.h3`
    font-weight: ${({ theme }) => theme.fontWeight.fw_2};
    text-transform: capitalize;
    font-size: ${({ theme, Size }) => Size || theme.fontSize.fz_3};
    margin: ${({ m }) => m || "0 0 0 0"};
`
export const Title = styled.h4`
    font-weight: ${({ theme }) => theme.fontWeight.fw_2};
    text-transform: capitalize;
    font-size: ${({ theme, Size }) => Size || theme.fontSize.fz_2};
    margin: ${({ m }) => m || "0 0 0 0"};
`
export const Paragraph = styled.p`
    font-size: ${({ theme, Size }) => Size || theme.fontSize.fz_1};
    color: ${({ theme }) => theme.colors.paragraph};
    line-height:${({LH}) => LH || "2"};
    text-align: ${({ align }) => align || ""};
    text-transform: capitalize;
    padding: ${({ p }) => p || "0 0 0 0"};
    font-weight: ${({ Weight }) => Weight || "500"};
    margin : ${({ m }) => m || "0 0 0 0"};
`

export const Small = styled.span`
    font-size: ${({ theme, Size }) => Size || theme.fontSize.fz_1};
    color: ${({ theme }) => theme.colors.paragraph};
    line-height:${({LH}) => LH || "2"};
    text-align: ${({ align }) => align || "left"};
    text-transform: capitalize;
    margin:0 15px 5px 0;
`
export const Button = styled.a`
    display:inline-block;
    padding: ${({p}) => p || "10px 15px"} ;
    background-color: ${({ theme, BG }) =>BG || theme.colors.button} ;
    color: ${({ theme, Color }) => Color || theme.colors.rawblack} !important;
    border-radius: ${({ theme, Radius }) => Radius || theme.brderRadi.borderRadius_2};
    font-size: ${({ theme }) => theme.fontSize.fz_1};
    font-weight:${({ theme }) => theme.fontWeight.fw_1};
    text-transform: capitalize;
    margin: ${({ m }) => m || "0 0"};
    box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
    transition: ${({ theme }) => theme.transition.trans};

    &:hover {
        background-color: ${({ theme, bg }) => bg || theme.colors.rawblack};
        color:${({ theme, Color }) => Color || theme.colors.white} !important ;
    }
`

export const TexTBtn = styled.a`
    position:relative;
    display:inline-block;
    color: ${({ theme }) => theme.colors.white} ;
    font-size: ${({ theme }) => theme.fontSize.fz_1};
    font-weight: ${({ theme }) => theme.fontWeight.fw_1};
    text-transform: uppercase;
    margin: ${({ m }) => m || "10px 0"};
    transition: ${({ theme }) => theme.transition.trans};
    &:before{
        content:'';
        position:absolute;
        bottom:0;
        width:0;
        height:0.5px;
        background-color: ${({ theme }) => theme.colors.white};
        opacity:0.8;
        transition: ${({ theme }) => theme.transition.trans};
    }
    &:hover:before{
        width:100%;
    }
    &:hover {
        letter-spacing:3px;
        color: ${({ theme }) => theme.colors.white};
    }
`

export const Image = styled.img`
    max-width: ${({ max }) => max || "100%"};
    margin: ${({ m }) => m || "0"};
`

export const Icon = styled.span`
    display:block;
    font-size: ${({ theme, Size }) => Size || theme.fontSize.fz_4};
    margin: ${({ m }) => m || "10px 0"};
    color: ${({ Color }) => Color || "#fff"};
`

export const Divider = styled.div`
    width:100%;
    height: 0.5px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.2;
    margin: 15px 0;
`

export const Sticky = styled.div`
    position:sticky;
    top:150px;
`
