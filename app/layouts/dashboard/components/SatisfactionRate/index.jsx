import React from 'react';
import { IoHappy } from 'react-icons/io5';

import { Card } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import AdmBox from '~/components/AdmBox';
import AdmTypography from '~/components/AdmTypography';

import colors from '~/assets/admin-theme/base/colors';
import linearGradient from '~/assets/admin-theme/functions/linearGradient';

const SatisfactionRate = () => {
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card sx={{ height: '340px' }}>
			<AdmBox display='flex' flexDirection='column'>
				<AdmTypography variant='lg' color='white' fontWeight='bold' mb='4px'>
					Satisfaction Rate
				</AdmTypography>
				<AdmTypography variant='button' color='text' fontWeight='regular' mb='20px'>
					From all projects
				</AdmTypography>
				<AdmBox sx={{ alignSelf: 'center', justifySelf: 'center', zIndex: '-1' }}>
					<AdmBox sx={{ position: 'relative', display: 'inline-flex' }}>
						<CircularProgress variant='determinate' value={60} size={170} color='info' />
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
							<AdmBox
								sx={{
									background: info.main,
									transform: 'translateY(-50%)',
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								<IoHappy size='30px' color='#fff' />
							</AdmBox>
						</AdmBox>
					</AdmBox>
				</AdmBox>
				<AdmBox
					sx={({ breakpoints }) => ({
						width: '90%',
						padding: '18px 22px',
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
						height: '82px',
						mx: 'auto',
						borderRadius: '20px',
						background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
						transform: 'translateY(-90%)',
						zIndex: '1000'
					})}>
					<AdmTypography color='text' variant='caption' display='inline-block' fontWeight='regular'>
						0%
					</AdmTypography>
					<AdmBox
						flexDirection='column'
						display='flex'
						justifyContent='center'
						alignItems='center'
						sx={{ minWidth: '80px' }}>
						<AdmTypography color='white' variant='h3'>
							95%
						</AdmTypography>
						<AdmTypography color='text' variant='caption' fontWeight='regular'>
							Based on likes
						</AdmTypography>
					</AdmBox>
					<AdmTypography color='text' variant='caption' display='inline-block' fontWeight='regular'>
						100%
					</AdmTypography>
				</AdmBox>
			</AdmBox>
		</Card>
	);
};

export default SatisfactionRate;
