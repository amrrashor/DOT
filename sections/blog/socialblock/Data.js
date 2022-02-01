import { FaFacebookF } from 'react-icons/fa';
import { TiSocialDribbble } from 'react-icons/ti';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Facebook = <FaFacebookF />;
const Dribble = <TiSocialDribbble />;
const Instagram = <AiFillInstagram />;
const Twitter = <AiOutlineTwitter />

const SocialData = [
    {
        id: 1,
        icon: Facebook,
        link:"/blog"
    },
    {
        id: 2,
        icon: Twitter,
        link:"/blog"
    },
    {
        id: 3,
        icon: Instagram,
        link:"/blog"
    },
    {
        id: 4,
        icon: Dribble,
        link:"/blog"
    },
]

export default SocialData