import PropTypes from 'prop-types'
import RichText from '../rich-text/rich-text'

const TextBlock = ({ title = '', text = '' }) => (
	<section className="text-block">
		<div className="container">
			{title && <h3 className="h3">{title}</h3>}
			<RichText content={text} />
		</div>
	</section>
)

TextBlock.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
}

export default TextBlock
