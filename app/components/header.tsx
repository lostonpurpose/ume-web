import React from "react";

const Header = () => (
    <div>
        <header className="header mt-0 py-3 bg-pink-100 flex px-8 justify-between">
            <div className="font-bold text-5xl">Ayaka's Page</div>
            <div className="flex items-center">
                <ul className="flex font-bold text-2xl">
                    <li className="mr-4">about</li>
                    <li className="mr-4">services</li>
                    <li className="mr-4">contact</li>
                </ul>
            </div>
        </header>
    </div>
)

export default Header;