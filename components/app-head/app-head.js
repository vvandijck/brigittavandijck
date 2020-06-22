import { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

class AppHead extends Component {
	constructor(props) {
		super(props)
		const { meta } = props

		this.title = `${meta.title} | ${meta.fallbackSeo.title}` + meta.titleSuffix
		this.description = `${meta.description || meta.fallbackSeo.description}`
	}

	render() {
		const { meta } = this.props

		return (
			<Head>
				<title>{this.title}</title>
				<meta name="description" content={this.description} />
				{meta && <meta name="keywords" content={meta.keywords} />}
				{meta && <meta name="robots" content={meta.robots} />}
			</Head>
		)
	}
}

AppHead.propTypes = {
	meta: PropTypes.object,
}

export default AppHead
