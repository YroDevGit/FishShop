<?php 
namespace App\Http\Unique;

class code{
    function getCode(){
        $fr = new \DateTime();
        $code = array("1","2","3","4","5","6","7","8","9","0","T","Y","R","O","N", "E", "M","A","L","C","Z","P","H","U","I","G","F","K","D","S");
        shuffle($code);
        $code = "CD".$fr->format("YMdHmi").$code[0].$code[1].$code[2].$code[3].$code[4].$code[5].$code[6].$code[7].$code[8].$code[9].$code[10];
        return $code;
    }
    
}
