import React from 'react'
import Header from '../../layout/Header';
import EventCard from '../../components/Events/EventCard';

const EventsPage = () => {
    return (
        <div>
            <Header activeHeading={4} />
            <br />
            <br />
            <EventCard active={true} />
            <EventCard active={true} />
        </div>
    )
}

export default EventsPage;
