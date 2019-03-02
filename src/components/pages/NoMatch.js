import React from 'react';
import AppLayout from '../common/AppLayout';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <AppLayout title="Page not found">
            <Typography paragraph>
                Sorry, but the page you're looking for doesn't exists.
                You can go to the <Link to="/">Homepage</Link> or use the navigation to leave this page.
            </Typography>
        </AppLayout>
    );
}

export default NoMatch;
