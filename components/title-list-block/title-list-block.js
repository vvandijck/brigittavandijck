import PropTypes from 'prop-types'
import RichText from '../rich-text/rich-text'

const TitleListBlock = ({ title = '', text = '', inverted = false }) => (
	<section className={`title-list-block ${inverted ? 'title-list-block--inverted' : ''}`}>
		<div className="container">
			<div className="title-list-block__content">
				<RichText content={text} />
			</div>
			{title && <h3 className="title-list-block__title">{title}</h3>}
		</div>
	</section>
)

TitleListBlock.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	inverted: PropTypes.bool,
}

export default TitleListBlock
