import { WorkContainer, Tab, Content } from "./WorkProcess.styled";
import {
    StyledContainer,
    StyledRow,
    Paragraph,
    Title,
    Image,
    MainHeading,
    Flex,
    SubHeading
} from "../../../components/layout/Layout.styled";
import { Badge } from '../../blog/blogHeader/BlogHeader.styled';
import { motion } from "framer-motion";
import Data from './Data';
import { useState } from "react";

//framer motion variants
const tabVariant = {
    hidden: {
        opacity: 0,
        x: -70,
    },
    enter: {
        opacity: 1,
        x: 0,
    }
}

const iconVariants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    enter: {
        opacity: 1,
        x: 0,
    }
}

const descVariants = {
    hidden: {
        opacity: 0,
        y: -70,
    },
    enter: {
        opacity: 1,
        y:0,
    }
}

const WorkProcess = () => {
    
    const [active, setActive] = useState(1);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    }

    return (
        <WorkContainer>
            <StyledContainer>
                <MainHeading>work process</MainHeading>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, iste harum soluta repellendus aliquid, rem magnam esse voluptas necessitatibus quod, nobis aperiam omnis unde similique inventore quibusdam repudiandae modi reiciendis!</Paragraph>
                
                <StyledRow>
                    
                <Flex Justify="flex-start">
                    {Data.map(d => (
                        <Tab className="text-center" key={d.id} id={d.id} active={active === d.id} onClick={handleClick}>
                            <Title id={d.id}>
                                {active === d.id ?
                                    <motion.span
                                        variants={iconVariants}
                                        initial={active === d.id ? "hidden" : ""}
                                        animate={active === d.id ? "enter" : ""}
                                        transition={{ duration: 0.4, type: "just"}}
                                    >
                                        {d.icon}{d.title}
                                    </motion.span> : d.icon}
                            </Title>
                        </Tab>         
                    ))}
                </Flex>
                    
                    
                    
                {Data.map(d => (
                    <Content
                        active={active === d.id}
                        variants={tabVariant}
                        initial={active != d.id ? "hidden" : "enter"}
                        animate={active === d.id ? "enter" : "hidden"}
                        transition={{ duration: 0.6, type: "just"}}
                    >
                        <div className="detail">
                            <motion.div
                                className="desc"
                                variants={descVariants}
                                initial={active != d.id ? "hidden" : "enter"}
                                animate={active === d.id ? "enter" : "hidden"}
                                transition={{ duration: 0.4, type: "just"}}
                            >
                                <Badge>{d.icon}</Badge>
                                <SubHeading>{d.title}</SubHeading>
                                <Paragraph>{ d.desc }</Paragraph>
                            </motion.div>
                            <Image src={d.image} />
                            <div className="layer"></div>
                        </div>
                    </Content>
                ))}
                    
                </StyledRow>
            </StyledContainer>
        </WorkContainer>
    )
}

export default WorkProcess