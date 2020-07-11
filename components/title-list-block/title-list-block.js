import PropTypes from 'prop-types'

const TitleListBlock = ({ title = '', text = '', inverted = false }) => (
	<section className={`title-list-block ${inverted ? 'title-list-block--inverted' : ''}`}>
		<div className="container">
			<div className="title-list-block__content">
				<div className="body-big" dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
			{title && <h3 className="title-list-block__title h2">{title}</h3>}
		</div>
	</section>
)

TitleListBlock.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	inverted: PropTypes.bool,
}

export default TitleListBlock
