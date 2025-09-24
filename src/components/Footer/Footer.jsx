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
            <p className='github'>Fictional E-commerce developed by <a target='blank' href="https://github.com/AlbeerC">Alberto Caminos</a> using React and Firebase</p>
        </footer>
    )
}

export default Footer