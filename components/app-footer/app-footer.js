import PropTypes from 'prop-types'

const AppFooter = () => (
	<footer className="app-footer">
		<div className="container">
			<div className="app-footer__columns">
				<div className="app-footer__column">
					<h3 className="app-footer__column-title h3">Contact</h3>
					<p>Contact info hier</p>
					<dl>
						<dt>KvK:</dt>
						<dd>77533151</dd>
					</dl>
				</div>
				<div className="app-footer__column">
					<h3 className="app-footer__column-title h3">Links</h3>
					<p>Links hier</p>
				</div>
				<div className="app-footer__column">
					<h3 className="app-footer__column-title h3">Social</h3>
					<p>Social links hier</p>
				</div>
			</div>
			<div className="app-footer__legal">
				<p className="body-detail">
					&copy; 2020 - Brigitta van Dijck |{' '}
					<a href="/" target="_blank" rel="noopener noreferrer">
						Privacy statement
					</a>
				</p>
			</div>
		</div>
	</footer>
)

AppFooter.propTypes = {}

export default AppFooter
