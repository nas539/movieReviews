import React from 'react';

import CreateMovie from '../adminComponents/createMovie';
import EditMovie from '../adminComponents/editMovie';

export default function adminPage() {
    return (
        <div className="admin-body-wrapper">
            <CreateMovie />
            <EditMovie />
        </div>
    )
}

