import React from "react";
import PageNotFound from "./PageNotFound";

function Error(props) {

    if(props.status === 403) { /** Y ASI CON LOS STATUS HTTP MAS FRECUENTES */
        return <h5 style={{textAlign: "center", fontSize:"80px"}}>
                  ERROR 403. ACCESO DENEGADO. ESPERE UNOS SEGUNDOS Y VUELVA A INTENTARLO 
                </h5> /**UTILICE EL STYLE PARA HACERLO RAPIDO */
    } else if (props === 404) {
        return <PageNotFound /> 
    } else {
        return <h5 style={{textAlign: "center"}}>ERROR VARIOS</h5>
    }
}

export default Error;