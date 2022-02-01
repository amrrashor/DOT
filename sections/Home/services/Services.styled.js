import styled from "styled-components";

export const ServiceContainer = styled.div`
    width: 100%;
    .bg {
        background: ${({ theme }) => theme.colors.rawblack};
        opacity:0.4;
        width:50px;
        height:50px;
        padding:2px;
        border-radius:50%;
        font-size:${({ theme }) => theme.fontSize.fz_3};

    }

    .order_position {
        position:relative;
    }

    .order {
        font-size:${({ theme }) => theme.fontSize.fz_7};
        font-weight:${({ theme }) => theme.fontWeight.fw_3};
        position:absolute;
        left:65%;
        bottom:65%;
        opacity:0.4;
    }
`