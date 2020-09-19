import { Component } from 'react'
import PropTypes from 'prop-types'
import InputField from '../input-field/input-field'

class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleResponse = this.handleResponse.bind(this)
		this.resetForm = this.resetForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
		this.state = {
			formData: {},
			_gotcha: '',
			status: '',
		}
	}

	resetForm() {
		this.setState({
			formData: {},
			_gotcha: '',
			status: '',
		})
	}

	handleChange(event) {
		const { name, value } = event.target
		const { formData } = this.state

		this.setState({
			formData: {
				...formData,
				[name]: value,
			},
		})
	}

	handleResponse(event) {
		switch (event.status) {
			case 200: {
				this.resetForm()
				this.setState({ status: 'SUCCESS' })
				break
			}
			case 403: {
				console.error('In order to submit via AJAX, reCAPTCHA in this form must be disabled.', event)
				break
			}
			default: {
				this.setState({ status: 'ERROR' })
				console.error('Something went wrong: ', event)
			}
		}
	}

	submitForm(event) {
		event.preventDefault()
		const { formData, _gotcha } = this.state
		const isSpam = _gotcha.length > 0
		const data = { _subject: 'Contactformulier - Brigittavandijck.nl', ...formData }

		if (isSpam) { return }

		return fetch(`https://formspree.io/${process.env.FORMSPREE_KEY}`, {
			method: 'POST',
			mode: 'cors',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(event => this.handleResponse(event))
			.catch(event => {
				this.setState({ status: 'ERROR' })
				console.error(event)
			})
	}

	render() {
		const { formData, _gotcha, status } = this.state

		return (
			<div className="contact-form">
				<form onSubmit={this.submitForm}>
					<InputField
						name="name"
						label="Mijn naam is"
						placeholder="Naam"
						type="text"
						onChange={this.handleChange}
						value={formData.name}
						required={true}
						minlength="3"
					/>
					<InputField
						name="company"
						label="Mijn bedrijf is"
						placeholder="Bedrijfsnaam"
						type="text"
						onChange={this.handleChange}
						value={formData.company}
						minlength="3"
					/>
					<InputField
						name="email"
						label="Je kan mij mailen via"
						placeholder="E-mailadres"
						type="email"
						onChange={this.handleChange}
						value={formData.email}
						required={true}
					/>
					<InputField
						name="phone"
						label="Je kunt mij bellen op"
						placeholder="Telefoonnummer"
						type="tel"
						onChange={this.handleChange}
						value={formData.phone}
						minlength="10"
					/>
					<InputField
						name="project"
						label="Ik wil het volgende bespreken"
						placeholder="Informatie over werkzaamheden"
						type="textarea"
						onChange={this.handleChange}
						value={formData.project}
						minlength="3"
					/>
					<InputField
						type="hidden"
						name="_gotcha"
						value={_gotcha}
						style={{ display: 'none' }}
						onChange={this.handleChange}
					/>

					{status === 'SUCCESS' ? (
						<p className="body">Thanks!</p>
					) : (
						<button className="app-button app-button--secondary">Versturen</button>
					)}

					{status === 'ERROR' && (
						<p className="body">Ooops! Er is iets fout gegaan..</p>
					)}
				</form>
			</div>
		)
	}
}

ContactForm.propTypes = {}

export default ContactForm
