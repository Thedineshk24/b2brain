import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { items } from '../utils/sidebarUtils';
import SearchBox from '../components/Search';
import Home from '../components/Home';

const { Header, Footer, Sider } = Layout;

const LayoutB2Brain = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo">
                    <img src="https://assets.b2brain.com/wp-content/uploads/2021/04/26100605/b2brain_logo.png" alt="b2brain" />
                </div>
                <Menu className='menu' theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        background: '#FFFFFF',
                    }}
                >
                    <SearchBox />
                </Header>
                {/* ALL OTHER COMPONENTS OF ANY CONTENT GOES HERE */}
                <Home />
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    {`B2Brain ©${new Date().getFullYear()} Created by Dinesh Katariya`}
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutB2Brain;