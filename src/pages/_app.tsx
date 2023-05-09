/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/prop-types */
import { ComponentType, useEffect, useState } from 'react';
import { NavLink, useLocation } from '@modern-js/runtime/router';

import { Layout, Nav, Button, Avatar, Tooltip, Input } from '@douyinfe/semi-ui';
import {
  IconBell,
  IconHelpCircle,
  IconHome,
  IconHistogram,
  IconLive,
  IconSetting,
  IconMoon,
  IconSearch,
} from '@douyinfe/semi-icons';
import logo from '@/static/logo.png';
import '../App.css';
import { setGlobalMode, getGlobalMode } from '@/utils/mode';

const { Header, Footer, Sider, Content } = Layout;

const routerMap = {
  workspace: '/',
  packages: '/packages',
  scopes: '/scopes',
  security: '/security',
  setting: '/setting',
};

const App = ({ Component, ...pageProps }: { Component: ComponentType }) => {
  const [mode, setMode] = useState(getGlobalMode());
  const [selectedKeys, setSelectedKeys] = useState(['/']);
  useEffect(() => {
    setGlobalMode(getGlobalMode() || 'light');
  }, []);
  const switchMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setGlobalMode(newMode);
    setMode(newMode);
  };
  const location = useLocation();
  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location]);
  return (
    <Layout>
      <Header
      // style={{
      //   backgroundColor: 'var(--semi-color-bg-1)',
      //   position: 'sticky',
      //   top: 0,
      //   zIndex: 1000,
      // }}
      >
        <Nav
          mode="horizontal"
          header={{
            logo: <img src={logo} />,
            text: 'Private npm',
          }}
          footer={
            <>
              <Button
                theme="borderless"
                icon={<IconBell size="extra-large" />}
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
              />
              <Button
                theme="borderless"
                icon={<IconHelpCircle size="extra-large" />}
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
              />
              <Tooltip
                content={`切换到${mode === 'light' ? '暗色' : '亮色'}模式`}
              >
                <Button
                  onClick={switchMode}
                  theme="borderless"
                  icon={<IconMoon size="extra-large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
              </Tooltip>
              <Input
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
                prefix={<IconSearch />}
                showClear
                placeholder="search package"
              />
              <Avatar color="blue" size="small" style={{ flexShrink: 0 }}>
                B
              </Avatar>
            </>
          }
        />
      </Header>
      <Layout>
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            selectedKeys={selectedKeys}
            style={{ maxWidth: 220, height: '100%' }}
            renderWrapper={({ itemElement, props }) => {
              return (
                <NavLink
                  activeClassName="selected"
                  style={{ textDecoration: 'none' }}
                  to={props.itemKey as string}
                  exact
                >
                  {itemElement}
                </NavLink>
              );
            }}
            items={[
              {
                itemKey: routerMap.workspace,
                text: 'Workspace',
                icon: <IconHome size="large" />,
              },
              {
                itemKey: routerMap.packages,
                text: 'Packages',
                icon: <IconHistogram size="large" />,
              },
              {
                itemKey: routerMap.scopes,
                text: 'Scopes',
                icon: <IconLive size="large" />,
              },
              {
                itemKey: routerMap.security,
                text: 'Security',
                icon: <IconSetting size="large" />,
              },
              {
                itemKey: routerMap.setting,
                text: 'Setting',
                icon: <IconSetting size="large" />,
              },
            ]}
            footer={{
              collapseButton: true,
            }}
          />
        </Sider>
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
      <Footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          color: 'var(--semi-color-text-2)',
          backgroundColor: 'rgba(var(--semi-grey-0), 1)',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span>Copyright © 2022 @Beace. All Rights Reserved. </span>
        </span>
      </Footer>
    </Layout>
  );
};

export default App;
