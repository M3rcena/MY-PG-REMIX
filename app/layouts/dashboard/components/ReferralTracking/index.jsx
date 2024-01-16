import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';

import { Card, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import AdmBox from ' components/AdmBox';
import AdmTypography from ' components/AdmTypography';

import colors from ' assets/admin-theme/base/colors';
import linearGradient from ' assets/admin-theme/functions/linearGradient';

function ReferralTracking() {
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card
			sx={{
				height: '100%',
				background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
			}}>
			<AdmBox sx={{ width: '100%' }}>
				<AdmBox
					display='flex'
					alignItems='center'
					justifyContent='space-beetween'
					sx={{ width: '100%' }}
					mb='40px'>
					<AdmTypography variant='lg' color='white' mr='auto' fontWeight='bold'>
						Referral Tracking
					</AdmTypography>
					<AdmBox
						display='flex'
						justifyContent='center'
						alignItems='center'
						bgColor='#22234B'
						sx={{ width: '37px', height: '37px', cursor: 'pointer', borderRadius: '12px' }}>
						<FaEllipsisH color={info.main} size='18px' />
					</AdmBox>
				</AdmBox>
				<AdmBox
					display='flex'
					sx={({ breakpoints }) => ({
						[breakpoints.up('xs')]: {
							flexDirection: 'column',
							gap: '16px',
							justifyContent: 'center',
							alignItems: 'center'
						},
						[breakpoints.up('md')]: {
							flexDirection: 'row',
							justifyContent: 'flex-start',
							alignItems: 'center'
						}
					})}>
					<Stack
						direction='column'
						spacing='20px'
						width='500px'
						maxWidth='50%'
						sx={({ breakpoints }) => ({
							mr: 'auto',
							[breakpoints.only('md')]: {
								mr: '75px'
							},
							[breakpoints.only('xl')]: {
								width: '500px',
								maxWidth: '40%'
							}
						})}>
						<AdmBox
							display='flex'
							width='220px'
							p='20px 22px'
							flexDirection='column'
							sx={({ breakpoints }) => ({
								background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
								borderRadius: '20px',
								[breakpoints.up('xl')]: {
									maxWidth: '110px !important'
								},
								[breakpoints.up('xxl')]: {
									minWidth: '180px',
									maxWidth: '100% !important'
								}
							})}>
							<AdmTypography color='text' variant='button' fontWeight='regular' mb='5px'>
								Invited
							</AdmTypography>
							<AdmTypography color='white' variant='lg' fontWeight='bold'>
								145 people
							</AdmTypography>
						</AdmBox>
						<AdmBox
							display='flex'
							width='220px'
							p='20px 22px'
							flexDirection='column'
							sx={({ breakpoints }) => ({
								background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
								borderRadius: '20px',
								[breakpoints.up('xl')]: {
									maxWidth: '110px !important'
								},
								[breakpoints.up('xxl')]: {
									minWidth: '180px',
									maxWidth: '100% !important'
								}
							})}>
							<AdmTypography color='text' variant='button' fontWeight='regular' mb='5px'>
								Bonus
							</AdmTypography>
							<AdmTypography color='white' variant='lg' fontWeight='bold'>
								1,465
							</AdmTypography>
						</AdmBox>
					</Stack>
					<AdmBox sx={{ position: 'relative', display: 'inline-flex' }}>
						<CircularProgress
							variant='determinate'
							value={70}
							size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
							color='success'
						/>
						<AdmBox
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							<AdmBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
								<AdmTypography color='text' variant='button' mb='4px'>
									Safety
								</AdmTypography>
								<AdmTypography
									color='white'
									variant='d5'
									fontWeight='bold'
									mb='4px'
									sx={({ breakpoints }) => ({
										[breakpoints.only('xl')]: {
											fontSize: '32px'
										}
									})}>
									9.3
								</AdmTypography>
								<AdmTypography color='text' variant='button'>
									Total Score
								</AdmTypography>
							</AdmBox>
						</AdmBox>
					</AdmBox>
				</AdmBox>
			</AdmBox>
		</Card>
	);
}

export default ReferralTracking;
