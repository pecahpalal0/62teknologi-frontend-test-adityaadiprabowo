import React from "react";
import "./header.css";

function Header(){
    return (
        <header className="header-fixed">
            <div className="header-limiter">
                <h1>Frontend<span>Test</span></h1>
            </div>
        </header>
    );
}

export default Header;