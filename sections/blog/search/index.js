//react icons
import { AiOutlineSearch } from 'react-icons/ai'

//styled components
import { SearchContainer, Input, Content, SearchIcon } from "./Search.styled";

const Search = () => {
    return (
        <SearchContainer>
            <Content>
                <Input type="Search" placeholder="search news" /> 
                <SearchIcon>
                    <AiOutlineSearch />
                </SearchIcon>
            </Content>
        </SearchContainer>
    )
}

export default Search