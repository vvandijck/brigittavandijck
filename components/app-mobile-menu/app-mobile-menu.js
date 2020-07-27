import { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class AppMobileHeader extends Component {
	constructor(props) {
		super(props)
		this.toggleMenu = this.toggleMenu.bind(this)
		this.state = {
			showMenu: false,
		}
	}

	toggleMenu() {
		const { showMenu } = this.state

		this.setState({ showMenu: !showMenu })
	}

	render() {
		const { showMenu } = this.state

		return (
			<nav className="app-mobile-menu">
				{!showMenu && (
					<button
						className="app-mobile-menu__button app-mobile-menu__button--open app-button app-button--primary"
						aria-label="Open menu"
						onClick={this.toggleMenu}
					>
					</button>
				)}
				{showMenu && (
					<div className="app-mobile-menu__content">
						<Link href="/" prefetch={false}>
							<a>
								<img
									className="app-header__logo"
									src="https://www.datocms-assets.com/24034/1595598326-logo.svg"
									width="200"
									height="27"
									alt="Logo"
								/>
							</a>
						</Link>
						<ul className="unordered-list">
							<li>
								<Link href="/services" prefetch={false}>
									<a className="app-mobile-menu__link h3" title="Werkwijze">
										Services
									</a>
								</Link>
							</li>
							<li>
								<Link href="/about" prefetch={false}>
									<a className="app-mobile-menu__link h3" title="Over">
										Over
									</a>
								</Link>
							</li>
							<li>
								<Link href="/contact" prefetch={false}>
									<a className="app-mobile-menu__link h3" title="Contact">
										Contact
									</a>
								</Link>
							</li>
						</ul>
					</div>
				)}
				{showMenu && (
					<button
						className="app-mobile-menu__button app-mobile-menu__button--close app-button app-button--primary"
						aria-label="Sluit menu"
						onClick={this.toggleMenu}
					>
					</button>
				)}
			</nav>
		)
	}
}

AppMobileHeader.propTypes = {}

export default AppMobileHeader
