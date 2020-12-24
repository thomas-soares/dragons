import React, { useEffect, useState }from 'react';

import api from '../services/api';

interface Dragon {
    id: string;
    createdAt: string;
    name: string;
    type: string;
    // histories: string;
}

function DragonsList() {
    const [dragons, setDragons] = useState<Dragon[]>([]);

    useEffect(() => {
        api.get('dragon').then(response => {
            setDragons(response.data);
        });
    }, []);

    return (
        <div id="page-map">
            {dragons.map(dragon => {
                return (
                    <p>{dragon.id} - {dragon.name} - {dragon.createdAt} - {dragon.type}!</p>
                    
                );
            })}
        </div>
    );
}

export default DragonsList;