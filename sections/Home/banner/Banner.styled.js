import styled from "styled-components";

export const BannerContainer = styled.div`
    width:100%;
    padding:50px 0;

    .bannerBg {
        background:url(/assets/banner.jpg);
        background-attachment:fixed;
        background-size:cover;
        background-position: center;
        background-repeat:no-repeat;
        border-radius:${({ theme }) => theme.brderRadi.borderRadius};
        box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
    }
`
export const BannerBox = styled.div`
    display:flex;
    justify-content:space-between;;
    align-items:center;
    background-color: ${({ theme }) => theme.colors.lightblack};
    box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
    border-radius:${({ theme }) => theme.brderRadi.borderRadius};
    padding:50px;

    .desc {
        width:80%;
    }

    @media screen and (max-width: ${({ theme }) => theme.responsive.LG}) {
        flex-direction:column;
        text-align:center;
        padding:10px;
        
        .desc{
            width:100%;
        }

        a {
            margin-top:20px;
        }
    }
`
