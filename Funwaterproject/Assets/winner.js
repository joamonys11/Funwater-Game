#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerEnter(other:Collider)
{
	if(other.collider.gameObject.name == "attack_0")
	{
	
	Application.LoadLevel("win");
		print("check");
}

}