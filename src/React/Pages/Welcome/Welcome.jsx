import React from 'react';

/* Components ---------------------------*/
// import Slideshow from './Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>

            {/* <Slideshow /> */}
            <div className="nestd">
                <Tabbed />
            </div>
            <div className="nestd">
                <Staff />
            </div>
        </div>
    );
}

export default Welcome