import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link } from '@mui/material';

const ProjectCard = ({ image, title, description, technologies, githubLink }) => {
    return (
        <Card sx={{ display: 'flex', margin: 2, padding: 1 }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={image}
                alt={title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Technologies: {technologies.join(', ')}
                    </Typography>
                    {githubLink && (
                        <Typography variant="body2" color="text.secondary">
                        <Link href={githubLink} target="_blank" rel="noopener">
                            View on GitHub
                        </Link>
                        </Typography>
                    )}
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProjectCard;