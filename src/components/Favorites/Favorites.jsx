
import React from "react";
import Card from "../Cards/Card/Card";
import { connect } from "react-redux";
import style from './Favorites.module.css'

class Favorites extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.container}>
                {this.props.myFavorites?.map(pj=>{
                    return <Card id={pj.id} name={pj.name} image={pj.image} onClose={pj.onClose}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps,null)(Favorites)