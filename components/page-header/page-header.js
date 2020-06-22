import PropTypes from 'prop-types'
import ResponsiveImage from '../responsive-image/responsive-image'

const PageHeader = ({ image = {} }) => (
	<div className="page-header">
		<ResponsiveImage image={image} />
	</div>
)

PageHeader.propTypes = {
	image: PropTypes.object,
}

export default PageHeader
