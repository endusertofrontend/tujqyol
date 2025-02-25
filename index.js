
// navigation bar drop down menu
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
};



// Array that contains pages and attributes 
const pages = [
    { pictureNumber: "images/imageOne.png", text: "Tnel t-xaq uj.", audio: "images/titleFinal.mp3" },
    { pictureNumber: "images/imageTwo.png", text: "Ja onb’il tib’aj yolb’aj, jux tb'i nok te terapia del habla, b’an ntzaj tona qa ne tun tel chnik’ tij qyol b’ix tun chiyola b’an.\n Jaj uj lu k’okil yek’at jtoj kb’inal tyolaj ne, alche jun techil yolb’il tun tel tnik’ taj tun t-xanq'tzana ne tij yolb’aj. B’ix k’okil yek’at ti ten tun tona terapia del habla te jun ne. Jaj uj lu b’an t-xi yek’at che qa mamb’aj tun tb’int chiyola qe chkwal.", audio: "images/oneFinal.mp3" },
    { pictureNumber: "images/imageThree.png", text: "Qa jun kwal mixb’a yola, b’an tjow ẍq’in, ntzul tyek’a twi tq’ab’, b’ix b’an tjow q’oq tuntza tel tnik’iy tij tin ta ne.\n Jej ne menos te 8 meses (wajxaq xjaw) mix nb’inat chyola, lu b’an qa nax. Jaj ne menos te 8 meses (wajxaq xjaw)  qa taj twa b’ix qa yan b’an ta tuj twitz njow q’oq tuntza t-xi tcheyat. Qaj ne te 9 meses (b’eljaj xjow) nchiaq’ q’ub’atzta jun yol tisa b’iyb’aj te jun tajlal chpamilia; ktzul tq’uma tb’i t-txu, tb’i titz’a, tb’i tman, tb’i t-tzik. B'ix jyol na, jyol tat.", audio: "images/twoFinal.mp3" },
    { pictureNumber: "images/imageFour.png", text: "Qaj ne te jun jnab’ q’i b’ix tuj jnab’ q’i tuya  (5 meses) jwe xjaw I'l tij b’an tb’int wajxaq b’ixqa laj yol chun. B’ix iltij b’an tzaj chq’uma “nch'i” tuya chwi; nxi chyuka chwi tuj chman chq’ab’ b’ix tuj chneẍ. B’ix b’an tkub’ x:nib’en t-x:ich’b’al oxa alamaj. \nQaj ne tuj 18 meses b’ix qa tuj 21 mes, I'l tij b’an tel tyola jun yol. B'ix b'an tel tyola kab’a yol. B’an tok tmaje kab’a yol tisa “q’antz jlu”, “waj nwa”, b’ix “waj juk’o”. Te kab’a jnab’ q’i b’an tel tyola oxa yol b’ix b’an tzaj tq’uma qa plabras de accion. Tisa “waj nwa”, “qo qja”, b’ix “Jalatza nman”?", audio: "images/threeFinal.mp3" },
    { pictureNumber: "images/imageFive.png", text: "Qa nax tb’int qa jlu tun ne, b’isax ch’in qa b’an t-xi ne xnaq’tzal tuya jun seña te yolb’il, ja junt t-titulo seña nok te terapista de habla. Alchetza techil ktazl tq’uma tuntza tyola ne tuya jun terapista de habla?\n Qaj ne nuk nchikuya b’ix mixb’a chiyola ok chipon te 10 meses, jatza jun señal I'l tij tun chxi tuj terapia del habla. Jan ne mix nb’int chkuya, mxib'a chich'ika ne chuya chwi chq’ab’, b’ix mi nel chq’ab’ tun chq’olb’en ok chipon te 12 meses. Jan ne at chprob'lema tuntza chẍinib’en sonidos ok chipon te 18 meses jax I'l tij tun chxi tuj terpia del habla.", audio: "images/fourFinal.mp3" },
    { pictureNumber: "images/imageSix.png", text: "Tuj programa te terpaia del habla, ja jun ajaq’anal k’okil tcheiya b’ix ktzal tq’uma alche problema niq’a ne tuya tyol. Jatza te xuj kxel tcheiyata alche programas b’ix tecnicas k’ab’el te xuj te jun ne tun tb’int chyola.\n Tuj terapia te habla nok yek’at che ne tuj ẍaqb’aj, tuj qa uj at techal tkux, qe sonidos cheyol  tuntza tb’int chyola.", audio: "images/fiveFinal.mp3" },
    { pictureNumber: "images/imageSeven.png", text: "Jux qa mamb’aj b’an tok tyek’a jun tecnica che tuntza tok chona qa chkwal. Tuntza tok chyek’a qa chkwal ti ten tun tb’in chyola.\n Cheiy mamb’aj ok taq’ tkwaliy q’uma tjila taj, I'l tij kxel tb’iniy nej tijila taj ne. Tyoiy ch'in alche ktzal tq’uma tkwaliy. Alche ma tzaj tyek’a teiy, mi t-xi tb’iniy, titza min ma tz’el tnik’iy tij. Jatzunja k’onal ti tun tb’int tyola. \nOK tzaj tq’um tkwaliy jun yol, nok tq’oniy junt b’ixsa kxel tqaniy tuntza ntzaj tq’uma ne. Lutza Jun ejemlo lu: Qa ntzaj tq’uma ne “caro”, b’an t-xi tq’umiy “nyukax caro”.", audio: "images/sixFinal.mp3" },
    { pictureNumber: "images/imageEight.png", text: "Junt yekb’il lu. At  jun q’a ne nok tb’i te Santos nyola q’a tuya t-txu q’a:\n Santos: ja jlu\n Mama: titza jil jlu?\n Santos: lech\n Mama: q’umatz “jlech lu”", audio: "images/sevenFinal.mp3" },
    { pictureNumber: "images/imageNine.png", text: "Junt ejemplo lu. Junt q’a ne nok tb’i te Edgar nyola q’a tuya t-txu q‘a: \n Edgar: ma\n Mama: tijila\n Edgar: cheiyix\n Mama : Tijila ma t-xi tcheiyaniy? \n Edgar: jlu\n Mama: jil caro?\n Edg ar:  juwa\n Mama: q’umatz “mama cheiyix ti caro”", audio: "images/eightFinal.mp3" },
    { pictureNumber: "images/imageTen.png", text: "Jeiy cheiy mamb’aj lu jun tecnica lu. B'an t-xi t-laseniy jun x:aqb’aj ti t-tziy. B’ixsa q’umax te ne tjijila tb’i tok ti t-tziy. Tzultza tcheiya ne twitizy, b’ixsa k’okil b’inta ne ti tb’i cosa tuntza chaj tuj twi. B’an t-xi t-laseniy jun tlasa ti t-tziy, b’ixsa b’an t-xi tq’umiy tb’i tlasa tuntza t-chaj tuj twi ne.\n Jux, kxel tcheiyaniy jun uj tuya ne. Kxel tq’umaniy tijila techlal tkux tuj uj.", audio: "images/nineFinal.mp3" },
    { pictureNumber: "images/imageEleven.png", text: "Jiax k’okil xnaq’tz’et jun ne tun tb’int tyola, tuntza oj tch’iy b’an tyola chuya xjal, b’ix oj tokx ne tuj skwela.\n Qa tuj twitziy nax tb’int tyola tkwaliy, qanax te jun terapista tuntza tetz ona teiy tuya jun terapia del habla.", audio: "images/tenFinal.mp3" },
];

