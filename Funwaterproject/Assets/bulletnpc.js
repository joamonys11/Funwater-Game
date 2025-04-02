#pragma strict

function Start () {

}

function Update () {
bulletfornpc();
}


function bulletfornpc()
{
transform.Translate(-2.0f,0,0);
Destroy(gameObject,0.3);

}



