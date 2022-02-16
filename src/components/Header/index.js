import { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__container _container">
                    <a href="/" className="header__logo">
                        Relvise
                    </a>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="/" className="menu__link">Home</a>
                            </li>
                            <li className="menu__item">
                                <a href="/" className="menu__link">Product</a>
                            </li>
                            <li className="menu__item">
                                <a href="/" className="menu__link">Pricing</a>
                            </li><li className="menu__item">
                                <a href="/" className="menu__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}