import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from "./app";

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root')
)