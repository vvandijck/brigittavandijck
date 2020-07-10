// Styles
import '../styles/index.less'

// Content
import query from './about.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHead from '../components/app-head/app-head'
import AppHeader from '../components/app-header/app-header'
import CallToAction from '../components/call-to-action/call-to-action'
import FullWidthImage from '../components/full-width-image/full-width-image'
import ImageBlock from '../components/image-block/image-block'
import ImageTextBlock from '../components/image-text-block/image-text-block'
import PageHeader from '../components/page-header/page-header'
import QuoteBlock from '../components/quote-block/quote-block'
import TextBlock from '../components/text-block/text-block'

const Page = ({ about, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} seo={about.seo} />
		<AppHeader />
		<main className="page">
			<PageHeader image={about.header.responsiveImage} subtitle={about.subtitle} title={about.title} />
			<section className="page__content">
				{about.content.map((block, index) => {
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
			</section>
			<CallToAction buttonLabel="Contact" link="/contact" title="Lorem ipsum" text="Lorem ipsum" />
		</main>
		<AppFooter />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	return await fetchContent({ query }).then(data => ({
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
