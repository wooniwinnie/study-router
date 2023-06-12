import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Videos } from './pages/Videos';
import { Home } from './pages/Home';
import { Root } from './pages/Root';
import { VideoDetail } from './pages/VideoDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: 'videos', element: <Videos /> },
            { path: 'videos/:videoId', element: <VideoDetail /> },
        ],
    },
    {
        path: '/videos',
        element: <Videos />,
        errorElement: <NotFound />,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
