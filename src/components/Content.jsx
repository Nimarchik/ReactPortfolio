import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useClipboard } from 'use-clipboard-copy'
import styles from '../styles/style.module.css'
import avatar from '../img/AvatarAndIcons.svg'
import code from '../img/CodeIcon.svg'
import project from '../img/ProjectsIcon.svg'
import myPhoto from '../img/myPhoto.jpg'
import projImg from '../img/projectImg.png'
import reactSvg from '../img/React.svg'
import javaScript from '../img/Javascript.svg'
import css from '../img/css.svg'
import html5 from '../img/HTML5.svg'
import sass from '../img/Shape.svg'
import gitSvg from '../img/github.svg'

import CV from '../img/Oleksii-Ivanov-33023 (1).pdf'

import projects from '../base/base.json'
const Content = () => {
	const cliBoard = useClipboard()
	const [isCopy, setCopy] = useState(false)

	const copy = () => {
		cliBoard.copy()
		setCopy(!isCopy)
	}

	useEffect(() => {
		setTimeout(() => {
			if (isCopy === true) {
				setCopy(!isCopy)
			}
		}, 1000)
	}, [isCopy])

	return (
		<>
			<main className={styles.main}>
				<section className={styles.top} id='homeText'>
					<div className={styles.container}>
						<div className={styles.topContent}>
							<div className={styles.text}>
								<div data-aos='fade-down'>
									<p className={styles.homeText}>👋 Greetings!</p>
								</div>
								<div data-aos='fade-right'>
									<h1 className={styles.topTitle}>Lesha Ivanov</h1>
								</div>
								<div data-aos='fade-up'>
									<p className={styles.topSub}>Front-end developer</p>
									<ul className={styles.topList}>
										<li className={styles.footerListItem}>
											<svg
												width='38'
												height='38'
												viewBox='0 0 38 38'
												fill='inherit'
												xmlns='http://www.w3.org/2000/svg'
												className={styles.linkedinTop}
											>
												<g clipPath='url(#clip0_21_3379)'>
													<path
														d='M18.9999 0C29.4939 0 38 8.50725 38 19.0001C38 29.4929 29.4939 38 18.9999 38C8.50594 38 0 29.4928 0 19.0001C0 8.50738 8.50607 0 18.9999 0Z'
														fill='white'
														fillOpacity='0.5'
													/>
													<path
														d='M10.7065 26.1059H14.2643V14.2475H10.7065V26.1059ZM24.567 13.8368C22.8404 13.8368 21.2954 14.4673 20.1995 15.8591V14.2085H16.6286V26.1061H20.1995V19.6722C20.1995 18.3125 21.4452 16.986 23.0055 16.986C24.5659 16.986 24.9507 18.3125 24.9507 19.6389V26.1049H28.5084V19.3741C28.5083 14.6989 26.2949 13.8368 24.567 13.8368ZM12.4687 13.0625C13.452 13.0625 14.25 12.2644 14.25 11.2812C14.25 10.2979 13.452 9.5 12.4687 9.5C11.4855 9.5 10.6874 10.298 10.6874 11.2813C10.6874 12.2646 11.4855 13.0625 12.4687 13.0625Z'
														fill='inherit'
													/>
												</g>
												<defs>
													<clipPath id='clip0_21_3379'>
														<rect width='38' height='38' fill='inherit' />
													</clipPath>
												</defs>
											</svg>
										</li>
										<li className={styles.footerListItem}>
											<svg
												className={styles.gitHubTop}
												width='40'
												height='39'
												viewBox='0 0 40 39'
												fill='inherit'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M20.0674 0.40332C9.13764 0.40332 0.285034 9.25593 0.285034 20.1857C0.285034 28.9394 5.94773 36.333 13.8112 38.9542C14.8003 39.1273 15.1713 38.5338 15.1713 38.0145C15.1713 37.5447 15.1465 35.9868 15.1465 34.3301C10.1762 35.245 8.89036 33.1184 8.49471 32.0056C8.27216 31.4369 7.30777 29.6812 6.46702 29.2114C5.77464 28.8405 4.78552 27.9255 6.44229 27.9008C8.00015 27.8761 9.11291 29.335 9.48383 29.9285C11.2642 32.9206 14.108 32.0798 15.2454 31.5605C15.4185 30.2747 15.9378 29.4092 16.5066 28.9146C12.105 28.4201 7.5056 26.7139 7.5056 19.1471C7.5056 16.9958 8.27216 15.2154 9.53329 13.8306C9.33546 13.336 8.64308 11.3083 9.73111 8.58827C9.73111 8.58827 11.3879 8.06898 15.1713 10.616C16.7538 10.1709 18.4353 9.94831 20.1168 9.94831C21.7983 9.94831 23.4799 10.1709 25.0624 10.616C28.8458 8.04426 30.5026 8.58827 30.5026 8.58827C31.5906 11.3083 30.8982 13.336 30.7004 13.8306C31.9615 15.2154 32.7281 16.971 32.7281 19.1471C32.7281 26.7386 28.104 28.4201 23.7024 28.9146C24.4195 29.5328 25.0377 30.7198 25.0377 32.5744C25.0377 35.2203 25.013 37.3469 25.013 38.0145C25.013 38.5338 25.3839 39.152 26.373 38.9542C34.1871 36.333 39.8498 28.9146 39.8498 20.1857C39.8498 9.25593 30.9971 0.40332 20.0674 0.40332Z'
													fill='white'
													fillOpacity='0.5'
												/>
											</svg>
										</li>
										<li className={styles.footerListItem}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='40'
												height='39'
												fill='currentColor'
												// class='bi bi-telegram'
												viewBox='0 0 16 16'
												className={styles.telegramTop}
											>
												<path
													d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09'
													fill='white'
													fillOpacity='0.5'
												/>
											</svg>
										</li>
									</ul>
								</div>
							</div>

							<div data-aos='zoom-in'>
								<img className={styles.myLogo} src={avatar} alt='' />
							</div>
							<div className={styles.topSocial}>
								<div data-aos='zoom-in-down'>
									<a className={styles.cvDownload} href={CV} download>
										Download CV
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='inherit'
											// class='bi bi-download'
											viewBox='0 0 16 16'
											className={styles.arrowDow}
										>
											<path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
											<path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z' />
										</svg>
									</a>
								</div>
								<div data-aos='zoom-in-up'>
									<a
										className={styles.topTelegram}
										href='https://t.me/Nimarchik'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='currentColor'
											// class='bi bi-telegram'
											viewBox='0 0 16 16'
											className={styles.tgSvgSoc}
										>
											<path
												d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09'
												fill='inherit'
												fillOpacity='0.5'
											/>
										</svg>
										Let's talk
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.expirence}>
					<div className={styles.container}>
						<ul className={styles.expList}>
							<div data-aos='zoom-out-right'>
								<li className={styles.expListItem}>
									<img className={styles.expIcon} src={code} alt='' />
									<p className={styles.expText}>3 years as</p>
									<h3 className={styles.expTitle}>Programmer</h3>
								</li>
							</div>
							<div data-aos='zoom-out-left'>
								<li className={styles.expListItem}>
									<img className={styles.expIcon} src={project} alt='' />
									<p className={styles.expText}>7 in</p>
									<h3 className={styles.expTitle}>Projects</h3>
								</li>
							</div>
						</ul>
						<div
							data-aos='fade-down'
							data-aos-easing='linear'
							data-aos-duration='800'
						>
							<div className={styles.textGroup}>
								<ul className={styles.expListText}>
									<li className={styles.expListTextItem}>
										<p className={styles.expTextSyb}>Developer</p>
										<h4 className={styles.expTitleText}>Front-end</h4>
									</li>
									<li className={styles.expListTextItem}>
										<p className={styles.expTextSyb}>Dozens of projects and</p>
										<h4 className={styles.expTitleText}>Experiences</h4>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.about} id='about'>
					<div className={styles.container}>
						<div className={styles.innerAbout}>
							<div data-aos='fade-down-right'>
								<img className={styles.photoAbout} src={myPhoto} alt='' />
							</div>
							<div className={styles.aboutContent}>
								<div className={styles.groupText}>
									<div data-aos='fade-down'>
										<p className={styles.aboutText}>🧐 About me</p>
									</div>
									<div data-aos='fade-up'>
										<h4 className={styles.aboutTitle}>Ivanov Oleksii</h4>
									</div>
									<div data-aos='fade-up-right' className={styles.aosAbout}>
										<p className={styles.aboutSub}>
											👋 My name is Aleksey Ivanov, but you can just call me
											Lesha. Nice to meet you!
										</p>
										<p className={styles.aboutSub}>
											👨‍💻 I have been developing and programming interfaces in
											JavaScript, React JS for over 1 year. 🎓 I study at
											Chernivtsi National University (Ukraine). 💡 I am
											interested in front-end development with React.
										</p>
										<p className={styles.aboutSub}>
											🚀 I try to be a little better than yesterday every day.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.project} id='portfolio'>
					<div className={styles.container}>
						<div className={styles.projectInner}>
							<div data-aos='fade-down-right'>
								<p className={styles.projectText}>🔗 Portfolio</p>
							</div>
							<div data-aos='fade-down-left'>
								<h5 className={styles.projectTitle}>Projects</h5>
							</div>
							<ul className={styles.projectList}>
								{projects.map(item => {
									return (
										<div
											data-aos='zoom-in-down'
											key={item.id}
											className={styles.aosBlock}
										>
											<li key={item.id} className={styles.projectListItem}>
													<div className={styles.groupListText}>
														<h6 className={styles.projectListTitle}>
															{item.name}
														</h6>
														<p className={styles.projectListSub}>{item.text}</p>
													</div>
													<div className={styles.groupListContent}>
														<div className={styles.groupListItem}>
															<span className={styles.projectListLang}>
																{item.lang}
															</span>
															<a
																className={styles.projectListLink}
																href={item.urlGit}
															>
																Live Demo
															</a>
														</div>
													</div>
													<img
														className={styles.projectListImg}
														src={item.urlImg}
														alt=''
													/>
											</li>
										</div>
									)
								})}
							</ul>
						</div>
					</div>
				</section>

				<section className={styles.skills} id='skills'>
					<div className={styles.container}>
						<div className={styles.skillsWrapp}>
							<div data-aos='fade-down-right' className={styles.aosSkill}>
								<p className={styles.skillsText}>🧑‍💻 Skills - Experiences</p>
							</div>
							<div data-aos='fade-up-left'>
								<h6 className={styles.skillsTitle}>Technologies and skills</h6>
							</div>
							<div data-aos='flip-down'>
								<p className={styles.skillssubs}>
									Techniques I use on a daily basis
								</p>
							</div>
							<ul className={styles.skillList}>
								<div data-aos='zoom-out' data-aos-delay='500'>
									<li className={styles.skillListItem}>
										<img
											className={styles.skillListImg}
											src={reactSvg}
											alt=''
										/>
									</li>
								</div>
								<div data-aos='zoom-out' data-aos-delay='600'>
									<li className={styles.skillListItem}>
										<img
											className={styles.skillListImg}
											src={javaScript}
											alt=''
										/>
									</li>
								</div>
								<div data-aos='zoom-out' data-aos-delay='650'>
									<li className={styles.skillListItem}>
										<img className={styles.skillListImg} src={css} alt='' />
									</li>
								</div>
								<div data-aos='zoom-out' data-aos-delay='700'>
									<li className={styles.skillListItem}>
										<img className={styles.skillListImg} src={html5} alt='' />
									</li>
								</div>
								<div data-aos='zoom-out' data-aos-delay='750'>
									<li className={styles.skillListItem}>
										<img className={styles.skillListImg} src={gitSvg} alt='' />
									</li>
								</div>
								<div data-aos='zoom-out' data-aos-delay='800'>
									<li className={styles.skillListItem}>
										<img className={styles.skillListImg} src={sass} alt='' />
									</li>
								</div>
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.contact}>
					<div className={styles.container}>
						<div className={styles.conatctWrapper}>
							<div data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
								<p className={styles.contactText} id='contacts'>
									📬 Contacts
								</p>
							</div>
							<div data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
								<h6 className={styles.contactTitle}>Let's talk! </h6>
							</div>
							<div className={styles.constctInner}>
								<div
									data-aos='fade-up'
									data-aos-anchor-placement='bottom-bottom'
								>
									<a
										className={styles.contactTelegram}
										href='https://t.me/Nimarchik'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='currentColor'
											// class='bi bi-telegram'
											viewBox='0 0 16 16'
											className={styles.tgSvgSoc}
										>
											<path
												d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09'
												fill='inherit'
												fillOpacity='0.5'
											/>
										</svg>
										Let's talk
									</a>
								</div>
								<div className={styles.conatctEmailGroup}>
									<div data-aos='zoom-out-down'>
										<svg
											className={styles.contactSvgEmail}
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											viewBox='0 0 16 16'
										>
											<path d='M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z' />
											<path d='M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z' />
										</svg>
									</div>
									<div data-aos='zoom-out-up'>
										<input
											className={styles.contactInp}
											ref={cliBoard.target}
											value='lexaxiip@gmail.com'
											readOnly
										/>
									</div>
									<p
										className={isCopy ? styles.copyVisible : styles.copyHidden}
									>
										successfully copied
									</p>

									<div data-aos='zoom-in-up'>
										<button className={styles.contactBtn} onClick={copy}>
											<svg
												className={styles.contactSvgCopy}
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												fill='currentColor'
												viewBox='0 0 16 16'
											>
												<path
													fillRule='evenodd'
													d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z'
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Content
