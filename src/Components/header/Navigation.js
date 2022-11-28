import React from "react";
import {Navbar, NavbarBrand} from "reactstrap";

let Navigation = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <navBrand className="container">
                    <NavbarBrand href="#">Restaurant App</NavbarBrand>
                </navBrand>

            </Navbar>
        </div>
    );
}

export default Navigation;