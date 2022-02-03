import { ServiceContianer } from "./service.styled"
import Hero from "./servicehero";
import { ThirdAnimated } from "../../components/layout/Animation";
import Category from "./services_categories";
import Pricing from '../Home/pricing/Pricing';
import Testmonials from '../Home/testmonials/Testmonials'


const Services = () => {
    return (
        <ThirdAnimated>
            <ServiceContianer className="space">
                <Hero />
                <Category />
                <Pricing />
                <Testmonials />
            </ServiceContianer>
        </ThirdAnimated>
    )
}

export default Services