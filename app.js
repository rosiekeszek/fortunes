//let requestFortune = document.querySelector(".button1");

//let deliverFortune = document.querySelector(".fortune-display")

//document.querySelector(".fortune-display").addEventListener("click", deliverFortune());

function deliverFortune() {

    let randomNumber = Math.floor(Math.random() * 24);

    switch (randomNumber) {
    case 0:
        document.getElementsByClassName(".fortune-display").innerText = 'Be careful who you trust. Salt and sugar look the same.';
        break;
    case 1:
        document.getElementsByClassName(".fortune-display").innerText = 'Ignore previous message.';
        break;
    case 2:
        document.getElementsByClassName(".fortune-display").innerText = 'There is no angry way to say bubbles.';
        break;
    case 3:
        document.getElementsByClassName(".fortune-display").innerText = 'It could be better but it\'s good enough.';
        break;
    case 4:
        document.getElementsByClassName(".fortune-display").innerText = 'The road to success is always under construction.';
        break;
    case 5:
        document.getElementsByClassName(".fortune-display").innerText = 'You must expect great things of yourself before you can do them.';
        break;
    case 6:
        document.getElementsByClassName(".fortune-display").innerText = 'You can\'t know, you can only believe. Or not. -C.S. Lewis';
        break;
    case 7:
        document.getElementsByClassName(".fortune-display").innerText = 'Perfect is boring. Human is beautiful.';
        break;
    case 8:
        document.getElementsByClassName(".fortune-display").innerText = 'Forever is a long time.';
        break;
    case 9:
        document.getElementsByClassName(".fortune-display").innerText = 'A party without cake is just a meeting. -Julia Child';
        break;
    case 10:
        document.getElementsByClassName(".fortune-display").innerText = 'The challenge is not to be perfect. It\'s to be whole. -Jane Fonda';
        break;
    case 11:
        document.getElementsByClassName(".fortune-display").innerText = 'Nobody gets to tell you how big your dreams can be.';
        break;
    case 12:
        document.getElementsByClassName(".fortune-display").innerText = 'There is no death. Only a change of worlds.';
        break;
    case 13:
        document.getElementsByClassName(".fortune-display").innerText = 'A person who never made a mistake never tried anything new.';
        break;
    case 14:
        document.getElementsByClassName(".fortune-display").innerText = 'Stay close to people who feel like sunlight. -Xan Oku';
        break;
    case 15:
        document.getElementsByClassName(".fortune-display").innerText = 'Progress not perfection.';
        break;
    case 16:
        document.getElementsByClassName(".fortune-display").innerText = 'Don\'t make a wish. Make a decision.';
        break;
    case 17:
        document.getElementsByClassName(".fortune-display").innerText = 'Adjust your eyes. See the same things differently.';
        break;
    case 18:
        document.getElementsByClassName(".fortune-display").innerText = 'Take nothing personally.';
        break;
    case 19:
        document.getElementsByClassName(".fortune-display").innerText = 'It\'s good to be prepared but stay open to surprises.';
        break;
    case 20:
        document.getElementsByClassName(".fortune-display").innerText = 'Let people discover you.';
        break;
    case 21:
        document.getElementsByClassName(".fortune-display").innerText = 'Be passionate and totally worth the chaos.';
        break;
    case 22:
        document.getElementsByClassName(".fortune-display").innerText = 'Go outside and play.';
        break;
    case 23:
        document.getElementsByClassName(".fortune-display").innerText = 'Beware the grand gesture.';
        break;
    case 24:
        document.getElementsByClassName(".fortune-display").innerText = 'A closed mouth gathers no feet.';
        break;
    }
}

document.querySelector(".fortune-display").addEventListener("click", deliverFortune());


