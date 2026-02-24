import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <main>
            <div>
                <link href='/'>
                <img src="/logo.png" alt='logo' />
                </link>
            </div>

            <ul className={styles.links}></ul>

            <div className={styles.navbar_icons}></div>
        </main>

    </nav>
  )
}

export default Navbar