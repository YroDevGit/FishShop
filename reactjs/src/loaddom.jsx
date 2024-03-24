import React,{useState, useEffect} from "react";



const LoadDom = () =>{
    const [loaded, setload] = useState(true);
    useEffect(()=>{
    const  reloading =() =>{
        setload(false);
    }
    window.addEventListener("load", reloading);
    return () => {
        document.removeEventListener('load', reloading);
      };
    },[]);
    return(
        <div>
            {loaded==true && 
    <div id="loadix">
    <div className="loadix-body">
        <div className="load-header">
            <div className="load-content">
                <img src="images/loadfish.png" alt="" height="100" width="95"></img>
            </div>
        </div>
    </div>
</div>}
{loaded ==false && <span></span>}
        </div>
    )
}



export {LoadDom};