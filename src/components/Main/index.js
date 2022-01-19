import React from 'react'
import MainBlock from '../MainBlock'
import PageServices from '../PageServices'
import PageAdvantages from '../PageAdvantages'
import PagePractice from '../PagePractice'
import PageWhoweare from '../PageWhoweare'
import PageClients from '../PageClients'
import PageSubscribe from '../PageSubscribe'
import PageGetintouch from '../PageGetintouch'
import Contact from '../Contact'

function Main() {
    return (
        <main className='page'>
            <MainBlock />
            <PageServices />
            <PageAdvantages />
            <PagePractice />
            <PageWhoweare />
            <PageClients />
            <PageSubscribe />
            <PageGetintouch />
            <Contact />
        </main>
    )
}

export default Main
