/*
 * @Author: your name
 * @Date: 2020-12-15 14:35:58
 * @LastEditors: xiasong
 * @LastEditTime: 2020-12-15 14:54:38
 * @Description:
 * @FilePath: \learn_threejs\threejs_learning\src\route\links.js
 */
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { RouteSelect } from './index';
export default (routes = RouteSelect) => {
  return (
    <Menu theme="dark" mode="inline">
      {routes.map((item) => (
        <Menu.Item key={item?.path} icon={item?.icon}>
          <NavLink to={item?.path}>{item?.name}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};
