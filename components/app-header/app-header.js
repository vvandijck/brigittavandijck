import PropTypes from 'prop-types'
import Link from 'next/link'

const AppHeader = () => (
	<header className="app-header">
		<div className="container">
			<div>
				<Link href="/">
					<a className="app-header__link">
						<img src="/" alt="logo" />
					</a>
				</Link>
			</div>
			<nav className="app-header__nav">
				<ul className="app-header__list list-inline">
					<li>
						<Link href="/practice" as="werkwijze">
							<a className="app-button app-button--tertiary" title="Werkwijze">
								Werkwijze
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about" as="over">
							<a className="app-button app-button--tertiary" title="Over">
								Over
							</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
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
