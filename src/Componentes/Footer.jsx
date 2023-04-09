function Footer() {
    return (
        <Footer container={true}>
            <Footer.Copyright
                href=""
                by="Agora™"
                year={2023}
            />
            <Footer.LinkGroup>
                <Footer.Link href="#">
                    Sobre nosotros
                </Footer.Link>
               
                <Footer.Link href="#">
                    Contactanos
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}
export default Footer;