#pragma strict

public var scoresum : int ;
function Start () {

scoresum = controler.score;
GameObject.Find("score").guiText.text = "SCORE :  "+controler.score;
}

function Update () {

}






var resume : Texture;
var main : Texture;
var resume1 : GUIStyle;
var main1 : GUIStyle;

function OnGUI()
{

if(GUI.Button(Rect(1,400,200,130),resume,resume1 ))
{
this.GetComponent(AudioSource).Play();
Application.LoadLevel("game");


}


if(GUI.Button(Rect(2,560,150,100),main,main1))
{
this.GetComponent(AudioSource).Play();
Application.LoadLevel("menu");

}

}