import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';
import StarIcon from '../../../public/assets/icons/StarIcon.jsx'
import pregant from '../../../public/assets/icons/pregantPink900_128.png'

import { PacientListType } from "../../@types/pacientListTypes";
import { listAllPacientes } from '../../services/pacients/pacientsList';

function Sidebar({ sidebarOpen, setSidebarOpen, clickPaciente }) {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  const [pacientes, setPacientes] = useState<PacientListType[]>([]);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    try {
      const response = await listAllPacientes();
      setPacientes(response);
    } catch (error) {
      alert("Erro ao obter pacientes!");
      // Lidar com o erro de alguma forma
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  2xl:w-64 shrink-0 bg-pink-50 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-brown-90 hover:text-pink-50"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <div className="text-pink-900 text-center font-bold text-xl">
              Meu Pré Natal
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-teal-500 font-semibold pl-3">
              <span className={` ${sidebarExpanded ? 'lg:sidebar-expanded:block' : ''} 2xl:block`}>Pacientes</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-brown-900 truncate transition duration-150`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <StarIcon />
                            <span className={`text-sm font-medium ml-3 ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200`}>
                              Favoritas
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-pink-900 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className={`${sidebarExpanded ? 'lg:sidebar-expanded:block 2xl:block' : ''}`}>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          {pacientes.length > 0 && (
                            <li className="mb-1 last:mb-0" >
                              <NavLink
                                end
                                to={`/`}
                                onClick={() => {
                                  clickPaciente(pacientes[0]);
                                  localStorage.setItem('pacient_id', pacientes[0].id);
                                }}
                                className={({ isActive }) =>
                                  'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                                }
                              >
                                <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200`}>
                                  {pacientes[0].nome}
                                </span>
                              </NavLink>
                            </li>
                          )}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* More group */}
          <div>
            <ul>
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-brown-900 truncate transition duration-150`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img src={pregant} width={25} height={25} />
                            <span className={`text-sm font-medium ml-3 ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200`}>
                              Todas
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-pink-900 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className={`${sidebarExpanded ? 'lg:sidebar-expanded:block 2xl:block' : ''}`}>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                        {pacientes.slice(1).map((paciente) => (
                            <li className="mb-1 last:mb-0" >
                              <NavLink
                                end
                                to={`/`}
                                onClick={() => {
                                  clickPaciente(paciente);
                                  localStorage.setItem('pacient_id', paciente.id);
                                }}
                                className={({ isActive }) =>
                                  'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                                }
                              >
                                <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200`}>
                                  {paciente.nome}
                                </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className={` ${sidebarExpanded ? 'lg:sidebar-expanded:block' : ''} 2xl:block`}></span>
            </h3>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Sidebar;
