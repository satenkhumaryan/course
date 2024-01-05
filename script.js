function CurrentDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // amsi indexy 0-ic a sksvum
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    
    let dateString = 'Ամսաթիվ: ' + day + '/' + month + '/' + year + '<br>' + 'Ժամը: ' + hours + ':' + minutes;

    document.getElementById("currentDate").innerHTML = dateString;
}

function animateImage() {
    let image = document.getElementById('movingImage');
    let hide = document.getElementById("ab-me");
    let login = document.getElementById("login");
    let y = 0;
    let x = 0;
    let animationCount = 0; // achogh qanak
    let maxAnimations = 3; // verjnakan qanak
    let startTime = Date.now();

    function startAnimation() {
        let animationInterval = setInterval(function () {
            let currentTime = Date.now();
            let elapsedTime = currentTime - startTime;

            y += 5; // 5-ov ijni nerqev
            image.style.top = y + 'px';
            image.style.right = x + '%';

            if (y > window.innerHeight - image.height - 40) {
                clearInterval(animationInterval);
                image.style.visibility = 'hidden';
                y = 0;
                x += 43.3;
                image.style.visibility = 'visible';

                if (++animationCount >= maxAnimations) {
                    animationCount = 0;
                    x = 0;
                    startAnimation();
                } else {
                    startAnimation();
                }
            }

            if (elapsedTime > 10000) {
                clearInterval(animationInterval);
                hide.style.visibility = 'hidden';
                image.style.visibility = 'hidden';
                login.style.visibility = 'visible';
                log.value = '';
                pas.value = '';
            }
        }, 15);
    }
    startAnimation();
}

window.onload = function () {
    CurrentDate();
    animateImage();
};

function cancel() {
    let log = document.getElementById('login');
    let hide = document.getElementById("ab-me");
    let image = document.getElementById('movingImage');
    setTimeout(function (){
        log.style.display = 'none';
        hide.style.visibility = 'visible';
        image.style.visibility = 'visible';
        animateImage();
    }, 0);
}

function ok() {
    let log = document.getElementById('log').value;
    let loginp = document.getElementById('log');
    let pas = document.getElementById('pas').value;
    let pasinp = document.getElementById('pas');
    let incLog = document.getElementById('inc-log');
    let incPas = document.getElementById('inc-pas');
    let login = document.getElementById('login');
    let menu = document.getElementById('menu');
    let img = document.getElementById('img');
    let image = document.getElementById('movingImage');
    let hide = document.getElementById("ab-me");
    if (log === 'sat' && pas === 'sat') {
        setTimeout(function () {
            login.style.visibility = 'hidden';
            incLog.style.visibility = 'hidden';
            incPas.style.visibility = 'hidden';
            menu.style.visibility = 'visible';
            img.style.visibility = 'visible';
        }, 200);
    }else if(log === 'sat' && pas != 'sat'){
        pasinp.disabled = true;
        incPas.style.visibility = 'visible';
        incLog.style.visibility = 'hidden';
        setTimeout(function () {
            login.style.visibility = 'hidden';
            incLog.style.visibility = 'hidden';
            incPas.style.visibility = 'hidden';
            image.style.visibility = 'visible';
            hide.style.visibility = 'visible';
            animateImage();
            loginp.disabled = false;
            pasinp.disabled = false;
        }, 2000);
    }else if(log != 'sat' && pas === 'sat'){
        loginp.disabled = true;
        incLog.style.visibility = 'visible';
        incPas.style.visibility = 'hidden';
        setTimeout(function () {
            login.style.visibility = 'hidden';
            incLog.style.visibility = 'hidden';
            incPas.style.visibility = 'hidden';
            image.style.visibility = 'visible';
            hide.style.visibility = 'visible';
            animateImage();
            loginp.disabled = false;
            pasinp.disabled = false;
            
        }, 2000);
    }else{
        incLog.style.visibility = 'visible';
        incPas.style.visibility = 'visible';
        loginp.disabled = true;
        pasinp.disabled = true;
        setTimeout(function () {
            login.style.visibility = 'hidden';
            incLog.style.visibility = 'hidden';
            incPas.style.visibility = 'hidden';
            image.style.visibility = 'visible';
            hide.style.visibility = 'visible';
            animateImage();
            loginp.disabled = false;
            pasinp.disabled = false;
        }, 2000);
    }
}

