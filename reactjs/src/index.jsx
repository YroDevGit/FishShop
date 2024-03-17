import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Features} from './component';
import {Modax, Loadix} from './modax';
import reportWebVitals from './reportWebVitals';
import {FishModule} from './FishShop';
import {FooterSection} from './footer';
import {CartIcon} from './BEcomponents';
import {PageHeader} from './header';
import {CartModule} from "./cart";
import {FishTable} from "./fishtable";
import {Countries} from './countries';

try {
  ReactDOM.render(
    <Features />,
    document.getElementById('features')
  );
} catch (error) {
  
}


try {
  ReactDOM.render(
    <Modax title={"Add fish"}  h1={"Data added successfully"}/>,
    document.getElementById('openModax')
  )
} catch (error) {
  
}


try {
  ReactDOM.render(
    <FishModule title={"Shop now"}/>,
    document.getElementById('fishShop')
  )
} catch (error) {
  
}

try {
  ReactDOM.render(
    <Loadix />,
    document.getElementById('loading')
  )
} catch (error) {
  
}


try {
  ReactDOM.render(
    <FooterSection title={"$ELL FISH"} subtitle={"Buy fish all over the philippines"}/>,
    document.getElementById('footerSection')
  )
} catch (error) {
  console.log(error);
}

try {
  ReactDOM.render(
    <CartIcon />,
    document.getElementById('react_cart_icon')
  )
} catch (error) {
  
  console.log(error);
}


try {
  ReactDOM.render(
    <PageHeader/>,
    document.getElementById('topHeader')
  )
} catch (error) {
  
}

try {
  ReactDOM.render(
    <CartModule />,
    document.getElementById('cart')
  )
} catch (error) {
  
}

try {
  ReactDOM.render(
    <FishTable/>,
    document.getElementById('fishTable')
  )
} catch (error) {
  
}


try {
  ReactDOM.render(
    <Countries />,
    document.getElementById('countries')
  )
} catch (error) {
  
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
