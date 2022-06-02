const display = document.querySelector(".fortune-display");

const button = document.querySelector("#clickMe");


button.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 24);
        switch (randomNumber) {
        case 0:
            display.innerHTML = 'Be careful who you trust. Salt and sugar look the same.';
            break;
        case 1: 
            display.innerHTML = 'Ignore previous message.';
            break;
        case 2:
            display.innerHTML = 'There is no angry way to say bubbles.';
            break;
        case 3:
            display.innerHTML = 'It could be better but it\'s good enough.';
            break;
        case 4:
            display.innerHTML = 'The road to success is always under construction.';
            break;
        case 5:
            display.innerHTML = 'You must expect great things of yourself before you can do them.';
            break;
        case 6:
            display.innerHTML = 'You can\'t know, you can only believe. Or not. -C.S. Lewis';
            break;
        case 7:
            display.innerHTML = 'Perfect is boring. Human is beautiful.';
            break;
        case 8:
            display.innerHTML = 'Forever is a long time.';
            break;
        case 9:
            display.innerHTML = 'A party without cake is just a meeting. -Julia Child';
            break;
        case 10:
            display.innerHTML = 'The challenge is not to be perfect. It\'s to be whole. -Jane Fonda';
            break;
        case 11:
            display.innerHTML = 'Nobody gets to tell you how big your dreams can be.';
            break;
        case 12:
            display.innerHTML = 'There is no death. Only a change of worlds.';
            break;
        case 13:
            display.innerHTML = 'A person who never made a mistake never tried anything new.';
            break;
        case 14:
            display.innerHTML = 'Stay close to people who feel like sunlight. -Xan Oku';
            break;
        case 15:
            display.innerHTML = 'Progress not perfection.';
            break;
        case 16:
            display.innerHTML = 'Don\'t make a wish. Make a decision.';
            break;
        case 17:
            display.innerHTML = 'Adjust your eyes. See the same things differently.';
            break;
        case 18:
            display.innerHTML = 'Take nothing personally.';
            break;
        case 19:
            display.innerHTML = 'It\'s good to be prepared but stay open to surprises.';
            break;
        case 20:
            display.innerHTML = 'Let people discover you.';
            break;
        case 21:
            display.innerHTML = 'Be passionate and totally worth the chaos.';
            break;
        case 22:
            display.innerHTML = 'Go outside and play.';
            break;
        case 23:
            display.innerHTML = 'Beware the grand gesture.';
            break;
        case 24:
            display.innerHTML = 'A closed mouth gathers no feet.';
            break;
        default:
            display.innerHTML = 'Oops! Try again.';
        }
 })

