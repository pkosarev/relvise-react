import { Component } from 'react'

export default class PageSubscribe extends Component {
    render() {
        return (
            <section className="page__subscribe subscribe">
                <div className="subscribe__container _container">
                    <div className="subscribe__body">
                        <h4 className="subscribe__title">Subscribe For Latest Newsletter</h4>
                        <form action="#" className="subscribe__form">
                            <input autoComplete="off" type="email" required name="form[]" placeholder="Your Email" className="subscribe__input"/>
                            <button type="submit" className="subscribe__button button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}