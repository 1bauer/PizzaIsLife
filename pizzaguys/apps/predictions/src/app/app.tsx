// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@mui/material';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { BrowserRouter, Link, Router } from "react-router-dom";

export function App() {
  return (
    <>
<Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
          </Switch>
        </div>
  
      <div />
    <div>
        <Button variant="contained">
          Add to Cart
        </Button>
        <Button variant="contained">
          Add to Cart
        </Button>
      </div>
      <NxWelcome title="predictions" />
      </Router>
      </>
  );
}


export default App;
