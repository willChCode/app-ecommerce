import Link from 'next/link'
import { useRef } from 'react'

export function NavMenu() {
  //menu Hamburguesa
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

  return (
    <nav className='nav'>
      <section className='nav-items1'>
        <h1>LOGO</h1>
      </section>
      <section className='nav-items2'>
        <h3>Mans</h3>
        <h3>Womans</h3>
        <h3>Kids</h3>
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
