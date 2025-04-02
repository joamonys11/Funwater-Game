#pragma strict
function Start () {
transform.position.z = Random.Range(20,-20);
}

function Update () {

}


/*function OnCollisionEnter(collisionX : Collision)
{
if(collisionX.gameObject.name=="attack_0")
{
controler.playerWater +=50;
controler.playerHeart+=1;

GameObject.Find("Water").guiText.text = " "+controler.playerWater;
GameObject.Find("Heart").guiText.text = " "+controler.playerHeart;
			Destroy(gameObject);


}
}*/




function OnTriggerEnter(other:Collider){
	if(other.collider.gameObject.name == "attack_0"){
		controler.playerWater +=50;
controler.playerHeart+=1;

GameObject.Find("Water").guiText.text = " "+controler.playerWater;
GameObject.Find("Heart").guiText.text = " "+controler.playerHeart;
			Destroy(gameObject);
	
	}
}