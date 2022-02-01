import { AiOutlineGoogle, AiFillSlackCircle } from 'react-icons/ai';
import { RiNetflixFill } from 'react-icons/ri';
import { FaIntercom } from 'react-icons/fa';



const Google = <AiOutlineGoogle />;
const Netflix = <RiNetflixFill />;
const Slack = <AiFillSlackCircle />;
const Intercom = <FaIntercom />;

const CompanyData = [
    {
        id: 1,
        logo: Google,
        title: "GOOGLE",
        color:"#4285F4"
    },
    {
        id: 2,
        logo: Netflix,
        title: "NETFLIX",
        color: "#E50914"
    },
    {
        id: 3,
        logo: Slack,
        title: "SLACK",
        color: "#ecb22e"
    },
    {
        id: 4,
        logo: Intercom,
        title: "INTERCOM",
        color: "#326bff"
    },
]

export default CompanyData