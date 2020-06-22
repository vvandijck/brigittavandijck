import '../styles/index.less'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHead from '../components/app-head/app-head'
import AppHeader from '../components/app-header/app-header'
import PageHeader from '../components/page-header/page-header'

const Page = ({ about, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} seo={about.seo} />
		<AppHeader />
		<main className="page">
			<PageHeader image={about.header.responsiveImage} />
			<div className="page__content"></div>
		</main>
		<AppFooter />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	const QUERY = `query About {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
					description
				}
			}
		}
		about {
			header {
				responsiveImage(imgixParams: { fit: crop, w: 1440, h: 500, auto: format }) {
					alt
					aspectRatio
					base64
					bgColor
					height
					sizes
					src
					srcSet
					title
					webpSrcSet
					width
				}
			}
			id
			keywords
			robots
			seo {
				description
				title
			}
		}
	}`

	return await fetchContent({ query: QUERY }).then(data => ({
		meta: {
			...data._site.globalSeo,
			...data.about.seo,
			keywords: data.about.keywords,
			robots: data.about.robots,
		},
		about: data.about,
	}))
}

export default Page
