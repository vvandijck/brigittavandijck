import PropTypes from 'prop-types'
import Link from 'next/link'

const ServicesList = ({ services = [], small = false }) => (
	<section className={`services-list ${small ? 'services-list__list--secondary' : ''}`}>
		<div className="container">
			<div className="services-list__list">
				{services.map((service, index) => (
					<div key={index} className="services-list__item">
						<h3 className={`${small ? 'h4' : 'h3'}`}>{service.title}</h3>
						<hr className="service-list__divider"></hr>
						<p className={`${small ? 'body-petite' : 'body'}`}>{service.text}</p>
						<Link href="/practice/[slug]" as={`/practice/${service.link.slug}`}>
							<a className={`service-list__link app-button app-button--${small ? 'secondary' : 'primary'}`}>{service.label}</a>
						</Link>
					</div>
				))}
			</div>
		</div>
	</section>
)

ServicesList.propTypes = {
	services: PropTypes.array,
	small: PropTypes.bool,
}

export default ServicesList
