import Card from './Card/Card';
import style from './Cards.module.css'

 
export default function Cards(props) {
   return (<div className={style.container}>
      {props.characters.map(pj =>{
         return <Card 
         key={pj.id}
         id={pj.id}
         name={pj.name} 
         species={pj.species} 
         onClose={props.onClose} 
         // gender={pj.gender} 
         // status={pj.status} 
         // origin={pj.origin.name} 
          image={pj.image}
         />
      })}
   </div>);
}
 