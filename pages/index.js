import '../styles/index.less'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHead from '../components/app-head/app-head'
import AppHeader from '../components/app-header/app-header'
import FullWidthImage from '../components/full-width-image/full-width-image'
import ImageBlock from '../components/image-block/image-block'
import ImageTextBlock from '../components/image-text-block/image-text-block'
import PageHeader from '../components/page-header/page-header'
import QuoteBlock from '../components/quote-block/quote-block'
import TextBlock from '../components/text-block/text-block'

const Page = ({ home, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} />
		<AppHeader />
		<main className="page">
			<PageHeader image={home.header.responsiveImage} />
			<div className="page__content">
				{home.content.map((block, index) => {
					switch (block.recordType) {
						case 'image':
							return <ImageBlock key={index} image={block.image.responsiveImage} title={block.title} />

						case 'image_full_width':
							return <FullWidthImage key={index} image={block.image.responsiveImage} title={block.title} />

						case 'quote':
							return <QuoteBlock key={index} name={block.name} text={block.text} />

						case 'text_full_width':
							return <TextBlock key={index} title={block.title} text={block.text} />

						case 'text_image':
							return (
								<ImageTextBlock
									key={index}
									title={block.title}
									text={block.text}
									image={block.image.responsiveImage}
									inverted={block.inverted}
								/>
							)
					}
				})}
			</div>
		</main>
		<AppFooter />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	const QUERY = `query Home {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
					description
				}
			}
		}
		home {
			content {
				... on ImageRecord {
					recordType: _modelApiKey
					image {
						responsiveImage(imgixParams: {fit: crop, w: 1180, auto: format}) {
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
					title
				}
				... on QuoteRecord {
					recordType: _modelApiKey
					name
					text
				}
				... on TextImageRecord {
					recordType: _modelApiKey
					image {
						responsiveImage(imgixParams: {fit: crop, w: 1180, auto: format}) {
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
					inverted
					text
					title
				}
				... on TextFullWidthRecord {
					recordType: _modelApiKey
					text(markdown: true)
					title
				}
				... on ImageFullWidthRecord {
					recordType: _modelApiKey
					image {
						responsiveImage(imgixParams: {fit: crop, w: 1180, h: 600, auto: format}) {
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
					title
				}
			}
			header {
				responsiveImage(imgixParams: {fit: crop, w: 1440, h: 600, auto: format}) {
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
			...data.home.seo,
			keywords: data.home.keywords,
			robots: data.home.robots,
		},
		home: data.home,
	}))
}

export default Page
