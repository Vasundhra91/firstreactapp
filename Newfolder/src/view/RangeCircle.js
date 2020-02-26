import React from 'react';
import  '../CommonStyle/bootstrap.css';

    const RangeCircle = ({Maapdetails, DeleteMaapdetails })=> {
    const maaplist= Maapdetails.map(maap=>{
     return (
    <div className="RangeCircle" key={maap.id}>
     
     <div> Aircraft:= {maap.Aircraft} </div>
     <div> Airport:= {maap.Airport} </div>
     <div> OAGCode:= {maap.OAGCode} </div> 
     <div> </div>
     <button onClick={()=>{DeleteMaapdetails(maap.id)} }> Delete Item </button>
     <div>---------------------------------</div>
    </div>
     )}
    )
    return(
      <div>
        {maaplist }
      </div>
    )

}
export default RangeCircle;