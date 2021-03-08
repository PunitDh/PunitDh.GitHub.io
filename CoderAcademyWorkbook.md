# Hello World!

## Question 1
    As far back as World War II when computers were big, clunky machines that didn't do much more than solve really difficult mathematics problems. Even with the best computers of the day, 

    The US Department had created ARPA 
    connecting scientists and engineers ARPANET
    Started as a messaging service

    Packet switching 

    In 1989 Tim Berners-Lee & Robert Cailliau
    HyperText

    DotCom Bubble 2000

    Geocities revolution
    
    MySpace and Friendster

    Broadband surpasses Dial-Up

    Facebook 

    Data Centers

    Algorithmic Filtering & AI & Machine learning



## Question 2
 - ### Packets
        SDha
 - ### IP addresses (IPv4 and IPv6)
        wd
 - ### Routers and routing
        Shda
 - ### Domains and DNS
        dwa

## Question 3
 - ### TCP
        ef
 - ### HTTP and HTTPS
        eer
 - ### Web browsers (requests, rendering and developer tools)
        ere

## Question 4
	Three data structures in Ruby are as follows: Arrays, Binary Trees and Hashes.
	

## Question 5

## Question 6

## Question 7

## Question 8

## Question 9

## Question 10

## Question 11

## Question 12

## Question 13

## Question 14

## Question 15

## Question 16
Please run the following code in an HTML Editor or click on the [link here](https://punitdh.github.io/skillscore.htm) to see the following code in action. 

``` HTML
<!DOCTYPE html>
<HTML lang="en">
<HEAD>
	<META name ="viewport" content="width=device-width, initial-scale=1.0" />
	<META charset=UTF-8>
<TITLE>Skills Score</TITLE>

<style>
	/* Tags */
	H3, H4			{ color: red; }
	H4		{ font-size: 0.8em; }
	textarea 	{ color: blue;	resize: none; }
	
	/* Classes */
	.s { color: teal; }
	.skillscore	{ width: 30%; }

	/* IDs */
	#skscore { color: brown; }

	/* Media Breakpoints */
	@media screen and (max-width: 600px)
	{
		H3 { color: blue; }
	}

	* {	font-family: sans-serif; text-align: center;	}
</style>

</HEAD>
<BODY>
<form id="skillscore" name="skills"><BR><BR><BR><BR>
	<H3><label for="s">Please select your skills:</label></H3><H4>(Press Ctrl + Click to select multiple skills)</H4><BR>
	<select class="skillscore" multiple id="s" name="s" style="height:140px;">
		<option class="s" value=1>Python</option>
		<option class="s" value=2>Ruby</option>
		<option class="s" value=4>Bash</option>
		<option class="s" value=8>Git</option>
		<option class="s" value=16>HTML</option>
		<option class="s" value=32>TDD</option>
		<option class="s" value=64>CSS</option>
		<option class="s" value=128>JavaScript</option>
	</select>
	<BR><BR>
	<input type="button" class="skillscore" value="Find My Skill Scores!" onClick="this.form.skscore.value = CodingSkillScore(this.form.s);"><BR>
	<input type="text" class="skillscore" id="skscore" name="skscore"><BR><BR>
	<input type="button" class="skillscore" value="Recommend Me Skills To Learn!" onClick="this.form.skrecommend.value = CodingSkillRecommend(this.form.s);" ><BR>
	<textarea name="skrecommend" class="skillscore" style="height:140px;"></textarea>
</form>

<script>
function CodingSkillScore(skill)
{
	var skill_score = 0;
	for (i = 0; i < skill.length; i++)
	{
		if (skill[i].selected)	skill_score += parseInt(skill[i].value);
	}
	return skill_score;
}

function CodingSkillRecommend(skill)
{
	var skills_to_learn_init	= "You should learn these following skills:\n";
	var skills_to_learn			= skills_to_learn_init;
	var skills_to_learn_score	= 0;
	var final_score				= 0;

	for (var i = 0; i < skill.length; i++)
	{	
		if (!skill[i].selected)
		{
			skills_to_learn += skill[i].innerHTML;
			skills_to_learn += (i < skill.length-1) ? ", " : ".";
		}
	}

	if (skills_to_learn == skills_to_learn_init) skills_to_learn += "<none>";

	skills_to_learn += "\n\nIt will boost your Skills Score by:\n"
	
	for (var i = 0; i < skill.length; i++)
	{
		if (!skill[i].selected)	skills_to_learn_score += parseInt(skill[i].value);
	}
	
	if (skills_to_learn_score > 0)
	{
		skills_to_learn += skills_to_learn_score;
		skills_to_learn += "\n\nYour final score will be:\n"
	}
	else 
	{
		skills_to_learn += "<none>";
		skills_to_learn += "\n\nYour final score will is:\n"
	}

	final_score = parseInt(skills_to_learn_score) + CodingSkillScore(skill);

	skills_to_learn += final_score;
	return skills_to_learn;
}
</script>

</BODY>
</HTML>
```