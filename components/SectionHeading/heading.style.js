import styled from 'styled-components'
import { MainHeading, Paragraph } from '../../components/layout/Layout.styled';

export const SectionHeadingContainer = styled.div`
    width:100%;
    margin-bottom:45px;
`

export const SectionHeadingTitle = styled(MainHeading)`
margin:10px 0;

`
export const SectionHeadingDesc = styled(Paragraph)`
    max-width:650px;
    font-size:${({theme}) => theme.fontSize.fz_2J};
`