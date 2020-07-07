import PropTypes from 'prop-types'

const QuoteBlock = ({ name = '', text = '' }) => (
	<section className="quote-block">
		<blockquote className="container">
			<q className="quote-block__quote h2">{text}</q>
			<cite className="quote-block__cite body">{name}</cite>
		</blockquote>
	</section>
)

QuoteBlock.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
}

export default QuoteBlock
