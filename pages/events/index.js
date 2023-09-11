import {getAllEvents} from '../../helpers/api-util'
import EventList from '../../components/event-list'
import EventsSearch from './events-search'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

export default function AllEventsPage(props){

    const router = useRouter()

    const { events }= props

    function findAllEventsHandler(year, month){

        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return(

        <Fragment>

            <EventsSearch onSearch={findAllEventsHandler}/>
            <EventList item={events} />
            
        </Fragment>
    )
}

export async function getStaticProps(){

    const events = await getAllEvents()

    return {

        props: {

            events: events,

        },

        revalidate: 60

    }

}