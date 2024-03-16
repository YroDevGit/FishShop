import React, { useState, useEffect } from 'react';
import {UserID} from './user';
import {Modax, Loadix, AddedToCart, ErrorMessage} from './modax';
import {CartIcon} from './BEcomponents';


function FishModule({title}){
    const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [fish, setFish] = useState("");
  const [color, setColor] = useState(""); 

  useEffect(() => {
    searchNow("");
}, []);


const searchNow = async(searchQuery) =>{
    setQuery(searchQuery);
    try {
      const response = await fetch(`/api/showFish?${searchQuery}`); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  const handleSearch = (event) => {
    const {name, value} = event.target; 
    if(name == "ifish"){ // ifish is the name of the first input <input name = "ifish"
        setFish(value);
        const searchQuery = `q=${value}&c=${color}`;
        searchNow(searchQuery);
    }
    if(name == 'icolor'){ // ifish is the name of the second input <input name = "icolor"
        setColor(value);
        const searchQuery = `q=${fish}&c=${value}`;
        searchNow(searchQuery);
    }
    
  };

  

    return(
        <div className="container-fluid fruite py-5 search-parent border border-primary">
    <div className="container py-5">
        <div className="tab-class text-center">
            <div className="row g-4">
                <div className="col-lg-4 text-start">
                    <h1>{title}</h1>
                </div>
                <div className="col-lg-15 text-end">
                    <ul className="nav nav-pills d-inline-flex text-center mb-20">
                        <li className="nav-item search-sticky">
                            <a className="d-flex"  >
                                <span className="text-dark col-lg-30" ><input type="search" name='ifish' onChange={handleSearch} placeholder="Search fish here..." className="forma-control p-30"></input> <input type="search" name='icolor' onChange={handleSearch} placeholder="Search color here..." className="forma-control p-30"></input></span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <div id="" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                
                               {results.length > 0 && results.map((col)=>
                               <FishCard fishid={col.fish_code} title={col.fish_name} description={col.description} image={"/storage/uploads/"+col.fish_image} price={col.price} maxItems={col.quantity}/>
                               )}
                               {
                                results.length < 1 && <div>No fish found related on search.!</div>
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</div>
    );
}







const FishCard = ({fishid,title, description, price, image, maxItems}) =>{
const [loading, setLoading] = useState(false);
const [added, setAdded] = useState("0");
const [qty, setQty] = useState(1);
const [maximum, setmaximum] = useState(0);
const [ERROR, SETERROR] = useState("");



const  id = UserID();


const addToCart = async ({fid,price, mx}) =>{
    setLoading(true);
    setAdded("0");
    
    try {
        const respo = await fetch(`/api/addToCart?id=${id}&fish=${fid}&price=${price}&maximum=${mx}&qty=${qty}`);
        if (respo.ok) {
            const contentType = respo.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                setTimeout(oki, 3000);
                const successResponse = await respo.json();
                console.log(successResponse); 
            } else {
                // Insuficient item
                console.error('Error: Response is not JSON');
                setTimeout(noqty, 3000);
            }
        } else {
            const err = await respo.json();
            SETERROR(err.error.qty);
            setTimeout(notoki, 3000);
        }
    } catch (error) {
        console.error('Error:', error);
        setTimeout(notoki, 3000);
    }
    MaxQty(fishid, maxItems);
}



const MaxQty = async(fishid, maxItems) =>{
    const mxqty = await fetch(`/api/getMaxQty?id=${fishid}`);
    if(mxqty.ok){
        const maxJson = await mxqty.json();
        const newMax = maxItems-maxJson[0].max;
        setmaximum(newMax);
    }
    else{
        console.log(mxqty.statusText);
    }
   
}

useEffect(()=>{
    MaxQty(fishid, maxItems);
    const intervalId = setInterval(() => {
        MaxQty(fishid,maxItems); 
    }, 1000);

    return () => clearInterval(intervalId);
},[fishid,maxItems, maximum]);

const oki = () =>{
    setLoading(false);
    setAdded("1");
}
const notoki = () =>{
    setLoading(false);
    setAdded("-1");
}

const noqty = () =>{
    setLoading(false);
    setAdded("-3");
}

const handleQuantityChange = (event) => {
    setQty(parseInt(event.target.value));
};



    return(

<div className="col-md-6 col-lg-4 col-xl-3 ">
       {loading == true && <Loadix />}
       {added == "1" && <AddedToCart />}
       {added == "-1" && <ErrorMessage  message={ERROR}/>}
       {added == "-3" && <ErrorMessage  message={"Sorry. Insuficient Quantity"}/>}
    <div className="rounded position-relative fruite-item border border-primary">
        <div className="fruite-img">
            <img src={image} className="w-100 rounded-top" alt="" height={300}></img>
        </div>
        
        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"  style={{top:"10px", left: "10px"}}>FISH</div>
        <div className='card-row' align="left">
        {maximum>0 && <small >Stocks: {maximum}</small>}
        {maximum<=0 && <small className='text-danger'>Stocks: {0}</small>}
            
        </div>
        <div className="p-4 border-top-0 rounded-bottom">
            <h4>{title}</h4>
            <p className="text-dark fs-5 fw-bold mb-0">{"₱"+price}</p>
            <div className='prod-description'>
            <p>{description}</p>
            </div>
           
            <div className="d-flex justify-content-between flex-lg-wrap add-to-cart">
            <div className="card-qty"><input type='number' className='form-control' value={qty} onChange={handleQuantityChange} step={1}></input></div>
                {maximum>0 && <a onClick={() => addToCart({ fid: fishid, price:price, mx: maximum })} className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>}
                {maximum<=0 && <a  className="btn disabled border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>}
            </div>
        </div>
        
    </div>
</div>

    );
}


export {FishModule};