import React from "react";
import style from "./Card.module.css" 
import {Link} from "react-router-dom"

export default function Card({key,id,name,species,gender,status,origin,onClose,image}) {
   // console.log(id);
   return (
      <div className={style.divCard}>
         
         
         {/* 
         <h2 className={style.h2Card} data-text="Especie: "> {species}</h2> */}
         {/* <h2 className={style.h2Card} data-text="Genero: "> {gender}</h2>
         <h2 className={style.h2Card} data-text="Estado: "> {status}</h2>
         <h2 className={style.h2Card} data-text="Origen: "> {origin}</h2> */}
         <img className={style.img} src={image} alt={name} />
         <div className={style.overlay}>
         

               <h2 className={style.h2Card} > {name}</h2>

               <div className={style.containerButton}>
                  <button className={style.buttonClose} onClick={()=>onClose(id)}>X</button>
                  <Link to={`/detail/${id}`}><button className={style.button}>Detalle</button></Link>
               </div>
               
         </div>
      </div>
   );
}
