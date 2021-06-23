import React from 'react';
import Navbar from './Navbar';
import Title from './Title'

const MainPageLayout = ({children}) => {
    return (
        <div>
            <Title title = "Movie Search App" subtitle = "Are you looking for a movie or an actor"/>
            <Navbar />
            {children}
        </div>
    )
}

export default MainPageLayout
