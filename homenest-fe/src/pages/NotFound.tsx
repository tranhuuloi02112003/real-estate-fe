import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-page">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go back to homepage</a>
        </div>
    );
};

export default NotFound;
