import React from 'react';
import { Grid } from '@material-ui/core';
import InfoCard from '../common/InfoCard';
import ContentCard from '../common/ContentCard';
import MonographTable from './MonographTable';
import DiacriticsMonoTable from './DiacriticsMonoTable';
import DigraphTable from './DigraphTable';
import DiacriticsDiTable from './DiacriticsDiTable';

function KanaInfo({ title, subtitle, extLink, mapping, children }) {
    return (
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <InfoCard title={title} subtitle={subtitle} extLink={extLink}>
                    {children}
                </InfoCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <ContentCard title="Monographs">
                    <MonographTable mapping={mapping} />
                </ContentCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <ContentCard title="Monograph Diacritics">
                    <DiacriticsMonoTable mapping={mapping} />
                </ContentCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <ContentCard title="Digraphs">
                    <DigraphTable mapping={mapping} />
                </ContentCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <ContentCard title="Digraph Diacritics">
                    <DiacriticsDiTable mapping={mapping} />
                </ContentCard>
            </Grid>
        </Grid>
    );
}

export default KanaInfo;
