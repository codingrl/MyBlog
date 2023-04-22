import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import PostsPage from './pages/PostsPage/PostsPage';
import Footer from './components/Footer/Footer';
import SinglePostPage from './pages/SinglePost/SinglePostPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/post/:id' element={<SinglePostPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
