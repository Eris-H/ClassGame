//strength
var STR = 1;
//speed
var SPD = 10;
//resistance
var RES = 1;
//dexterity
var DEX = 1;
//charisma
var CHR = 1;
//stamina
var STM = 2;
//intelligence
var INT = 1;
//focus
var FCS = 1;
//vitality
var VIT = 1;
//magic tolerance
var MTL = 1;
//magic capacity
var MCP = 1;
//magic recovery
var MCR = 1;
//points remaining
var PointsLeft = 16;
var MaxPoints = 16;

//primary skill
//empty "" so that it registers the var as a string when nothing is inputted, so .length actually checks that the length is 0
var PrimSkill = "";
//secondary skill
//empty "" so that it registers the var as a string when nothing is inputted, so .length actually checks that the length is 0
var SecSkill = "";

function CreationGuideLoad()
{
    window.open("Guide.html");
}

function WorldGuideLoad()
{
    window.open("WorldGuide.html");
}

function HomeLoad()
{
    location.replace("Home.html");
}

function CharacterCreatorLoad()
{
    location.replace("Creator.html");
}


//adds to the variable and lower it
//all of the ups and downs also show the current variable on screen
//a lot of copy pasting the same lines, followed by here and there changes
function MCRup()
{
    //the magic stats and vitality are the only ones without a maximum
    if (PointsLeft > 0)
    {
        MCR +=1;
        document.getElementById("MCR").innerHTML = MCR;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function MCPup()
{
    //the magic stats and vitality are the only ones without a maximum
    if (PointsLeft > 0)
    {
        MCP +=1;
        document.getElementById("MCP").innerHTML = MCP;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function MTLup()
{
    //the magic stats and vitality are the only ones without a maximum
    if (PointsLeft > 0)
    {
        MTL +=1;
        document.getElementById("MTL").innerHTML = MTL;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function VITup()
{
    //the magic stats and vitality are the only ones without a maximum
    if (VIT != 20 && PointsLeft > 0)
    {
        VIT +=1;
        document.getElementById("VIT").innerHTML = VIT;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function FCSup()
{
    //as long as the user has points remaining or has not reached the max, add value
    if (FCS != 20 && PointsLeft > 0)
    {
        FCS +=1;
        document.getElementById("FCS").innerHTML = FCS;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function INTup()
{
    //as long as the user has points remaining or has not reached the max, add value
    if (INT != 20 && PointsLeft > 0)
    {
        INT +=1;
        document.getElementById("INT").innerHTML = INT;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function STMup()
{
    //as long as the user has points remaining or has not reached the max, add value
    if (STM != 20 && PointsLeft > 0)
    {
        STM +=1;
        document.getElementById("STM").innerHTML = STM;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function CHRup()
{
    //as long as the user has points remaining or has not reached the max, add value
    if (CHR != 20 && PointsLeft > 0)
    {
        CHR +=1;
        document.getElementById("CHR").innerHTML = CHR;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function DEXup()
{
    //as long as the user has points remaining or has not reached the max, add value
    if (DEX != 20 && PointsLeft > 0)
    {
        DEX +=1;
        document.getElementById("DEX").innerHTML = DEX;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function RESup()
{
    if (RES != 20 && PointsLeft > 0)
    {
        //as long as the user has points remaining or has not reached the max, add value
        RES +=1;
        document.getElementById("RES").innerHTML = RES;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function SPDup()
{
    if (SPD != 20 && PointsLeft > 0)
    {
        //as long as the user has points remaining or has not reached the max, add value
        SPD +=1;
        document.getElementById("SPD").innerHTML = SPD;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function STRup()
{
    if (STR != 20 && PointsLeft > 0)
    {
        //as long as the user has points remaining or has not reached the max, add value
        STR +=1;
        document.getElementById("STR").innerHTML = STR;
        PointsLeft -=1;
        document.getElementById("Points").innerHTML = PointsLeft;
        if (STR == 20 || PointsLeft < 0)
        {
            document.getElementById("STR").disabled = true;
        }
    }
}
function MCRdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (MCR != 1 && PointsLeft < MaxPoints)
    {
        MCR -=1;
        document.getElementById("MCR").innerHTML = MCR;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function MCPdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (MCP != 1 && PointsLeft < MaxPoints)
    {
        MCP -=1;
        document.getElementById("MCP").innerHTML = MCP;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function MTLdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (MTL != 1 && PointsLeft < MaxPoints)
    {
        MTL -=1;
        document.getElementById("MTL").innerHTML = MTL;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function VITdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (VIT != 1 && PointsLeft < MaxPoints)
    {
        VIT -=1;
        document.getElementById("VIT").innerHTML = VIT;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function FCSdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (FCS != 1 && PointsLeft < MaxPoints)
    {
        FCS -=1;
        document.getElementById("FCS").innerHTML = FCS;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function INTdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (INT != 1 && PointsLeft < MaxPoints)
    {
        INT -=1;
        document.getElementById("INT").innerHTML = INT;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function STMdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (STM != 1 && PointsLeft < MaxPoints)
    {
        STM -=1;
        document.getElementById("STM").innerHTML = STM;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function CHRdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (CHR != 1 && PointsLeft < MaxPoints)
    {
        CHR -=1;
        document.getElementById("CHR").innerHTML = CHR;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function DEXdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (DEX != 1 && PointsLeft < MaxPoints)
    {
        DEX -=1;
        document.getElementById("DEX").innerHTML = DEX;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function RESdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (RES != 1 && PointsLeft < MaxPoints)
    {
        RES -=1;
        document.getElementById("RES").innerHTML = RES;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function SPDdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (SPD != 1 && PointsLeft < MaxPoints)
    {
        SPD -=1;
        document.getElementById("SPD").innerHTML = SPD;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}
function STRdown()
{
    //as long as the user is above the minimum, remove value. also ensures player doesn't gain more points than the maximum for their level. current level is 1
    if (STR != 1 && PointsLeft < MaxPoints)
    {
        STR -=1;
        document.getElementById("STR").innerHTML = STR;
        PointsLeft +=1;
        document.getElementById("Points").innerHTML = PointsLeft;
    }
}

//the buttons for the classes tell you what the class does, and creates the subclass options, which also tell you what they do. both add to your stats
//a lot of copy pasting the same lines, followed by here and there changes, AGAIN
function KnightSubs(){
    //put in html    <span id="subclasses"></span> 
    //give user details
    document.getElementById("ClassDeets").innerHTML = "+1 strength <br> +2 resistance <br> Armor Trained: can wear full plate armor with no drawbacks <br>";
    //create buttons
    document.getElementById("subclasses").innerHTML = 
    '<button class = "subclass" id = "RK" onclick="RKsub()"> Royal Knight </button> <button class = "subclass" id = "SK" onclick="SKsub()"> Standard Knight </button> <button class = "subclass" id = "VK" onclick="VKsub()"> Village Knight </button> <br>';
    //actually do the stats
    STR += 1;
    RES += 2;
    document.getElementById("STR").innerHTML = STR;
    document.getElementById("RES").innerHTML = STR;
    
    //disable other classes
    document.getElementById("Martial").disabled = true;
    document.getElementById("Mage").disabled = true;
    document.getElementById("Healer").disabled = true;
    PrimSkill = "Armor Trained";
}
function RKsub()
{
    //disable other subclasses
    document.getElementById("SK").disabled = true;
    document.getElementById("VK").disabled = true;
    //do the stats
    FCS += 1;
    VIT += 1;
    document.getElementById("FCS").innerHTML = STR;
    document.getElementById("VIT").innerHTML = VIT;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+1 focus <br> +1 vitality <br> Royal Efficiency: after defeating an enemy, restore 1 action <br>"
    SecSkill = "Royal Efficiency";

}
function SKsub()
{
    //disable other subclasses
    document.getElementById("RK").disabled = true;
    document.getElementById("VK").disabled = true;
    //do the stats
    STM += 2;
    document.getElementById("STM").innerHTML = STM;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+2 stamina <br> Horse Trained: you know how to ride mounts and gain +3 strength and dexterity when on one <br>"
    SecSkill = "Horse Trained";

}
function VKsub()
{
    //disable other subclasses
    document.getElementById("SK").disabled = true;
    document.getElementById("RK").disabled = true;
    //do the stats
    CHR += 2;
    document.getElementById("CHR").innerHTML = CHR;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+2 charm <br> Friendly Face: enemies with less intelligence than your charm will surrender when below 5 vitality <br>"
    SecSkill = "Friendly Face";

}

function MartialSubs(){
    //put in html    <span id="subclasses"></span> 
        //give user details
        document.getElementById("ClassDeets").innerHTML = "+1 strength <br> +2 tolerance  <br> MaMAr Practicioner: gain access to 1 Magical Martial Arts form <br>";
        //create buttons
        document.getElementById("subclasses").innerHTML = 
        '<button class = "subclass" id = "MS" onclick="MSsub()"> Striker </button> <button class = "subclass" id = "MG" onclick="MGsub()"> Grappler </button> <button class = "subclass" id = "MT" onclick="MTsub()"> Tanker </button> <br>';
        //actually do the stats
        STR += 1;
        MTL += 2;
        document.getElementById("STR").innerHTML = STR;
        document.getElementById("MTL").innerHTML = MTL;
        
        //disable other classes
        document.getElementById("Knight").disabled = true;
        document.getElementById("Mage").disabled = true;
        document.getElementById("Healer").disabled = true;
        PrimSkill = "MaMAr Practicioner";

}
function MSsub()
{
    //disable other subclasses
    document.getElementById("MG").disabled = true;
    document.getElementById("MT").disabled = true;
    //do the stats
    STR += 2;
    document.getElementById("STR").innerHTML = STR;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+2 strength <br> Full Force: the bonus di(c)e from offense boosts are 1d6 instead of 1d4 <br>"
    SecSkill = "Full Force";

}
function MGsub()
{
    //disable other subclasses
    document.getElementById("MS").disabled = true;
    document.getElementById("MT").disabled = true;
    //do the stats
    DEX += 1;
    document.getElementById("DEX").innerHTML = DEX;
    STM += 1;
    document.getElementById("STM").innerHTML = STM;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+1 dexterity <br> +1 stamina <br> Grand Slam: if grappling opponent, you can use an action to slam them into the ground, ending the grapple and dealing damage = targets resistance + users strength. This knocks them down <br>"
    SecSkill = "Grand Slam";

}
function MTsub()
{
    //disable other subclasses
    document.getElementById("MG").disabled = true;
    document.getElementById("MS").disabled = true;
    //do the stats
    RES += 1;
    document.getElementById("RES").innerHTML = RES;
    VIT += 1;
    document.getElementById("VIT").innerHTML = VIT;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+1 resistance <br> +1 vitality <br>  Iron Skin: critical hits against you only ignore armor, not resistance  <br>"
    SecSkill = "Iron Skin";

}

function MageSubs(){
    //put in html    <span id="subclasses"></span> 
    //give user details
    document.getElementById("ClassDeets").innerHTML = "+1 magic tolerance <br> +1 magic capcity <br> +1 magic recovery <br> Catalyst Expert: can use multiple catalysts in one circuit <br>";
    //create buttons
    document.getElementById("subclasses").innerHTML = 
    '<button class = "subclass" id = "RK" onclick="MPsub()"> Pure Mage </button> <button class = "subclass" id = "SK" onclick="MCsub()"> Combat Mage </button> <button class = "subclass" id = "VK" onclick="MMsub()"> Martial Mage </button> <br>';
    //actually do the stats
    MTL += 1;
    MCP += 2;
    MCR += 2;
    document.getElementById("MTL").innerHTML = MTL;
    document.getElementById("MCP").innerHTML = MCP;
    document.getElementById("MCR").innerHTML = MCR;
    //disable other classes
    document.getElementById("Martial").disabled = true;
    document.getElementById("Knight").disabled = true;
    document.getElementById("Healer").disabled = true;
    PrimSkill = "Catalyst Expert";

}
function MPsub()
{
    //disable other subclasses
    document.getElementById("SK").disabled = true;
    document.getElementById("VK").disabled = true;
    //do the stats
    MCP += 1;
    MTL += 1;
    document.getElementById("MCP").innerHTML = MCP;
    document.getElementById("MTL").innerHTML = MTL;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+1 magic capacity <br> +1 magic tolerance <br> Magic Tuned: can feel when magic is being used nearby, and tell the direction <br>"
    SecSkill = "Magic Tuned";

}
function MCsub()
{
    //disable other subclasses
    document.getElementById("RK").disabled = true;
    document.getElementById("VK").disabled = true;
    //do the stats
    FCS += 1;
    STR += 1;
    document.getElementById("FCS").innerHTML = FCS;
    document.getElementById("STR").innerHTML = STR;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+1 focus <br> +1 strength <br> Multitasker: casts that only have 1 node in the circuit doesnt cost an action <br>"
    SecSkill = "Multitasker";

}
function MMsub()
{
    //disable other subclasses
    document.getElementById("SK").disabled = true;
    document.getElementById("RK").disabled = true;
    //do the stats
    STR += 2;
    document.getElementById("STR").innerHTML = STR;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+2 strength <br> Internal Control: once per encounter, if hit with an attack that would be fatal, roll a d20 at 15 or above to survive at 1 vitality instead <br>"
    SecSkill = "Internal Control";

}

function HealerSubs(){
    //put in html    <span id="subclasses"></span> 
        //give user details
        document.getElementById("ClassDeets").innerHTML = "+1 magic capacity <br> +1 charm  <br> +1 vitality <br> Supporter: Can use healing items on other people without an action <br>";
        //create buttons
        document.getElementById("subclasses").innerHTML = 
        '<button class = "subclass" id = "RK" onclick="HDsub()"> Doctor </button> <button class = "subclass" id = "SK" onclick="HSsub()"> Sacrificed </button> <button class = "subclass" id = "VK" onclick="HFsub()"> Farmer </button> <br>';
        //actually do the stats
        MCP += 1;
        CHR += 1;
        VIT += 1;
        document.getElementById("MCP").innerHTML = MCP;
        document.getElementById("CHR").innerHTML = CHR;
        document.getElementById("VIT").innerHTML = VIT;
        
        //disable other classes
        document.getElementById("Knight").disabled = true;
        document.getElementById("Mage").disabled = true;
        document.getElementById("Martial").disabled = true;
        PrimSkill = "Supporter";

}
function HDsub()
{
    //disable other subclasses
    document.getElementById("SK").disabled = true;
    document.getElementById("VK").disabled = true;
    //do the stats
    INT += 1;
    MTL += 1;
    document.getElementById("INT").innerHTML = INT;
    document.getElementById("MTL").innerHTML = MTL;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+1 intelligence <br> +1 magic tolerance <br> Medical Specialist: +1d6 when using healing items <br>"
    SecSkill = "Medical Specialist";

}
function HSsub()
{
    //disable other subclasses
    document.getElementById("RK").disabled = true;
    document.getElementById("VK").disabled = true;
    //do the stats
    VIT += 1;
    document.getElementById("VIT").innerHTML = VIT;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+2 vitality <br> Inverse Sacrifice: can convert 9 Mu into 1 point of vitality for themself <br>"
    SecSkill = "Inverse Sacrifice";

}
function HFsub()
{
    //disable other subclasses
    document.getElementById("SK").disabled = true;
    document.getElementById("RK").disabled = true;
    //do the stats
    STM += 1;
    document.getElementById("STM").innerHTML = STM;
    RES += 1;
    document.getElementById("RES").innerHTML = RES;
    //give the details
    document.getElementById("subclassDeets").innerHTML = "+1 resistance <br> +1 stamina <br> Botony: can create healing items from plants <br>"
    SecSkill = "Botony";

}

//empty "" so that it registers the var as a string when nothing is inputted, so .length actually checks that the length is 0
var Named = "";
function Names()
{
    //accepts the name input
    var tempName = document.getElementById("Name").value;
    Named = tempName;
}

function CreationFinished()
{
    //check the user input a name and picked a class and subclass
    if (Named.length > 0 && PrimSkill.length > 0 && SecSkill.length > 0)
    {
        document.getElementById("FinalC").innerHTML = "name: " + Named + "<br>class skill: " + PrimSkill + "<br>subclass skill: " + SecSkill +"<br> strength: " + STR + "<br> speed: " + SPD + "<br> resistance: " + RES + "<br> dexterity: " + DEX + "<br> charm: " + CHR +"<br> stamina: " + STM +"<br> intelligence: " +INT + "<br> focus: " + FCS + "<br> vitality: " + VIT + "<br> magic tolerance: " + MTL + "<br> magic capacity: " + MCP + " <br> magic recovery: "+ MCR  ;
    }
    else
    {
        //tells the user which steps they missed
        if (Named.length == 0)
        {
            alert("Please Enter A Name");
        }
        if (PrimSkill.length == 0)
        {
            alert("Please Select A Class");
        }
        else if (SecSkill.length == 0)
        {
            alert("Please Select A Subclass");
        }
    }
}
