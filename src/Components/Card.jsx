// TechCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2, IconButton } from '@mui/material';
import { GitHub, Link } from '@mui/icons-material';
import StackIcon from 'tech-stack-icons';

const TechCard = ({ title, description, techStack = [], link }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      {/* <CardMedia
        component="img"
        alt={title}
        height="200"
        width="150"
        image={image}
        sx={{ marginTop: 1 }}
      /> */}
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Grid2 container spacing={1} justifyContent="flex-start" sx={{ padding: 1 }}>
        {techStack.map((tech, index) => (
          <Grid2 item key={index}>
            <StackIcon name={tech} style={{width: '5vh'}}/> {/* Display tech icons using the name prop */}
          </Grid2>
        ))}
      </Grid2>
      <CardContent>
        <IconButton
          component="a"
          href={link}
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TechCard;
