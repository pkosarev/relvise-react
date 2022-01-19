import React from 'react'
import icon1 from './icons/01.svg'
import icon2 from './icons/02.svg'

function PageWhoweare() {
    return (
    <section className="page__whoweare whoweare">
        <div className="whoweare__container _container">
            <div className="whoweare__header header-block">
                <h2 className="header-block__title">Who We Are</h2>
                <div className="header-block__sub-title">
                    Problems trying to resolve the conflict between the two major realms <br/> of Classical physics: Newtonian mechanics
                </div>
            </div>
            <div className="whoweare__body">
                <div className="whoweare__video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/M0KhSXBxaVM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
                <div className="whoweare__content">
                    <div className="whoweare__top">
                        <h2 className="whoweare__title">Most trusted in our field</h2>
                        <div className="whoweare__text">
                            Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                        </div>
                    </div>
                    <div className="whoweare__items">
                        <div className="whoweare__item item-whoweare">
                            <div className="item-whoweare__icon">
                                <img src={icon1} alt=""/>
                            </div>
                            <div className="item-whoweare__body">
                                <div className="item-whoweare__title">the quick fox jumps over the lazy dog</div>
                                <div className="item-whoweare__text">Things on a very small scale  Things on a very small scale  Things on a very small scaleThings on a very small scaleThings on a very small scale</div>
                            </div>
                        </div>
                        <div className="whoweare__item item-whoweare">
                            <div className="item-whoweare__icon">
                                <img src={icon2} alt=""/>
                            </div>
                            <div className="item-whoweare__body">
                                <div className="item-whoweare__title">the quick fox jumps over the lazy dog</div>
                                <div className="item-whoweare__text">Things on a very small scale  Things on a very small scale  Things on a very small scaleThings on a very small scaleThings on a very small scale</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PageWhoweare