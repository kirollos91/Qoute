/**
 *  1- var to hadle quote and translation
 *  2- create object contain quotes
 *  3- select random qoute
 *  4- display qoute and translation fron our data
 *  5- change qoute every 5 sec
 */
// one

const quoteEn = document.querySelector(".quote-en");
const quoteAr = document.querySelector(".quote-ar");

// two

let qoutes = [
    {
    content:"A bad workman always blames his tools.",
    trans:  "الصانع السيء يلوم أدواته."
  },{
    content:"A bird in hand is worth two in the bush.",
    trans:  "عصفور في اليد خير من عشرة على الشجرة."
  },{
    content:"Absence makes the heart grow fonder.",
    trans:  "البعد يزيد الشوق لوعة."
  },{
    content:"A cat has nine lives.",
    trans:  "القطط لها تسع أرواح."
  },{
    content:"Actions speak louder than words.",
    trans:  "الأفعال أبلغ من الأقوال"
  },{
    content:"A drowning man will clutch at a straw.",
    trans:  "الغريق يتعلق في القشة."
  },{
    content:"Adversity and loss make a man wise.",
    trans:  "إن الشدائد والخسائر تجعل الإنسان حكيماً."
  },{
    content:"A fool and his money are soon parted.",
    trans:  "الأحمق لا يبقي على مال."
  },{
    content:"A journey of thousand miles begins with a single step.",
    trans:  "تبدأ رحلة الألف ميل بخطوة واحدة."
  },{
    content:"a leopard can't change its spots.",
    trans:  "النمر لا يستطيع تغيير بقعه."
  },{
    content:"All good things come to an end.",
    trans:  "انتهت كل الأمور الطيبة."
  },{
    content:"All is well that ends well.",
    trans:  "الأمور بخواتيمها."
  },{
    content:"All that glitters is not gold.",
    trans:  "ليس كل ما يلمع ذهبا."
  },{
    content:"All’s fair in love and war.",
    trans:  "كل شي متاح في الحب والحرب."
  },{
    content:"Among the blind the one-eyed man is king.",
    trans:  "الاعور في بلاد العميان ملك."
  },{
    content:"An apple a day keeps the doctor away.",
    trans:  "تفاحة يوميا تغنيك عن الطبيب."
  },{
    content:"Early bird catches the worm.",
    trans:  "التبكير سر النجاح."
  },{
    content:"Laughter is the best medicine.",
    trans:  "الضحك أفضل دواء."
  },{
    content:"Learn to walk before you run.",
    trans:  "لا تركض قبل أن تتعلم المشي."
  },{
    content:"No gain without pain.",
    trans:  "كل شي وله ثمن (لا مكسب بلا ألم.)"
  },{
    content:"Two heads are better than one.",
    trans:  "رأيان خير من رأي واحد."
  },{
    content:"When in Rome, do as the Romans do.",
    trans:  "ان كنت في أرض غريبة فافعل ما يفعلة أهلها."
  },{
    content:"When the going gets tough, the tough get going.",
    trans:  "في الشدائد لا يصمد إلا الأشداء."
  },{
    content:"While the cat’s away, the mice will play.",
    trans:  "إن غاب القط، سيلعب يا فأر."
  },{
    content:"Appearances can be deceptive.",
    trans:  "المظاهر خداعة."
  }];
//

function repeatQoute(){
    let randomNum = Math.floor(Math.random() * (qoutes.length-1));
    quoteEn.textContent = qoutes[randomNum].content;
    quoteAr.textContent = qoutes[randomNum].trans;
}

setInterval(()=>repeatQoute(),2500);
