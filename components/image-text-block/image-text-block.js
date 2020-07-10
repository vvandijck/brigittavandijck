import PropTypes from 'prop-types'
import ResponsiveImage from '../responsive-image/responsive-image'

const ImageTextBlock = ({ title = '', text = '', image = {}, inverted = false }) => (
	<section className={`image-text-block ${inverted ? 'image-text-block--inverted' : ''}`}>
		<div className="container">
			<div className="image-text-block__content">
				{title && <h3 className="h3">{title}</h3>}
				<div className="body-big" dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
			<div className="image-text-block__media">
				<ResponsiveImage image={image} />
			</div>
		</div>
	</section>
)

ImageTextBlock.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	image: PropTypes.object,
	inverted: PropTypes.bool,
}

export default ImageTextBlock
