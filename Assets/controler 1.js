#pragma strict
public var anim : Animator;
private var startPoint : Vector3;
static var playerHeart : int ;
static var playerWater : int ;
public var speed : float ;
startPoint =transform.position;



function Start () {
playerHeart = 5;
playerWater = 200;
speed = 0.5f;
//ApplyDammage();

}

function Update () {
Move();
playershoot();
heart();
water();
ApplyDammage();
//shooted();
}







function Move()
{
transform.Translate(speed,0,Time.deltaTime);
/*if(Input.GetKey(KeyCode.RightArrow)){
transform.Translate(0.5f,0,Time.deltaTime);
anim.SetBool("attack",false);
}
if(Input.GetKey(KeyCode.LeftArrow)){
transform.Translate(-0.5f,0,Time.deltaTime);
anim.SetBool("attack",false);
}*/



if(Input.GetKey(KeyCode.DownArrow)){
transform.Translate(0,0,-1.0f);
anim.SetBool("attack",false);
}

if(Input.GetKey(KeyCode.UpArrow)){
transform.Translate(0,0,1.0f);
anim.SetBool("attack",false);

}
}


function playershoot()
{
if(Input.GetKey(KeyCode.D)){
 	anim.SetBool("die",false);
	anim.SetBool("attack",true);
	anim.SetBool("run",false);
	anim.SetBool("shooted",false);
if(playerWater!=0)
{
Instantiate (bullet, Vector3(gameObject.transform.position.x+7,gameObject.transform.position.y+3,gameObject.transform.position.z), Quaternion.identity);
playerWater--;
//playerHeart--;
}else
anim.SetBool("attack",false);



}

}

function heart()
{
GameObject.Find("Heart").guiText.text = "Heart : "+playerHeart;





}

function water()
{
GameObject.Find("Water").guiText.text = "Water : "+playerWater;

}



function ApplyDammage()
{
    if(playerHeart <= 0)
    {
       Dead();
       playerHeart = 0;
    }
}



function Dead()
{
    anim.SetBool("die",true);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",false);
	speed = 0.0f;

}

function shooted()
{
    anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",true);
	speed = 0.0f;


}


function OnCollisionEnter(collisionX : Collision)

{
if(collisionX.gameObject.name=="bulletnpc(Clone)")
{	//print("Hi");
	playerHeart-=1;
	anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",true);
	speed = 0.0f;
	shooted();
}else{
anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",true);
	anim.SetBool("shooted",true);}
	
	
}


var bullet : Transform;