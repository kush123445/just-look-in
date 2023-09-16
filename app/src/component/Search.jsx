import react from 'react';
import Nav from './Nav';
import Searchbar from './Searchbar';

import UserNav from './UserNav';


function Search()
{
    if("false"===localStorage.getItem("login"))
    {
    return(
        <>
        <Nav/>
        <Searchbar/>
        </>
    )
}
else{
    return(
        <>
        <UserNav/>
        <Searchbar/>
        </>
    )
}
}

export default Search;