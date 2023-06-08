import {
  LeftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLayouts } from '../hooks';
import { RouterMenu } from '../interface';
import { getSiderMenus } from '../utils';
import Logo from './../Logo';

export interface SiderProps extends MenuProps {
  menus?: RouterMenu[];
  dark?: boolean;
}

const Sider = (props: SiderProps) => {
  const { theme } = props;
  const location = useLocation();
  const {
    HandleMenu,
    collapsed,
    siderWidth = 260,
    setCollapsed,
  } = useLayouts();

  const collapsedView = useMemo(
    () =>
      React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        style: { fontSize: 20, marginTop: 13 },
        onClick: () => setCollapsed(!collapsed),
      }),
    [collapsed],
  );

  const menus = HandleMenu.getSiderMenus(location.pathname);
  const items = useMemo(() => {
    return getSiderMenus(menus, !!ANTD_MENU_TOP_LEFT);
  }, [menus]);
  if (!items.length) {
    return <React.Fragment />;
  }
  if (true) {
    return (
      <Layout.Sider
        // className="antdp-basic-layouts-sider"
        width={siderWidth}
        collapsed={collapsed}
        theme={theme}
      >
        <div
          className="antdp-basic-layouts-sider-collapsed-button"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <RightOutlined style={{ width: '1em', height: '1em' }} />
          ) : (
            <LeftOutlined style={{ width: '1em', height: '1em' }} />
          )}
        </div>
        {!!ANTD_MENU_SLIDER && (
          <div>
            <Logo />
          </div>
        )}
        <Menu
          {...props}
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname]}
          mode="inline"
          theme={theme}
          items={items}
          style={{ width: '100%' }}
        />
      </Layout.Sider>
    );
  } else {
    return (
      <Layout.Sider
        className="antdp-basic-layouts-sider"
        collapsible
        width={siderWidth}
        collapsed={collapsed}
        theme={theme}
        onCollapse={(value) => {
          setCollapsed(value);
        }}
        trigger={
          <div className="antdp-basic-layouts-collapsed">{collapsedView}</div>
        }
      >
        {!!ANTD_MENU_SLIDER && (
          <div>
            <Logo />
          </div>
        )}
        <Menu
          {...props}
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname]}
          mode="inline"
          theme={theme}
          items={items}
          style={{ width: '100%' }}
        />
      </Layout.Sider>
    );
  }
};
export default Sider;
