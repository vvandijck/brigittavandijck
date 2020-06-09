import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = () => (
	<header className="header">
		<nav>
			<ul className="list-inline">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/practice" as="/werkwijze">
						<a>Werkwijze</a>
					</Link>
				</li>
				<li>
					<Link href="/about" as="/over">
						<a>Over</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	</header>
)

Header.propTypes = {}

export default Header
