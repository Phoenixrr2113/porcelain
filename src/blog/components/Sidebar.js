import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		/* sidebar category */

		let categoryData = [
			{ categoryLink: 'blog-left-sidebar', categoryName: 'Frames' },
			{ categoryLink: 'blog-left-sidebar', categoryName: 'Portraits' },
			{ categoryLink: 'blog-left-sidebar', categoryName: 'Urns' },
			{ categoryLink: 'blog-left-sidebar', categoryName: 'Jewelry' },
			{ categoryLink: 'blog-left-sidebar', categoryName: 'Moasic' },
			{ categoryLink: 'blog-left-sidebar', categoryName: 'Pets' },
			{ categoryLink: 'blog-left-sidebar', categoryName: 'Pendants' },
		];

		let categoryDataList = categoryData.map((val, i) => {
			return (
				<li key={i}>
					<a href={`${process.env.PUBLIC_URL}/${val.categoryLink}`}>
						{val.categoryName}
					</a>
				</li>
			);
		});

		/* sidebar popular post */

		let popularPostData = [
			{
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item One',
				postLink: 'blog-details-left-sidebar',
			},
			{
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item Two',
				postLink: 'blog-details-left-sidebar',
			},
			{
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item Three',
				postLink: 'blog-details-left-sidebar',
			},
		];

		let popularPostDataList = popularPostData.map((val, i) => {
			return (
				<div className='sidebar-blog' key={i}>
					<a href='blog-details-left-sidebar.html' className='image'>
						<img src={`${val.postImg}`} alt='' />
					</a>
					<div className='content'>
						<h5>
							<a href={`${process.env.PUBLIC_URL}/${val.postLink}`}>
								{val.postTitle}
							</a>
						</h5>
					</div>
				</div>
			);
		});

		/* sidebar tag */

		let tagData = [
			{ tagLink: 'blog-left-sidebar', tagName: 'Frames' },
			{ tagLink: 'blog-left-sidebar', tagName: 'Portraits' },
			{ tagLink: 'blog-left-sidebar', tagName: 'Urns' },
			{ tagLink: 'blog-left-sidebar', tagName: 'Jewelry' },
			{ tagLink: 'blog-left-sidebar', tagName: 'Moasic' },
			{ tagLink: 'blog-left-sidebar', tagName: 'Pets' },
			{ tagLink: 'blog-left-sidebar', tagName: 'Pendants' },
		];

		let tagDataList = tagData.map((val, i) => {
			return (
				<li key={i}>
					<a href={`${process.env.PUBLIC_URL}/${val.tagLink}`}>{val.tagName}</a>
				</li>
			);
		});

		return (
			<div>
				<div className='sidebar-wrapper'>
					<div className='sidebar'>
						<h3 className='sidebar-title'>Search</h3>
						<div className='sidebar-search'>
							<form action='#'>
								<input type='text' placeholder='Search' />
								<button>
									<i className='ion-ios-search' />
								</button>
							</form>
						</div>
					</div>
					<div className='sidebar'>
						<h3 className='sidebar-title'>Categories</h3>
						<ul className='sidebar-list'>{categoryDataList}</ul>
					</div>
					<div className='sidebar'>
						<h3 className='sidebar-title'>Popular Post</h3>
						{popularPostDataList}
					</div>
					<div className='sidebar'>
						<h3 className='sidebar-title'>Popular Tags</h3>
						<ul className='sidebar-tag'>{tagDataList}</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;
