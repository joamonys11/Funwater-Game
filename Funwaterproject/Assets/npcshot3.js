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
if(collisionX.gameObject.name=="bullet(Clone)")
{	print("Hi");
	Destroy(gameObject);
	
	
}
	
}






InvokeRepeating("bullet",Random.Range(1.0,2.0),Random.Range(1.0,2.0));  //random by 2-5 second

