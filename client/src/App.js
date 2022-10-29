import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Header from './components/Header';
import Auth from './components/Auth';
import UserBlog from './components/UserBlog';

function App() {
  return (
    <div className="App">
   
    <Header/>
    <Routes>
      <Route path='/login' element={<Auth/>}></Route>
      <Route path='/signup' element={<Auth/>}></Route>
      <Route path='/blogs' element={<Blog/>}></Route>
      <Route path='/MyBlogs' element={<UserBlog/>}></Route>
      <Route path='/MyBlogs/:id' element={<BlogDetails/>}></Route>
      <Route path='/blogs/add' element={<AddBlog/>}></Route>


    </Routes>
    </div>
  );
}

export default App;
