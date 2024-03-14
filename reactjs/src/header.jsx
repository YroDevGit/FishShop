import React, {useState, useEffect} from 'react';

function PageHeader(){
    return(
        <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <InfoLinks textname={"address"} />
                        <EmailLinks textname={"email"} />
                       
                   
                    </div>
                    <div className="top-link pe-2">
                        <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                        <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                    </div>
                </div>
            </div>
    );
}


const EmailLinks = ({textname})=>{
    const [text, setText] = useState("");

    const fetchData = async(textname) =>{
        const response = await fetch(`/api/datatable?q=${textname}`);
    if(response.ok){
        const val = await response.json();
        setText(val[0].data_text);
    }
    else{
        console.log("error");
    }
    }

    useEffect(()=>{
        fetchData(textname);
    },[textname]);

  
    return(
        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i> <a href={"mailto::"+text} className="text-white">{text}</a></small> 
    );
}

const PhoneLinks = ({textname})=>{
    const [data, getData] = useState([]);

    const fetchData = async(textname) =>{
        const response = await fetch(`/api/datatable?q=${textname}`);
    if(response.ok){
        const val = await response.json();
        getData(val);
        console.log(val);
    }
    else{
        console.log("error");
    }
    }

    useEffect(()=>{
        fetchData(textname);
    },[textname]);

    return(
        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">{data.map((column) =><span>{column.data_text}</span>)}</a></small> 
    );
}

const InfoLinks = ({textname})=>{
    const [data, getData] = useState([]);

    const fetchData = async(textname) =>{
        const response = await fetch(`/api/datatable?q=${textname}`);
    if(response.ok){
        const val = await response.json();
        getData(val);
        console.log(val);
    }
    else{
        console.log("error");
    }
    }

    useEffect(()=>{
        fetchData(textname);
    },[textname]);


    return(
        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a className="text-white">{data.map((column) =><span>{column.data_text}</span>)}</a></small> 
    );
}

export {PageHeader};