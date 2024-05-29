import React, { useState } from 'react';

import Sidebar from '../components/Bars/Sidebar';
import Header from '../components/Header/Header';
import WelcomeBanner from '../components/Banners/WelcomeBanner';
import PacientFolder from '../components/Cards/PacientFolder';

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [pacient, setPacient] = useState();

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} clickPaciente={(paciente) => { setPacient(paciente) }} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-500">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    {pacient !== undefined ? (
                        <>
                            {/* Cards */}
                            <div className="px-4 grid grid-cols-12 gap-6 sm:px-6 lg:px-8 pt-8 w-full max-w-9xl mx-auto">
                                {pacient !== undefined && <PacientFolder pacient={pacient} />}
                            </div>
                        </>
                    ) : (
                        <><div className="px-4 sm:px-6 lg:px-8 pt-8 w-full max-w-9xl mx-auto">
                            {/* Welcome banner */}
                            <WelcomeBanner />
                        </div>
                        </>)}
                </main>
            </div>
        </div>
    );
}
