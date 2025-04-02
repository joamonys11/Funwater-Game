#pragma strict
function Start () {
}

function Update () {


}

/*function bullet()
{
Instantiate (bulletnpc, Vector3(gameObject.transform.position.x,gameObject.transform.position.y+4,gameObject.transform.position.z), Quaternion.identity);
}
*/




function OnCollisionEnter(collisionX : Collision)
{
	if(collisionX.gameObject.name == "attack_0"){
	controler.playerHeart--;
	GameObject.Find("score").guiText.text = "SCORE :  "+controler.score;
	GameObject.Find("Heart").guiText.text = " "+controler.playerHeart;
		Destroy(gameObject);
	controler.score+=100;
	}
	
	if(collisionX.gameObject.name == "water(Clone)")
	{
	controler.score+=100;
	
	GameObject.Find("score").guiText.text = "SCORE :  "+controler.score;
		Destroy(gameObject);
	Destroy(gameObject);
	
	}

}