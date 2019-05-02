import React from "react";
import "../App.css";

import Banner from "./Banner.jsx";
import ModalForm from "./ModalForm.jsx";
import ButtonUp from "./ButtonUp.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Banner />
            </header>
            <section>{children}</section>
            <footer>
                <ButtonUp />
                <ModalForm />
                Website by Sylène, Stéphane and Enzo
            </footer>
        </>
    );
};

export default Layout;
