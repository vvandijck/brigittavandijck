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
			<title>About</title>
		</Head>
		<Header />
		<main className="page">
			<div className="container">
				<div dangerouslySetInnerHTML={{ __html: props.data.about.text }}></div>
			</div>
		</main>
		<Footer />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	const ABOUT_QUERY = `query About {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
				}
			}
		}
		about {
			id
			seo {
				description
				title
			}
			text(markdown: true)
		}
	}`

	const data = await fetchContent({
		query: ABOUT_QUERY,
	})

	return {
		props: { data },
	}
}

export default Page
