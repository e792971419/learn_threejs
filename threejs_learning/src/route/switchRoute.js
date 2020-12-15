/*
 * @Author: your name
 * @Date: 2020-12-15 14:36:19
 * @LastEditors: xiasong
 * @LastEditTime: 2020-12-15 14:44:07
 * @Description:
 * @FilePath: \learn_threejs\threejs_learning\src\route\switchRoute.js
 */
import { Switch, Route } from 'react-router-dom';

export default (routes = []) => {
  return (
    <Switch>
      {routes.map((item) => (
        <Route exact key={item?.path} path={item?.path}>
          {item?.Component}
        </Route>
      ))}
    </Switch>
  );
};
