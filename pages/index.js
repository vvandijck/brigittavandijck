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
			<title>Home</title>
		</Head>
		<Header />
		<main className="page">
			<div className="container">
				<div dangerouslySetInnerHTML={{ __html: props.data.home.text }}></div>
			</div>
		</main>
		<Footer />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	const HOMEPAGE_QUERY = `query Home {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
				}
			}
		}
		home {
			id
			seo {
				description
				title
			}
			text(markdown: true)
		}
	}`

	const data = await fetchContent({
		query: HOMEPAGE_QUERY,
	})

	return {
		props: { data },
	}
}

export default Page
