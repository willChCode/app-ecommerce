import classNames from 'classnames';
import Link from 'next/link'
import { useState } from 'react';
import { useRef } from 'react'
import { Tab } from '@headlessui/react';
export function NavMenu() {
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);
  const line3 = useRef<HTMLSpanElement>(null);
  const menuContent = useRef<HTMLElement>(null);

  const handleMenu = () => {
    line1.current?.classList.toggle('active1');
    line2.current?.classList.toggle('active2');
    line3.current?.classList.toggle('active3');
    menuContent.current?.classList.toggle('active_show')
  }

  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <nav className='nav'>
      <section className='nav-items1'>
        <h1 className={classNames({
          'text-red-500': isPressed
        })} onClick={() => setIsPressed(!isPressed)}>LOGO</h1>
      </section>
      <section className='nav-items2'>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl">
            {['Mans', 'Womans', 'Kids'].map(gender => (
              <Tab
                key={gender}
                className={({ selected }) =>
                  `mx-1 p-1 rounded-lg py-2.5 text-sm font-medium leading-5 text-white-700 focus:outline-none
                  ${selected ? 'bg-slate-700 transition-all shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:rounded-md'}`}
              >
                {gender}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </section>
      <section className='nav-items5'>
        <section className='lib-search'>
          <input type='text' placeholder='ingrese un articulo' />
          <i className='fa-solid fa-magnifying-glass'></i>
        </section>
        <i className='user fa-solid fa-circle-user'></i>
        <i className='cart fa-solid fa-cart-shopping'></i>
      </section>
      <section className='nav-items3'>
        <div className='menuH' onClick={handleMenu}>
          <span className='line1' ref={line1}></span>
          <span className='line2' ref={line2}></span>
          <span className='line3' ref={line3}></span>
        </div>
      </section>
      <section className='nav-items4' ref={menuContent}>
        <ul className='list'>
          <li className='list-item'>
            <div className='li-button'>
              <section className='lib-search'>
                <input type='text' placeholder='ingrese un articulo' />
                <i className='fa-solid fa-magnifying-glass'></i>
              </section>
            </div>
          </li>
          <li className='list-item'>
            <div className='li-button'>
              <Link className='ls-title' href='/'>
                Inicio
              </Link>
            </div>
          </li>
          <li className='list-item'>
            <div className='li-button li-button-click'>
              <Link href='/'>Categoria</Link>
              <i className='lib-icon fa-solid fa-angle-up'></i>
            </div>
            <ul className='li-show'>
              <li className='lis-inside'>
                <Link href='/'>Camisas</Link>
              </li>
              <li className='lis-inside'>
                <Link href='/'>Zapatos</Link>
              </li>
              <li className='lis-inside'>
                <Link href='/'>Ropa de Verano</Link>
              </li>
            </ul>
          </li>
          {/* <!-- prueba --> */}
          <li className='list-item'>
            <div className='li-button li-button-click'>
              <Link href='/'>Ajustes</Link>
              <i className='lib-icon fa-solid fa-angle-up'></i>
            </div>
            <ul className='li-show'>
              <li className='lis-inside'>
                <Link href='/'>Cambiar tema</Link>
              </li>
              <li className='lis-inside'>
                <Link href='/'>Personalizar</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </nav>
  )
}
