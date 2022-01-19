import React from 'react'
import './cover.jpg'

function MainBlock() {
    return (
        <div className="page__main-block main-block">
            <div className="main-block__container _container">
                <div className="main__block__body">
                    <h1 className="main-block__title">Finance and Consultancy Solution</h1>
                    <div className="main-block__text">
                        We know how large objects will act, but things on a small scale.
                    </div>
                    <div className="main-block__buttons">
                        <a href="/" className="main-block__button main-block__button_orange">Get Quote Now</a>
                        <a href="/" className="main-block__button main-block__button_border">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="main-block__image _ibg">
                <img src={require('./cover.jpg')} alt="cover" />
            </div>
        </div>
    )
}

export default MainBlock