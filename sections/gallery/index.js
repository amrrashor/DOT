import { GalleryContainer } from "./gallery.styled";
import Landing from "./gallerylanding";
import { SecondAnimated} from '../../components/layout/Animation'
import GalleryBody from './gallerybody/index'
import Banner from "./gallerybanner";

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