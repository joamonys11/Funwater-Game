#pragma strict

function Start () {

}

function Update () {
bulletfor();
}
function bulletfor()
{
transform.Translate(2.5f,0,0);
Destroy(gameObject,0.5);

}

