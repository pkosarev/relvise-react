import { Component }  from 'react'
import MainBlock from '../MainBlock'
import PageServices from '../PageServices'
import PageAdvantages from '../PageAdvantages'
import PagePractice from '../PagePractice'
import PageWhoweare from '../PageWhoweare'
import PageClients from '../PageClients'
import PageSubscribe from '../PageSubscribe'
import PageGetintouch from '../PageGetintouch'
import Contact from '../Contact'

export default class Main extends Component {
    render() {
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
}