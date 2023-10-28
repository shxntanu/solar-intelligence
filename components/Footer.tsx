import React from 'react';

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800" style={{ position: 'relative', bottom: '0', left: '0', right: '0' }}>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Hacktastic4™. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://github.com/orgs/hacktastic-4/repositories" className="hover:underline">About</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
