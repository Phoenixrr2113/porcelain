import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = {
  root: {
    width: '100%',
    marginTop: 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 650,
  },
}

function createData(Inches, Centimeters) {
  return { Inches, Centimeters };
}

const rows = [
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  createData('2 x 2 3/4', '5 x 7'),
  
];

class SizeChartSlider extends Component {
	constructor(props) {
		super(props);
		this.goNext = this.goNext.bind(this);
		this.goPrev = this.goPrev.bind(this);
		this.swiper = null;
	}

	goNext() {
		if (this.swiper) this.swiper.slideNext();
	}

	goPrev() {
		if (this.swiper) this.swiper.slidePrev();
	}

	render() {
    const {classes} = this.props
		const params = {
			slidesPerView: 1,
			loop: true,
			speed: 1000,
			spaceBetween: 30,
		};

		let data = [
			{
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2018/11/mausoleum3-optimized.jpg',
				sliderTitle: 'Oval Shapes',
				sliderShortDesc:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
		
			},
			{
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2013/01/Slider_1.jpg',
				sliderTitle: 'Heart Shapes',
				sliderShortDesc:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
				sliderLink: 'project-details',
			},
			{
				img:
					'http://porcelainsunlimited.com/wp-content/uploads/2013/01/Slider_1.jpg',
				sliderTitle: 'Rectangular Shapes',
				sliderShortDesc:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
				sliderLink: 'project-details',
			},
		];

		let DataList = data.map((val, i) => {
			return (
				<div
					className='swiper-slide latest-project-slider__single-slide'
					key={i}>
					<div className='row row-30 align-items-center'>
						<div className='col-lg-4'>
							<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='content'>
								<Paper className={classes.root}>
									<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='image'>
										<h2 style={{paddingTop: '15px'}} className='title'>{val.sliderTitle}</h2>
										<img src={`${val.img}`} className='img-fluid' alt='' />
									</div>
      						<Table className={classes.table}>
        						<TableHead>
          						<TableRow>
            						<TableCell>Inches</TableCell>
            						<TableCell>Centimeters</TableCell>
          						</TableRow>
        						</TableHead>
        						<TableBody>
          						{rows.map((row, i) => (
            						<TableRow key={i}>
              						<TableCell>{row.Inches}</TableCell>
              						<TableCell>{row.Centimeters}</TableCell>
												</TableRow>)
											)}
        						</TableBody>
      						</Table>
    						</Paper>
								<a
									href={`${process.env.PUBLIC_URL}/${val.sliderLink}`}
									className='see-more-link see-more-link--color' style={{paddingTop: '15px'}}>
									LOGIN TO SEE PRICES
								</a>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				{/*====================  project slider area ====================*/}
				<div className='project-slider-area grey-bg section-space--inner--120'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								{/* section title */}
								<div className='section-title-area text-center'>
									<h2 className='section-title section-space--bottom--120'>
										Our Sizes <span className='title-icon' />
									</h2>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='latest-project-slider'>
									<div className=''>
										{DataList}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*====================  End of project slider area  ====================*/}
			</div>
		);
	}
}

export default withStyles(styles)(SizeChartSlider);
