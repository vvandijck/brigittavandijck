import PropTypes from 'prop-types'
import ResponsiveImage from '../responsive-image/responsive-image'

const FullWidthImage = ({ image = {}, title = '' }) => (
	<figure className="full-width-image">
		<ResponsiveImage image={image} />
		{title && <figcaption className="sr-only">{title}</figcaption>}
	</figure>
)

FullWidthImage.propTypes = {
	image: PropTypes.object,
	title: PropTypes.string,
}

export default FullWidthImage
