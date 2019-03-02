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
    const { description, kana, list, prefix, onChange, selection } = props;

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{description}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <FormGroup>
                    {list.map(value => {
                        const key = `${prefix}${value}`;
                        return (
                            <FormControlLabel
                                key={key}
                                control={
                                    <Checkbox 
                                        checked={selection.includes(key)} 
                                        value={key} 
                                        onChange={onChange} 
                                    />
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
    const { kana, selection } = props;

    function handleChange(event) {
        let newSelection = [...selection];
        const newValue = event.target.value;
        if (event.target.checked && !newSelection.includes(newValue)) {
            newSelection.push(newValue);
        } else {
            const index = newSelection.indexOf(newValue);
            if (index > -1) {
                newSelection.splice(index, 1);
            }
        }
        props.onChange(newSelection);
    }

    function selectAll() {
        let newSelection = ['vowels'];

        const selReduce = (prefix) => (sel, letter) => {sel.push(prefix + letter); return sel;}

        newSelection = consonants.reduce(selReduce("mono-"), newSelection);
        newSelection = diacritics.reduce(selReduce("mono-dia-"), newSelection);
        newSelection = digraphs.reduce(selReduce("di-"), newSelection);
        newSelection = digraphDiacritics.reduce(selReduce("di-dia-"), newSelection);

        props.onChange(newSelection);
    }

    function deselectAll() {
        props.onChange([]);
    }

    return (
        <ContentCard>
            <FormControl component="fieldset" style={{width: '100%'}} >
                <FormLabel component="legend">{kana}</FormLabel>
                <br/>
                <Button color="secondary" onClick={selectAll}>
                    Select all
                </Button>
                <Button color="secondary" onClick={deselectAll}>
                    Deselect all
                </Button>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={selection.includes('vowels')} onChange={handleChange} value="vowels" />
                        }
                        label="Vowels and 'n'"
                    />
                </FormGroup>

                <KanaPanel kana={kana} onChange={handleChange} prefix="mono-" selection={selection}
                    description={`${kana} belonging to consonants.`} list={consonants} />
                <KanaPanel kana={kana} onChange={handleChange} prefix="mono-dia-" selection={selection}
                    description={`${kana} diacritics.`} list={diacritics} />
                <KanaPanel kana={kana} onChange={handleChange} prefix="di-" selection={selection}
                    description={`${kana} digraphs.`} list={digraphs} />
                <KanaPanel kana={kana} onChange={handleChange} prefix="di-dia-" selection={selection}
                    description={`${kana} digraphs with diacritics.`} list={digraphDiacritics} />
            </FormControl>
        </ContentCard>
    );
}

export default KanaSelectionCard;
