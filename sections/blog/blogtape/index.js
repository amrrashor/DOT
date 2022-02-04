import Link from 'next/link';

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper';
SwiperCore.use([Autoplay, EffectFade, Navigation]);

import { TapeContainer, TapeElement } from "./Tape.styled";
import { Paragraph, StyledContainer} from '../../../components/layout/Layout.styled'
import Data from './Data';

const Tape = () => {
    return (
        <TapeContainer>
            <StyledContainer>
                <Swiper effect={'fade'}
                    slidesPerView={1}
                    autoplay={{ "delay": 4500, "disableOnInteraction": false }}
                    >
                            {Data.map(d => (
                                    <SwiperSlide className="mySwiper" key={d.id}>
                                        <TapeElement>
                                        <Link href={d.link}>
                                            <Paragraph><span className="more">more :</span> {d.title} </Paragraph>
                                        </Link>
                                        </TapeElement>
                                </SwiperSlide>
                            ))}
                    </Swiper>
            </StyledContainer>
        </TapeContainer>
    )
}

export default Tape