import {
    Image,
    MainHeading,
    Paragraph,
    Button,
    StyledContainer,
    StyledRow,
    Column
} from "../../../components/layout/Layout.styled";
import { HeroContainer } from './Hero.styled';

import {motion} from 'framer-motion'
import Link from "next/dist/client/link";
import Data from './Data';

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);


const variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    enter: {
        opacity: 1,
        x: 0,
        y:0,
    }
}

const Hero = () => {
    return (
        <HeroContainer className="space">
            <StyledContainer className="text-center" p="80px 0" >
                <StyledRow>
                    <Column lg={6} md={6} sm={12} align="left">
                            <Paragraph>we are a digital agency based in california</Paragraph>
                            <MainHeading>we build digital products for creative peoples</MainHeading>
                            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam earum quam esse a quos minima?</Paragraph>
                            <Link href="/works">
                                <Button m="20px 0" Radius="20px" p="12px 25px">see our work</Button>
                            </Link>
                    </Column>
                    
                    <Column lg={6} md={6} sm={12} xs={12}>
                        <div className="landing">
                            <Swiper className="radius"  effect={'fade'} slidesPerView={1} autoplay={{ "delay": 2500, "disableOnInteraction": false }} >
                                <div className="landing">
                                    {Data.map(d => (
                                        <SwiperSlide key={d.id}>
                                            <motion.div
                                                className="content"
                                                variants={variants}
                                                initial="hidden"
                                                animate="enter"
                                                transition={{ duration: 0.6, type: "just"}}
                                            >
                                                <Image src={d.image} />
                                            </motion.div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </div>
                    </Column>

                </StyledRow>
            </StyledContainer>
        </HeroContainer>
    )
}

export default Hero