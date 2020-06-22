import PropTypes from 'prop-types'
import { Image } from 'react-datocms'

const ResponsiveImage = ({ image = {} }) => (
	<div className="responsive-image">
		<Image data={image} />
	</div>
)

ResponsiveImage.propTypes = {
	image: PropTypes.object,
}

export default ResponsiveImage
