import { useState } from "react"; 
function Modax({title, h1}){
const [open, setOpen] = useState(true);

const closeModax = () =>{
    setOpen(false);
}

    return(
        <div>
            {open == true && <div className="modal fade show modax" id="modalCenter" tabindex="-1" style={{display: "block"}} aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="modalCenterTitle">{{title}}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModax}></button>
      </div>
      <div className="modal-body" align="center">
        <div className="row">
          <h2>{h1}</h2>
        </div>
        
      </div>
      <div className="modal-footer">
        
        <button type="button" onClick={closeModax} className="btn btn-primary">OKAY</button>
      </div>
    </div>
  </div>
</div>}
        </div>
    );
}



const Loadix = () => {
  return(
    <div id="loadix">
    <div className="load-body">
        <div className="load-header">
            <div className="trow">
            <span>Loading, please wait...</span>
            </div>
            
            <div align="center" className="trow">
            <span className="circle-load"></span>
            </div>
        </div>
    </div>
</div>
  );
}

const AddedToCart = () => {
  const [open, setOpen] = useState(true);
  if(open=="true"){
    setOpen(true);
  }
  const closePopUp = () =>{
    setOpen(false);
  }
  return(
    <div>
      {open==true && <div id="loadix">
    <div className="load-body">
        <div className="load-header">
            <div className="trow">
            <span>Success.! Item Added to cart.</span>
            </div>
            <div className="trow">
              <span className="modax-icon-m">✔️</span>
            </div>
            
            <div align="center" className="trow">
            <button type="button" className="btn btn-primary" onClick={closePopUp}>OKAY</button>
            </div>
        </div>
    </div>
</div>}

    </div>
  );
}

const NotOnCart = ({message}) => {
  const [open, setOpen] = useState(true);
  if(open=="true"){
    setOpen(true);
  }
  const closePopUp = () =>{
    setOpen(false);
  }
  return(
    <div>
      {open==true && <div id="loadix">
    <div className="load-body">
        <div className="load-header">
            <div className="trow">
            <span>{message}</span>
            </div>
            <div className="trow">
              <span className="modax-icon-m">⚠️</span>
            </div>
            
            <div align="center" className="trow">
            <button type="button" className="btn btn-primary" onClick={closePopUp}>OKAY</button>
            </div>
        </div>
    </div>
</div>}

    </div>
  );
}

const ErrorMessage = ({ message}) => {
  const [open, setOpen] = useState(true);
  if(open=="true"){
    setOpen(true);
  }
  const closePopUp = () =>{
    setOpen(false);
  }
  return(
    <div>
      {open==true && <div id="loadix">
    <div className="load-body">
        <div className="load-header">
            <div className="trow">
            <span>{message}</span>
            </div>
            <div className="trow">
              <span className="modax-icon-m">⚠️</span>
            </div>
            
            <div align="center" className="trow">
            <button type="button" className="btn btn-primary" onClick={closePopUp}>OKAY</button>
            </div>
        </div>
    </div>
</div>}

    </div>
  );
}
export {Modax, Loadix, AddedToCart, NotOnCart, ErrorMessage};