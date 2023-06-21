import React from "react";
export default function Signed({logout, navegarPanel}) {
    return (
        <div className="signed-container">
            <button onClick={logout}>Cerrar sesion</button>
            <button onClick={navegarPanel}>Ir al panel</button>
        </div>
    )
}