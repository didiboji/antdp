import React, { useState, useMemo, Fragment } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import LayoutTabs from '@antdp/layout-tabs';
import MeunView from './Menu';
import Breadcrumb from './Breadcrumb';
import TopRightMenu from './TopRightMenu';
import LogoHeader from './LogoHeader';
import { getTreeList } from './utils';
import './index.css';

export default (props = {}) => {
  const {
    route = {
      routes: [],
    },
    projectName = 'Ant Design Pro',
    siderWidth = 260,
    topRightMenu,
    profile = {},
    bodyPadding = 14,
  } = props;
  const [collapsed, setCollapsed] = useState(!!props.collapsed);
  const collapsedView = useMemo(
    () =>
      React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      }),
    [collapsed],
  );

  const headerRightView = useMemo(() => {
    return (
      <Fragment>
        <div style={{ flex: '1 1 0%' }}></div>
        <div className="antdp-global-header-right">
          <TopRightMenu menu={topRightMenu} profile={profile} />
        </div>
      </Fragment>
    );
  }, [profile.avatar, profile.name]);

  return (
    <Layout>
      <Layout.Sider
        width={siderWidth}
        collapsed={collapsed}
        className="antdp-global-sider"
      >
        <LogoHeader
          collapsed={collapsed}
          projectName={projectName}
          logo={props.logo}
        />
        <MeunView {...props} selectedKey={location.pathname} />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ padding: 0 }} className="antdp-global-header">
          <div className="antdp-global-header-left">
            {collapsedView}
            <Breadcrumb routeData={getTreeList(route.routes)} {...props} />
          </div>
          {headerRightView}
        </Layout.Header>
        <Layout.Content>
          <LayoutTabs
            isReRender
            bodyPadding={bodyPadding}
            activeKey={location.pathname}
            dataSource={getTreeList(route.routes)}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
