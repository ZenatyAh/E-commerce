import { createRoot } from 'react-dom/client'
import AppRouter from '@routes/AppRouter';
// layouts
import 'bootstrap/dist/css/bootstrap.min.css';
// redux import
import { Provider } from 'react-redux';
import store from "@store/index"
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <AppRouter/>
    </Provider>
)
