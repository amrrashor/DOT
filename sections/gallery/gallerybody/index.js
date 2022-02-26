//react
import Link from 'next/link'

//data
import Data from './data'
//styled component
import { Column, StyledContainer, StyledRow, Image, Divider, Title } from "../../../components/layout/Layout.styled";
import { GalleryBody } from './gallerybody.styled';

const Gallery = () => {

    return (
        <GalleryBody>
            <StyledContainer>
                <StyledRow>
                    {Data.map((d) => (
                        <Column key={d.id} xl={6} lg={6} md={6} sm={12} xs={12}> 
                            <Link href="/singlegallerypage" >
                                <div className="content">
                                    <Title className='desc'>full case study</Title>
                                    <Image src={d.img} />
                                </div>
                            </Link>
                        </Column>
                    ))}
                </StyledRow>
                <Divider />
            </StyledContainer>
        </GalleryBody>
    )
}

export default Gallery