import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-white p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

      {/* Background illustration */}
      <div className="absolute right-0 top-0 mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        {/* Arte */}
      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-teal-500 font-bold mb-1">Bem vindo (a), Dr. X</h1>
        <p className='text-brown-500'>Busque pelas fichas de suas pacientes pela barra de pesquisas ao lado</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;
