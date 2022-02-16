import { Component } from 'react'
import icon1 from './01.png'
import icon2 from './02.png'
import icon3 from './03.png'
import icon4 from './04.png'
import icon5 from './05.png'
import icon6 from './06.png'


export default class PageClients extends Component {
    render() {
        return (
            <div className="page__clients clients">
            <div className="clients__container _container">
                <div className="clients__items">
                    <div className="clients__item">
                        <img src={icon1} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={icon2} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={icon3} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={icon4} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={icon5} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={icon6} alt="clients"/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}