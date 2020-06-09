import '../styles/index.less'

// Lib
import fetchContent from '../lib/fetch-content'

// Core
import Head from 'next/head'

// Components
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Page = ({ props }) => (
	<React.Fragment>
		<Head>
			<title>Contact</title>
		</Head>
		<Header />
		<main className="page">
			<div className="container">
				<div dangerouslySetInnerHTML={{ __html: props.data.contact.text }}></div>
			</div>
		</main>
		<Footer />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	const CONTACT_QUERY = `query Contact {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
				}
			}
		}
		contact {
			id
			seo {
				description
				title
			}
			text(markdown: true)
		}
	}`

	const data = await fetchContent({
		query: CONTACT_QUERY,
	})

	return {
		props: { data },
	}
}

export default Page
