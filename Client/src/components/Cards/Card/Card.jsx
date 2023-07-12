import React, { useState, useEffect } from "react";
import style from "./Card.module.css" 
import {Link, useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addFav,removeFav } from "../../../redux/actions";

export default function Card({key,id,name,onClose,gender,image}) {
   
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state=> state.myFavorites)
   const dispatch = useDispatch();
   const locate = useLocation();

   //Se puede hacer con connect

   // const mapDispatchToProps = { 
   //       addFav: dispatch(addFav()),
   //       removeFav: dispatch(removeFav())
   //    }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false)
         // mapDispatchToProps.removeFav(id)
         dispatch(removeFav(id))
      }else{
         setIsFav(true)
         // mapDispatchToProps.addFav(id,name,image)
         dispatch(addFav({id,name,gender,image, onClose}))
      }
   }

   const removeFavorite = (id)=>{
      setIsFav(false)
      dispatch(removeFav(id))
   }

   return (
      <div className={style.divCard}>
         <img className={style.img} src={image} alt={name} />
         <div className={style.overlay}>
               <h2 className={style.h2Card} > {name}</h2>
               <div className={style.containerButton}>
                  {  isFav ? (
                     <button onClick={() => handleFavorite()}>❤️</button>
                  ) : (
                     <button onClick={() => handleFavorite()}>🤍</button>
                  )}
                  { locate.pathname === '/favorites' ? null: <button className={style.buttonClose} onClick={()=>{
                     onClose(id) 
                     removeFavorite(id)}} >X</button> }
                  <Link to={`/detail/${id}`}>
                     <button className={style.button}>Detalle</button>
                  </Link>
               </div>
         </div>
      </div>
   );
}



{/* 
         <h2 className={style.h2Card} data-text="Especie: "> {species}</h2> */}
         {/* <h2 className={style.h2Card} data-text="Genero: "> {gender}</h2>
         <h2 className={style.h2Card} data-text="Estado: "> {status}</h2>
         <h2 className={style.h2Card} data-text="Origen: "> {origin}</h2> */}