import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/user/login';
import { Layout } from 'antd';
import Home from '../views/home/home';
import HeaderLogin from '../views/headerLogin/headerLogin';
import FooterCompont from '../views/footer/footer';

const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    paddingInline: 50,
    backgroundColor: '#7dbcea',
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const routes = (
    <BrowserRouter>
        <Layout>
            <Header style={headerStyle}>
                <Routes>
                    <Route path="*" exact element={<Home />} />
                    <Route path="/login" exact element={<HeaderLogin />} />
                </Routes>
            </Header>
            <Content style={contentStyle}>
                <Routes>
                    <Route path="/login" exact element={<Login />} />
                </Routes>
            </Content>
            <Footer style={footerStyle}>
                <Routes>
                    <Route path="/login/:id" exact element={<FooterCompont />} />
                </Routes>
            </Footer>
        </Layout>
    </BrowserRouter>
);

export default routes;
