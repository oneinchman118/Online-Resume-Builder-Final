const form = document.querySelector("form");

form.addEventListener("submit", function() {

    const User = {
        firstName: form[0].value,
        lastName: form[1].value,
        number: form[2].value,
        email: form[3].value,

        github: form[4].value,
        linkedin: form[5].value,
        codechef: form[6].value,
        hackerrank: form[7].value,

        collegeDuration: form[8].value,
        collegeDegree: form[9].value,
        collegeName: form[10].value,
        collegeGrade: form[11].value,

        s1Duration: form[12].value,
        s1Name: form[13].value,
        s1Board: form[14].value,
        s1Grade: form[15].value,

        s2Duration: form[16].value,
        s2Name: form[17].value,
        s2Board: form[18].value,
        s2Grade: form[19].value,

        exp1: form[20].value,
        exp1des: form[21].value,
        exp1dura: form[22].value,
        exp2: form[23].value,
        exp2des: form[24].value,
        exp2dura: form[25].value,

        proj1: form[26].value,
        proj1des: form[27].value,
        proj2: form[28].value,
        proj2des: form[29].value,
        proj3: form[30].value,
        proj3des: form[31].value,
        proj4: form[32].value,
        proj4des: form[33].value,

        proglang: form[34].value,
        webtech: form[35].value,
        dblang: form[36].value,
        misc: form[37].value,

        achieve1: form[38].value,
        achieve1des: form[39].value,
        achieve2: form[40].value,
        achieve2des: form[41].value,
        achieve3: form[42].value,
        achieve3des: form[43].value,
        achieve4: form[44].value,
        achieve4des: form[45].value,

        course1: form[46].value,
        course2: form[47].value,
        course3: form[48].value,
        course4: form[49].value,

        hobby1: form[50].value,
        hobby2: form[51].value,
        hobby3: form[52].value,
        hobby4: form[53].value,


    }

localStorage.setItem("firstName", User.firstName);
localStorage.setItem("lastName", User.lastName);
localStorage.setItem("number", User.number);
localStorage.setItem("email", User.email);

localStorage.setItem("github", User.github);
localStorage.setItem("linkedin", User.linkedin);
localStorage.setItem("codechef", User.codechef);
localStorage.setItem("hackerrank", User.hackerrank);

localStorage.setItem("collegeDuration", User.collegeDuration);
localStorage.setItem("collegeDegree", User.collegeDegree);
localStorage.setItem("collegeName", User.collegeName);
localStorage.setItem("collegeGrade", User.collegeGrade);

localStorage.setItem("s1Duration", User.s1Duration);
localStorage.setItem("s1Name", User.s1Name);
localStorage.setItem("s1Board", User.s1Board);
localStorage.setItem("s1Grade", User.s1Grade);

localStorage.setItem("s2Duration", User.s2Duration);
localStorage.setItem("s2Name", User.s2Name);
localStorage.setItem("s2Board", User.s2Board);
localStorage.setItem("s2Grade", User.s2Grade);

localStorage.setItem("exp1", User.exp1);
localStorage.setItem("exp1des", User.exp1des);
localStorage.setItem("exp1dura", User.exp1dura);
localStorage.setItem("exp2", User.exp2);
localStorage.setItem("exp2des", User.exp2des);
localStorage.setItem("exp2dura", User.exp2dura);

localStorage.setItem("proj1", User.proj1);
localStorage.setItem("proj1des", User.proj1des);
localStorage.setItem("proj2", User.proj2);
localStorage.setItem("proj2des", User.proj2des);
localStorage.setItem("proj3", User.proj3);
localStorage.setItem("proj3des", User.proj3des);
localStorage.setItem("proj4", User.proj4);
localStorage.setItem("proj4des", User.proj4des);

localStorage.setItem("proglang", User.proglang);
localStorage.setItem("webtech", User.webtech);
localStorage.setItem("dblang", User.dblang);
localStorage.setItem("misc", User.misc);

localStorage.setItem("achieve1", User.achieve1);
localStorage.setItem("achieve1des", User.achieve1des);
localStorage.setItem("achieve2", User.achieve2);
localStorage.setItem("achieve2des", User.achieve2des);
localStorage.setItem("achieve3", User.achieve3);
localStorage.setItem("achieve3des", User.achieve3des);
localStorage.setItem("achieve4", User.achieve4);
localStorage.setItem("achieve4des", User.achieve4des);

localStorage.setItem("course1", User.course1);
localStorage.setItem("course2", User.course2);
localStorage.setItem("course3", User.course3);
localStorage.setItem("course4", User.course4);

localStorage.setItem("hobby1", User.hobby1);
localStorage.setItem("hobby2", User.hobby2);
localStorage.setItem("hobby3", User.hobby3);
localStorage.setItem("hobby4", User.hobby4);

	// alert(User.name+", "+User.number+", "+User.email);
})

const autobtn = document.querySelector(".auto-fill");
autobtn.addEventListener("click", autoFill);

function autoFill() 