function okAuthor() {
    let author = document.getElementById('author');
    author.style.visibility = 'hidden';
    authorClicked = false;
    console.log('dfghj');
}

function okHelp() {
    let help = document.getElementById('help');
    help.style.visibility = 'hidden';
    helpClicked = false;
}

let helpClicked = false;
let authorClicked = false;
let rebusClicked = false;
let tipClicked = false;
let isCancelled = false;
let show = false;

function setRandomPosition(element) {
    let part = document.querySelector('.part');
    let viewportWidth = part.offsetWidth;
    let viewportHeight = part.offsetHeight;

    let randomTop = Math.random() * (viewportHeight - element.offsetHeight);
    let randomLeft = Math.random() * (viewportWidth - element.offsetWidth);

    element.style.top = randomTop + 'px';
    element.style.left = randomLeft + 'px';
}

let lastClickedElement = null;

function bringElementToFront(element) {
    if (lastClickedElement) {
        lastClickedElement.style.zIndex = 0;
    }

    element.style.zIndex = 1;
    lastClickedElement = element;
}

function helpWindow() {
    let help = document.getElementById('help');

    if (!helpClicked) {
        setRandomPosition(help);
        help.style.visibility = 'visible';
        bringElementToFront(help);
        helpClicked = true;
    }
    isCancelled = true;
}

function author() {
    let author = document.getElementById('author');

    if (!authorClicked) {
        setRandomPosition(author);
        author.style.visibility = 'visible';
        bringElementToFront(author);
        authorClicked = true;
    }
    isCancelled = true;
}

function rebus() {
    let rebus = document.getElementById('rebus');

    if (!rebusClicked) {
        setRandomPosition(rebus);
        rebus.style.visibility = 'visible';
        bringElementToFront(rebus);
        rebusClicked = true;
    }
    isCancelled = true;
    rebus.style.visibility = 'visible';
}

