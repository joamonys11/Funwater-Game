#pragma strict


function Start () {

}

function Update () {

}







var main : Texture;
var main1 : GUIStyle;

function OnGUI()
{



if(GUI.Button(Rect(800,600,150,100),main,main1))
{
this.GetComponent(AudioSource).Play();
Application.LoadLevel("menu");
}

}