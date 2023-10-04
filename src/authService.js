export const isAuthenticated = () => {
    // Check if user session data exists in session storage
    const userData = sessionStorage.getItem('userData');
    return userData !== null;
};
