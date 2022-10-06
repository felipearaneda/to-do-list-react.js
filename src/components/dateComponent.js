import React from 'react';

function getCurrentDate(separator='/'){

    let newDate = new Date()
    let day = newDate.toDateString();
    
    return `${day}`
}

export default getCurrentDate;