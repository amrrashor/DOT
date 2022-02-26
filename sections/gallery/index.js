//component
import Landing from "./gallerylanding";
import GalleryBody from './gallerybody/index'
import Banner from "./gallerybanner";
//animation component
import { SecondAnimated } from '../../components/layout/Animation'
//styled component
import { GalleryContainer } from "./gallery.styled";

const Gallery = () => {
    return (
        <SecondAnimated>
            <GalleryContainer>
                <Landing />
                <GalleryBody />
                <Banner />
            </GalleryContainer>
        </SecondAnimated>  
    )
}

export default Gallery