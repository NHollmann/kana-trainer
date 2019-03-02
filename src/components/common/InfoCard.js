import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExternalLink from './ExternalLink';


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
                    <ExternalLink href={extLink} button>
                        <Button size="small">Learn More</Button>
                    </ExternalLink>
                </CardActions>
                : null}
        </Card>
    );
}

export default InfoCard;
