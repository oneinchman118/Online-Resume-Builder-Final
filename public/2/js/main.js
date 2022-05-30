document.querySelector('#page').contentEditable = true;

defaultTemplateVars = [ "fontDroid" , "caseNormal" , "titleRuled" , "ruleAbove" , "imageShow" , "rollShow" , "course1" , "tableShow" , "edyearFirst" , "experience1" , "projects1" ]

$('.toggle-option').click(function(){
	toggleType = $(this).attr('data-toggle');
	toggleValue = $(this).attr('id');
	if(!$(this).hasClass('multi-select'))
	{
		if(!$(this).hasClass('selected'))
		{
			$('.toggle-option',$(this).parent()).removeClass('selected');
			$(this).addClass('selected');
			changeTemplate(toggleType,toggleValue);
		}
	}
	else
	{
		if($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else
			$(this).addClass('selected');
		changeTemplate(toggleType,toggleValue);
	}
});

$('input[name="sectionToggle"]').change(function(){
	toggleSection($(this).val(),$(this).is(':checked'));
});


function template(value)
{
	if(value=='default')
	{
		$('#defaultTemplateBtn').removeClass('btn-default').addClass('btn-danger');
		$('#customTemplateBtn').removeClass('btn-danger').addClass('btn-default');
		$('#customTemplateOptions').hide();
		for(i=0;i<defaultTemplateVars.length;i++)
			$('#'+defaultTemplateVars[i]).click();
	}
	else
	{
		$('#customTemplateBtn').removeClass('btn-default').addClass('btn-danger');
		$('#defaultTemplateBtn').removeClass('btn-danger').addClass('btn-default');
		$('#customTemplateOptions').show();
	}
}

function toggleSection(sectionName,toggleState)
{
	if(toggleState==true)
		$('input[value="'+sectionName+'"]').attr('checked','true');
	else
		$('input[value="'+sectionName+'"]').removeAttr('checked');
	$('#'+sectionName).toggle();
}

function changeTemplate(toggleType,toggleValue)
{
	switch(toggleType)
	{
		case 'minor':
			if(toggleValue=='minorShow')
			{
				$('#contentMinor').show();
				$('#image_box').css('margin-top','35px');
			}
			else
			{
				$('#contentMinor').hide();
				$('#image_box').css('margin-top','25px');
			}
			break;
		case 'contact':
			if(toggleValue=='contact3')
			{
				$('#contactLink1').hide();
				$('#contactLink2').hide();
				$('#contactlink5').hide();
				$('#contactlink6').hide();
			}
			else if(toggleValue=='contact4')
			{
				$('#contactLink1').show();
				$('#contactLink2').hide();
				$('#contactlink5').show();
				$('#contactlink6').show();
			}
			else
			{
				$('#contactLink1').show();
				$('#contactLink2').show();
			}
			break;
		case 'margin':
			if(toggleValue=='margin1')
				$('#page').css('padding','0.2cm 1cm 1cm 1cm');
			else if(toggleValue=='margin2')
				$('#page').css('padding','0.2cm 1.1cm 1cm 1.1cm');
			else if(toggleValue=='margin3')
				$('#page').css('padding','0.2cm 1.2cm 1cm 1.2cm');
			else if(toggleValue=='margin4')
				$('#page').css('padding','0.2cm 1.3cm 1cm 1.3cm');
			else if(toggleValue=='margin5')
				$('#page').css('padding','0.2cm 1.4cm 1cm 1.4cm');
			else if(toggleValue=='margin6')
				$('#page').css('padding','0.2cm 1.5cm 1cm 1.5cm');
			break;
		case 'line':
			if(toggleValue=='line1')
				$('#page').css('line-height','1.1em');
			else if(toggleValue=='line2')
				$('#page').css('line-height','1.2em');
			else if(toggleValue=='line3')
				$('#page').css('line-height','1.3em');
			else if(toggleValue=='line4')
				$('#page').css('line-height','1.4em');
			else if(toggleValue=='line5')
				$('#page').css('line-height','1.5em');
			else if(toggleValue=='line6')
				$('#page').css('line-height','1.6em');
			break;
		case 'column':
			if(toggleValue=='column1')
				$('.table tbody tr td:nth-child(1)').toggleClass('text-center');
			else if(toggleValue=='column2')
				$('.table tbody tr td:nth-child(2)').toggleClass('text-center');
			else if(toggleValue=='column3')
				$('.table tbody tr td:nth-child(3)').toggleClass('text-center');
			else if(toggleValue=='column4')
				$('.table tbody tr td:nth-child(4)').toggleClass('text-center');
			break;

		case 'font':
			if(toggleValue=='fontVerdanaSans')
				$('#page').removeClass('droid').removeClass('roboto').removeClass('verdana-serif').addClass('verdana-sans');
			else if(toggleValue=='fontVerdanaSerif')
				$('#page').removeClass('verdana-sans').removeClass('droid').removeClass('roboto').addClass('verdana-serif');
			else if(toggleValue=='fontRoboto')
				$('#page').removeClass('verdana-serif').removeClass('verdana-sans').removeClass('droid').addClass('roboto');
			else if(toggleValue=='fontDroid')
				$('#page').removeClass('roboto').removeClass('verdana-serif').removeClass('verdana-sans').addClass('droid');
			break;
		case 'case':
			if(toggleValue=='caseNormal')
				$('.section-title').removeClass('uppercase');
			else
				$('.section-title').addClass('uppercase');
			break;
		case 'title':
			if(toggleValue=='titleRuled')
			{
				$('.section-title').removeClass('shaded');
				$('.section-title').addClass('ruled');
			}
			else
			{
				$('.section-title').removeClass('ruled');
				$('.section-title').addClass('shaded');
			}
			break;
		case 'rule':
			if(toggleValue=='ruleAbove')
			{
				$('.section-title').removeClass('rule-below');
				$('.section-title').addClass('rule-above');
			}
			else
			{
				$('.section-title').removeClass('rule-above');
				$('.section-title').addClass('rule-below');
			}
			break;

		case 'image':
			if(toggleValue=='imageShow')
			{
				$('#image_box').show();
				$('#info').css('margin-left','0px');
			}
			else
			{
				$('#image_box').hide();
				$('#info').css('margin-left','20px');
			}
			break;
		case 'roll':
			if(toggleValue=='rollShow')
			{
				$('#contentRoll').show();
				$('#info').css('margin-top','0px');
			}
			else
			{
				$('#contentRoll').hide();
				$('#info').css('margin-top','10px');
			}
			break;
		case 'course':
			if(toggleValue=='course1')
			{
				$('#contentBranch').hide();
				$('#contentCourse').text('B.Tech - '+$('#contentBranch').text());
			}
			else
			{
				$('#contentBranch').show();
				$('#contentCourse').text('B.Tech undergraduate');
			}
			break;
		case 'table':
			if(toggleValue=='tableShow')
			{
				$('#educationTable').removeClass('borderless');
				$('#educationTable').addClass('customBordered');
			}
			else
			{
				$('#educationTable').removeClass('customBordered');
				$('#educationTable').addClass('borderless');
			}
			break;
		case 'edyear':
			if(toggleValue=='edyearFirst')
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(0).before($(this).find("td").eq(3));
				});
				var temp = document.getElementById('column4').className;
				document.getElementById('column4').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column1').className;
				document.getElementById('column1').className = temp;
			}
			else
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(3).after($(this).find("td").eq(0));
				});
				var temp = document.getElementById('column1').className;
				document.getElementById('column1').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column4').className;
				document.getElementById('column4').className = temp;
			}
			break;
		case 'experience':
			if(toggleValue=='experience1')
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','inline-block');
				$("#sectionExperience .time").addClass('right').removeClass('tab');
				$("#sectionExperience .link").show();
			}
			else
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','block');
				$("#sectionExperience .time").removeClass('right').addClass('tab');
				$("#sectionExperience .link").hide();
			}
			break;
		case 'projects':
			if(toggleValue=='projects1')
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','inline-block');
				$("#sectionProjects .time").addClass('right').removeClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").show();
			}
			else
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','block');
				$("#sectionProjects .time").removeClass('right').addClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").hide();
			}
			break;
	}
}

