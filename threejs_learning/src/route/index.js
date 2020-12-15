/*
 * @Author: your name
 * @Date: 2020-12-15 14:14:00
 * @LastEditors: xiasong
 * @LastEditTime: 2020-12-15 14:47:08
 * @Description:
 * @FilePath: \learn_threejs\threejs_learning\src\route\index.js
 */
import { UserOutlined } from '@ant-design/icons';
import Base from '../views/Base/index.tsx';
import About from '../views/About/index.tsx';

import switchRoute from './switchRoute';
export const RouteSelect = [
  {
    path: '/',
    icon: <UserOutlined />,
    name: '首页',
    Component: <Base />,
  },
  {
    path: '/about',
    icon: <UserOutlined />,
    name: '关于',
    Component: <About />,
  },
];

export default () => {
  return switchRoute(RouteSelect);
};
