import PropTypes from 'prop-types'

const TextBlock = ({ title = '', text = '' }) => (
	<section className="text-block">
		<div className="container">
			{title && <h3 className="h3">{title}</h3>}
			<div className="body-big" dangerouslySetInnerHTML={{ __html: text }}></div>
		</div>
	</section>
)

TextBlock.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
}

export default TextBlock