let tips = [
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Խոյ</b></p>Օրվա առաջին կեսը բարեհաջող կդասավորվի: Սպասվում են վառ տպավորություններ և կարևոր ձեռքբերումներ: Անձնական հարաբերություններում հավանական են դրական փոփոխություններ:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Ցուլ</b></p>Խուսափեք հապճեպ որոշումներ կայացնելուց: Այն ինչ սկզբում պարզ է թվում, իրականում կարող է շատ բարդ լինել: Այսօր ձեր կարողությունները գերագնահատելու ռիսկը մեծ է: Խուսափեք ապառիկ գնումներից:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Երկվորյակ</b></p>Օրվա առաջին կեսին հնարավոր է խնդիրներ ծագեն, այն էլ ՝ շատ լուրջ: Այս հատվածում ստիպված կլինենք ուղղել նախկինում թույլ տված սխալները, հատուցել սեփական անփութության և անուշադրության համար:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Խեցգետին</b></p>Օրվա առաջին կեսին սպասվում են տհաճ անակնկալներ, նաև անհանգստություն, հուզմունք: Մի շտապեք հուսահատվել, քանզի շատ շուտով բացասական միտումների ազդեցությունը կնվազի: Օրն անցկացրեք մտերիմների հետ։',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Առյուծ</b></p>Օրը բարեհաջող չէ հատկապես նրանց համար, ովքեր մեծ ծարագրեր էին կազմել և պատրաստվում էին զբաղվել նոր գործերով: Աշխատեք կենտրոնանալ ընթացիկ հարցերի շուրջ: Զբաղվեք տնային գործերով:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Կույս</b></p>Բոլոր կարևոր գործերը, հանդիպումները ծրագրեք օրվա առաջին կեսին, քանզի, ավելի ուշ, բացասական միտումների ազդեցությունը կմեծանա: Հնարավոր է որոշակի գումարային շահույթ, նաև հին պարտքի վերադարձ:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Կշեռք</b></p>Բարեհաջող օր է: Նպատակահարմար՝ հին գործերն ավարտին հասցնելու և նորերին ձեռնամուխ լինելու համար: Էներգիայով լի եք։ Ձեր ժամանակը սիրով կտրամադրեք ստեղծագործական մոտեցում պահանջող գործերին:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Կարիճ</b></p>Բարեհաջող օր է: Կարող եք տարբեր բնույթի, մեծամասշտաբ նախագծեր իրականացել: Հաջողությունն իրեն սպասեցնել չի տա: Այսօր հաստատված բոլոր ծանոթությունները երկարատև, լուրջ հարաբերությունների սկիզբ կդնեն:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Աղեղնավոր</b></p>Թեև օրը հագեցած չէ վառ իրադարձություններով, այնուամենսյնիվ, հաճելի տպավորություններ կունենաք: Այսօր կարող եք զբաղվել այն ամենով, ինչը հոգեհարազատ է: Հետաքրքիր զբաղմունքներ գտեք։',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Այծեղջյուր</b></p>Այսօր տհաճ անակնկալներ չեն լինի: Գործերը բարեհաջող կընթանան: Նպատակահարմար օր է տնային գործերով զբաղվելու համար: Հարկ եղած դեպքում՝ մտերիմները պատրաստ են օգնության հասնել:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Ջրհոս</b></p>Փորձեք մանր խնդիրներին նշանակություն չտալ: Այսօր դրանք կարող են սովորականից շատ լինել: Սակայն դա առիթ չէ ծրագրած գործերը հետաձգելու և զենքերը վայր դնելու համար: Սպասեք լավ լուրերի:',
    '<p style="font-size: 18px; margin-top: 10px; margin-bottom: 2px;"><b>Ձկներ</b></p>Ընդհանուր առմամբ, օրը լավ կանցնի: Կհասնեք այն ամենին, ինչին վաղուց ի վեր ձգտել եք: Այդ հարցում ձեզ կօգնեն հարուստ երևակայությունը և մարդկանց ճանաչելու ձեր ունակությունը: Հնարավոր է որոշակի դրամական շահույթ:'
];

document.addEventListener('DOMContentLoaded', function() {
    var currentTipIndex = 0;
    var tipsPart = document.getElementById('tips-part');

    function showTip(index) {
        tipsPart.innerHTML = tips[index];
    }

    function showNext() {
        currentTipIndex = (currentTipIndex + 1) % tips.length;
        showTip(currentTipIndex);
    }

    function showPrevious() {
        currentTipIndex = (currentTipIndex - 1 + tips.length) % tips.length;
        showTip(currentTipIndex);
    }

    showTip(currentTipIndex);

    document.getElementById('next-button').addEventListener('click', showNext);
    document.getElementById('previous-button').addEventListener('click', showPrevious);
});

function tip() {
    let tip = document.getElementById('tips');

    if (!tipClicked) {
        setRandomPosition(tip);
        tip.style.visibility = 'visible';
        bringElementToFront(tip);
        tipClicked = true;
    }
    isCancelled = true;
    tip.style.visibility = 'visible';
}

function hideDivs() {
    let minimize = document.querySelectorAll('.minimize');
    
    minimize.forEach(div => {
        div.style.visibility = 'hidden';
    });
}

let originalPositions = {};

function minimizeDivs() {
    let minimize = document.querySelectorAll('.minimize');
    let part = document.querySelector('.part');
    
    minimize.forEach(div => {
        div.style.transition = 'all 0.3s ease';
        originalPositions[div.id] = { top: div.style.top, left: div.style.left }; //pahpanum e skzbnakan dirqy
        div.style.opacity = '1';
        div.style.transform = 'scale(0)';
        div.style.top = `calc(50% - ${div.offsetHeight / 2}px)`;
        div.style.left = `calc(50% - ${div.offsetWidth / 2}px)`;
        div.style.transformOrigin = 'center center';
    });
}

