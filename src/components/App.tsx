import React, { useState } from 'react';
import cls from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import cloud from '../assets/cloud.png';
import tiger from '../assets/tiger.jpg';
import Art from '@/assets/art.svg';

// tree shaking
function TODO() {
  TODO2()
}

function TODO2() {
  throw new Error();
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => TODO();
  // TODO(222);
  // if(__PLATFORM__ === 'desktop') {
  //   return <div>IsDesktopPlatform</div>
  // }

  // if(__PLATFORM__ === 'mobile') {
  //   return <div>IsMobilePlatform</div>
  // }

  //   if(__IS_DEV__ === 'development') {
  //   // addDevelopmentFunction()
  // }

  return (
    <div data-testid={'AppDataTestId'}>
      <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img src={cloud} alt="" />
        <img src={tiger} alt="" />
        <div>
          <Art className={cls.icon} width={100} height={100} fill='aqua' />
        </div>
      </div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <h1 className={cls.value}>{count}</h1>
      <button className={cls.button} onClick={increment}>+</button>
      <Outlet/>
    </div>
  );
};

export default App;