import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';
import ClientRow from './ClientRow';

const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>

    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.clients.map(client => (
                            <ClientRow key={client.id} client={client} />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Clients;