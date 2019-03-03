
/**
 * Two-way mapping utility class for kana transcription.
 */
class Mapping {
    constructor(map) {
        this.map = map;
        this.reverseMap = {};

        for (const key in map) {
            this.reverseMap[this.map[key]] = key;
        }
    }

    getByTranscription(transcript) {
        if (transcript in this.map) {
            return this.map[transcript];
        } else {
            console.warn('Trying to access non existent transcription.');
            return '❌';
        }
    }

    getByKana(kana) {
        if (this.reverseMap[kana]) {
            return this.reverseMap[kana];
        } else {
            console.warn('Trying to access non existent kana.');
            return '❌';
        }
    }

    /**
     * 
     * @param {Array} groups 
     * @returns {Array}
     */
    static getTranscriptionList(groups) {

        /**
         * 
         * @param {string} group 
         */
        const arrayByGroup = (group) => {
            const groupParts = group.split('-');
            const groupKey = groupParts[groupParts.length - 1];

            if (group === 'vowels') {
                return monographTable[0].concat(monographTable[10]);
            } else if (group.startsWith("mono-dia-")) {
                return diacritcsMonoTable[diacritics.indexOf(groupKey)];
            } else if (group.startsWith("mono-")) {
                return monographTable[consonants.indexOf(groupKey) + 1];
            } else if (group.startsWith("di-dia-")) {
                return diacritcsDiTable[digraphDiacritics.indexOf(groupKey)];
            } else if (group.startsWith("di-")) {
                return digraphTable[digraphs.indexOf(groupKey)];
            }
            
            return [];
        }

        /**
         * 
         * @param {Array} arr 
         * @param {string} elm
         * @returns {Array}
         */
        const reducer = (arr, elm) => arr.concat(arrayByGroup(elm));

        return groups.reduce(reducer, []).filter((elm) => elm != null);
    }
}

export default Mapping;

export const consonants = ['k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w'];
export const diacritics = ['g', 'z', 'd', 'b', 'p', 'v'];
export const digraphs = ['k', 's', 't', 'n', 'h', 'm', 'r'];
export const digraphDiacritics = ['g', 'z', 'd', 'b', 'p'];

export const monographTable = [
    ['a', 'i', 'u', 'e', 'o'],
    ['ka', 'ki', 'ku', 'ke', 'ko'],
    ['sa', 'shi', 'su', 'se', 'so'],
    ['ta', 'chi', 'tsu', 'te', 'to'],
    ['na', 'ni', 'nu', 'ne', 'no'],
    ['ha', 'hi', 'fu', 'he', 'ho'],
    ['ma', 'mi', 'mu', 'me', 'mo'],
    ['ya', null, 'yu', null, 'yo'],
    ['ra', 'ri', 'ru', 're', 'ro'],
    ['wa', null, null, null, 'wo'],
    [null, null, 'n', null, null],
];

export const digraphTable = [
    ['kya', 'kyu', 'kyo'],
    ['sha', 'shu', 'sho'],
    ['cha', 'chu', 'cho'],
    ['nya', 'nyu', 'nyo'],
    ['hya', 'hyu', 'hyo'],
    ['mya', 'myu', 'myo'],
    ['rya', 'ryu', 'ryo'],
];

export const diacritcsMonoTable = [
    ['ga', 'gi', 'gu', 'ge', 'go'],
    ['za', 'ji', 'zu', 'ze', 'zo'],
    ['da', 'dji', 'dzu', 'de', 'do'],
    ['ba', 'bi', 'bu', 'be', 'bo'],
    ['pa', 'pi', 'pu', 'pe', 'po'],
    [null, null, 'vu', null, null],
];

export const diacritcsDiTable = [
    ['gya', 'gyu', 'gyo'],
    ['ja', 'ju', 'jo'],
    ['ja_', 'ju_', 'jo_'],
    ['bya', 'byu', 'byo'],
    ['pya', 'pyu', 'pyo'],
];
