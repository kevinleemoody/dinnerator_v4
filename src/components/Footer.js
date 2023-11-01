import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            © {new Date().getFullYear()} Compiled with problems. All rights reserved.
    </footer>
    );
}

export default Footer;
