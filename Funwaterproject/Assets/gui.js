#pragma strict

function Start () {

}

function Update () {

}






var start : Texture;
var how : Texture;
var start1 : GUIStyle;
var how1 : GUIStyle;
var credit :Texture;
var credit1 :GUIStyle;
var exit : Texture;
var exit1 : GUIStyle;
function OnGUI()
{

if(GUI.Button(Rect(1,200,400,220),start,start1 ))
{
Application.LoadLevel("game");


this.GetComponent(AudioSource).Play();
}


if(GUI.Button(Rect(2,350,300,170),how,how1))
{
Application.LoadLevel("how");
this.GetComponent(AudioSource).Play();
}

if(GUI.Button(Rect(45,450,150,150),credit,credit1))
{
Application.LoadLevel("credit");
this.GetComponent(AudioSource).Play();
}

if(GUI.Button(Rect(50,590,150,100),exit,exit1))
{

Application.Quit();
this.GetComponent(AudioSource).Play();
}

}