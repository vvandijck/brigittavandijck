import PropTypes from 'prop-types'
import Link from 'next/link'

const AppFooter = () => (
	<footer className="app-footer">
		<div className="container">
			<div className="app-footer__columns">
				<div className="app-footer__column">
					<h3 className="app-footer__column-title h3">Ontdek</h3>
					<ul className="app-footer__list unordered-list body">
						<li>
							<Link href="/practice">
								<a className="body" title="Werkwijze">
									Werkwijze
								</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a className="body" title="Over">
									Over
								</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a className="body" title="Contact">
									Contact
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="app-footer__column">
					<h3 className="app-footer__column-title h3">Contact</h3>
					<address className="app-footer__address body">
						Moslaan 42
						<br />
						1433WJ Kudelstaart
						<br />
					</address>
					<div className="app-footer__contact body">
						<a href="tel:310612047159" className="body">
							+31 (0)6 1204 7159
						</a>
						<br />
						<a href="mailto:brigitta.van.dijck@gmail.com" className="body">
							brigitta.van.dijck@gmail.com
						</a>
						<br />
					</div>
				</div>
				<div className="app-footer__column">
					<ul className="app-footer__social list-inline">
						<li>
							<a
								href="https://www.linkedin.com/in/brigitta-van-dijck-6189831a/"
								target="_blank"
								title="LinkedIn profiel"
								rel="noreferrer noopener"
								className="body"
							>
								<img className="app-footer__social-icon" src="/icons/icon-linkedin.svg" alt="LinkedIn icon" />
							</a>
						</li>
						<li>
							<a
								href="https://www.twitter.com/brigittadijckje"
								target="_blank"
								title="Twitter profiel"
								rel="noreferrer noopener"
								className="body"
							>
								<img className="app-footer__social-icon" src="/icons/icon-twitter.svg" alt="Twitter icon" />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/brigittavandijck/"
								target="_blank"
								title="Instagram profiel"
								rel="noreferrer noopener"
								className="body"
							>
								<img className="app-footer__social-icon" src="/icons/icon-instagram.svg" alt="Instagram icon" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="app-footer__legal">
				<div className="app-footer__legal--column">
					<ul className="list-inline">
						<li>
							<span className="body-detail">KvK: 77533151</span>
						</li>
						<li>
							<span className="body-detail">&copy; 2020 - Brigitta van Dijck</span>
						</li>
					</ul>
				</div>
				<div className="app-footer__legal--column">
					<ul className="list-inline">
						<li>
							<a className="body-detail" href="/" title="Privacy statement" target="_blank" rel="noopener noreferrer">
								Privacy statement
							</a>
						</li>
						<li>
							<a
								className="body-detail"
								href="/"
								title="Algemene voorwaarden"
								target="_blank"
								rel="noopener noreferrer"
							>
								Algemene voorwaarden
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
)

AppFooter.propTypes = {}

export default AppFooter
