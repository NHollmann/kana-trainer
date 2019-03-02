import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function InfoCard({ title, subtitle, children, extLink }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    {subtitle}
                </Typography>
                <Typography paragraph>
                    {children}
                </Typography>
            </CardContent>
            {(extLink) ?
                <CardActions>
                    <a href={extLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Button size="small">Learn More</Button>
                    </a>
                </CardActions>
                : null}
        </Card>
    );
}

export default InfoCard;