function insertList()
{
	node = getSelectionContainerElement();
	var ul = document.createElement("ul");
	ul.className = 'decimal';
	ul.style.marginLeft = '0px';
	ul.innerHTML = "<li>Sub-point 1 : Description</li><li>Sub-point 2 : Description</li>";
	insertAfter(node,ul);
}

function decreaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))-5;
}

function increaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))+5;
}

function changeListStyle(value)
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.className = value;

}


function getSelectionContainerElement()
{
	var range, sel, container;
	if (document.selection && document.selection.createRange)
	{
		range = document.selection.createRange();
		return range.parentElement();
	}
	else if (window.getSelection)
	{
		sel = window.getSelection();
		if (sel.getRangeAt)
		{
			if (sel.rangeCount > 0)
				range = sel.getRangeAt(0);
		}
		else
		{
			// Old WebKit selection object has no getRangeAt, so
			// create a range from other selection properties
			range = document.createRange();
			range.setStart(sel.anchorNode, sel.anchorOffset);
			range.setEnd(sel.focusNode, sel.focusOffset);
			// Handle the case when the selection was selected backwards (from the end to the start in the document)
			if (range.collapsed !== sel.isCollapsed)
			{
				range.setStart(sel.focusNode, sel.focusOffset);
				range.setEnd(sel.anchorNode, sel.anchorOffset);
			}
		}
		if (range)
		{
			container = range.commonAncestorContainer;
			// Check if the container is a text node and return its parent if so
			return container.nodeType === 3 ? container.parentNode : container;
		}
	}
}

