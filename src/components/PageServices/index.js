import { Component } from 'react'
import icon1 from './01.svg'
import icon2 from './02.svg'
import icon3 from './03.svg'

export default class PageServices extends Component {
    render() {
        return (
            <section className="page__services services">
            <div className="services__container _container">
                <div className="services__body">
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon"><img src={icon1} alt="Enviromental Consulting" /></div>
                            <h3 className="item-service__title">Enviromental Consulting</h3>
                            <div className="item-service__text">We focus on ergonomics and meeting you where you work. </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon"><img src={icon2}  alt="Enviromental Consulting" /></div>
                            <h3 className="item-service__title">Finance and consultancy</h3>
                            <div className="item-service__text">Just type what's on your mind and we'll get you there. </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service item-service_green">
                            <div className="item-service__icon"><img src={icon3} alt="Enviromental Consulting" /></div>
                            <h3 className="item-service__title">Financial Services Consulting</h3>
                            <div className="item-service__text">the quick fox jumps over the lazy dog </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}