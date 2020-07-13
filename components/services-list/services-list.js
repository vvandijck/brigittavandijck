import PropTypes from 'prop-types'
import Link from 'next/link'

const ServicesList = ({ services = [] }) => (
	<section className="services-list">
		<div className="container">
			<h3 className="services-list__title h2">Wat ik voor je kan doen</h3>
			<div className="services-list__list">
				{services.slice(0, 3).map((service, index) => (
					<div key={index} className="services-list__item">
						<h3 className="h3">{service.title}</h3>
						<hr className="service-list__divider"></hr>
						<p className="body">{service.text}</p>
						<Link href={`/practice/${service.link.slug}`}>
							<a className="service-list__link app-button app-button--primary">{service.label}</a>
						</Link>
					</div>
				))}
			</div>

			<h4 className="services-list__subtitle h3">En zelfs nog...</h4>
			<div className="services-list__list services-list__list--secondary">
				{services.slice(3, 5).map((service, index) => (
					<div key={index} className="services-list__item">
						<h3 className="h4">{service.title}</h3>
						<hr className="service-list__divider"></hr>
						<p className="body-petite">{service.text}</p>
						<Link href={`/practice/${service.link.slug}`}>
							<a className="service-list__link app-button app-button--secondary">{service.label}</a>
						</Link>
					</div>
				))}
			</div>
		</div>
	</section>
)

ServicesList.propTypes = {
	services: PropTypes.array,
}

export default ServicesList
