import PropTypes from 'prop-types'
import ResponsiveImage from '../responsive-image/responsive-image'

const ImageTextBlock = ({ title = '', text = '', image = {}, inverted = false }) => (
	<div className={`image-text-block ${inverted ? 'image-text-block--inverted' : ''}`}>
		<div className="container">
			<div className="image-text-block__content">
				<h3 className="h3">{title}</h3>
				<p className="body-big">{text}</p>
			</div>
			<div className="image-text-block__media">
				<ResponsiveImage image={image} />
			</div>
		</div>
	</div>
)

ImageTextBlock.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	image: PropTypes.object,
	inverted: PropTypes.bool,
}

export default ImageTextBlock
