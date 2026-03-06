function Footer() {
    const currentDate = new Date().toLocaleDateString();
    
    return (
        <footer>
            <p>
                {currentDate} - Steven Wu, Paolo Abad
            </p>
        </footer>
    );
}

export default Footer;