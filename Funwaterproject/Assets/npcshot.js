#pragma strict
function Start () {
transform.position.z = Random.Range(20,-20);
}

function Update () {


}


var bulletnpc : Transform;

function bullet()
{
Instantiate (bulletnpc, Vector3(gameObject.transform.position.x,gameObject.transform.position.y+4,gameObject.transform.position.z), Quaternion.identity);
}



function OnCollisionEnter(collisionX : Collision)

{

if(collisionX.gameObject.name=="water(Clone)")
{	print("Hi");
	controler.score+=100;
	GameObject.Find("score").guiText.text = "SCORE :  "+controler.score;
		Destroy(gameObject);
	Destroy(gameObject);	
}
	
	
	if(collisionX.gameObject.name == "attack_0"){
	controler.playerHeart--;
	controler.score+=100;
	GameObject.Find("score").guiText.text = "SCORE :  "+controler.score;
	GameObject.Find("Heart").guiText.text = " "+controler.playerHeart;
		Destroy(gameObject);
		
		
		
	}
	
	
	
	
	
	
}






InvokeRepeating("bullet",Random.Range(1.0,2.0),Random.Range(1.0,3.0));  //random by 2-5 second

