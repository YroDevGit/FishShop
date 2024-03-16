import React,{useState, useEffect} from "react";
import axios from 'axios';

const FishTable = () =>{
    const [search, setSearch] = useState("");
    const [data, setData]= useState([""]);

    const searchQuery = (event) =>{
        const val = event.target.value;
        setSearch(val);
    }

    const displayData = async () => {
        try {
          const response = await axios.get(`/api/displayFish?q=${search}`);
          const fetchdata = response.data; 
          setData(fetchdata);
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      

    useEffect(()=>{
        displayData();
    },[search]);

    console.log(data);
    return(
        <div className="card">
        <h5 className="card-header">Fish in our shop</h5>
        <div className="col-lg-6 px-2">
        <input type="search" className="form-control" id="si" onChange={searchQuery} value={search} placeholder="Search fish here..."></input>
        </div>
        <div className=" text-nowrap">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Fish</th>
                <th>color</th>
                <th>image</th>
                <th>price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {data.map((column)=>
                <tr>
                <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{column.fish_name}</strong></td>
                <td>{column.fish_color}</td>
                <td>
                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img src={"/storage/uploads/"+column.fish_image} alt="Avatar" className="rounded-circle" ></img>
                    </li>
                   
                   
                  </ul>
                </td>
                <td><span className="badge bg-label-primary me-1">{column.price}</span></td>
                <td>
                  <div className="dropdown">
                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> Edit</a>
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export {FishTable};