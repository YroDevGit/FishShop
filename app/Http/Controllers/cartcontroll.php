<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cart;
use App\Http\Unique\code;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class cartcontroll extends Controller
{

    // add to cart
    public function addToCart(Request $req){

        $validator = Validator::make($req->all(), [
            "qty" => "integer|min:1|max:".$req->input('maximum')
        ]);
    
      
        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()->toArray()
            ], 422); 
        }

        $user = $req->input('id');
        $fish = $req->input('fish');
        $price = $req->input('price');
        $qty = $req->input('qty');

        $cd = new code();
        $newText = $cd->getCode();

        cart::insert([
            "user_id" => $user,
            "fish_code" => $fish,
            "price" => $price,
            "quantity" => $qty,
            "total" => $price,
            "purchase_code" => $newText,
            "stat" => "0",
            "purchase_date" => now()
        ]);
        $successMessage = [
            [
                "fish_id" => $fish,
                "qty" => $req->input('qty'),
                "max" => $req->input('maximum')
            ]
        ];
        return response()->json($successMessage);
    }


    //get the cart items.
    public function getCartNumberOfItems(){
        $user = session("userID");
        $data = cart::where("user_id",$user)->get();
        return $data;
    }

    public function getProductOnCart(Request $req){
        $id = $req->input('id');
        $data = DB::select("select sum(quantity) as 'max' from cart where stat = 0 and fish_code = ?",[$id]);
        return response()->json($data);
    }


    //get the cart items count
    public function getCartNumber(){
        $user = session("userID");
        $data = cart::where("user_id",$user)->count();
        return $data;
    }

    // json data to front end
    public function getCartItems(Request $req){
        $data = $this->getCartNumberOfItems();
        return response()->json($data);
    }

    public function showCartAll(){
        $user = session("userID");
        $data = DB::select("SELECT
        MIN(f.fish_image) as img,
        MIN(f.fish_name) AS fish_name,
        MIN(c.price) as price,
        SUM(c.quantity) AS total_quantity,
        SUM(c.price) AS total_price,
        SUM(c.total) AS total_amount,
        MIN(c.purchase_code) AS purchase_code
      FROM
        cart c
      INNER JOIN
        fish f ON f.fish_code = c.fish_code
      WHERE
        c.user_id = ?
      GROUP BY
        c.fish_code;
      
      ",[$user]);
        return response()->json($data);
    }
}
