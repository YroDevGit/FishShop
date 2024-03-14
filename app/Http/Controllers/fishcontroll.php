<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\fish;
use App\Http\Unique\code;

class fishcontroll extends Controller
{
    //

    public function addFish(Request $req){
        $req->validate([
            "fish" => "required",
            "color" => "required",
            "price" => "required|min:1",
            "image" => "required|mimes:png,jpg,gif,webp|max:2048",
            "quantity" => "required|min:1",
            "description" => "required"
        ]);
        $img = $req->file('image');
        $fr = new \DateTime();
        $newfile = "img".$fr->format("YMdHmi").".".$img->extension();

        $path = $img->storeAs("public/uploads",$newfile);
       
        $fsh = new code();
        $fish_code = $fsh->getCode();
        
        fish::insert([
            "fish_code" => $fish_code,
            "fish_name" => $req->input("fish"),
            "fish_color" => $req->input("color"),
            "price" => $req->input("price"),
            "quantity" => $req->input("quantity"),
            "description" => $req->input("description"),
            "date_added" => now(),
            "stat" => "0",
            "fish_image" => $newfile
        ]);
        return back()->with("success","success");
    }

    function showFish(Request $req){
        $val = "%".$req->input("q")."%"; 
        $col = "%".$req->input("c")."%";  
        $ret = fish::where("fish_code", "like", $val)->orWhere("fish_name", "like", $val)->where("fish_color", "like", $col)->take(7)->get();
        return response()->json($ret);
    }
}
