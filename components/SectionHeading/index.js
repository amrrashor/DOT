import { SectionHeadingContainer, SectionHeadingTitle, SectionHeadingDesc } from './heading.style';

const SectionHeading = ({ title,desc}) => {
    return (
        <SectionHeadingContainer>
            <SectionHeadingTitle>
                { title}
            </SectionHeadingTitle>
            {desc && <SectionHeadingDesc>
                {desc}
            </SectionHeadingDesc> }   
        </SectionHeadingContainer>
    )
};
export default SectionHeading;