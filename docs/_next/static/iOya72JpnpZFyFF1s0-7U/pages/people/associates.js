(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"0YTE":function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),o=t("QKO/"),r=(t("svza"),i.a.createElement);a.a=function(){return r("div",{className:"footer-container"},r(o.Flex,{flexDirection:"row",justifyContent:"center",className:"footer-crest"},r(o.Box,{width:40},r(o.Image,{src:"../../../static/logo.svg",alt:""})),r("p",null,"McMurtry College")),r("p",{className:"footer-item"},"McMurtry College \xb7 MS 761 \xb7 Rice University"),r("p",{className:"footer-item"},"1605 Rice Blvd \xb7 Houston, TX 77005"),r("p",{className:"footer-item"},"Phone: (713) 348-4583 \xb7 Fax: (713) 348-3135"),r("p",{className:"footer-item"},"Email: mcmurtry@rice.edu"),r("p",null),r("p",{className:"footer-item"},"Copyright \xa9 McMurtry College, 2019"))}},"1OyB":function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",(function(){return n}))},JX7q:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},Ji7U:function(e,a,t){"use strict";function n(e,a){return(n=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function i(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&n(e,a)}t.d(a,"a",(function(){return i}))},"PNk+":function(e){e.exports=JSON.parse('{"a":[{"name":"About","subheaders":[{"name":"About","to":"/about"},{"name":"O-Week","to":"/oweek"}]},{"name":"Events","subheaders":[{"name":"Calendar","to":"/events/calendar"},{"name":"Arts Calendar","to":"/events/artevents"}]},{"name":"People","subheaders":[{"name":"McTeam","to":"/people/mcteam"},{"name":"McMinistry","to":"/people/mcministry"},{"name":"Court","to":"/people/court"},{"name":"Committees","to":"/people/committees"},{"name":"Associates","to":"/people/associates"},{"name":"Divisional Advisors","to":"/people/divisionaladvisors"},{"name":"Peer Academic Advisors","to":"/people/PAAs"},{"name":"Academic Fellows","to":"/people/academicfellows"},{"name":"RHAs","to":"/people/RHAs"},{"name":"Head Caregivers","to":"/people/headcaregivers"},{"name":"Strive Liaisons","to":"/people/striveliaisons"},{"name":"SMR","to":"/people/SMR"}]},{"name":"Resources","subheaders":[{"name":"Room Reservations","to":"/resources/roomreservations"},{"name":"Financial Inclusivity","to":"/about/financialinclusivity"},{"name":"MIS","to":"/resources/mis"},{"name":"Documents","to":"/resources/documents"},{"name":"Diversity Resources","to":"/resources/diversityResources"},{"name":"Expense Forms","to":"/resources/expenseforms"},{"name":"Work Orders","to":"/resources/workorders"},{"name":"Initiative Requests","to":"/resources/initiativerequests"},{"name":"Feedback Form","to":"/resources/feedbackform"}]}]}')},RUXa:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),o=t("QKO/"),r=(t("WPwg"),i.a.createElement);a.a=function(e){return r("div",null,r(o.Box,{width:e.width,ml:"auto",mr:"auto",className:"title-container"},r("h1",{className:"title-theme"},e.title)))}},Uzui:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/associates",function(){return t("xobv")}])},WPwg:function(e,a,t){},e02a:function(e,a,t){"use strict";var n=t("1OyB"),i=t("vuIU"),o=t("JX7q"),r=t("Ji7U"),s=t("md7G"),c=t("foSv"),l=t("q1tI"),u=t.n(l),d=t("YFqc"),h=t.n(d),m=(t("tKOv"),t("QKO/")),g=t("PNk+"),f=u.a.createElement;function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(s.a)(this,t)}}var v=function(e){Object(r.a)(t,e);var a=p(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={hidden:!0,subheader:null},i.toggleNavbar=i.toggleNavbar.bind(Object(o.a)(i)),i.showSubheader=i.showSubheader.bind(Object(o.a)(i)),i.closeSubheader=i.closeSubheader.bind(Object(o.a)(i)),i}return Object(i.a)(t,[{key:"toggleNavbar",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"showSubheader",value:function(e){this.setState({subheader:e})}},{key:"closeSubheader",value:function(){this.setState({subheader:null})}},{key:"render",value:function(){for(var e=this,a=[],t=[],n=this.state.hidden?{left:"100%"}:{left:0},i=function(n){a.push(f("div",{className:"main-header",key:g.a[n].name},f("a",{onClick:function(){return e.showSubheader(n)}},g.a[n].name))),t.push(f("div",{className:e.state.subheader===n?"subheader-display":"subheader-hidden",key:"".concat(g.a[n].name,"-menu")},f("div",{onClick:e.closeSubheader,className:"subheader-back"},f("p",null,"\u2190 Back")),g.a[n].subheaders.map((function(e){var a=e.name,t=e.to;return f(h.a,{href:t,key:a},f("div",{className:"subheader-item"},a))}))))},o=0;o<g.a.length;o++)i(o);return f("div",null,f("div",{className:"fixed-mobile-header"},f("img",{className:"show-navbar",src:"../../static/icons/menu.svg",alt:"Menu",onClick:this.toggleNavbar}),f(h.a,{href:"/"},f("div",{className:"header-crest-mobile"},f(m.Box,{width:40},f(m.Image,{src:"../../static/logo.svg",alt:""})),f("p",null,"McMurtry College")))),f("div",{className:"mobile-navbar",style:n},f("div",{className:"main-menu"},f("img",{className:"close-navbar",src:"../../static/icons/x.svg",alt:"X",onClick:this.toggleNavbar}),a),t))}}]),t}(u.a.Component);a.a=v},foSv:function(e,a,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.d(a,"a",(function(){return n}))},gr8U:function(e){e.exports=JSON.parse('{"a":[{"name":"Peter and Cheryl Loewen","career":"Associate Professor of Musicology, Shepherd School of Music; Cheryl Assistant Director of the Moore Memorial Public Library in Texas City","bio":"Peter Loewen is Associate Professor of musicology at Rice University where he specializes in Medieval and Renaissance music. His research interests concern vernacular song, religious drama, intellectual history, music and preaching, and the Franciscans. Peter Loewen was born in Uganda to naturalized Canadian citizens who, in their youth, had emigrated from Ukraine after WWII. Cheryl Loewen was born in Dauphin, Manitoba, Canada. She has a Bachelors degree in Commerce from the University of Manitoba and a Master degree in Library Science from UNT. Peter and Cheryl have 4 children ages 15-23.","movie_tv":"At the moment, Game of Thrones.","hobbies":"Beer Brewing","fact":"Peter may be a citizen of Uganda.","image":"../../../../static/associates/PeterLoewen.jpg"},{"name":"Iska Wire","career":"Rice University, Talent Management and Development","bio":"I grew up in Houston and attended Trinity University.  I\'ve been in fundraising for 17 years and currently do talent management for Development and Alumni Relations.  I am divorced and have two children - Elsie (12) and Wyatt (11) who are both in Scottish arts (highland dancing and bag piping) at their school plus a Siamese cat named Wooley.","movie_tv":"An Ideal Husband","hobbies":"Scrapbooking, Photography, Girl Scouts, Rodeo and country and western dancing","fact":"I was a Gold Award Girl Scout and as a kid, sold over 2000 boxes of cookies each year.","image":"../../../../static/associates/IskaWire.jpg"},{"name":"Michelle Passo","career":"Center for Career Development (Rice University)","bio":"This is my 10th year in the CCD! Through the years, I\'ve worked in different roles from managing the Owl Edge Externship Program to helping employers recruit Rice talent, to working with students as they create their resumes and practice their interviewing skills. My husband and I are huge college hoops fans. Our daughter loves having dinner with the \'Rice kids\' at Associates Night(s)! We have a rambunctious dog named Cubbie (after the Chicago Cubs, of course).","movie_tv":"Edward Scissorhands and Moulin Rouge","hobbies":"Basketball spectating (college and NBA), running, yoga","fact":"I used to work in the Commissioner\'s Office at the National Basketball Association (NBA) in New York City","image":"../../../../static/associates/MichellePasso.jpg"},{"name":"Theo Mallinson","career":"Oil and gas industry as an engineer","bio":"Graduated from Rice in 1995, have worked in oil and gas since then. Several stints overseas, but back in Houston now for two kids to go through school. Live near campus with family and currently three chickens.","movie_tv":"The Neverending Story","hobbies":"Soccer, swimming, gardening, video games.","fact":"I enjoy low environmental impact home \'systems\' and am currently trying to perfect a kind of urban mini farm at our house.","image":"../../../../static/associates/TheoMallinson.jpg"},{"name":"Emily Houlik-Ritchey","career":"English Department, Rice U.","bio":"I teach and research the literature of the Middle Ages written in medieval English and Spanish, studying the interaction of these cultural traditions with the wider medieval Mediterranean world. I am originally from Colorado, and my family (including a husband and two spunky kids) travel back there regularly to hike, ski, and see family.","movie_tv":"Foyle\'s War; Jane Austen film adaptations; Rogue One","hobbies":"Raising my kids; Reading for fun; Hiking","fact":"Periodically (as they migrate through Houston) I foster monarch butterfly caterpillars through their metamorphosis into butterflies.","image":"../../../../static/associates/HoulikRitchey.png"},{"name":"Alese Pickering","career":"Rice Magazine (part of Public Affairs at Rice)","bio":"I am a graphic-designing, food-loving, cat-mothering, native Houstonian.","movie_tv":"Murial\'s Wedding","hobbies":"Cooking, photography, reading magazines, collecting art","fact":"I love driving long distance. Road trips are the best.","image":"../../../../static/associates/AlesePickering.jpg"},{"name":"Dereth Phillips","career":"Rice University, Lecturer","bio":"I have worked as a lecturer in the Rice BioSciences (Biochemistry & Cell Biology) department since 2000 and have been a member of the McMurtry family since 2010. My day job is advising Natural Sciences students interested in finding and succeeding in undergraduate research opportunities on campus and elsewhere in Houston. I am a terrible but devoted ukulele/banjolele hobbyist.","movie_tv":"Freaks and Geeks","hobbies":"Cooking, ukulele, playing other odd instruments, singing","fact":"Rice has a lot of cool nature. Take a look at the lizards around McMurtry. The brown ones with diamonds are invasive Cuban anoles. The green (sometimes plain brown) ones are native.","image":"../../../../static/associates/DerethPhillips.jpeg"},{"name":"Laura S. Kabiri","career":"Lecturer - Department of Kinesiology","bio":"Hello from the Department of Kinesiology at Rice! I primarily teach human anatomy and physiology courses while my research focuses on pediatric health and wellness. I am also a licensed physical therapist, wife, and mom of 3 (but one of them has four paws and a tail).","movie_tv":"Frasier","hobbies":"Eating","fact":"I completed undergrad as a music major (piano and choir) before going on PT school and have volunteered with the Houston Food Bank, Houston Rodeo, and Faithful Paws Animal Therapy Group.","image":"../../../../static/associates/LauraKabiri.jpg"},{"name":"Zo\xeb Wool","career":"Assistant Professor, Department of Anthropology, CSWGS, and Medical Humanities","bio":"I\u2019m a native New Yorker and erstwhile Torontonian still getting used to Houston\u2019s car culture and the fact that people put blankets on their lawns when there is a frost warning. My resarch and teaching are at the intersections of medical anthropology, disability studies, queer theory, and STS, and most of my ethnographic resarch is with injured US soldiers and veterans of the post-9/11 wars.","movie_tv":"I don\u2019t like to pick favorites (but maybe Startrek TNG)","hobbies":"Making meals, making mischief.","fact":"I usually ride my bike to work and have been known to yell at my students who ride theirs without a helemet.","image":"../../../../static/associates/ZoeWool.jpeg"},{"name":"Kurt and Stephanie Kasper","career":"The University of Texas School of Dentistry at Houston","bio":"Kurt Kasper earned a doctorate in bioengineering from Rice University and a bachelor of science degree in biomedical engineering (magna cum laude) from Case Western Reserve University. He served on the faculty of the Department of Bioengineering at Rice University for six years prior to transitioning to the Department of Orthodontics at The University of Texas School of Dentistry at Houston in July 2014. Kurt\u2019s research applies fundamentals of engineering, materials science, and the biosciences toward the development and evaluation of biomaterial-based technologies to meet clinical needs. Outside of the  laboratory, he enjoys engagement in outreach activities through service with the You Be the Chemist Challenge program of the Chemical Educational Foundation, as well as service to the greater Houston community in various capacities, including past service as a member of the Board of Directors of the Association of Rice Alumni.","movie_tv":"Waiting for Guffman","hobbies":"Parks, museums, and cycling with my family","fact":"I applied to Rice for undergraduate studies but was not accepted!","image":"../../../../static/associates/KurtKasper.jpg"},{"name":"E. Kate Abad","career":"Student Center Director, Rice","bio":"E. Kate Abad has worked at Rice University for ten years, where she currently serves as the Student Center Director with oversight for the Student Run Businesses, Facilities and Events, and Student Activities. Kate has a passion for developing student and professional leaders through coaching, leadership development and advising.  As a hobby she loves anything related to journaling and is always willing to help aspiring journal writers get started!","movie_tv":"Game of Thrones","hobbies":"Journaling - bullet, art, classic","fact":"I grew up in Japan and on Guam","image":"../../../../static/associates/KateAbad.jpg"},{"name":"Ozge Gurcanli, Simon Fischer-Baum, Masal Baby-Murt","career":"OG & SFB: Department of Psychology, Masal: Unicorn Land","bio":"We both work in Department of Psychology and we teach Psychology and Cognitive Science courses. We lived in McM as RAs for 4 years, students named our child Baby-Murt, and we are so proud of all McM students.","movie_tv":"OG: Marvellous Miss Maisel, SFB: Russian Doll, Masal: Daniel Tiger\'s Neighborhood","hobbies":"OG: Photography, SFB: Cooking, Masal: Acting, scooting, and drawing","fact":"OG loves tea! A lot. Also sewing. We all love art work with tactile materials.","image":"../../../../static/associates/OzgeGurcanli.jpeg"},{"name":"Norma Torres Mendoza & Placido Andres Gomez","career":"Norma (MBA Candidate at Rice Business School) Placido (Senior Associate at Safal Partners)","bio":"Norma and Placido have been married for three years and live in Houston, TX. Both of them are Rice undergrads (they met at Urban Immersion) in 2013. They both then attended Harvard for their Masters. Placido has a background in politics and education and Norma has focused on the intersection of business and the public sector.","movie_tv":"Black Mirror","hobbies":"Tennis, cooking, traveling, and reading at different coffeeshops","fact":"Plaz is a great tennis player (state champion from New Mexico) and Norma appeared in the Barney and Friends show (you know, the purple dinosaur)","image":"../../../../static/associates/NormaTorresMendoza.PNG"},{"name":"Chan Pham","career":"Rice University, Research Administrator","bio":"Married, mother of 3 children (Truce & Mai graduated from Rice)  I love food and travel.","movie_tv":"I love all movies except scary ones.","hobbies":"Reading, watching Netfix and Xfinity","fact":"I love to try new dishes and restaurants.","image":"../../../../static/associates/ChanPham.jpg"},{"name":"Keri Bas","career":"I teach sewing & textile arts, often with a non-profit working in schools & shelters.","bio":"After years in professional marketing and web design, I now split my time between sewing/quilting and working with private tech/web support clients. I share my house with my parents and two cats. I serve on the board of a local arts non-profit and lead several groups of creatives. I\'m an interfaith minister, ordained in New York in 2005 - ask me about it sometime.","movie_tv":"Good Omens, The Princess Bride, Ladyhawke, Iron Man, The Lion in Winter, Harvey, Moana / Babylon 5, Star Trek, Midsomer Murders, Bob\'s Burgers, Brooklyn 99, Vera","hobbies":"Advanced Dungeons & Dragons; making & drinking fine teas; arguing about Marvel & Harry Potter & scifi movies over coffee late into the night; reading; writing; painting; drawing; traveling when the budget allows","fact":"I was on a TV game show in the early 00s when I lived in New York; people still text me when they catch the re-runs.","image":"../../../../static/associates/KeriBas.jpg"},{"name":"Nicole Van Den Heuvel","career":"Executive Director -Center for Career Development","bio":"\'81 Rice alumna - Love being back at Rice and helping our students find their career paths and gain confidence in their career development process.","movie_tv":"Parent Trap","hobbies":"Horseback riding, travel, museums","fact":"From Aruba. Lived in 8 different countries. Went to 13 schools in 12 years.","image":"../../../../static/associates/NicoleVanDenHeuvel.jpg"},{"name":"Lauren Stadler","career":"Assistant Professor, CEVE","bio":"I am an environmental engineer and my research and teaching focus on biological water treatment processes and the microbes in our water systems. I am a mom to one toddler and two sweet but poorly behaved doggies.","movie_tv":"Friday Night Lights","hobbies":"Biking, soccer, eating ice cream","fact":"I kill most plants that I try and grow.","image":"../../../../static/associates/LaurenStadler.JPG"},{"name":"Mark Krouskop","career":"Rice University, Hamman Hall, Lecturer Theater Design","bio":"My name is Mark Krouskop. I am a theater design lecturer in VADA. Come by Hamman Hall and I\u2019d be happy to give you more details.","movie_tv":"Real Genius","hobbies":"Playing volleyball, video games, collecting 1980-present toys, making fine furniture.","fact":"I have 3 ferrets and a Great Dane.","image":"../../../../static/associates/MarkKrouskop.jpeg"},{"name":"Danielle King","career":"Rice University, Assistant Professor in Psychological Sciences","bio":"I started at Rice in 2018, after completing my undergrad training in Psychology at Spelman College and my MA and PhD in Organizational Psychology at Michigan State. I am originally from New Orleans, LA. I started the WorKing Resilience Research Lab at Rice because I am passionate about understanding how we can foster resilience and wellbeing in employees and organizations.","movie_tv":"Black Panther. The Notebook. Big Bang Theory. Good Trouble.","hobbies":"Traveling. Trying new workouts. Painting.","fact":"I love adventure: I went skydiving in New Zealand and swimming with sharks in Belize.","image":"../../../../static/associates/DanielleKing.png"},{"name":"Elizabeth Festa","career":"Rice Program for Writing and Communication","bio":"I teach research writing and communication across all disciplines and levels of study. My research focuses on supporting graduate writers.  I have two children (including one Murt!) and have one very demanding Siamese cat, Percival. I hail from the Virginia side of Washington, D.C., but Houston is by far my most favorite place. It\'s an incredibly warm city...in temperature and temperament.","movie_tv":"All international crime dramas--Hinterland, Shetland, The Break, Innocent, The Mechanism, Undercover, Wallander, etc.","hobbies":"Dining out (Tex-Mex!), museums, reading, walking at the Arboretum, and arthouse cinema","fact":"Before going to graduate school, I was a military officer","image":"../../../../static/associates/ElizabethFesta.jpg"},{"name":"Cassandra Diep & Jeffrey Yeung","career":"Assistant Teaching Professor, Kinesiology Department (CD); Senior Accounting & Business Analyst, Controller\u2019s Office (JY)","bio":"Cassie and Jeff grew up in Houston and attended the same middle and high schools, but didn\u2019t start dating until they were both in graduate school at Texas A&M. Cassie is an Owl-Aggie (Rice for undergrad and A&M for grad school), and Jeff is a full-blown Aggie. They have been married since 2013, and have an energetic and vehicle-loving toddler (Alex) and not-so-energetic and not-so-vehicle-loving cat (Miso). Cassie currently teaches and advises in the Health Sciences program within Kinesiology, while Jeff is involved with various aspects of Rice\u2019s accounting.","movie_tv":"The Good Place","hobbies":"Arts and crafts, baking (CD); Cars, cooking, shoes (JY)","fact":"Cassie and Jeff\u2019s cat does tricks, including \u201csit,\u201d \u201chigh five,\u201d \u201cup,\u201d and \u201cleave it.\u201d","image":"../../../../static/associates/Yeung.jpg"},{"name":"Geoff Wehmeyer","career":"Assistant Professor Rice Department of Mechanical Engineering","bio":"I\'m a mechanical engineer, and my research focuses on understanding heat transport at the nanoscale. I was born in Dallas, went to undergrad at UT Austin, and came to Rice in 2018 after finishing my Ph.D. at Berkeley. My wife Lauren is also a mechanical engineer from Texas, and we love spending time with our niece and nephews in San Antonio and exploring Houston.","movie_tv":"The Sopranos","hobbies":"Hiking, camping, reading fiction, going to shows","fact":"At one point, I could throw a javelin >130 feet","image":"../../../../static/associates/GeoffWehmeyer.jpg"},{"name":"Jennifer Zinn-Winkler","career":"Department Administrator - Department of Kinesiology at Rice University","bio":"I have been at Rice since moving to the Houston area in 2012.  Originally from Austin, I received my BS degree in Kinesiology from UT Austin.  My husband Lance & I have an almost 2 year old daughter who keeps us on our toes.","movie_tv":"Chicago Fire","hobbies":"Traveling, movies w/ friends, building blocks w/ the toddler","fact":"I\'ve met Matthew McConaughey twice & have two pictures with him.  He\'s so awesome!","image":"../../../../static/associates/JenniferZinn-Winkler.jpg"},{"name":"Kasey Leigh and Cam Yearty","career":"Dr. Yearty: Wiess Instructor of Chemistry at Rice; Cam: Public Private Partnership Manager at the City of Sugar Land","bio":"Dr. Kasey Leigh Yearty and her husband Cam are proud to be new Texans and McMurts! They joined the Rice community in 2019, where Dr. Yearty is the Wiess Instructor of Chemistry, specifically teaching organic chemistry courses; Cam works in Sugar Land, The Sweetest City in Texas. They are joined as Associates in McMurtry by their dog, BoBo. The Yeartys are excited to get to know their extended McMurtry family!","movie_tv":"Dr. Yearty: The West Wing; Cam: Jurassic Park","hobbies":"We enjoy baking, exploring Houston (especially the food scene), and trying new restaurants. Basically, we like food.","fact":"Dr. Yearty: I taught approximately 40 three-year-old children music a few years ago. Cam: I was an NCAA Division I Athlete at Mercer University.","image":"../../../../static/associates/Yearty.jpg"}]}')},ivdq:function(e,a,t){"use strict";var n=t("1OyB"),i=t("vuIU"),o=t("JX7q"),r=t("Ji7U"),s=t("md7G"),c=t("foSv"),l=t("q1tI"),u=t.n(l),d=t("YFqc"),h=t.n(d),m=t("QKO/"),g=t("PNk+"),f=(t("sllQ"),u.a.createElement);function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(c.a)(e);if(a){var i=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(s.a)(this,t)}}var v=function(e){Object(r.a)(t,e);var a=p(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={permanent:!1},i.handleScroll=i.handleScroll.bind(Object(o.a)(i)),i}return Object(i.a)(t,[{key:"handleScroll",value:function(){this.setState({permanent:window.scrollY>0})}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.permanent?{backgroundColor:"#515768"}:{paddingTop:"15px",paddingBottom:"15px",color:"#515768",backgroundColor:"#DCDFE5"};return f("div",{className:"navbar-wrapper",style:e},f(h.a,{href:"/"},f("div",{className:"header-crest"},f(m.Image,{src:"../../static/logo.svg",alt:"",width:40,height:60}),f("p",null,"McMurtry College"))),f("div",{className:"navbar-catagories"},g.a.map((function(e){var a=e.name,t=e.subheaders;return f("div",{className:"navbar-category",key:a},f("button",{className:"navbar-dropdown-opener"},a),f("div",{className:"dropdown-subheaders"},t.map((function(e){var a=e.name,t=e.to;return f(h.a,{href:t,key:a},f("a",null,a))}))))}))))}}]),t}(u.a.Component);a.a=v},md7G:function(e,a,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}t.d(a,"a",(function(){return r}));var o=t("JX7q");function r(e,a){return!a||"object"!==i(a)&&"function"!==typeof a?Object(o.a)(e):a}},sllQ:function(e,a,t){},svza:function(e,a,t){},tKOv:function(e,a,t){},vuIU:function(e,a,t){"use strict";function n(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}t.d(a,"a",(function(){return i}))},xobv:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),o=t("AM0r"),r=t("ivdq"),s=t("e02a"),c=t("0YTE"),l=t("1OyB"),u=t("vuIU"),d=t("JX7q"),h=t("Ji7U"),m=t("md7G"),g=t("foSv"),f=t("QKO/"),p=t("RUXa"),v=(t("9iI9"),t("gr8U")),y=i.a.createElement;function b(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(g.a)(e);if(a){var i=Object(g.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(m.a)(this,t)}}var w=function(e){Object(h.a)(t,e);var a=b(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={contentVisible:!1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(u.a)(t,[{key:"handleClick",value:function(){this.setState({contentVisible:!this.state.contentVisible})}},{key:"render",value:function(){var e={},a={};return e.maxHeight=this.state.contentVisible?"650px":"0",a.maxHeight=this.state.contentVisible?"0":"300px",y(f.Box,{width:1,onClick:this.handleClick},y("div",{className:this.state.contentVisible?"associate-card-visible":"associate-card-hidden"},y("div",{className:"associate-image-dropdown",style:a},y(f.Box,{className:"associate-image",width:[.8,.5]},y(f.Image,{src:this.props.image,alt:""}))),y("h2",{className:"associate-name"},this.props.name),y("p",null,y("strong",null,"Career/Profession: "),this.props.career),y("div",{style:e,className:"associate-dropdown"},y("p",null,y("strong",null,"Bio: "),this.props.bio),y("p",null,y("strong",null,"Favorite Movie/TV Show: "),this.props.movie_tv),y("p",null,y("strong",null,"Hobbies: "),this.props.hobbies),y("p",null,y("strong",null,"Fun Fact: "),this.props.fact))))}}]),t}(i.a.Component),k=function(){for(var e=[[],[]],a=0;a<v.a.length;a++)e[a%2].push(y(w,{key:"".concat(v.a[a].name),name:v.a[a].name,career:v.a[a].career,bio:v.a[a].bio,movie_tv:v.a[a].movie_tv,hobbies:v.a[a].hobbies,fact:v.a[a].fact,image:v.a[a].image}));return y("div",{className:"associates-page"},y(p.a,{title:"Associates",width:240,smallText:!1}),y(f.Box,{width:[.9,.55],ml:"auto",mr:"auto"},y("p",{className:"associates-mission"},"Every residential college at Rice has an associates program, where faculty, staff, and community members support students in their intellectual, cultural and social lives through providing mentorship, guidance and support.")),y(f.Flex,{justifyContent:"center",flexDirection:"row",flexWrap:"wrap",style:{marginTop:"3%"}},e.map((function(a){return y(f.Flex,{flexDirection:"column",width:[1,.35],key:"C+".concat(e.indexOf(a))},a)}))))},M=(t("NHen"),i.a.createElement);a.default=function(){return M("div",{className:"page"},M(o.a,null),M(r.a,null),M(s.a,null),M(k,null),M(c.a,null))}}},[["Uzui",0,2,1,3,4]]]);