function insertAfter(referenceNode,newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//Input Storage

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const number = localStorage.getItem("number");
const email = localStorage.getItem("email");

const github = localStorage.getItem("github");
const linkedin = localStorage.getItem("linkedin");
const codechef = localStorage.getItem("codechef");
const hackerrank = localStorage.getItem("hackerrank");

const collegeDuration = localStorage.getItem("collegeDuration");
const collegeDegree = localStorage.getItem("collegeDegree");
const collegeName = localStorage.getItem("collegeName");
const collegeGrade = localStorage.getItem("collegeGrade");

const s1Duration = localStorage.getItem("s1Duration");
const s1Name = localStorage.getItem("s1Name");
const s1Board = localStorage.getItem("s1Board");
const s1Grade = localStorage.getItem("s1Grade");

const s2Duration = localStorage.getItem("s2Duration");
const s2Name = localStorage.getItem("s2Name");
const s2Board = localStorage.getItem("s2Board");
const s2Grade = localStorage.getItem("s2Grade");

const exp1 = localStorage.getItem("exp1");
const exp1des = localStorage.getItem("exp1des");
const exp1dura = localStorage.getItem("exp1dura");
const exp2 = localStorage.getItem("exp2");
const exp2des = localStorage.getItem("exp2des");
const exp2dura = localStorage.getItem("exp2dura");

const proj1 = localStorage.getItem("proj1");
const proj1des = localStorage.getItem("proj1des");
const proj2 = localStorage.getItem("proj2");
const proj2des = localStorage.getItem("proj2des");
const proj3 = localStorage.getItem("proj3");
const proj3des = localStorage.getItem("proj3des");
const proj4 = localStorage.getItem("proj4");
const proj4des = localStorage.getItem("proj4des");

const proglang = localStorage.getItem("proglang");
const webtech = localStorage.getItem("webtech");
const dblang = localStorage.getItem("dblang");
const misc = localStorage.getItem("misc");

const achieve1 = localStorage.getItem("achieve1");
const achieve1des = localStorage.getItem("achieve1des");
const achieve2 = localStorage.getItem("achieve2");
const achieve2des = localStorage.getItem("achieve2des");
const achieve3 = localStorage.getItem("achieve3");
const achieve3des = localStorage.getItem("achieve3des");
const achieve4 = localStorage.getItem("achieve4");
const achieve4des = localStorage.getItem("achieve4des");

const course1 = localStorage.getItem("course1");
const course2 = localStorage.getItem("course2");
const course3 = localStorage.getItem("course3");
const course4 = localStorage.getItem("course4");

const hobby1 = localStorage.getItem("hobby1");
const hobby2 = localStorage.getItem("hobby2");
const hobby3 = localStorage.getItem("hobby3");
const hobby4 = localStorage.getItem("hobby4");

// alert(firstName+", "+lastName+", "+number+", "+email);

//Input Variables

const fName = document.querySelector(".first-name");
const lName = document.querySelector(".last-name");
const num1 = document.querySelector(".number");
const email1 = document.querySelector(".email");

const github1 = document.querySelector(".github");
const linkedin1 = document.querySelector(".linkedin");
const codechef1 = document.querySelector(".codechef");
const hackerrank1 = document.querySelector(".hackerrank");

const collegeDuration1 = document.querySelector(".college-duration");
const collegeDegree1 = document.querySelector(".college-degree");
const collegeName1 = document.querySelector(".college-name");
const collegeGrade1 = document.querySelector(".college-grade");

const s1Duration1 = document.querySelector(".s1-duration");
const s1Name1 = document.querySelector(".s1-name");
const s1Board1 = document.querySelector(".s1-board");
const s1Grade1 = document.querySelector(".s1-grade");

const s2Duration1 = document.querySelector(".s2-duration");
const s2Name1 = document.querySelector(".s2-name");
const s2Board1 = document.querySelector(".s2-board");
const s2Grade1 = document.querySelector(".s2-grade");

const exp11 = document.querySelector(".exp1");
const exp1des1 = document.querySelector(".exp1des");
const exp1dura1 = document.querySelector(".exp1dura");
const exp21 = document.querySelector(".exp2");
const exp2des1 = document.querySelector(".exp2des");
const exp2dura1 = document.querySelector(".exp2dura");

const proj11 = document.querySelector(".proj1");
const proj1des1 = document.querySelector(".proj1des");
const proj21 = document.querySelector(".proj2");
const proj2des1 = document.querySelector(".proj2des");
const proj31 = document.querySelector(".proj3");
const proj3des1 = document.querySelector(".proj3des");
const proj41 = document.querySelector(".proj4");
const proj4des1 = document.querySelector(".proj4des");


const proglang1 = document.querySelector(".proglang");
const webtech1 = document.querySelector(".webtech");
const dblang1 = document.querySelector(".dblang");
const misc1 = document.querySelector(".misc");

const achieve11 = document.querySelector(".achieve1");
const achieve1des1 = document.querySelector(".achieve1des");
const achieve21 = document.querySelector(".achieve2");
const achieve2des1 = document.querySelector(".achieve2des");
const achieve31 = document.querySelector(".achieve3");
const achieve3des1 = document.querySelector(".achieve3des");
const achieve41 = document.querySelector(".achieve4");
const achieve4des1 = document.querySelector(".achieve4des");

const course11 = document.querySelector(".course1")
const course21 = document.querySelector(".course2")
const course31 = document.querySelector(".course3")
const course41 = document.querySelector(".course4")

const hobby11 = document.querySelector(".hobby1")
const hobby21 = document.querySelector(".hobby2")
const hobby31 = document.querySelector(".hobby3")
const hobby41 = document.querySelector(".hobby4")

//Input Changes

fName.innerHTML = firstName;
lName.innerHTML = " "+lastName;
num1.innerHTML = number;
email1.innerHTML = email;

github1.innerHTML = github;
linkedin1.innerHTML = linkedin;
codechef1.innerHTML = codechef;
hackerrank1.innerHTML = hackerrank;

collegeDuration1.innerHTML = collegeDuration;
collegeDegree1.innerHTML = collegeDegree;
collegeName1.innerHTML = collegeName;
collegeGrade1.innerHTML = collegeGrade;

s1Duration1.innerHTML = s1Duration;
s1Name1.innerHTML = s1Name;
s1Board1.innerHTML = s1Board;
s1Grade1.innerHTML = s1Grade;

s2Duration1.innerHTML = s2Duration;
s2Name1.innerHTML = s2Name;
s2Board1.innerHTML = s2Board;
s2Grade1.innerHTML = s2Grade;

exp11.innerHTML = exp1;
exp1des1.innerHTML = exp1des;
exp1dura1.innerHTML = exp1dura;
exp21.innerHTML = exp2;
exp2des1.innerHTML = exp2des;
exp2dura1.innerHTML = exp2dura;

proj11.innerHTML =  proj1;
proj1des1.innerHTML = proj1des;
proj21.innerHTML =  proj2;
proj2des1.innerHTML = proj2des;
proj31.innerHTML =  proj3;
proj3des1.innerHTML = proj3des;
proj41.innerHTML =  proj4;
proj4des1.innerHTML = proj4des;

proglang1.innerHTML = proglang;
webtech1.innerHTML = webtech;
dblang1.innerHTML = dblang;
misc1.innerHTML = misc;

achieve11.innerHTML = achieve1;
achieve1des1.innerHTML = achieve1des;
achieve21.innerHTML = achieve2;
achieve2des1.innerHTML = achieve2des;
achieve31.innerHTML = achieve3;
achieve3des1.innerHTML = achieve3des;
achieve41.innerHTML = achieve4;
achieve4des1.innerHTML = achieve4des;

course11.innerHTML = course1;
course21.innerHTML = course2;
course31.innerHTML = course3;
course41.innerHTML = course4;

hobby11.innerHTML = hobby1;
hobby21.innerHTML = hobby2;
hobby31.innerHTML = hobby3;
hobby41.innerHTML = hobby4;