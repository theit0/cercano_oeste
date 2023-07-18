import { Cabecera } from "./components/Cabecera";
import './App.css'
import { Carousel } from "./components/Carousel";
import React from "react";
import { Nav } from "./components/Nav";
export function App () {
    return(
        <React.Fragment>
            <Cabecera />
            <Carousel/>
            <Nav/>
        </React.Fragment>
    )
}