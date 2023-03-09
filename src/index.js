import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';
import MoviePage from './pages/MoviePage';
import Movie from './components/Movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element: <HomePage />
      },
      {
        path: "/MovieListPage",
        element: <MovieListPage />
      },
      {
        path: "/MoviePage",
        element: <MoviePage />,
        children: [
          {
            path: "/MoviePage/:movie",
            element: <Movie />
          }
        ]
      }
    ]

  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
