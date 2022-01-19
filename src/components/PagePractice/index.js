import React from 'react'
import img1 from './01.jpg'
import img2 from './02.jpg'
import img3 from './03.jpg'
import img4 from './04.jpg'

function PagePractice() {
    return (
        <section className="page__practice practice">
        <div className="practice__container _container">
            <div className="practice__header header-block">
                <h2 className="header-block__title">Practice Advice</h2>
                <div className="header-block__sub-title">
                    Problems trying to resolve the conflict between<br/>the two major realms of Classical physics: Newtonian mechanics
                </div>
            </div>
            <div className="practice__body">
                <div className="practice__column">
                    <article className="practice__item item-practice">
                        <div className="item-practice__content">
                            <a href="/" className="item-practice__link">
                                <h4 className="item-practice__title">A single source of truth</h4>
                            </a>
                            <div className="item-practice__text">
                                Newton thought that light was made up of particles, but then it was discovered
                            </div>
                        </div>
                        <a href="/" className="item-practice__image _ibg">
                            <img src={img1} alt="A single source of truth"/>
                        </a>
                    </article>
                </div>
                <div className="practice__column">
                    <article className="practice__item item-practice">
                        <div className="item-practice__content">
                            <a href="/" className="item-practice__link">
                                <h4 className="item-practice__title">Fastest way to organize</h4>
                            </a>
                            <div className="item-practice__text">
                                “Quantum mechanics” is the description of the behaviour of matter
                            </div>
                        </div>
                        <a href="/" className="item-practice__image _ibg">
                            <img src={img2} alt="Fastest way to organize"/>
                        </a>
                    </article>
                </div>
                <div className="practice__column">
                    <article className="practice__item item-practice">
                        <div className="item-practice__content">
                            <a href="/" className="item-practice__link">
                                <h4 className="item-practice__title">Fastest way to take action</h4>
                            </a>
                            <div className="item-practice__text">
                                They describe a universe consisting of bodies moving
                            </div>
                        </div>
                        <a href="/" className="item-practice__image _ibg">
                            <img src={img3} alt="Fastest way to take action"/>
                        </a>
                    </article>
                </div>
                <div className="practice__column">
                    <article className="practice__item item-practice">
                        <div className="item-practice__content">
                            <a href="/" className="item-practice__link">
                                <h4 className="item-practice__title">Work better together</h4>
                            </a>
                            <div className="item-practice__text">
                                They finally obtained a consistent description of the behaviour
                            </div>
                        </div>
                        <a href="/" className="item-practice__image _ibg">
                            <img src={img4} alt="Work better together"/>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PagePractice