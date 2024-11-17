import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import PostsList from './PostsList';
import NavigationBar from './Navbar';
import Home from './Home';
import Login from './Login';
import Gallery from './Gallery';
const App = () => {
    return (
        <Router>
            <div>
                <NavigationBar />
                <div className="container">
                    <h1 className="my-4">Outstanding Coffee Shop</h1>
                    <Routes>
                        <Route path="/" element ={<PostsList/>}/>
                       <Route path='/Create' element={<CreatePost/>}/>
                       <Route path="/Edit/:id" element={<EditPost/>}/>
                       <Route path="/Home" element={<Home/>}/>
                       <Route path="/Login" element={<Login/>}/>
                       <Route path="/Gallery" element={<Gallery/>}/>
                       
                    </Routes>
                </div>
            </div>
        </Router>
    );
};
export default App;