

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

    transcriptionExists(transcript) {
        return transcript in this.map;
    }

    getByKana(kana) {
        if (this.reverseMap[kana]) {
            return this.reverseMap[kana];
        } else {
            console.warn('Trying to access non existent kana.');
            return '❌';
        }
    }
}

export default Mapping;
