/*
 * @Author: your name
 * @Date: 2020-12-15 09:53:21
 * @LastEditors: xiasong
 * @LastEditTime: 2020-12-15 15:06:27
 * @Description:
 * @FilePath: \learn_threejs\threejs_learning\src\App.js
 */
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './global.less';
import route from './route';
import links from './route/links';
const { Content, Footer, Sider } = Layout;

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.app}>
      <Layout style={{ width: '100%', height: '100%' }}>
        <Sider
          collapsible
          collapsed={isCollapsed}
          onCollapse={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <h1 className={styles.title}>three学习 </h1>
          {links()}
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {route()}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <h3>BE WHAT YOU BAN BE</h3>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
