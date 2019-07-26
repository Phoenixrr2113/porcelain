import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Services extends Component {
	render() {
		let data = [
			{
				pageLink: 'service-details-left-sidebar',
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				iconClass: 'flaticon-002-welding',
				serviceTitle: 'Service One',
				serviceSubtitle:
					'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
			},
			{
				pageLink: 'service-details-left-sidebar',
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/urn3.png',
				iconClass: 'flaticon-004-walkie-talkie',
				serviceTitle: 'Service Two',
				serviceSubtitle:
					'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
			},
			{
				pageLink: 'service-details-left-sidebar',
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company.jpg',
				iconClass: 'flaticon-015-cart',
				serviceTitle: 'Service Three',
				serviceSubtitle:
					'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
			},
			{
				pageLink: 'service-details-left-sidebar',
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				iconClass: 'flaticon-002-welding',
				serviceTitle: 'Service Four',
				serviceSubtitle:
					'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
			},
			{
				pageLink: 'service-details-left-sidebar',
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/urn3.png',
				iconClass: 'flaticon-004-walkie-talkie',
				serviceTitle: 'Service Five',
				serviceSubtitle:
					'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
			},
			{
				pageLink: 'service-details-left-sidebar',
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company.jpg',
				iconClass: 'flaticon-015-cart',
				serviceTitle: 'Service Six',
				serviceSubtitle:
					'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
			},
		];

		let Datalist = data.map((val, i) => {
			return (
				<div
					className='col-lg-4 col-md-6 col-12 section-space--bottom--30'
					key={i}>
					<div className='service-grid-item'>
						<div className='service-grid-item__image'>
							<div className='service-grid-item__image-wrapper'>
								<a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
									<img
										style={{ height: '270px' }}
										src={`${val.img}`}
										className='img-fluid'
										alt='Service Grid'
									/>
								</a>
							</div>
							<div className='icon'>
								<i className={val.iconClass} />
							</div>
						</div>
						<div className='service-grid-item__content'>
							<h3 className='title'>
								<a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
									{val.serviceTitle}
								</a>
							</h3>
							<p className='subtitle'>{val.serviceSubtitle}</p>
							<a
								href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
								className='see-more-link'>
								SEE MORE
							</a>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				{/* Navigation bar */}
				<NavBar />

				{/* breadcrumb */}
				{/*====================  breadcrumb area ====================*/}
				<div className='breadcrumb-area breadcrumb-bg'>
					<div className='container'>
						<div className='row'>
							<div className='col'>
								<div className='page-banner text-center'>
									<h1>Service</h1>
									<ul className='page-breadcrumb'>
										<li>
											<a href='/'>Home</a>
										</li>
										<li>Service</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*====================  End of breadcrumb area  ====================*/}

				{/*====================  service page content ====================*/}
				<div className='page-wrapper section-space--inner--120'>
					{/*Service section start*/}
					<div className='service-section'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='service-item-wrapper'>
										<div className='row'>{Datalist}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*Service section end*/}
				</div>

				{/*====================  End of service page content  ====================*/}

				{/* Brand logo */}
				<BrandLogoSlider background='grey-bg' />

				{/* Footer */}
				<Footer />

				{/* Mobile Menu */}
				<MobileMenu />
			</div>
		);
	}
}

export default Services;
