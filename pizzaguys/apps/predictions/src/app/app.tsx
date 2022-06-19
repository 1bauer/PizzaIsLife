// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@mui/material';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import Diagramm1 from './diagramms/diagramm1';
import Diagramm2 from './diagramms/diagramm2';

export function App() {
  return (
    <>
      <div className="title">
        <span>sports related analytics</span>
      </div>
      <div className="headline">
        <span>views per month per topic</span>
      </div>

      <div style={{ paddingBottom: '100px', paddingTop: '40px' }}>
        <Diagramm1 />
      </div>
      <div className="headline">
        <span>time spend in hours per month per topic</span>
      </div>
      <Diagramm2 />
    </>
  );
}

export default App;
