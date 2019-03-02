import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ContentCard from '../common/ContentCard';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const consonants = ['k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w'];
const diacritics = ['g', 'z', 'd', 'b', 'p'];
const digraphs = ['k', 's', 't', 'n', 'h', 'm', 'r'];
const digraphDiacritics = ['g', 'z', 'd', 'b', 'p'];

function KanaPanel(props) {
    const { description, kana, list } = props;

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{description}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <FormGroup>
                    {list.map(value => {
                        return (
                            <FormControlLabel
                                key={value}
                                control={
                                    <Checkbox checked={true} value="jason" />
                                }
                                label={`'${value}'-${kana}`}
                            />
                        );
                    })}
                </FormGroup>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

function KanaSelectionCard(props) {
    const { kana } = props;

    return (
        <ContentCard>
            <FormControl component="fieldset" style={{width: '100%'}} >
                <FormLabel component="legend">{kana}</FormLabel>
                <br/>
                <Button color="secondary">
                    Select all
                </Button>
                <Button color="secondary">
                    Deselect all
                </Button>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={true} value="vowels" />
                        }
                        label="Vowels and 'n'"
                    />
                </FormGroup>

                <KanaPanel kana={kana} description={`${kana} belonging to consonants.`} list={consonants} />
                <KanaPanel kana={kana} description={`${kana} diacritics.`} list={diacritics} />
                <KanaPanel kana={kana} description={`${kana} digraphs.`} list={digraphs} />
                <KanaPanel kana={kana} description={`${kana} digraphs with diacritics.`} list={digraphDiacritics} />
            </FormControl>
        </ContentCard>
    );
}

export default KanaSelectionCard;
