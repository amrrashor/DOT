//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);

import { GalleryLanding } from "./gallerybanner.styled"
import {Image, Title, StyledContainer, Flex, Paragraph, MainHeading} from '../../../components/layout/Layout.styled'
import Data from './Data'

const Landing = () => {
    return (
        <GalleryLanding className="space">

            <Swiper className="slider" effect={'fade'} slidesPerView={1} autoplay={{ "delay": 2500, "disableOnInteraction": false }} >
                    {Data.map((d, index )=> (
                        <SwiperSlide  key={index}>
                            <Image src={d.img} />
                        </SwiperSlide>
                    ))}
            </Swiper>

            <div className="layout"></div>

            <div className="titleBg">
                <MainHeading>Our projects</MainHeading>
            </div>

        </GalleryLanding>
    )
}

export default Landing