function showDivs() {
    let minimize = document.querySelectorAll('.minimize');
    
    minimize.forEach(div => {
        div.style.transition = 'all 0.3s ease';
        div.style.opacity = '1';
        div.style.transform = 'scale(1)';
        const originalPos = originalPositions[div.id];
        if (originalPos) {
            div.style.top = originalPos.top;
            div.style.left = originalPos.left;
        }
    });
    show = true;
}

function closeWindows() {
    let help = document.getElementById('help');
    let author = document.getElementById('author');
    let rebus = document.getElementById('rebus');
    let tips = document.getElementById('tips');
  
    if (helpClicked || show) {
        help.style.visibility = 'hidden';
        helpClicked = false;
    }
  
    if (authorClicked || show) {
        author.style.visibility = 'hidden';
        authorClicked = false;
    }
  
    if (rebusClicked || show) {
        rebus.style.visibility = 'hidden';
        rebusClicked = false;
    }

    if (tipClicked || show) {
        tips.style.visibility = 'hidden';
        tipClicked = false;
    }
  }

function out() {
    let out = document.getElementById('out');
    out.style.visibility = 'visible';
    console.log('dfg');
}

function okOut() {
    let out = document.getElementById('out');
    let abMe = document.getElementById("ab-me");
    let image = document.getElementById('movingImage');
    let menu = document.getElementById('menu');
    let login = document.getElementById("login");
    let help = document.getElementById('help');
    let author = document.getElementById('author');
    let rebus = document.getElementById('rebus');
    let tip = document.getElementById('tips');
    let img = document.getElementById('img');

    out.style.visibility = 'hidden';
    abMe.style.visibility = 'visible';
    image.style.visibility = 'visible';
    menu.style.visibility = 'hidden';
    help.style.visibility = 'hidden';
    author.style.visibility = 'hidden';
    rebus.style.visibility = 'hidden';
    tip.style.visibility = 'hidden';
    img.style.visibility = 'hidden';

    animateImage();
}

function cancelOut() {
    let out = document.getElementById('out');
    out.style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('animateText');
    let ach = true;

    function animateText() {
        const currentSize = parseInt(window.getComputedStyle(textElement).fontSize);

        if (ach && currentSize < 25) {
            textElement.style.fontSize = currentSize + 3 + 'px';
        } else if (!ach && currentSize > 16) {
            textElement.style.fontSize = currentSize - 3 + 'px';
        }

        if (currentSize === 25) {
            ach = false;
        } else if (currentSize === 16) {
            ach = true;
        }
    }
    setInterval(animateText, 50);
});

