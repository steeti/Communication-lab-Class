let currentPath = 0; //this variable tracks the current scene in the story
let prevPath = 0; //this tracks the previous scene
let isAskGrandmaPath = true; //this will be set based on the options chosen

$( ".language1" ).click(function() { //when the english, "droplet" button is clicked
  language = "en" //set the language variable to en cus the english button was clicked
  gsap.timeline({}).to(".language1", {duration: 0.25, y: "-2%", opacity:1}).to(".language1", {duration: 2, top: "200%", opacity:1}); //animation to drop the blood drop button
  hideLanguageDrops();
  setupControlsContainer();
  setTimeout(() => {

    nextPath(); //proceed to the next path after 2 seconds (after the drop animation is done)
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".language2" ).click(function() {  //when the spanish, "droplet" button is clicked
  language = "es" //set the language variable to es cus the english button was clicked
  gsap.timeline({}).to(".language2", {duration: 0.25, y: "-2%", opacity:1}).to(".language2", {duration: 2, top: "200%", opacity:1}); //animation to drop the blood drop button
  hideLanguageDrops();
  setupControlsContainer();
  setTimeout(() => {

    nextPath(); //proceed to the next path after 2 seconds (after the drop animation is done)
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".language3" ).click(function() {  //when the arabic, "droplet" button is clicked
  language = "ar" //set the language variable to ar cus the english button was clicked
  gsap.timeline({}).to(".language3", {duration: 0.25, y: "-2%", opacity:1}).to(".language3", {duration: 2, top: "200%", opacity:1}); //animation to drop the blood drop button
  hideLanguageDrops();
  setupControlsContainer();
  setTimeout(() => {
    nextPath(); //proceed to the next path after 2 seconds (after the drop animation is done)
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".nextButton" ).click(function() { //onclick listener for the next button
  nextPath();
});

$( ".backButton" ).click(function() { //onclick listener for the back button (not on current site but full implementation done)
  previousPath();
});

$( ".restartButton" ).click(function() { //onclick listener for the restart button
  restart();
});

function emptyAllPathsExceptOne(id) { //for space optimization, basically once a path is loaded after that path has been passed that HTML dom element is removed therefore reducing the load on the browser
  for(let x=0; x<9; x++) {
    if(x!=id) {
      $(".path_" + x).remove();
    } else {
    }
  }
}
function svgPanel(file, isCols = false) { // Function that takes in a file param and returns a div with the image and relavant classes based on the second param to set whether it is a full size image or a column image
  let classVal = isCols ? "tableSvgCol" : "storySvg"; //setting relevant classes

  let storySvgImage = isCols ? "storySvgColImage img-responsive" : "storySvgImage img-responsive"; //setting relevant classes
  let styles = (!file.startsWith("panel7")) ? "cursor: url('https://wenogk.github.com/comic-strip/assets/music36.png'), auto;" : ""; //Adding the audio cursor on hover to all images except the last one as there is no sound in that one
  //return `<object type='image/svg+xml' class='${classVal} objectHolder alias' data='assets/${language}/${file}.svg'></object>`;
  return `<div style="${styles}" class='${classVal} objectHolder'><img class="${storySvgImage}" src='assets/${language}/${file}.svg' /></div>`; // the src attribute here is what allows us to dynamically get different language stories on the fly with minimal changes in the code

}
function loadPath(id, isNewStory = true) { // function that takes in the path id and returns the relevant story image item(s) with styling
  console.log("loadPath: " + id)
  if(language=="ar") {
    isNewStory = false;
  }
  $(".nextButton").show();
  nextPossible = true;
  if(id == 1) {
  return `
  <div style="background-image:url(assets/bg3.jpg); background-repeat: repeat;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
    ${svgPanel("panel1a")}
  </div>
    `;
  } else if(id == 2) {
    return `
    <div style="background-image:url(assets/bg3.jpg); background-repeat: repeat;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      <div class="vertical-center text-center">
        <table class="centerTable">
        <tr>
          <td class="path_${id}b tdCol">${svgPanel("panel1b", true)}</td>
          <td class="path_${id}c">${svgPanel("panel1c", true)}</td>
        </tr>
        </table>
        </div>
      </div>
    `
  } else if(id == 3) {
    return `
    <div style="background-image:url(assets/bg3.jpg); background-repeat: repeat;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel2")}
    </div>

    `;
  } else if(id == 4) { //id that has the options
    $(".nextButton").hide();
    boxControlsOnly(1);
    nextPossible = false;
    let option1 = "Ask grandma about it";
    let option2 = "Ask a loved one about it and then research on it"
    if(language=="es") {
      option1 = "Le pregunto a mi abuela";
      option2 = "Le pregunto a alguien que quiero e investigo sobre el tema"
    } else if (language=="ar") {
      option1 = "اسأل جدتي ماذا افعل";
      option2 = "أستفسر من صديقتي و ابحث عن الموضوع عبر الانترنت"
    }

    return `
    <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      <div class="vertical-center">
        <div class="optionContainer container">
          <div onclick='nextPath(5)' class='optionButton'>

            ${option1}
          </div>
          <div onclick='nextPath(6)' class='optionButton'>
            ${option2}

        </div>
      </div>
    </div>
    `; //the onclick handlers here simply load the nextPath with a specified id rather than simply going to the next path
  } else if(id == 5) {
    isAskGrandmaPath = true;
    return `
    <div style="background-image:url(assets/bg3.jpg); background-repeat: repeat;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel3")}
    </div>
    `
  } else if(id == 6) {
    isAskGrandmaPath = false;
    return `
    <div style="background-image:url(assets/bg3.jpg); background-repeat: repeat;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel4")}
    </div>
    `
  } else if(id == 7) {
    return `
    <div style="background-image:url(assets/bg3.jpg); background-repeat: repeat;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel5")}
    </div>
    `
  } else if(id == 8) {
    boxControlsOnly(1); //set the box controls to be visible at the bottom
    let specificPanelVal = (isAskGrandmaPath) ? "panel7g" : "panel7r";
    return `
    <div style="background-image:url(assets/bg3.jpg); background-repeat: repeat;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel(specificPanelVal)}
    </div>
    `
  }

}
function restart() { //function to restart the story from the beginning
  boxFullyHide();  //set the box controls to be not visible
  getLanguageDropsBackToFirstState();  //set the language "droplet" buttons to the initial state by animation
  emptyAllPathsExceptOne(99);  //empty all paths so space is saved,
  gsap.to(".path_" + currentPath, {duration: 3, opacity: "0", display:"none", ease: "power4.out"});
  currentPath = 0;
  nextPossible = false;
  backPossible = false;
}
function nextPath(id=null) { //function to go to the next story unless an id is specified in the argument, then the story will proceed to that id
  boxFullyHide(1);
  emptyAllPathsExceptOne(currentPath); //space optimization
  if(currentPath==8) { //if this is the last path in the story
    backPossible = false;
    box(); //show the about box after the animation
    $(".nextButton").hide() //hide the next button
    $(".backButton").hide() //hide the back button
    $(".restartButton").show() //show the restart button
  } else {
    backPossible = true;
    prevPath = currentPath;
    if(prevPath == 5) {
      currentPath = 7;
    } else if(id==null) {
      currentPath+=1;
    } else {
      currentPath = id
    }

    let element = loadPath(currentPath);
    $("body").append(element);
    if(language!="ar") {
      gsap.to(".path_" + prevPath, {duration: 3, x:"-200%", ease: "power4.out"}); // after this delete the previous path element
      gsap.to(".path_" + currentPath, {duration: 3, x:"-100%", ease: "power4.out"}); // after this delete the previous path element
    } else { // if arabic make animation go other way

      gsap.to(".path_" + prevPath, {duration: 3, x:"200%", ease: "power4.out"});
      gsap.to(".path_" + currentPath, {duration: 3, x:"100%", ease: "power4.out"}); // after this delete the previous path element

      }
  }
}

function previousPath() { //code to go to the previous path (not used in UI but fully functional, you can call this function manually in the google chrome console as previousPath() )

  emptyAllPathsExceptOne(currentPath);
  if(currentPath<=1) {
    boxFullyHide();
    getLanguageDropsBackToFirstState();
    gsap.to(".path_" + currentPath, {duration: 3, scale:"0.5", left: "-100%", ease: "power4.out"});
    currentPath = 0;
    nextPossible = false;
    backPossible = false;
  } else {
    let tempPath = prevPath;
    if(prevPath > currentPath) {
      currentPath -=1;
    } else {
      prevPath = currentPath;
      currentPath = tempPath;
    }

  //  alert(currentPath)
    let element = loadPath(currentPath, false);
    $("body").append(element);
    gsap.to(".path_" + prevPath, {duration: 1, x:"100%", ease: "power4.out"});
    gsap.to(".path_" + currentPath, {duration: 1, x:"200%", ease: "power4.out"}); // after this delete the previous path element

  }

}

function box(s=1.5) { //The animation of loading the about info for the correct language after a smooth animation
  let aboutContent = '';
  if(language == "en") {
    aboutContent = `
    <h1>About this project</h1>
    The purpose of this comic is to normalize the idea of menstruation to children. Until today many women around the world continue to stop their education after they have their first menstruation.
    It is very important to empower young girls by giving them access to information and resources so they can develop a healthy relationship between their period, their bodies and their self-esteem. Menstruation sounds scary for many people because it is an spoken topic in many cultures. Menstruation is perceived as a taboo in different societies.

    By creating this project, we are hoping to normalize this topic in our cultures along the lines of introducing the idea for little kids and allowing young girls to express themselves freely. <br>

    Know More About Menstruation with these sources! <br>
<a href="https://www.netflix.com/watch/81074663?trackId=13752289&tctx=0%2C0%2Ce8c685f8-aea7-4083-9314-2daea95f53d6-218136948%2C%2C%2C" target="_BLANK">Period. End of Sentence </a><br>
<a href="https://www.nytimes.com/2019/07/16/health/menstrual-cup-periods-women.html" target= "_BLANK">Menstrual cups</a><br>
<a href="https://rupikaur.com/period/" target= "_BLANK"> Rupi Kaur's art about period</a><br>
<a href="https://www.abc.net.au/news/health/2017-09-30/menstrual-cycle-taboo-holds-women-back/8996526" target= "_BLANK"> Menstrual cycle taboo holds women back </a><br>
<a href="https://www.instagram.com/pad2go_nepal/" target= "_BLANK"> @pad2go_nepal</a><br>
<a href="https://feminisminindia.com/2019/11/12/read-understand-menstrual-art-politics/" target= "_BLANK"> Understand Menstrual Art Politics </a><br>
<a href="https://www.thelancet.com/journals/lanchi/article/PIIS2352-4642(18)30209-8/fulltext" target= "_BLANK"> Dismantling menstrual taboos to overcome gender inequality </a><br>

For parents!
<a href="https://www.youtube.com/playlist?list=PLTI3_kh4F2XD3fTUM4s74ONoJ5VIKsJzQ" target= "_BLANK"> Vagina Monologues</a><br>

By Pamela Martinez, Saad Teeti, and Romeno Wenogk
    `;
  } else if(language == "es") {
    aboutContent = `
    <h1>Este proyecto</h1>

El propósito de este cómic es enseñar a los chicxs a normalizar la existencia de la menstruación. Hoy, muchas niñas y mujeres en todo el mundo continúan sin recursos básicos que satisfagan necesidades higiénicas y de salud. Incluso, millones de niñas alrededor del mundo hoy interrumpen su educación después de tener su primera menstruación.
Es muy importante empoderar a las jóvenes dándoles acceso a información y recursos para que puedan desarrollar una relación saludable entre su período, sus cuerpos y su autoestima. La menstruación suena aterradora para muchas personas porque es un tema poco hablado en muchas culturas. La menstruación se percibe como un tabú en diferentes sociedades, creando en sí un ambiente de vergüenza y miedo. Esto contribuye a la desigualdad de género en todos los ámbitos de desarrollo humano.

Al crear este proyecto, esperamos normalizar este tema desde la infancia en nuestras propias culturas, para que las nuevas generaciones se expresen libremente sobre los cambios de su cuerpo.

¡Conoce más sobre la menstruación con estas fuentes! <br>
<a href="https://www.netflix.com/watch/81074663?trackId=13752289&tctx=0%2C0%2Ce8c685f8-aea7-4083-9314-2daea95f53d6-218136948%2C%2C%2C" target="_BLANK">Período. Fin de la Oración </a><br>
<a href="https://www.nytimes.com/2019/07/16/health/menstrual-cup-periods-women.html" target= "_BLANK">Copas menstruales </a><br>
<a href="https://rupikaur.com/period/" target= "_BLANK"> Arte sobre el período de Rupi Kaur</a><br>
<a href="https://www.abc.net.au/news/health/2017-09-30/menstrual-cycle-taboo-holds-women-back/8996526" target= "_BLANK"> El taboo del ciclo menstrual deja a las mujeres atrás </a><br>
<a href="https://www.instagram.com/pad2go_nepal/" target= "_BLANK"> @pad2go_nepal</a><br>
<a href="https://feminisminindia.com/2019/11/12/read-understand-menstrual-art-politics/" target= "_BLANK"> Entendiendo el mensaje político detrás del arte menstrual </a><br>
<a href="https://www.thelancet.com/journals/lanchi/article/PIIS2352-4642(18)30209-8/fulltext" target= "_BLANK"> Desmantelando el taboo menstrual para superar la desigualdad de género </a><br>

Para los papás!
<a href="https://www.youtube.com/playlist?list=PLTI3_kh4F2XD3fTUM4s74ONoJ5VIKsJzQ" target= "_BLANK"> Monólogos de la Vagina </a><br>

Hecho por Pamela Martinez, Saad Teeti, and Romeno Wenogk Fernando.
    `;
  } else if (language == "ar") {
    aboutContent = `
    <h1 style="text-align:right;">عن هذا المشروع</h1>
    <p style="text-align:right;">

    الغرض من هذه الكوميك هو جعل فكرة الحيض ز الدورة الشهرية  لدى الأطفال تبدو طبيعية. حتى اليوم ، تستمر العديد من النساء في جميع أنحاء العالم في التوقف عن التعليم بعد الوصول لمرحلة البلوغ. من المهم جدًا ان نقوي و نمكن الفتيات الصغيرات من خلال منحهن إمكانية الوصول إلى المعلومات والموارد حتى يتمكنوا من تطوير علاقة صحية بين الدورة الشهرية وأجسادهم و ذاتهم. الحيض يبدو مخيفا لكثير من الناس لأنه موضوع  لا يتم التحدث فيه في العديد من الثقافات والمجتمعات. يعتبر الحيض من الاشياء المخجلة في  كثير من
   .المجتمعات. من خلال إنشاء هذا المشروع ، نأمل في جعل هذا الموضوع طبيعيا في ثقافاتنا و ايضا تقديم الفكرة للأطفال الصغار والسماح للفتيات بالتعبير عن أنفسهن بحرية.
<br>
تعلم اكثر عن الدورة الشهرية
  <br>
  <a href="https://www.mayoclinic.org/ar/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186"  target= "_BLANK"> الدورة الشهرية: الأمور الطبيعية وغير الطبيعية  </a><br>
  <a href="https://www.webteb.com/articles/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA-%D8%B9%D9%86-%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%B4%D9%87%D8%B1%D9%8A%D8%A9_22279" target = "_BLANK"> معلومات عن الدورة الشهرية </a><br>
  <a href="https://www.moh.gov.sa/HealthAwareness/EducationalContent/wh/Pages/012.aspx
  " target= "_BLANK"> صحة المرأه </a><br>
  بواسطة بام مارتينيز, سعد تيتي, رومينو فيرناندو
  </p>
    `;
  }
  $(".aboutformat").html(aboutContent)
  boxState = "box"
  gsap.timeline()
  .to(".aboutformat", {duration:0,opacity:0})
  .to(".path_8 > div > img", {duration:0.3,opacity:0,display:"none"})
  .to(".boxContainer", {duration: s, display: "block", opacity:1, top:"5%", width:"70%", left:"15%"})
  .to(".aboutformat", {duration:0.5,opacity:1}); //animation
}
