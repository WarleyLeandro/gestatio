import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';
import StarIcon from '../../assets/icons/StarIcon'

function FichasSideBar({ sidebarOpen, setSidebarOpen, getCard }) {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');


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

  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  2xl:w-64 shrink-0 bg-pink-50 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >
        {/* Identificacao */}
        <div className="space-y-8 mb-3">
          {/* Pages group */}
          {/* Identificação */}
          <div>
            <h3 className="text-xs uppercase text-teal-500 font-semibold pl-3">
              <span className={`${sidebarExpanded ? 'lg:sidebar-expanded:block' : ''} 2xl:block`}>Fichas</span>
            </h3>
            <ul className="mt-3">
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                {(handleClick, open) => {
                  return (
                    <>
                      <React.Fragment>
                        <a
                          href="#0"
                          className={`block text-pink-900 truncate transition duration-150`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                          }}
                        >
                          <div className="flex items-center">
                            <span className={'text-sm font-bold ml-3 lg:opacity-100'} duration-200
                              onClick={(e) => {
                                sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                              }}>
                              Ficha Identificação
                            </span>
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
                            <li className="mb-1 last:mb-0" >
                              <NavLink
                                end
                                to={`/`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  getCard('PersonalData');
                                }}
                                className={({ isActive }) =>
                                  'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                                }
                              >
                                <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                                  Dados Pessoais
                                </span>
                              </NavLink>
                            </li>
                          </ul>
                          <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                            <li className="mb-1 last:mb-0" >
                              <NavLink
                                end
                                to={`/`}
                                onClick={() => {
                                  getCard('SUS');
                                }}
                                className={({ isActive }) =>
                                  'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                                }
                              >
                                <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                                  Dados SUS
                                </span>
                              </NavLink>
                            </li>
                          </ul>
                          <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                            <li className="mb-1 last:mb-0" >
                              <NavLink
                                end
                                to={`/`}
                                onClick={() => {
                                  getCard('Emergency');
                                }}
                                className={({ isActive }) =>
                                  'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                                }
                              >
                                <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                                  Dados de emergência
                                </span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </React.Fragment >
                    </>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* PréNatal */}
        <div className="space-y-8 mb-3">
          <ul>
            <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
              {(handleClick, open) => {
                return (
                  < React.Fragment >
                    <a
                      href="#0"
                      className={`block text-pink-900 truncate transition duration-150`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center">
                        <span className={'text-sm font-bold ml-3 lg:opacity-100'} duration-200
                          onClick={(e) => {
                          }}>
                          Ficha do Pré-natal
                        </span>
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
                        <li className="mb-1 last:mb-0" >
                          <NavLink
                            end
                            to={`/`}
                            onClick={(e) => {
                              e.preventDefault();
                              getCard('PreNatal');
                            }}
                            className={({ isActive }) =>
                              'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                            }
                          >
                            <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                              Pré-natal
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          </ul>
        </div>

        {/* Consultas */}
        <div className="space-y-8 mb-3">
          <ul>
            <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-pink-900 truncate transition duration-150`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center">
                        <span className={'text-sm font-bold ml-3 lg:opacity-100'} duration-200
                          onClick={(e) => {
                          }}>
                          Ficha de Consultas
                        </span>
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
                        <li className="mb-1 last:mb-0" >
                          <NavLink
                            end
                            to={`/`}
                            onClick={(e) => {
                              e.preventDefault();
                              getCard('Consultas');
                            }}
                            className={({ isActive }) =>
                              'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                            }
                          >
                            <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                              Consultas
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          </ul>
        </div>

        {/* Exames */}
        <div className="space-y-8 mb-3">
          <ul>
            <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-pink-900 truncate transition duration-150`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center">
                        <span className={'text-sm font-bold ml-3 lg:opacity-100'} duration-200
                          onClick={(e) => {
                          }}>
                          Ficha de Exames
                        </span>
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
                        <li className="mb-1 last:mb-0" >
                          <NavLink
                            end
                            to={`/`}
                            onClick={(e) => {
                              e.preventDefault();
                              getCard('Exames');
                            }}
                            className={({ isActive }) =>
                              'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                            }
                          >
                            <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                              Exames
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                      {/* <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                        <li className="mb-1 last:mb-0" >
                          <NavLink
                            end
                            to={`/`}
                            onClick={(e) => {
                              e.preventDefault();
                              getCard('Suplementacao');
                            }}
                            className={({ isActive }) =>
                              'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                            }
                          >
                            <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                              Suplementação
                            </span>
                          </NavLink>
                        </li>
                      </ul> */}
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          </ul>
        </div>

        {/* Antecedentes */}
        <div className="space-y-8 mb-3">
          <ul>
            <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-pink-900 truncate transition duration-150`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center">
                        <span className={'text-sm font-bold ml-3 lg:opacity-100'} duration-200
                          onClick={(e) => {
                          }}>
                          Ficha de Antecedentes
                        </span>
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
                        <li className="mb-1 last:mb-0" >
                          <NavLink
                            end
                            to={`/`}
                            onClick={(e) => {
                              e.preventDefault();
                              getCard('Antecedentes');
                            }}
                            className={({ isActive }) =>
                              'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                            }
                          >
                            <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                              Antecedentes
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          </ul>
        </div>

        {/* Vacinas */}
        <div className="space-y-8 mb-3">
          <ul>
            <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-pink-900 truncate transition duration-150`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center">
                        <span className={'text-sm font-bold ml-3 lg:opacity-100'} duration-200
                          onClick={(e) => {
                          }}>
                          Ficha de Vacinas
                        </span>
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
                        <li className="mb-1 last:mb-0" >
                          <NavLink
                            end
                            to={`/`}
                            onClick={(e) => {
                              e.preventDefault();
                              getCard('Vacinas');
                            }}
                            className={({ isActive }) =>
                              'block transition duration-150 truncate ' + (isActive ? 'text-brown-900' : 'text-brown-900 hover:text-pink-500')
                            }
                          >
                            <span className={`text-sm font-medium ${sidebarExpanded ? 'lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100' : 'lg:opacity-100'} duration-200 hover:text-pink-900`}>
                              Vacinas
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          </ul>
        </div>
      </div >
    </div >
  );
}

export default FichasSideBar;
