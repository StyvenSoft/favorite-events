import React from 'react';

export default React.createContext({
    toke: null,
    userId: null,
    login: (token, userId, tokenExpiration) => {},
    logout: () => {}
});