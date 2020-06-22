import PropTypes from 'prop-types'
import ResponsiveImage from '../responsive-image/responsive-image'

const ImageBlock = ({ image = {}, title = '' }) => (
	<figure className="image-block">
		<div className="container">
			<ResponsiveImage image={image} />
			{title && <figcaption className="image-block__caption sr-only">{title}</figcaption>}
		</div>
	</figure>
)

ImageBlock.propTypes = {
	image: PropTypes.object,
	title: PropTypes.string,
}

export default ImageBlock
