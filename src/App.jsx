import { Cabecera } from "./components/Cabecera";
import './App.css'
import { Carousel } from "./components/Carousel";
import React from "react";
import { Nav } from "./components/Nav";
import { Promo } from "./components/Promo";
export function App () {
    return(
        <React.Fragment>
            <Cabecera />
            <Carousel/>
            <Nav/>
            <Promo/>
        </React.Fragment>
    )
}