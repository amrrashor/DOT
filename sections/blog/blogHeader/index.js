//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"

import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay, EffectFade]);

import { Badge, Header } from "./BlogHeader.styled";
import { Image,Paragraph,Title } from '../../../components/layout/Layout.styled';

import Data from './Data'

const BlogHeader = () => {
    return (
        <Header>
            <Swiper  effect={'fade'} slidesPerView={1} autoplay={{ "delay": 4500, "disableOnInteraction": false }} >
                <div>
                    {Data.map(d => (
                        <SwiperSlide key={d.id}>
                            <div className="content">
                                <Image src={d.img} />
                                <div className="detail">
                                    <Badge>{ d.badge}</Badge>
                                    <Title>{d.title}</Title>
                                    <Paragraph>{d.author} - {d.date} </Paragraph>
                                    <Paragraph>{ d.desc}</Paragraph>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </Header>
    )
}

export default BlogHeader