import { Cabecera } from "./components/Cabecera";
import './App.css'
import { Carousel } from "./components/Carousel";
import React from "react";
import { Nav } from "./components/Nav";
import { Promo } from "./components/Promo";
import { Lomos } from "./components/Lomos";
import { Pizzas } from "./components/Pizzas";
import { Milanesas } from "./components/MIlanesas";
import { Hamburguesas } from "./components/Hamburguesas";
import { Empanadas } from "./components/Empanadas";
import { Vegetariano } from "./components/Vegetariano";
import { Ensaladas } from "./components/Ensaladas";
import { Bebidas } from "./components/Bebidas";
import { Cafeteria } from "./components/Cafeteria";
export function App () {
    return(
        <React.Fragment>
            <Cabecera />
            <Carousel/>
            <Nav/>
            <Promo/>
            <Lomos/>
            <Pizzas/>
            <Milanesas/>
            <Hamburguesas/>
            <Empanadas/>
            <Vegetariano/>
            <Ensaladas/>
            <Bebidas/>
            <Cafeteria/>
        </React.Fragment>
    )
}