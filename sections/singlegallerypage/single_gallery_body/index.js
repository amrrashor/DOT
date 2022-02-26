//react
import Link from 'next/link'

//styled container
import { GalleryBodyContainer } from "./gallery_body.styled";
import { Paragraph, Title, TexTBtn } from '../../../components/layout/Layout.styled';

const GalleryBody = () => {
    return (
        <GalleryBodyContainer>
            <Paragraph m="0 0 40px 0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo aspernatur quis! Autem quod minus doloribus nostrum voluptas est, dolor officia debitis ea excepturi? Natus iste accusantium perspiciatis error aliquam.
            </Paragraph>
            <Title m=" 0 0 35px 0">
                task
            </Title>
            <Paragraph m="0 0 40px 0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, possimus voluptates. Odit, voluptatum. Obcaecati sit, provident explicabo adipisci, nisi error, rem dolorem aut ad officiis eum eaque accusantium perferendis illo!
            </Paragraph>
            <Link href="/singlegallerypage">
                <TexTBtn>
                    open project
                </TexTBtn>
            </Link>
        </GalleryBodyContainer>

    )
}
export default GalleryBody