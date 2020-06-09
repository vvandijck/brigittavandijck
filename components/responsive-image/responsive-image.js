import PropTypes from 'prop-types'
import { Image } from 'react-datocms'

const ResponsiveImage = ({ image }) => (
	<div className="responsive-image">
		<Image data={image} />
	</div>
)

ResponsiveImage.propTypes = {}

export default ResponsiveImage
