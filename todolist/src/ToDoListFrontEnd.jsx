import React ,{useState} from "react";
import './index.css';
import ListItemsToShows from "./ListOfItems";
const ToDoList =()=>{
    const [listItem,setListItem]=useState("");
    const [arr,SetArr]=useState([]);
    
    const showingText=(event)=>{
        if(event.target.value.length<15){
      setListItem(event.target.value);
    }else{
        alert("size limit exceeded !!");
        setListItem("");
    }
    };
    const onSelectingPlusButton=()=>{
        if(listItem.length===0){
            alert("Please Enter Something !!");
        }else{
    SetArr((oldArr)=>{
        return(
[...oldArr,listItem]
        );
    });
    setListItem("");
    }
};
    
return(
<>
<div className="mainDiv">
<div className="listDiv">
<p className="headingToDo"> Simple ToDo List</p>
<div className="divboth">
<div className="enterTextDiv">
<input type="text" placeholder="Enter The List Item" className="editText" onChange={showingText} value={listItem}/>
</div>
<div className="divbtn">
<button className="plusbtn" onClick={onSelectingPlusButton}> + </button>
</div>
</div>
<div className="showingListWithButton">
<ul className="unorderedList">
    {arr.map((value,index)=>{
       return(<>
    <ListItemsToShows
       key={index}
       text={value}
       id={index}
       deletingArr={SetArr}
       />           
         </>);
           }
    )}
</ul>

</div>
</div>
</div>
</>
);
};
export default ToDoList;
