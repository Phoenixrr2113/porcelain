import React, { Component } from 'react';

class BlogPostGrid extends Component {
	render() {
		let data = [
			{
				postLink: 'blog-details-left-sidebar',
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item One',
				postExcerpt:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex…',
			},
			{
				postLink: 'blog-details-left-sidebar',
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item Two',
				postExcerpt:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex…',
			},
			{
				postLink: 'blog-details-left-sidebar',
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item Three',
				postExcerpt:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex…',
			},
			{
				postLink: 'blog-details-left-sidebar',
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item Four',
				postExcerpt:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex…',
			},
			{
				postLink: 'blog-details-left-sidebar',
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item Five',
				postExcerpt:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex…',
			},
			{
				postLink: 'blog-details-left-sidebar',
				postImg:
					'http://porcelainsunlimited.com/wp-content/uploads/2014/10/how-to-choose-the-best-porcelain-memorials-company1.jpg',
				postTitle: 'Item Six',
				postExcerpt:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex…',
			},
		];

		let Datalist = data.map((val, i) => {
			return (
				<div className='col-sm-6 col-12' key={i}>
					<div className='blog-post-slider__single-slide blog-post-slider__single-slide--grid-view'>
						<div className='blog-post-slider__image section-space--bottom--30'>
							<a href={`${process.env.PUBLIC_URL}/${val.postLink}`}>
								<img src={`${val.postImg}`} className='img-fluid' alt='' />
							</a>
						</div>
						<div className='blog-post-slider__content'>
							<p className='post-date'>{val.postDate}</p>
							<h3 className='post-title'>
								<a href={`${process.env.PUBLIC_URL}/${val.postLink}`}>
									{val.postTitle}
								</a>
							</h3>
							<p className='post-excerpt'>{val.postExcerpt}</p>
							<a
								href={`${process.env.PUBLIC_URL}/${val.postLink}`}
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
				<div className='row'>{Datalist}</div>
			</div>
		);
	}
}

export default BlogPostGrid;
