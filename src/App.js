//Si la llamas index importas solamente la carpeta
// import axios from "axios";
import React from 'react';
import {useState, useEffect} from "react";
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav";
import About from './view/About/About';
import Detail from './view/Detail/Detail';
import Error from './view/Error';
import Landing from './view/Landing/Landing';
import Favorites from './components/Favorites/Favorites'

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access,setAccess] = useState(false)
   const EMAIL = "luisrodrizza@gmail.com"
   const PASSWORD = "qwe123";
   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home'); 
      }
   }

   function logOut(){
      setAccess(false);
   }


   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = (id) =>{
   let exist = false
   let idN = parseInt(id)

   characters.map(char=>{
      if (char.id === idN) {
         return exist = true
      }
      return exist
   })

      if (!exist) {
         fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(res=>res.json())
         .then((data) =>{
            if (data.name) {
                  setCharacters([...characters,data])
            }else{
               window.alert("No hay personajes con ese ID")
            }
         })
      }else{
         window.alert("No se puede agregar repetidos")
      }
      
      //Esta destructurado porque es un objeto, so no seria respuesta.data
      // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      //    if (data.name) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    } else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // });    
   }

   const onClose = (id)=>{
      let idN = parseInt(id)
      let chara = []
      // setCharacters([]);
      //Se puede hacer con un filter
      characters.map(char =>{
         if (char.id !== idN) {
             return chara.push(char)
         }
         return chara
      })
      setCharacters(chara);
   }
 
    
    return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path="/" element={<Landing login={login}/>}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='*' element={<Error/>}/>
         </Routes>

      </div>
   );
}

export default App;
