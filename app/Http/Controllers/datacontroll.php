<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\datatable;

class datacontroll extends Controller
{

    public function getDataTable(Request $req){
        $value = $req->input("q");
        $data = datatable::where("data_name",$value)->get();
        return response()->json($data);
    }

    

}