// VOLVO + FIAT = MOTOR
function solveRebus() {
    let results = [];

    for (let v = 1; v <= 9; v++) {
        for (let o = 0; o <= 9; o++) {
            if (o !== v) {
                for (let l = 0; l <= 9; l++) {
                    if (l !== o && l !== v) {
                        for (let f = 0; f <= 9; f++) {
                            if (f !== l && f !== o && f !== v) {
                                for (let i = 0; i <= 9; i++) {
                                    if (i !== f && i !== l && i !== o && i !== v) {
                                        for (let a = 0; a <= 9; a++) {
                                            if (a !== i && a !== f && a !== l && a !== o && a !== v) {
                                                for (let t = 0; t <= 9; t++) {
                                                    if (t !== a && t !== i && t !== f && t !== l && t !== o && t !== v) {
                                                        for (let m = 1; m <= 9; m++) {
                                                            for (let r = 0; r <= 9; r++) {
                                                                if (r !== m) {
                                                                    let sum = 10000 * v + 1000 * (o + f) + 100 * (l + i) + 10 * (v + a) + (o + t);
                                                                    let motor = 10000 * m + 1000 * o + 100 * t + 10 * o + r;

                                                                    if (sum === motor && new Set([...String(v), ...String(o), ...String(l), ...String(f), ...String(i), ...String(a), ...String(t), ...String(m), ...String(r)]).size === 9) {
                                                                        results.push(`VOLVO + FIAT = MOTOR ► ${v}${o}${l}${v}${o} + ${f}${i}${a}${t} = ${m}${o}${t}${o}${r}`);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return results;
}

document.addEventListener('DOMContentLoaded', function () {
    let results = solveRebus();
    document.getElementById('rebusResult').innerHTML = results.join("<br>");
});


function horizontal() {
    let elementIds = ['author', 'help', 'rebus', 'tips'];

    let visibleElements = {};

    for (let i = 0; i < elementIds.length; i++) {
        let element = document.getElementById(elementIds[i]);

        if (element.style.visibility === 'visible') {
            visibleElements[elementIds[i]] = element;
        }
    }

    let numberOfVisibleElements = Object.keys(visibleElements).length;

    if (numberOfVisibleElements > 0) {
        let part = document.querySelector('.part');
        part.style.flexDirection = 'column';

        for (let id in visibleElements) {
            visibleElements[id].style.height = '25%';
            visibleElements[id].style.width = '30%';
            visibleElements[id].style.position = 'static';
            visibleElements[id].style.margin = '5px';
            let btn = document.getElementById('btns');
            btn.style.visibility = 'hidden';
        }
    }
}

































// function solveRebus() {
//     let results = [];
//     let letters = ['v', 'o', 'l', 'f', 'i', 'a', 't', 'm', 'r'];

//     let mapping = {};

//     function permute(pos) {
//         if (pos === letters.length) {
//             let v = mapping['v'];
//             let o = mapping['o'];
//             let l = mapping['l'];
//             let f = mapping['f'];
//             let i = mapping['i'];
//             let a = mapping['a'];
//             let t = mapping['t'];
//             let m = mapping['m'];
//             let r = mapping['r'];

//             let sum = 10000 * v + 1000 * (o + f) + 100 * (l + i) + 10 * (v + a) + (o + t);
//             let motor = 10000 * m + 1000 * o + 100 * t + 10 * o + r;

//             if (sum === motor) {
//                 // Replace digits with letters in the result
//                 let resultString = `${v}${o}${l}${v}${o} + ${f}${i}${a}${t} = ${m}${o}${t}${o}${r}`;
//                 letters.forEach((letter, index) => {
//                     resultString = resultString.replace(new RegExp(index + 1, 'g'), letter);
//                 });
//                 results.push(resultString);
//             }
//             return;
//         }

//         for (let digit = 1; digit <= 9; digit++) {
//             if (!Object.values(mapping).includes(digit)) {
//                 mapping[letters[pos]] = digit;
//                 permute(pos + 1);
//                 mapping[letters[pos]] = undefined;
//             }
//         }
//     }

//     permute(0);

//     return results;
// }

// document.addEventListener('DOMContentLoaded', function () {
//     let results = solveRebus();
//     document.getElementById('rebusResult').innerHTML = results.join("<br>");
// });




// // Event listener for clicking on "Օրվա խորհուրդներ"
// document.addEventListener('DOMContentLoaded', function () {
//     let recommendationsItem = document.getElementById('recommendations');
//     recommendationsItem.addEventListener('click', function () {
//         // Assuming you have an array of recommendation indices
//         let recommendationIndices = [0, 1, 2];
        
//         // Display recommendations using forEach
//         recommendationIndices.forEach(function (index) {
//             setRecommendations(index);
//         });
//     });
// });

// function setRecommendations(fileNumber) {
//     let fileUrl = `resources/recs${fileNumber}.txt`;  // Adjust the path based on your folder structure
//     let containerId = `recs${fileNumber}`;
//     let container = document.getElementById(containerId);

//     fetch(fileUrl)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok!");
//             }
//             return response.text();
//         })
//         .then((text) => {
//             container.textContent = text;
//         })
//         .catch((error) => {
//             console.error(`Error fetching data for ${fileUrl}:`, error);
//         });
// }