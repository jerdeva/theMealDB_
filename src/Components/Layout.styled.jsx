import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const ListNav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const WrapperL = styled.div`
  background-color: rgba(250, 250, 200, 0.2);
  `

export const ListItem = styled(NavLink)`
  padding: 14px px;
  font-size: 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #064e8a;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;
  &:before {
    content: '';
    background-image: linear-gradient(
        rgba(106, 191, 235, 0),
        rgba(106, 191, 235, 1)
      );
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.6;
    filter: blur(1px);
  }

    
    /* @media (max-width: 1200px) {
      max-width: 750px;
  }


    @media (max-width: 480px) {
      max-width: 450px;
  } */
`;


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid #3b8fa6;
  > nav {
    display: flex;
    gap: 0 12px;

  }

`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px 0;
  margin: 0;
    background-color: rgba(250, 250, 200, 0.2);
`

export const Name = styled.header`
  font-weight: 700;
  font-size: 30px;
  color: #215f69;
  margin: 0;
  margin-left: 10px;
`;

export const FooterText = styled.p`
  text-align: center;
  padding: 20px 0;
  margin: 0;
    
`