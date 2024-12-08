import { createRoot } from 'react-dom/client'
import AppRouter from '@routes/AppRouter';
// layouts
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <AppRouter/>
)
