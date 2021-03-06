import PropTypes from 'prop-types'
import Link from 'next/link'

const AppHeader = () => (
	<header className="app-header">
		<div className="container">
			<div>
				<Link href="/" prefetch={false}>
					<a>
						<img
							className="app-header__logo"
							src="https://www.datocms-assets.com/24034/1595598326-logo.svg"
							width="300"
							height="40"
							alt="Logo"
						/>
					</a>
				</Link>
			</div>
			<nav className="app-header__nav">
				<ul className="app-header__list list-inline">
					<li>
						<Link href="/services" prefetch={false}>
							<a className="app-button app-button--tertiary" title="Werkwijze">
								Services
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about" prefetch={false}>
							<a className="app-button app-button--tertiary" title="Over">
								Over mij
							</a>
						</Link>
					</li>
					<li>
						<Link href="/contact" prefetch={false}>
							<a className="app-button app-button--secondary" title="Contact">
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

AppHeader.propTypes = {}

export default AppHeader
