import React from 'react';
import { Link } from '@inertiajs/react';

const AppLayout = ({ children }) => {
    return (
        <body>

        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
            <main>{children}</main>
        </div>
        </body>

    );
};

export default AppLayout;
