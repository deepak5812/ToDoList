import React from "react";


const ListItemsToShows=(props)=>{
    const del=(id)=>{
        props.deletingArr((olditems)=>{

            return olditems.filter((ele,index)=>{
return index!==id;
            })
        });
    };

if(props.text!==""){
    return(<div className="lsdiv"><i onClick={()=>{
        del(props.id);
    }
    } className="DeleteBtn">x</i><li> {props.text }</li></div>);
 }
else{
   
    return(<div className="lsdiv"></div>);
 }

};
export default ListItemsToShows;