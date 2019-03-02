import Mapping from './Mapping';

/**
 * The transcription mapping for hiragana.
 */
class HiraganaUtil extends Mapping {
    constructor() {
        super({
            'n': 'ん',

            'a': 'あ',
            'i': 'い',
            'u': 'う',
            'e': 'え',
            'o': 'お',

            'ka': 'か',
            'ki': 'き',
            'ku': 'く',
            'ke': 'け',
            'ko': 'こ',

            'sa': 'さ',
            'shi': 'し',
            'su': 'す',
            'se': 'せ',
            'so': 'そ',

            'ta': 'た',
            'chi': 'ち',
            'tsu': 'つ',
            'te': 'て',
            'to': 'と',

            'na': 'な',
            'ni': 'に',
            'nu': 'ぬ',
            'ne': 'ね',
            'no': 'の',

            'ha': 'は',
            'hi': 'ひ',
            'fu': 'ふ',
            'he': 'へ',
            'ho': 'ほ',

            'ma': 'ま',
            'mi': 'み',
            'mu': 'む',
            'me': 'め',
            'mo': 'も',

            'ya': 'や',
            'yu': 'ゆ',
            'yo': 'よ',

            'ra': 'ら',
            'ri': 'り',
            'ru': 'る',
            're': 'れ',
            'ro': 'ろ',

            'wa': 'わ',
            'wo': 'を',

            'ga': 'が',
            'gi': 'ぎ',
            'gu': 'ぐ',
            'ge': 'げ',
            'go': 'ご',

            'za': 'ざ',
            'ji': 'じ',
            'zu': 'ず',
            'ze': 'ぜ',
            'zo': 'ぞ',

            'da': 'だ',
            'dji': '',
            'dzu': '',
            'de': 'で',
            'do': 'ど',

            'ba': 'ば',
            'bi': 'び',
            'bu': 'ぶ',
            'be': 'べ',
            'bo': 'ぼ',

            'pa': 'ぱ',
            'pi': 'ぴ',
            'pu': 'ぷ',
            'pe': 'ぺ',
            'po': 'ぽ',
        });
    }
}

export default HiraganaUtil;
