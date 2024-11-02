import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ListNav, ListItem, Container, Header, FooterText, WrapperL, MainContainer } from './Layout.styled';
export const Layout = () => {
    return (_jsxs(MainContainer, { children: [_jsx(WrapperL, { children: _jsx(Header, { children: _jsxs(ListNav, { children: [_jsx(ListItem, { to: "/", end: true, children: "Home" }), _jsx(ListItem, { to: "/selected", children: "Selected Recipes" })] }) }) }), _jsxs(Container, { children: [_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Outlet, {}) }), _jsx("footer", { children: _jsxs(FooterText, { children: ["\u00A9 ", new Date().getFullYear(), " Jerdeva Olena"] }) })] })] }));
};
