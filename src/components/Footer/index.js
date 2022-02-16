import { Component } from 'react'
import social1 from './social/01.svg'
import social2 from './social/02.svg'
import social3 from './social/03.svg'
import social4 from './social/04.svg'

export default class Footer extends Component {
    render() {
        return(
                <footer className="footer">
                <div className="footer__top">
                    <div className="footer__main _container">
                        <div className="footer__row">
                            <div className="footer__column">
                            <div className="footer__label">Company Info</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">About Us</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Carrier</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">We are hiring</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Blog</a></li>
                                </ul>
                            </nav>
                            </div>
                            <div className="footer__column">
                            <div className="footer__label">Legal</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">About Us</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Carrier</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">We are hiring</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Blog</a></li>
                                </ul>
                            </nav>
                            </div>
                            <div className="footer__column">
                            <div className="footer__label">Features</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Business Marketing</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">User Analytic</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Livi Chat</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Unlimited Support</a></li>
                                </ul>
                            </nav>
                            </div>
                            <div className="footer__column">
                            <div className="footer__label">Resources</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">IOS & Android</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Watch a Demo</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">Customers</a></li>
                                    <li className="menu-footer__item"><a href="/" className="menu-footer__link">API</a></li>
                                </ul>
                            </nav>
                            </div>
                            <div className="footer__column">
                            <div className="footer__label">Get In Touch</div>
                                <div className="footer__contacts contacts-footer">
                                    <a href="tel:4805550103" className="contacts-footer__item contacts-footer__item-phone">(480) 555-0103</a>
                                    <a href="/" className="contacts-footer__item contacts-footer__item-map">4517 Washington Ave Manchester, Kentucky 39495</a>
                                    <a href="mailto:debra.holt@example.com" className="contacts-footer__item contacts-footer__item-email">debra.holt@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__container _container">
                        <div className="footer__copy">Made With Love By Figmaland All Right Reserved</div>
                        <div className="footer__social social">
                            <a href="/" className="social__item">
                                <img src={social1} alt="facebook"/>
                            </a>
                            <a href="/" className="social__item">
                                <img src={social2} alt="instagram"/>
                            </a>
                            <a href="/" className="social__item">
                                <img src={social3} alt="twitter"/>
                            </a>
                            <a href="/" className="social__item">
                                <img src={social4} alt="youtube"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}