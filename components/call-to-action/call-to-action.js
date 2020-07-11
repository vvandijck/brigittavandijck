import PropTypes from 'prop-types'
import Link from 'next/link'

const CallToAction = ({ buttonLabel = '', link = '', title = '', text = '' }) => (
	<section className="call-to-action">
		<div className="container">
			{title && <h3 className="h3">{title}</h3>}
			{text && <div className="body-big" dangerouslySetInnerHTML={{ __html: text }}></div>}
			{buttonLabel && link && (
				<Link href={link.slug}>
					<a className="call-to-action__button app-button app-button--primary" title={buttonLabel}>
						{buttonLabel}
					</a>
				</Link>
			)}
		</div>
	</section>
)

CallToAction.propTypes = {
	buttonLabel: PropTypes.string,
	link: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
}

export default CallToAction
