import { FaFacebookF } from 'react-icons/fa';
import { TiSocialDribbble } from 'react-icons/ti';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Facebook = <FaFacebookF />;
const Dribble = <TiSocialDribbble />;
const Instagram = <AiFillInstagram />;
const Twitter = <AiOutlineTwitter />

const FooterData = {
    FooterLink: {
        id: 2,
        title: "links",
        titleLink: {
            one: "home",
            two: "gallery",
            three: "blog",
            four:"contact",
        },
        link: {
            one: "/",
            two: "/gallery",
            three: "/blog",
            four:"/contact",
        }
    },
    FooterLegal: {
        id: 3,
        title: "legal",
        titleLink:{
            one: "privacy policy",
            two: "terms of conditions",
            three: "faq",
            four:"help center",
        },
        link: {
            one: "/privacypolicy",
            two: "/terms",
            three: "/faq",
            four:"/helpcenter",
        }
    },
    FooterContact: {
        id: 4,
        title: "contact us",
        Social: {
            one: Facebook,
            two: Dribble,
            three: Instagram,
            four: Twitter,
        },
        link: {
            one: "https://web.facebook.com/",
            two: "https://dribbble.com/",
            three: "https://www.instagram.com/",
            four: "https://twitter.com/"
        },
        color: {
            one: "#4267B3",
            two: "#ea4c89",
            three: "#E1306C",
            four: "#1DA1F2",
        }
    }
}

export default FooterData