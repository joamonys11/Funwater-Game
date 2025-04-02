#pragma strict

function Start () {

}

function Update () {


}


var bulletnpc : Transform;

function bullet()
{
Instantiate (bulletnpc, Vector3(gameObject.transform.position.x+4,gameObject.transform.position.y+4,gameObject.transform.position.z), Quaternion.identity);
}

InvokeRepeating("bullet",2,0.1);  //random by 2-5 second