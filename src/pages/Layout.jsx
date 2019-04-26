import React from 'react';
import Banner from '../aside/Banner.jsx';
import { Container } from 'react-bootstrap';
import ModalForm from '../aside/ModalForm.jsx';

const Layout = ({children}) => {
    return(
        <Container>
            <header>
                <Banner />
            </header>
            <section>
                {children}
            </section>
            <footer>
                <ModalForm />
                <p className="FooterCSS">Website by Sylène, Stéphane and Enzo.</p>
            </footer>
        </Container>
    )

}

export default Layout;