import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

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

    return data.launches.map(({ flight_number, mission_name }) => (
        <Fragment key={mission_name}>
            <p>
                {flight_number}: {mission_name}
            </p>
        </Fragment>
    ));
}

export default Launches;