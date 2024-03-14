import React, { useState, useEffect } from 'react';

function UserID() {
    const [sessionData, setSessionData] = useState(null);

    useEffect(() => {
        // Fetch session data when component mounts
        const fetchSessionData = async () => {
            try {
                const response = await fetch('/api/getUser');
                if (!response.ok) {
                    throw new Error('Failed to fetch session data');
                }
                const data = await response.json();
                setSessionData(data);
            } catch (error) {
                console.error('Error fetching session data:', error);
            }
        };

        fetchSessionData();
    }, []); // Empty dependency array ensures useEffect runs only once

    return sessionData;
};

export {UserID};
