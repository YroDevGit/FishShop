import React,{useState, useEffect} from "react";
import axios from "axios";

const Countries = () =>{
const [data, setData] = useState([]);
const [code, setCode] = useState("");


const getData = async() =>{
try {
    const response = await axios.get("https://psgc.gitlab.io/api/provinces/");
    const d = response.data;
    setData(d);

} catch (error) {
    console.log(error);
}
}

const showCity =(event)=>{
    const value = event.target.value;
    setCode(value);
}

useEffect(()=>{
    getData();
},[]);


    return(
        <div>
            <select className="forom-controll" name="province" onChange={showCity}>
                <option value={"1"}>Select Province</option>
           {data.map((column)=>
                <option value={column.code}>{column.name}</option>
           )}
        </select>
        <Cities province={code} />
        </div>
    );
}


const Cities = ({province})=>{
    const [data, setData] = useState([]);
    const [txt, settxt] = useState("");

    const getData = async() =>{
        try {
            
            const response = await axios.get(`https://psgc.gitlab.io/api/provinces/${province}/cities-municipalities/`);
            const d = response.data;
            setData(d);
        } catch (error) {
            console.log(error);
        }
    }
    

    
    useEffect(()=>{
        getData();
    },[province]);

    return(
        <select className="forom-controll">
           {province != 1 && data.map((column)=>
                <option value={column.code}>{column.name}</option>
           )}
        </select>
    )
   
}

export {Countries};