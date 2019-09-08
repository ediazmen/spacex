import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';

function items(data) {
    return data.launches.map(launch => (
        <LaunchItem
            key={launch.mission_name}
            launch={launch}
        />
    ))
}

function Launches() {
    const { loading, error, data } = useQuery(gql`{
            launches {
                flight_number,
                mission_name,
                launch_date_local,
                launch_success
            }
    }`);

    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error :(</h4>;

    return (
        <>
            <h1 className="display-4 my-3">
                Launches
            </h1>
            {items(data)}
        </>
    )
}

export default Launches;