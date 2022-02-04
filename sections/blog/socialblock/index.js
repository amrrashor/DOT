import Link from "next/dist/client/link";

import { SocialContainer, SocialTag } from "./socialblock.styled";
import Data from './Data'

const SocialBlock = () => {
    return (
        <SocialContainer>
            {Data.map(d => (
                <Link href={d.link} key={d.id}>
                    <SocialTag
                        whileHover={{backgroundColor:"wheat"}}
                        transition={{duration:0.3}}
                    >
                        {d.icon}
                    </SocialTag>
                </Link>
                
            ))}
        </SocialContainer>
    )
}
export default SocialBlock