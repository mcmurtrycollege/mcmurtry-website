(window.webpackJsonp=window.webpackJsonp||[]).push([["8bf5"],{"7dNd":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/committees",function(){var e=a("eL0o");return{page:e.default||e}}])},Bs9k:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("QKO/"),o=(a("Qqc9"),function(e){return n.a.createElement(r.Box,{className:"position-card",width:e.width},n.a.createElement("div",{className:"contact-card-content",style:{height:e.height}},void 0!==e.position?n.a.createElement("h2",{className:"position"},e.position):null,n.a.createElement("h2",{className:"name"},e.name),void 0!==e.phone?n.a.createElement("h3",{className:"contact-phone"},n.a.createElement("img",{src:"https://icon.now.sh/call/422a4C/16",alt:"Phone: "})," ",e.phone):null,void 0!==e.email?n.a.createElement("a",{href:"mailto:".concat(e.email),className:"link"},n.a.createElement("h3",{className:"contact-email"},n.a.createElement("img",{src:"https://icon.now.sh/arrow/422a4C/8",alt:"Email: "})," ",e.email)):null,void 0!==e.year?n.a.createElement("h4",{className:"year"},"Year: ",e.year):null,void 0!==e.major?n.a.createElement("h2",{className:"major"},n.a.createElement("img",{src:"https://icon.now.sh/school/2B2F3A/16",alt:"Major: "})," ",e.major):null,void 0!==e.subjects?n.a.createElement("h2",{className:"subjects"},n.a.createElement("img",{src:"https://icon.now.sh/local_library/2B2F3A/16",alt:"Subjects: "})," ",e.subjects):null,void 0!==e.room?n.a.createElement("h2",{className:"room"},"Room: ",e.room):null))});t.a=function(e){return n.a.createElement(r.Box,{width:[1,1,.9,.8],ml:"auto",mr:"auto"},n.a.createElement(r.Flex,{flexWrap:"wrap",flexDirection:"row",justifyContent:"center"},e.content.map(function(t){var a=t.position,i=t.name,r=t.year,s=t.email,m=t.phone,c=t.major,l=t.subjects,u=t.room;return n.a.createElement(o,{height:e.height,width:e.width,key:i,position:a,name:i,year:r,email:s,phone:m,major:c,subjects:l,room:u})})))}},eL0o:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("AM0r"),o=a("ivdq"),s=a("e02a"),m=a("0YTE"),c=a("0iUn"),l=a("sLSF"),u=a("MI3g"),h=a("a7VT"),d=a("AT/M"),y=a("Tit0"),p=a("QKO/"),g=a("Bs9k"),f=a("RUXa"),v=a("jbS2"),b=(a("z6qu"),[v.b,v.a,v.c]),w=["Internal Committees","External Committees","Social Committees"],M=function(e){function t(e){var a;return Object(c.default)(this,t),(a=Object(u.default)(this,Object(h.default)(t).call(this,e))).state={division:0,committee:0},a.changeDivision=a.changeDivision.bind(Object(d.default)(a)),a.changeCommittee=a.changeCommittee.bind(Object(d.default)(a)),a}return Object(y.default)(t,e),Object(l.default)(t,[{key:"changeDivision",value:function(e){this.setState({division:e,committee:0})}},{key:"changeCommittee",value:function(e){this.setState({committee:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"committee-page"},n.a.createElement(f.a,{width:280,title:"Committees"}),n.a.createElement("div",null,n.a.createElement(p.Flex,{justifyContent:"center",flex:"wrap",flexDirection:"row"},w.map(function(t){return n.a.createElement(p.Box,{key:t},n.a.createElement("div",{onClick:function(){return e.changeDivision(w.indexOf(t))},className:e.state.division===w.indexOf(t)?"active-division":"inactive-division"},n.a.createElement("p",{className:"division-key"},"".concat(t))))}))),n.a.createElement("div",null,n.a.createElement(p.Flex,{justifyContent:"center",flex:"wrap",flexDirection:"row"},b[this.state.division].map(function(t){return n.a.createElement(p.Box,{key:t.name},n.a.createElement("div",{onClick:function(){return e.changeCommittee(b[e.state.division].indexOf(t))},className:e.state.committee===b[e.state.division].indexOf(t)?"active-committee":"inactive-committee"},n.a.createElement("p",{className:"committee-key"},t.name)))}))),n.a.createElement("div",null,n.a.createElement(p.Box,{width:[.9,.7,.6,.5],ml:"auto",mr:"auto",className:"committee-description"},n.a.createElement("h1",{className:"division-title"},b[this.state.division][this.state.committee].name),b[this.state.division][this.state.committee].description),n.a.createElement(g.a,{content:b[this.state.division][this.state.committee].members,height:110,width:240})))}}]),t}(n.a.Component);a("NHen"),t.default=function(){return n.a.createElement("div",{className:"page"},n.a.createElement(r.a,null),n.a.createElement(o.a,null),n.a.createElement(s.a,null),n.a.createElement(M,null),n.a.createElement(m.a,null))}},jbS2:function(e){e.exports={b:[{name:"Website",description:"The Website Committee works on developing and updating the McMurtry Website.",members:[{name:"Nicholas Meisburger",year:"2022",email:"ncm5@rice.edu"},{name:"Shaquille Que",year:"2022",email:"stq1@rice.edu"},{name:"Chatham Abate",year:"2021",email:"caa8@rice.edu"},{name:"Melodi Doganay",year:"2022",email:"mnd2@rice.edu"},{name:"Parth Parulekar",year:"2022",email:"psp3@rice.edu"}]},{name:"Amenities",description:"The Amenities Committee is responsible for the improvement and upkeep of the public spaces (such as the lounges, TV room, game room, outside on 5th Floor, and hang-out area in the Commons) throughout McMurtry. Each member of our committee is in charge of managing one space - and we’re open to any suggestions! We focus on creating a pleasant atmosphere throughout the college with rooms and amenities all students can utilize. The Amenities Committee strives to implement long-lasting enhancements that can be enjoyed by Murts for years to come!",members:[{name:"Mac Carr",year:"2022",email:"@rice.edu"}]},{name:"Environmental",description:"The Environmental Committee exists at McMurtry to keep the college's effect on Earth in the minds of every Murt. This committee aims to help raise awareness about the little things that everyone can do to reduce the college's overall environmental impact.",members:[{name:"Sachi Paul",year:"2021",email:"sp57@rice.edu"}]},{name:"Food and Kitchens",description:"We serve as your liaisons between the college and the West Servery chefs and also plan food for FIT-Qs!",members:[{name:"An Luu",year:"2022",email:"ahl4@rice.edu"}]},{name:"Tech",description:"The Technology Committee is responsible for everything from maintaining our computer lab to all of the A/V equipment in the Commons and PDR and this very website. The roles on this committee include Director of Technology, Webmaster, Computer Lab Associate, and Technology Associate.",members:[{name:"Rachel Moore",year:"2022",email:"mcmurtrytech@gmail.com"}]},{name:"Arts",description:"The Arts committee is dedicated to hosting quality shows at McMurtry centered around all types of performing arts. Including talent shows and theatre productions, we want to facilitate the creativity of students at McMurtry and help each and every one on their journey of discovery in the arts world.",members:[{name:"Em Echeverria",year:"2021",email:"ese3@rice.edu"}]},{name:"MIS Liaison",description:"Manages MIS and serves as liaison with IVP.",members:[{name:"Grant Lu",year:"2021",email:"gwl3@rice.edu"}]}],a:[{name:"Alumni",description:"Wondering how McMurtry alumni keep in touch with the best college at Rice? Look no further than the Alumni Committee. Our committee sends out a newsletter each semester during the school year to all McMurtry alums, updating them on what's going on at Rice and McMurtry. We also plan events at McMurtry that include alumni such as during Homecoming, McMurtry Day, and Beer Bike! Our goals are to reach out to the young, enthusiastic classes that just graduated our college and get them involved in making McMurtry's culture amazing.",members:[{name:"Lily Cao",year:"2020",email:"ljc4@rice.edu"},{name:"Lauren Loh",year:"2020",email:"lsl3@rice.edu"}]},{name:"Associates",description:"The Associates Committee serves as a liaison between McMurtry's students and associates. McMurtry associates are Rice faculty as well as adult professionals in the Houston area who are associated with Rice. They serve as mentors, friends, academic advisers, and general resources for students. The Associates Committee hosts intellectual events, monthly lunches, study breaks, holiday events, and a formal Associates' Night each semester. The committee also organizes O-week group lunches with associates, as well as a pre-O-week reception and dinner.",members:[{name:"Katherine Bartos",year:"2022",email:"keb17@rice.edu"},{name:"Isabel Sjodin",year:"2022",email:"ijs1@rice.edu"},{name:"Akshaya Venkatesh",year:"2022",email:"av54@rice.edu"}]},{name:"IM Sports",description:"The Intramural Sports committee serves several athletics-related roles, with the most important being getting Murts involved! By serving as liaison between McMurtry and IMS (the rec center), the sports committee works to promote both college and intramural sports, help people sign up, and represent McMurtry to IMS. Committee members also work with powerpuff (yay powderpuff!), work to get competing Murts in legit athletic swag, and generally love sports themselves.",members:[{name:"Hannah Boyd",year:"2022",email:"hrb3@rice.edu"}]},{name:"Philanthropy",description:"Enjoy volunteering but not sure you can make a long-term commitment? Want to spend time with other students while making an impact? Want to pick one non-profit with which you can make an impact for 4 years? The Philanthropy Committee encourages student engagement in the community and supports Houston organizations by organizing fun service opportunities both on and off campus throughout the year. We also partner with other colleges and the Rice Service Council to coordinate large-scale events.",members:[{name:"Anna Girardeau",year:"",email:"arg10@rice.edu"},{name:"Jennifer Ho",year:"",email:"jh86@rice.edu"},{name:"Sana Mohamed",year:"",email:"sam22@rice.edu"}]},{name:"Murtchandise",description:"The Murtchandise committee is responsible for the design and procurement of McMurtry merchanise.",members:[{name:"Melodi Doganay",year:"2022",email:"mnd2@rice.edu"},{name:"Kaitlan Easley",year:"2022",email:"kde4@rice.edu"},{name:"Elena Margolin",year:"2022",email:"erm7@rice.edu"}]},{name:"Traditions",description:"The traditions committee is the link between current McMurtry and our past. They keep track of McMurtry history through photos, scrapbooks, articles, and the Rice archives. Even more than just recording the college history, they are capturing the history of each and every Murt student, so know one ever forgets their McMurtry experience.",members:[{name:"Mac Carr",year:"2022",email:"mac28@rice.edu"},{name:"Rachel Moore",year:"2022",email:"rcm7@rice.edu"},{name:"Kelsey Sanders",year:"2020",email:"kns4@rice.edu"}]}],c:[{name:"External Socials",description:"External Socials are simply put, very very social. We plan events that feature Murts interacting with other colleges, including McMurtry's public party and Pub night. Our goal is to create activities that every Murt would love to participate in and to find ways to make sure every member of our college feels connected to the community by simply doing FUN STUFF. We are always ready to hear any input that anyone might have, and we cannot wait to make this an amazing year!",members:[{name:"Benjamin Collier",year:"2022",email:"blc5@rice.edu"},{name:"George Huang",year:"2022",email:"gih@rice.edu"},{name:"Rachel Moore",year:"2022",email:"rcm7@rice.edu"},{name:"Alyson Resnick",year:"2022",email:"amr21@rice.edu"},{name:"Isabel Sjodin",year:"2022",email:"ijs1@rice.edu"}]},{name:"Internal Socials",description:"The Internal Socials committee - a group dedicated to fostering McMurtry spirit, bonding, and fun. But more importantly we’re dedicated to keeping McMurtry to as little studying as possible. The committee puts on various social events throughout the year including, but not limited to board game and movie nights, Fridays in the Quad, social mixer events and McSkate.",members:[{name:"Aruni Areti",year:"2022",email:"asa12@rice.edu"},{name:"Natty Askanase",year:"2022",email:"nda1@rice.edu"},{name:"Sophie Marx",year:"2022",email:"shm7@rice.edu"},{name:"Giovanni Pecchio",year:"2022",email:"gp30@rice.edu"}]},{name:"Beer Bike",description:"Beer Bike. Some say it's the best day of the year. Others say it's the best day of their lives (with the exception of the other Beer Bikes they were fortunate enough to attend). The Beer Bike Committee is in charge of making this monumentous day a reality for all of McMurtry to enjoy. Whether it be assisting the Biking or Chugging Teams, organizing water balloon filling, or rounding people up for an epic jack on… Duncan (of course) – there is something for everyone (including new students) to do!",members:[{name:"Jonathan Bloom",year:"2021",email:"jsb8@rice.edu"},{name:"Alex Curylo",year:"2021",email:"alc10@rice.edu"},{name:"Emily Duffus",year:"2021",email:"ekd2@rice.edu"},{name:"Augi Liebster",year:"2021",email:"adl5@rice.edu"}]},{name:"Burts",description:"The Burts committee is dedicated to putting on quirky, intellectual events in our unique Burt’s Lounge! Anyone is always welcome to our tea breaks, faculty-hosted talks, or just to hang out!",members:[{name:"Krishna Chandra",year:"2022",email:"kc60@rice.edu"},{name:"Julia Robinson",year:"2021",email:"jmr18@rice.edu"},{name:"Sam Rossum",year:"2020",email:"sdr5@rice.edu"}]},{name:"Culturals",description:"The McMurtry Cultural Committee exists to engage students in the diversity of the Houston community. Currently, Culturals subsidizes ethnic restaurants along the METRO-rail, provides themed study breaks, and is responsible for the college Hookah, amongst other fascinating cultural things. The committee also facilitates opportunities for free events and shows in Houston through a liaison with RPC. Here mostly to provide McMurtry with free food and concerts, the Cultural Committee ensures McMurtry is never short of fun things to do both within and beyond the hedges.",members:[{name:"Mariana Najera",year:"",email:"mn39@rice.edu"},{name:"Tyler Sakakeeny",year:"2021",email:"tcs9@rice.edu"}]}]}}},[["7dNd","5d41","9da1","ad9d"]]]);