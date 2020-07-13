import PropTypes from 'prop-types'
import ResponsiveImage from '../responsive-image/responsive-image'

const PageHeader = ({ image = {}, subtitle = '', title = '' }) => (
	<section className="page-header">
		{image && (
			<div className="page-header__image">
				<ResponsiveImage image={image} />
			</div>
		)}
		<div className="page-header__content container">
			<h2 className="page-header__content-subtitle h3">{title}</h2>
			<h1 className="page-header__content-title h1">{subtitle}</h1>
		</div>
	</section>
)

PageHeader.propTypes = {
	image: PropTypes.object,
	subtitle: PropTypes.string,
	title: PropTypes.string,
}

export default PageHeader
