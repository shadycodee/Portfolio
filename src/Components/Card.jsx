import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProjectCard = ({ image, title, description, technologies }) => {
    return (
        <Card sx={{ display: 'flex', margin: 2 }}>
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
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProjectCard;