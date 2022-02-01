//bootstrap
import { Navbar, Nav } from "react-bootstrap";

//data
import Data from './Data';

//next router
import Link from "next/dist/client/link";
import { useRouter } from 'next/router'

//react icons
import { BiChevronRight } from 'react-icons/bi'

//styled components
import { StyledNavbar, Logo, NavItem, NavBarCollapse, NavContent } from "./Navbar.stlyed";
import { StyledContainer, Button } from "../layout/Layout.styled";

const MainNavbar = () => {
    const router = useRouter()
    return (
        <StyledNavbar expand="lg" variant="dark">
            <StyledContainer p="15px 0">
                <Link href="/">
                    <Logo href="/">Dot.</Logo>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavBarCollapse id="basic-navbar-nav">
                    <NavContent className="me-auto">
                        {Data.map(d => (
                                <Link href={d.link}>
                                <NavItem href={d.link} key={d.id}>
                                    <span className={router.pathname === d.link ? "active" : ""}>{d.title}</span>
                                </NavItem>
                            </Link>
                        ))}
                    </NavContent>
                </NavBarCollapse>
                    <Link href="/contact">
                            <Button className="none">
                                say hello<BiChevronRight />
                            </Button>
                    </Link>
            </StyledContainer>
        </StyledNavbar>
    )
}

export default MainNavbar