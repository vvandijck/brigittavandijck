import PropTypes from 'prop-types'
import ResponsiveImage from '../responsive-image/responsive-image'

const PageHeader = ({ image = {}, subtitle = '', title = '' }) => (
	<section className="page-header">
		<div className="page-header__image">
			<ResponsiveImage image={image} />
		</div>
		<div className="page-header__content container">
			<h2 className="page-header__content-subtitle h3">{subtitle}</h2>
			<h1 className="page-header__content-title h1">{title}</h1>
		</div>
	</section>
)

PageHeader.propTypes = {
	image: PropTypes.object,
	subtitle: PropTypes.string,
	title: PropTypes.string,
}

export default PageHeader
