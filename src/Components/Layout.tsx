import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {ListNav,ListItem, Container, Header, FooterText, WrapperL} from './Layout.styled'


export const Layout = ()=>{
    return (
            <div>
                <WrapperL>
                    <Header>
                    <ListNav>
                        <ListItem to="/" end>Home</ListItem>
                        <ListItem to="/selected">Selected Recipes</ListItem>
                    </ListNav>
                </Header>
                </WrapperL>
                    <Container>

                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
                <footer>
                    <FooterText>&copy; {new Date().getFullYear()} Jerdeva Olena</FooterText>
                </footer>
            </Container>
            </div>
)
}