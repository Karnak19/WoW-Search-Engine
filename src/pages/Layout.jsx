import React from "react";
import Banner from "../aside/Banner.jsx";
import ModalForm from "../aside/ModalForm.jsx";
import ButtonUp from "../aside/ButtonUp.jsx";

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
