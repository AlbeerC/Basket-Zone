import './Footer.scss'

function Footer () {

    return (
        <footer>
            <div className="policy">
                <p>Cookies policy</p>
                <span>|</span>
                <p>Privacy policy</p>
                <span>|</span>
                <p>Our data</p>
                <span>|</span>
                <p>Claims</p>
            </div>
            <p>© 2023 BasketZone</p>
            <p>Fictional E-commerce developed by <a target='blank' href="https://www.linkedin.com/in/alberto-caminos-5b3961243/">Alberto Caminos</a> using React and Firebase</p>
        </footer>
    )
}

export default Footer