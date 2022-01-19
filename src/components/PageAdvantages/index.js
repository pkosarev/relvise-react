import React from 'react'
import Icon1 from './01.svg'
import Icon2 from './02.svg'
import Icon3 from './03.svg'
import Icon4 from './04.svg'


function PageAdvantages() {
    return(
        <section className="page__advantages advantages">
        <div className="advantages__container _container">
             <div className="advantages__header header-block">
                 <h2 className="header-block__title">Designing Better Experience</h2>
                 <div className="header-block__sub-title">
                     Problems trying to resolve the conflict between the two major realms<br/> of Classical physics: Newtonian mechanics
                  </div>
             </div>
             <div className="advantages__body">
                 <div className="advantages__column">
                     <div className="advantages__item">
                         <div className="advantages__icon">
                             <img src={Icon1} alt="Consumer Products"/>
                         </div>
                         <div className="advantages__value">972 +</div>
                         <div className="advantages__text">Consumer Products</div>
                     </div>
                 </div>
                 <div className="advantages__column">
                  <div className="advantages__item">
                      <div className="advantages__icon">
                          <img src={Icon2} alt="Financial Services"/>
                      </div>
                      <div className="advantages__value">181 +</div>
                      <div className="advantages__text">Financial Services</div>
                  </div>
              </div>
              <div className="advantages__column">
                  <div className="advantages__item">
                      <div className="advantages__icon">
                          <img src={Icon3} alt="Environmental"/>
                      </div>
                      <div className="advantages__value">98%</div>
                      <div className="advantages__text">Environmental</div>
                  </div>
              </div>
              <div className="advantages__column">
                  <div className="advantages__item">
                      <div className="advantages__icon">
                          <img src={Icon4} alt="Business & Finance"/>
                      </div>
                      <div className="advantages__value">746 +</div>
                      <div className="advantages__text">Business & Finance</div>
                  </div>
              </div>
             </div>
        </div>
  </section>
    )
}

export default PageAdvantages