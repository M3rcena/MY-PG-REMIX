import React from 'react';

import { Card, Stack, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import AdmBox from '~/components/AdmBox';
import AdmTypography from '~/components/AdmTypography';

import GreenLightning from '~/assets/admin-images/shapes/green-lightning.svg';
import WhiteLightning from '~/assets/admin-images/shapes/white-lightning.svg';
import carProfile from '~/assets/admin-images/shapes/car-profile.svg';

import linearGradient from '~/assets/admin-theme/functions/linearGradient';
import colors from '~/assets/admin-theme/base/colors';

import LineChart from '~/admin-examples/Charts/LineCharts/LineChart';

import { lineChartDataProfile1, lineChartDataProfile2 } from 'variables/charts';
import { lineChartOptionsProfile2, lineChartOptionsProfile1 } from 'variables/charts';

const CarInformations = () => {
	const { gradients, info } = colors;
	const { cardContent } = gradients;
	return (
		<Card
			sx={({ breakpoints }) => ({
				[breakpoints.up('xxl')]: {
					maxHeight: '400px'
				}
			})}>
			<AdmBox display='flex' flexDirection='column'>
				<AdmTypography variant='lg' color='white' fontWeight='bold' mb='6px'>
					Car Informations
				</AdmTypography>
				<AdmTypography variant='button' color='text' fontWeight='regular' mb='30px'>
					Hello, Mark Johnson! Your Car is ready.
				</AdmTypography>
				<Stack
					spacing='24px'
					background='#fff'
					sx={({ breakpoints }) => ({
						[breakpoints.up('sm')]: {
							flexDirection: 'column'
						},
						[breakpoints.up('md')]: {
							flexDirection: 'row'
						},
						[breakpoints.only('xl')]: {
							flexDirection: 'column'
						}
					})}>
					<AdmBox
						display='flex'
						flexDirection='column'
						justifyContent='center'
						sx={({ breakpoints }) => ({
							[breakpoints.only('sm')]: {
								alignItems: 'center'
							}
						})}
						alignItems='center'>
						<AdmBox sx={{ position: 'relative', display: 'inline-flex' }}>
							<CircularProgress variant='determinate' value={60} size={170} color='info' />
							<AdmBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
								<AdmBox component='img' src={GreenLightning} />
								<AdmTypography color='white' variant='h2' mt='6px' fontWeight='bold' mb='4px'>
									68%
								</AdmTypography>
								<AdmTypography color='text' variant='caption'>
									Current Load
								</AdmTypography>
							</AdmBox>
						</AdmBox>
						<AdmBox
							display='flex'
							justifyContent='center'
							flexDirection='column'
							sx={{ textAlign: 'center' }}>
							<AdmTypography color='white' variant='lg' fontWeight='bold' mb='2px' mt='18px'>
								0h 58 min
							</AdmTypography>
							<AdmTypography color='text' variant='button' fontWeight='regular'>
								Time to full charge
							</AdmTypography>
						</AdmBox>
					</AdmBox>
					<Grid
						container
						sx={({ breakpoints }) => ({
							spacing: '24px',
							[breakpoints.only('sm')]: {
								columnGap: '0px',
								rowGap: '24px'
							},
							[breakpoints.up('md')]: {
								gap: '24px',
								ml: '50px !important'
							},
							[breakpoints.only('xl')]: {
								gap: '12px',
								mx: 'auto !important'
							}
						})}>
						<Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
							<AdmBox
								display='flex'
								p='18px'
								alignItems='center'
								sx={{
									background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
									minHeight: '110px',
									borderRadius: '20px'
								}}>
								<AdmBox display='flex' flexDirection='column' mr='auto'>
									<AdmTypography color='text' variant='caption' fontWeight='medium' mb='2px'>
										Battery Health
									</AdmTypography>
									<AdmTypography
										color='white'
										variant='h4'
										fontWeight='bold'
										sx={({ breakpoints }) => ({
											[breakpoints.only('xl')]: {
												fontSize: '20px'
											}
										})}>
										76%
									</AdmTypography>
								</AdmBox>
								<AdmBox
									display='flex'
									justifyContent='center'
									alignItems='center'
									sx={{
										background: info.main,
										borderRadius: '12px',
										width: '56px',
										height: '56px'
									}}>
									<AdmBox component='img' src={carProfile} />
								</AdmBox>
							</AdmBox>
						</Grid>
						<Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
							<AdmBox
								display='flex'
								p='18px'
								alignItems='center'
								sx={{
									background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
									borderRadius: '20px'
								}}>
								<AdmBox display='flex' flexDirection='column' mr='auto'>
									<AdmTypography color='text' variant='caption' fontWeight='medium' mb='2px'>
										Efficiency
									</AdmTypography>
									<AdmTypography
										color='white'
										variant='h4'
										fontWeight='bold'
										sx={({ breakpoints }) => ({
											[breakpoints.only('xl')]: {
												fontSize: '20px'
											}
										})}>
										+20%
									</AdmTypography>
								</AdmBox>
								<AdmBox sx={{ maxHeight: '75px' }}>
									<LineChart
										lineChartData={lineChartDataProfile1}
										lineChartOptions={lineChartOptionsProfile1}
									/>
								</AdmBox>
							</AdmBox>
						</Grid>
						<Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
							<AdmBox
								display='flex'
								p='18px'
								alignItems='center'
								sx={{
									background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
									borderRadius: '20px',
									minHeight: '110px'
								}}>
								<AdmBox display='flex' flexDirection='column' mr='auto'>
									<AdmTypography color='text' variant='caption' fontWeight='medium' mb='2px'>
										Consumption
									</AdmTypography>
									<AdmTypography
										color='white'
										variant='h4'
										fontWeight='bold'
										sx={({ breakpoints }) => ({
											[breakpoints.only('xl')]: {
												fontSize: '20px'
											}
										})}>
										163W/km
									</AdmTypography>
								</AdmBox>
								<AdmBox
									display='flex'
									justifyContent='center'
									alignItems='center'
									sx={{
										background: info.main,
										borderRadius: '12px',
										width: '56px',
										height: '56px'
									}}>
									<AdmBox component='img' src={WhiteLightning} />
								</AdmBox>
							</AdmBox>
						</Grid>
						<Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
							<AdmBox
								display='flex'
								p='18px'
								alignItems='center'
								sx={{
									background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
									borderRadius: '20px'
								}}>
								<AdmBox display='flex' flexDirection='column' mr='auto'>
									<AdmTypography color='text' variant='caption' fontWeight='medium' mb='2px'>
										This Week
									</AdmTypography>
									<AdmTypography
										color='white'
										variant='h4'
										fontWeight='bold'
										sx={({ breakpoints }) => ({
											[breakpoints.only('xl')]: {
												fontSize: '20px'
											}
										})}>
										1.342km
									</AdmTypography>
								</AdmBox>
								<AdmBox sx={{ maxHeight: '75px' }}>
									<LineChart
										lineChartData={lineChartDataProfile2}
										lineChartOptions={lineChartOptionsProfile2}
									/>
								</AdmBox>
							</AdmBox>
						</Grid>
					</Grid>
				</Stack>
			</AdmBox>
		</Card>
	);
};

export default CarInformations;