{

const fName = document.getElementById("first-name");
fName.value = "Janeswaran";

const lName = document.getElementById("last-name");
lName.value = "T";

const num = document.getElementById("number");
num.value = 9876543210;

const email = document.getElementById("email");
email.value = "janesbond007@gmail.com";

const github = document.getElementById("github");
github.value = "https://github.com/janeswaran-t/";

const linkedin = document.getElementById("linkedin");
linkedin.value = "https://linkedin.com/janeswaran-t/";

const codechef = document.getElementById("codechef");
codechef.value = "https://codechef.com/janeswaran-t/";

const hackerrank = document.getElementById("hackerrank");
hackerrank.value = "https://hackerrank.com/janeswaran-t/";

const collegeDuration = document.getElementById("collegeDuration");
collegeDuration.value = "2019-2023";

const collegeDegree = document.getElementById("collegeDegree");
collegeDegree.value = "B.Tech IT";

const collegeName = document.getElementById("collegeName");
collegeName.value = "Panimalar Engineering College"

const collegeGrade = document.getElementById("collegeGrade");
collegeGrade.value = 9.8;

const twelthDuration = document.getElementById("12thDuration");
twelthDuration.value = "2018-2019";

const twelthBoard = document.getElementById("12thBoard");
twelthBoard.value = "CBSE";

const twelthName = document.getElementById("12thName");
twelthName.value = "Vivekananda Vidhyalaya Higher Secondary School"

const twelthGrade = document.getElementById("12thGrade");
twelthGrade.value = "98%";

const tenthDuration = document.getElementById("10thDuration");
tenthDuration.value = "2016-2017";

const tenthBoard = document.getElementById("10thBoard");
tenthBoard.value = "CBSE";

const tenthName = document.getElementById("10thName");
tenthName.value = "Vivekananda Vidhyalaya Higher Secondary School"

const tenthGrade = document.getElementById("10thGrade");
tenthGrade.value = "10.0";

const exp1 = document.getElementById("exp1");
exp1.value = "Full Stack Developer";

const exp1des = document.getElementById("exp1des");
exp1des.value = "Worked as a Full Stack Developer in Cognizant"

const exp1dura = document.getElementById("exp1dura");
exp1dura.value = "2023-2025";

const exp2 = document.getElementById("exp2");
exp2.value = "Java Developer";

const exp2des = document.getElementById("exp2des");
exp2des.value = "Worked as a Java Developer in IBM"

const exp2dura = document.getElementById("exp2dura");
exp2dura.value = "2025-Present";

const proj1 = document.getElementById("proj1");
proj1.value = "Online Resume Builder";

const proj1des = document.getElementById("proj1des");
proj1des.value = "An Online Resume Builder Web App which is used for quick Resume creation";

const proj2 = document.getElementById("proj2");
proj2.value = "Weather App";

const proj2des = document.getElementById("proj2des");
proj2des.value = "A Weather forecasting Web App which is used for forecasting weather";

const proj3 = document.getElementById("proj3");
proj3.value = "Instagram Clone";

const proj3des = document.getElementById("proj3des");
proj3des.value = "An Instagram Clone App which is used for messaging";

const proj4 = document.getElementById("proj4");
proj4.value = "Image processing app";

const proj4des = document.getElementById("proj4des");
proj4des.value = "An image processing app which uses Machine learning technique for processing";

const proglang = document.getElementById("prog-lang");
proglang.value = "Java, Python, C, C#";

const webtech = document.getElementById("web-tech");
webtech.value = "HTML, CSS, JavaScript, ReactJS";

const dblang = document.getElementById("db-lang");
dblang.value = "MySQL, MongoDB";

const misc = document.getElementById("misc");
misc.value = "PHP, Flutter, Dart";

const achievement1 = document.getElementById("achievement-1");
achievement1.value = "Winner - Hackathon";

const achievement1des = document.getElementById("achievement-1-des");
achievement1des.value = "Secured 1st place in the Hackathon conducted by IIT Madras";

const achievement2 = document.getElementById("achievement-2");
achievement2.value = "AIR 1 - JEE";

const achievement2des = document.getElementById("achievement-2-des");
achievement2des.value = "Secured All India Rank 1 in JEE Mains Entrance Examination";

const achievement3 = document.getElementById("achievement-3");
achievement3.value = "Winner - Coding Contest";

const achievement3des = document.getElementById("achievement-3-des");
achievement3des.value = "Secured 1st place in the Coding Contest conducted by SSN College of Engineering";

const achievement4 = document.getElementById("achievement-4");
achievement4.value = "AIR 1 - UPSC";

const achievement4des = document.getElementById("achievement-4-des");
achievement4des.value = "Secured All India Rank 1 in Union Public Service Commission Examination";

const course1 = document.getElementById("course1");
course1.value = "Google IT Support (Specialization)";

const course2 = document.getElementById("course2");
course2.value = "Full Stack Development using JavaScript - University of Michigan";

const course3 = document.getElementById("course3");
course3.value = "MERN Stack Development: Zero to Mastery - Angela Yu";

const course4 = document.getElementById("course4");
course4.value = "Machine Learning: Basic to Advanced - Harvard University";

const hobby1 = document.getElementById("hobby1");
hobby1.value = "Coding";

const hobby2 = document.getElementById("hobby2");
hobby2.value = "Gaming";

const hobby3 = document.getElementById("hobby3");
hobby3.value = "Reading books";

const hobby4 = document.getElementById("hobby4");
hobby4.value = "Gardening";

}