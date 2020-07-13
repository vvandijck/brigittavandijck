import PropTypes from 'prop-types'

const RichText = ({ content = '' }) => (
	<div className="rich-text body-big" dangerouslySetInnerHTML={{ __html: content }} />
)

RichText.propTypes = {
	content: PropTypes.string,
}

export default RichText
