import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MemberCard from '../components/MemberCard';

// Constants import
import ClairePhoto from '../assets/claire-photo.jpg';
import JoshPhoto from '../assets/josh-photo.jpg';
import MarcoPhoto from '../assets/marco-photo.png';
import ShadePhoto from '../assets/shade-photo.png';

const profiles = [
	{
		name: "Claire Song",
		src: ClairePhoto,
		github: "https://github.com/cxsong1",
		linkedin: "https://www.linkedin.com/in/clairexisong/"
	},
	{
		name: "Joshua Park",
		src: JoshPhoto,
		github: "https://github.com/JoshuaParkSJ",
		linkedin: "https://www.linkedin.com/in/joshparksj/"
	},
	{
		name: "Marco Ser",
		src: MarcoPhoto,
		github: "https://github.com/Resocram",
		linkedin: "https://www.linkedin.com/in/marcoser/"
	},
	{
		name: "Shade Wong",
		src: ShadePhoto,
		github: "https://github.com/shade-12",
		linkedin: "https://www.linkedin.com/in/shade-wong/"
	}
];


const useStyles = makeStyles(theme => ({
    container: {
		color: theme.palette.secondary.main,
		height: '82vh'
	},
    grow: {
        flexGrow: 1
	},
	chipContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	chip: {
		padding: '2rem',
		borderRadius: '50px'
	}
}));

function About() {
	const classes = useStyles();

	return (
		<Grid container alignItems="center" spacing={2} className={classes.container}>
            {/* Title */}
            <Grid item xs={12}>
                <Typography variant="h2" align="center" paragraph>
                    <b>Stories Behind Talko</b>
                </Typography>
            </Grid>

			<Grid item container direction="column">
				<Typography variant="h3" gutterBottom>
					<b>Inspiration</b>
				</Typography>
				<Typography variant="h6" paragraph style={{ color: 'white' }}>
					Public speaking is a critical skill in our lives. The 
					ability to communicate effectively and efficiently is a 
					very crucial, yet difficult skill to hone. For a few of 
					us on the team, having grown up competing in public 
					speaking competitions, we understand too well the 
					challenges that individuals looking to improve their 
					public speaking and presentation skills face. Building off 
					of our experience of effective techniques and best practices 
					and through analyzing the speech patterns of very well-known 
					public speakers, we have designed a web app that will target 
					weaker points in your speech and identify your strengths to 
					make us all better and more effective communicators.
				</Typography>

				<br />

				<Typography variant="h3" gutterBottom>
					<b>What it does</b>
				</Typography>
				<Typography variant="h6" gutterBottom style={{ color: 'white' }}>
					By analyzing speaking data from many successful public speakers 
					from a variety industries and backgrounds, we have established 
					relatively robust standards for optimal speed, energy levels and 
					pausing frequency during a speech. Taking into consideration the 
					overall tone of the speech, as selected by the user, we are able 
					to tailor our analyses to the user's needs. This simple and easy 
					to use web application will offer users insight into their overall 
					accuracy, enunciation, WPM, pause frequency, energy levels throughout 
					the speech, error frequency per interval and summarize some helpful 
					tips to improve their performance the next time around.
				</Typography>

				<br />

				<Typography variant="h3" gutterBottom>
					<b>How we built it</b>
				</Typography>
				<Typography variant="h6" gutterBottom style={{ color: 'white' }}>
					For the backend, we built a centralized RESTful Flask API to fetch 
					all backend data from one endpoint. We used Google Cloud Storage to 
					store files greater than 30 seconds as we found that locally saved 
					audio files could only retain about 20-30 seconds of audio. We also 
					used Google Cloud App Engine to deploy our Flask API as well as Google 
					Cloud Speech To Text to transcribe the audio. Various python libraries 
					were used for the analysis of voice data, and the resulting response 
					returns within 5-10 seconds. The web application user interface was 
					built using React, HTML and CSS and focused on displaying analyses 
					in a clear and concise manner. We had two members of the team in 
					charge of designing and developing the front end and two working 
					on the back end functionality.
				</Typography>

				<br />

				<Typography variant="h3" gutterBottom>
					<b>Achievements</b>
				</Typography>
				<Grid item className={classes.chipContainer}>
					<Chip 
						label={<Typography variant="h6"><b>nwHacks 2021 - Popular Vote</b></Typography>}
						color="secondary"
						className={classes.chip}
					/>
					<Chip 
						label={<Typography variant="h6"><b>nwHacks 2021 - Honorable Mention</b></Typography>}
						color="secondary"
						className={classes.chip}
					/>
				</Grid>

				<br />
            </Grid>

			<Grid item className={classes.grow} />

            {/* Member cards container */}
            <Grid item container spacing={10} direction="row" justify="center">
				{
					profiles.map((item, index) => {
						return (
							<Grid key={index} item>
								<MemberCard
									alt={item.name}
									src={item.src}
									github={item.github}
									linkedin={item.linkedin}
								/>
							</Grid>
						);
					})
				}
            </Grid>

			<Grid item className={classes.grow} />

		</Grid>
	);
}

export default About;