import { Cabecera } from "./components/Cabecera";
import './App.css'
import { Carousel } from "./components/Carousel";
import React from "react";

export function App () {
    return(
        <React.Fragment>
            <Cabecera/>
            <Carousel/>
        </React.Fragment>
    )
}