import React from 'react';

interface ApiCardProps {
    name: string;
    description: string;
}

const ApiCard: React.FC<ApiCardProps> = ({ name, description }) => {
    return (
        <div className="api-card">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ApiCard;