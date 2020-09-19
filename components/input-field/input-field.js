import { Component } from 'react'
import PropTypes from 'prop-types'

class InputField extends Component {
	constructor(props) {
		super(props)
		this.onBlur = this.onBlur.bind(this)
		this.state = {
			validate: false,
		}
	}

	onBlur() {
		const { required } = this.props

		if (required) {
			this.setState({ validate: true })
		}
	}

	render() {
		const { autoFocus, id, label, minlength, name, onChange, pattern, placeholder, required, type, value  } = this.props
		const { validate } = this.state
		const validateClass = validate ? 'input-field--validate' : ''
		const requiredClass = required ? 'input-field--required' : ''

		return (
			<div className={`input-field input-field--${type} ${validateClass} ${requiredClass}`}>
				<label className="input-field__label body-petite" htmlFor={name}>
					{label}
				</label>

				{type === 'textarea' ? (
					<textarea
						key={id}
						id={name}
						className="input-field__input body-petite textarea"
						name={name}
						value={value}
						placeholder={placeholder}
						onChange={onChange}
						autoFocus={autoFocus}
						onBlur={this.onBlur}
						required={required}
						minlength={minlength}
						pattern={pattern}
					/>
				) : (
					<input
						key={id}
						type={type}
						id={name}
						className="input-field__input body-petite"
						name={name}
						value={value}
						placeholder={placeholder}
						onChange={onChange}
						autoFocus={autoFocus}
						onBlur={this.onBlur}
						required={required}
						minlength={minlength}
						pattern={pattern}
					/>
				)}
			</div>
		)
	}
}

InputField.propTypes = {
	autoFocus: PropTypes.bool,
	id: PropTypes.string,
	label: PropTypes.string,
	minlength: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	pattern: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string,
}

export default InputField