const engPages = [
    { pictureNumber: "images/imageOne.png", text: "Welcome to the first page.", audio: "images/titleFinal.mp3" },
    { pictureNumber: "images/imageTwo.png", text: "Speech therapy, also called <i>terapia del habla</i> helps kids learn to talk and communicate better. \nThis guide will explain when kids usually start talking, signs that might mean they need help, and how speech therapy can benefit them. This guide can also help parents learn how to support their child's speech development.", audio: "images/oneFinal.mp3" },
    { pictureNumber: "images/imageThree.png", text: "When a child does not know how to communicate with words, they rely on screaming, pointing, and crying to express how they feel. \nThis is common for little kids under 8 months. If the child wants food or is uncomfortable, they may cry to tell you how they feel. By 9 months, children begin to use single words, like the names of their family members or words like “mom” and “dad.”", audio: "images/twoFinal.mp3" },
    { pictureNumber: "images/imageFour.png", text: "Healthy kids at 12 to 15 months, children should know 8 to 10 words. They should be able to tell you “No” by shaking their heads left and right and may imitate the sounds of three or more animals. \nBy 18 to 21 months, children should frequently use single words and start combining two words, like “give me,” “want food,” and “want juice.” By 2 years, they should use three-word phrases and name action words (verbs), such as “I want food,” “Let’s go home,” and “Where’s dad?”", audio: "images/threeFinal.mp3" },
    { pictureNumber: "images/imageFive.png", text: "If your child has not met these milestones, consider enrolling them in speech therapy. What signs tell us that a child needs to speak with a speech therapist? \nEarly signs that a child might need speech therapy include a child still babbling at 10 months. Another sign is a child not being able to babble, not using gestures like pointing or waving by 12 months. Also, children struggling to imitate sounds by 18 months.", audio: "images/fourFinal.mp3" },
    { pictureNumber: "images/imageSix.png", text: "In speech therapy, a professional will evaluate and diagnose speech and language problems, create individualized treatment plans and use various techniques to improve communication skills. \nSpeech therapy activities may include play-based therapy, the use of picture books, and practicing sounds and words so that kids can learn to speak.", audio: "images/fiveFinal.mp3" },
    { pictureNumber: "images/imageSeven.png", text: "Parents can also support speech therapy by learning techniques to practice at home with their children. \nParents don’t assume your child’s needs or wants. Wait until your child says something first. When he points at something, pretend you don’t understand. This will motivate the child to learn the language. \nWhen your child says a word or a sound, add one more word or sound and ask the child to repeat this. For example, if the child says “car,” you can respond with “drive car.”", audio: "images/sixFinal.mp3" },
    { pictureNumber: "images/imageEight.png", text: "This is another example. There is a child called Santos talking with his mother: \nSantos: this \nMom: What is this? \nSantos: milk \nMom: Say, “this milk.", audio: "images/sevenFinal.mp3" },
    { pictureNumber: "images/imageNine.png", text: "This is another example. Another child called Edgar is talking with his mother: \nEdgar: mom \nMom: What? \nEdgar: look \nMom: What are you looking at? \nEdgar: this \nMom: The car? \nEdgar: Yes. \nMom: Say, 'Mom look at the car.'", audio: "images/eightFinal.mp3" },
    { pictureNumber: "images/imageTen.png", text: "Parents, you can hold a colorful object, like a toy, up to your mouth. Then say what the object is. The child will look at your face and learn how to form words by looking at the way you pronounce the words. \nFinally, look at a book with your child. Show him pictures and talk to him about what is happening in the picture.", audio: "images/nineFinal.mp3" },
    { pictureNumber: "images/imageEleven.png", text: "Early intervention can improve a child’s communication skills, social interactions, and school performance. \nIf you are worried about your child’s speech, ask a speech therapist for help with speech therapy.", audio: "images/tenFinal.mp3" },
];

