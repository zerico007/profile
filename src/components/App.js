import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import Resume from './Resume';
import Projects from './Projects';
import Contacts from './Contacts';
import Home from './Home';
import {usePersistedState} from '../utils';


function App() {

  const [ mobile, setMobile ] = usePersistedState('mobile', false);
  const [ route, setRoute ] = usePersistedState('route', 'home');

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth < 768 ? setMobile(true) : setMobile(false));
});

  return (
    <>
    <NavBar mobile={mobile} setRoute={setRoute} route={route}/>
      {route === 'home' && <Home mobile={mobile} setRoute={setRoute}/>}
      {route === 'resume' && <Resume mobile={mobile}/>}
      {route === 'projects' && <Projects mobile={mobile}/>}
      {route === 'contacts' && <Contacts mobile={mobile}/>}
    </>
  );
}

export default App;
