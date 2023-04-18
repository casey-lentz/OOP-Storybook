export default class Alien {
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = 'Alien';

    }
    fly = () => 'Wheeeeewhoooooooooo!';
    sayPhrase = () => this.phrase;
}