let currentPage = 0;

// Function to change to the next page
function changePage(lan) {
    if (currentPage >= pages.length - 1) return;  // Prevent overflow
    
    // Increment page AFTER setting content
    currentPage++;

    updateContent(lan);
}

// Function to go to the previous page
function beforePage(lan) {
    currentPage = Math.max(0, currentPage - 1); // Prevent negative index

    updateContent(lan);
}

// Function to update image, text, and audio
function updateContent(lan) {
    if (lan == 'eng') {
        console.log(lan);
        console.log(`Current Page: ${currentPage}`);

        document.getElementById("image").src = engPages[currentPage].pictureNumber;
       document.getElementById("words").innerHTML = engPages[currentPage].text.replace(/\n/g, '<br><br>');
        document.getElementById("audioSource").src = engPages[currentPage].audio;
    
        // Reload the audio file
        document.getElementById("audioPlayer").load();

    } else {
        console.log(`Current Page: ${currentPage}`);

        document.getElementById("image").src = pages[currentPage].pictureNumber;
        document.getElementById("words").innerHTML = pages[currentPage].text.replace(/\n/g, '<br><br>');
        document.getElementById("audioSource").src = pages[currentPage].audio;

        // Reload the audio file
        document.getElementById("audioPlayer").load();
    }
}