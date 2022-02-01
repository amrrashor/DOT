import Hero from './hero/Hero';
import Companies from './companies/Companies';
import Services from './services/Services';
import Pricing from './pricing/Pricing';
import WorkProcess from './workProcess/WorkProcess';
import Gallery from './gallery/Gallery';
import Testmonials from './testmonials/Testmonials';
import News from './news/News';
import Banner from './banner/Banner';

import { Animated } from '../../components/layout/Animation';
const Main = () => {
    return (
        <Animated>
            <Hero />
            <Companies /> 
            <Services /> 
            <Pricing />
            <WorkProcess /> 
            <Gallery />
            <Testmonials />
            <News />
            <Banner />
        </Animated>
    )
}

export default Main