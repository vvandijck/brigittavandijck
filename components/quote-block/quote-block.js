import PropTypes from 'prop-types'

const QuoteBlock = ({ name = '', text = '' }) => (
	<div className="quote-block">
		<blockquote className="container">
			<q className="quote-block__quote h2">{text}</q>
			<cite className="quote-block__cite body">{name}</cite>
		</blockquote>
	</div>
)

QuoteBlock.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
}

export default QuoteBlock
