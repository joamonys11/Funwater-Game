#pragma strict
public var anim : Animator;
private var startPoint : Vector3;
static var playerHeart : int ;
static var playerWater : int ;
public var speed : float ;
var audio01 : AudioClip;
var audio02 : AudioClip;
var audio03 : AudioClip;
static var score : int;
startPoint =transform.position;

function Start () {
playerHeart = 20;
playerWater = 200;
speed = 1.0f;
score = 0;

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

transform.Translate(speed,0,0);
/*if(Input.GetKey(KeyCode.RightArrow)){
transform.Translate(speed,0,0);
anim.SetBool("attack",false);
}*/
/*if(Input.GetKey(KeyCode.LeftArrow)){
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
var impact : AudioClip;
if(Input.GetKeyDown(KeyCode.D)){
 	anim.SetBool("die",false);
	anim.SetBool("attack",true);
	anim.SetBool("run",false);
	anim.SetBool("shooted",false); 
	audio.PlayOneShot(audio01);
	
	if(playerWater!=0)
{
Instantiate (bullet, Vector3(transform.position.x+7,transform.position.y+3,transform.position.z), Quaternion.identity);
playerWater--;
//playerHeart--;
}else
anim.SetBool("attack",false);
}
}


function heart()
{
GameObject.Find("Heart").guiText.text = " "+playerHeart;

}

function water()
{

GameObject.Find("Water").guiText.text = " "+playerWater;

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
var time : int = 0;
    anim.SetBool("die",true);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",false);
	audio.PlayOneShot(audio02);
	speed = 0.0f;
	time+=1;
	time+=1;
	time+=1;
	time+=1;
	time+=1;
	time+=1;
	
	
	

	if(time>5)
	{
	Application.LoadLevel("gameover");
	}
	

}

function shooted()
{
    anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",true);

}


function OnCollisionEnter(collisionX : Collision)
{
{
if(collisionX.gameObject.name=="bulletnpc(Clone)")
{	//print("Hi");
	playerHeart-=1;
	anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",true);
	audio.PlayOneShot(audio02);
	shooted();
}else{
anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",true);
	anim.SetBool("shooted",true);}
	

}


if(collisionX.gameObject.name=="human2_0_1")
{	//print("Hi");
	playerHeart-=1;
	anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",true);
	audio.PlayOneShot(audio02);
	shooted();
}else{
anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",true);
	anim.SetBool("shooted",true);}
	

if(collisionX.gameObject.name=="human3_0")
{	//print("Hi");
	playerHeart-=1;
	anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",true);
	audio.PlayOneShot(audio02);
	shooted();
}else{
anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",true);
	anim.SetBool("shooted",true);}
	
	if(collisionX.gameObject.name=="human4_0_1")
{	//print("Hi");
	playerHeart-=1;
	anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",false);
	anim.SetBool("shooted",true);
	audio.PlayOneShot(audio02);
	shooted();
}else{
anim.SetBool("die",false);
	anim.SetBool("attack",false);
	anim.SetBool("run",true);
	anim.SetBool("shooted",true);}
	
	}
	
	
	
	function OnTriggerEnter(other:Collider){
	if(other.collider.gameObject.name == "waterfill"){
		audio.PlayOneShot(audio03);
	
	}
}



function OnGUI()
{

if(Event.current.Equals(Event.KeyboardEvent("escape")))
{
Application.LoadLevel("menu");


}
}
	

var bullet : Transform;