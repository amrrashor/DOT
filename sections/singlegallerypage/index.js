import { SingleGallery } from './single_gallery_page.styled';
import Header from './single_gallery_header/index'
import { StyledContainer, StyledRow, Column, Sticky } from '../../components/layout/Layout.styled';
import GalleryBody from './single_gallery_body';
import GalleryImage from './single_gallery_image';
const SinglePage = () => {
    return (
        <SingleGallery className='space'>
            <StyledContainer>
                <Header />
                
                <StyledRow>
                    <Column xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Sticky>
                            <GalleryBody />
                        </Sticky>
                    </Column>
                    <Column xs={12} sm={12} md={12} lg={6} xl={6}>
                        <GalleryImage />
                    </Column>
                </StyledRow>
                
            </StyledContainer>
        </SingleGallery>
    )
}

export default SinglePage