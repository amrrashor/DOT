//data
import Data from './data';
//styled components
import { GalleryImageContainer } from './single_gallery_image.styled';
import { Image } from '../../../components/layout/Layout.styled';

const GalleryImage = () => {
    return (
        <GalleryImageContainer>
            {Data.map(d => (
                <Image m="0 0 20px 0" id={d.id} src={d.img} />
            ))}
        </GalleryImageContainer>
    )
}

export default GalleryImage