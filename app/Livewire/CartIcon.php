<?php

namespace App\Livewire;

use Livewire\Component;
use App\Http\Controllers\cartcontroll; 

class CartIcon extends Component
{
    public $cartItemCount;

    public function mount(cartcontroll $cartController)
    {
        $this->updateCartItemCount($cartController);
    }

    public function render()
    {
        return view('livewire.cart-icon',["cartItem"=>$this->cartItemCount]);
    }

    public function updateCartItemCount(cartcontroll $cartController)
    {
        $this->cartItemCount = $cartController->getCartNumber();
    }
}
