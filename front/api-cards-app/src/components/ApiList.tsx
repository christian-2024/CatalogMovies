import React from 'react';
import ApiCard from './ApiCard';
import useFetch from '../hooks/useFetch';

const ApiList: React.FC = () => {
    const { data, loading, error } = useFetch('/api/apis'); // Adjust the endpoint as necessary

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching APIs: {error.message}</div>;

    return (
        <div>
            {data.map((api: { id: string; name: string; description: string }) => (
                <ApiCard key={api.id} name={api.name} description={api.description} />
            ))}
        </div>
    );
};

export default ApiList;