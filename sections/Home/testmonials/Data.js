import { AiFillSlackCircle } from 'react-icons/ai';
import { RiNetflixFill } from 'react-icons/ri';
import { FaIntercom } from 'react-icons/fa';

const Netflix = <RiNetflixFill />;
const Slack = <AiFillSlackCircle />;
const Intercom = <FaIntercom />;

const TestmonialsData = [
    {
        id: 1,
        desc: "ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam",
        rate: "5.00",
        person: "joe elia",
        job: "user interface designer",
        companylogo: Slack,
        src: "src",
        color:"#ecb22e",
    },
    {
        id: 2,
        desc: "ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam",
        rate: "4.00",
        person: "paul chris",
        job: "user interface designer",
        companylogo: Netflix,
        src: "src",
        color:"#E50914",
    },
    {
        id: 3,
        desc: "ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam",
        rate: "4.5",
        person: "joe doe",
        job: "user interface designer",
        companylogo: Intercom,
        src: "src",
        color:"#326bff",
    },
]

export default TestmonialsData