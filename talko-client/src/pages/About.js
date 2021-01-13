import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MemberCard from '../components/MemberCard';

// Constants import
import ClairePhoto from '../assets/claire-photo.jpg';
import JoshPhoto from '../assets/josh-photo.jpg';
import MarcoPhoto from '../assets/marco-photo.jpg';
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
	}
}));

function About() {
	const classes = useStyles();

	return (
		<Grid container direction="column" alignItems="center" spacing={2} className={classes.container}>
            {/* Title */}
            <Grid item>
                <Typography variant="h2" align="center" paragraph>
                    <b>Stories Behind Talko</b>
                </Typography>
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