import { Form } from 'react-router-dom'
import styles from '../styles/style.module.css'
import logo from '../img/Logo.svg'
import { useSpring, animated, to } from 'react-spring'
import { useEffect, useState } from 'react'

const Header = () => {
	const [menu, setMenu] = useState(false)
	const [isClick, setIsclick] = useState(
		() => +localStorage.getItem('navActive') || 1
	)
	useEffect(() => {
		localStorage.setItem('navActive', JSON.stringify(isClick))
	}, [isClick])

	const setIndex = index => {
		setIsclick(index)

		if (window.screen.width <= 740) {
			setMenu(!menu)
		}
	}

	return (
		<>
			<header className={styles.header}>
				<div data-aos='zoom-out-down' className={styles.aosheader}>
					<div className={styles.container}>
						<nav className={styles.nav}>
							{/* <animated.div style={props}>header</animated.div> */}
							<img className={styles.imgNavLogo} src={logo} alt='Logo' />
							<button className={styles.btnMenu} onClick={() => setMenu(!menu)}>
								<span
									className={menu ? styles.spanTopActive : styles.spanTop}
								></span>
								<span
									className={menu ? styles.spanCenterActive : styles.spanTop}
								></span>
								<span
									className={menu ? styles.spanbottActive : styles.spanbott}
								></span>
							</button>
							<ul className={menu ? styles.navListActive : styles.navList}>
								<li
									className={
										isClick == 1 ? styles.navListItemActive : styles.navListItem
									}
									onClick={() => setIndex(1)}
								>
									<a className={styles.navLisyLink} href='#homeText'>
										Home
									</a>
								</li>
								<li
									className={
										isClick == 2 ? styles.navListItemActive : styles.navListItem
									}
									onClick={() => setIndex(2)}
								>
									<a className={styles.navLisyLink} href='#about'>
										About me
									</a>
								</li>
								<li
									className={
										isClick == 3 ? styles.navListItemActive : styles.navListItem
									}
									onClick={() => setIndex(3)}
								>
									<a className={styles.navLisyLink} href='#portfolio'>
										Portfolio
									</a>
								</li>
								<li
									className={
										isClick == 4 ? styles.navListItemActive : styles.navListItem
									}
									onClick={() => setIndex(4)}
								>
									<a className={styles.navLisyLink} href='#skills'>
										Skills
									</a>
								</li>
								<li
									className={
										isClick == 5 ? styles.navListItemActive : styles.navListItem
									}
									onClick={() => setIndex(5)}
								>
									<a className={styles.navLisyLink} href='#contacts'>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
