// Styles
import '../../styles/index.less'

// Content
import graphqlQuery from './[slug].query.js'

// Lib
import fetchContent from '../../lib/fetch-content'

// Components
import AppFooter from '../../components/app-footer/app-footer'
import AppHead from '../../components/app-head/app-head'
import AppHeader from '../../components/app-header/app-header'
import CallToAction from '../../components/call-to-action/call-to-action'
import FullWidthImage from '../../components/full-width-image/full-width-image'
import ImageBlock from '../../components/image-block/image-block'
import ImageTextBlock from '../../components/image-text-block/image-text-block'
import PageHeader from '../../components/page-header/page-header'
import QuoteBlock from '../../components/quote-block/quote-block'
import TextBlock from '../../components/text-block/text-block'
import TitleListBlock from '../../components/title-list-block/title-list-block'

const Page = ({ service, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} seo={service.seo} />
		<AppHeader />
		<main className="page">
			<PageHeader subtitle={service.subtitle} title={service.title} />
			<section className="page__content">
				{service.content.map((block, index) => {
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
						case 'text_list':
							return <TitleListBlock title={block.title} text={block.text} inverted={block.inverted} />
					}
				})}
			</section>
			<CallToAction
				buttonLabel={service.callToAction.label}
				link={service.callToAction.link}
				title={service.callToAction.title}
				text={service.callToAction.text}
			/>
		</main>
		<AppFooter />
	</React.Fragment>
)

Page.getInitialProps = async ({ query }) => {
	return await fetchContent({ query: graphqlQuery(query.slug) }).then(data => ({
		meta: {
			...data._site.globalSeo,
			...data.service.seo,
			keywords: data.service.keywords,
		},
		service: data.service,
	}))
}

export default Page
