import styles from '../styles/style.module.css'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import behance from '../img/behance.svg'

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.contentFooter}>
						<p className={styles.footerCopyright}>
							Copyright © Henrique Sousa · 2022
						</p>
						<ul className={styles.footerList}>
							<li className={styles.footerListItem}>
								<svg
									className={styles.linkedin}
									width='38'
									height='38'
									viewBox='0 0 38 38'
									fill='inherit'
									xmlns='http://www.w3.org/2000/svg'
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
									className={styles.gitHub}
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
									className={styles.telegram}
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
			</footer>
		</>
	)
}

export default Footer
