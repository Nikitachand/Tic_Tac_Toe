let y=1
let z=0
let arr1=[0,0,0]
let arr2=[0,0,0]
let arr3=[0,0,0]
let count=0
let result=false


function test_btn(x)
{                                 //function for placing "x" and "o" on the buttons.
   console.log(x)
   count=count+1
   if (y%2===0)
    {
        console.log("Evenchance")
        add_element(x)
        y=1
        document.getElementById(x).innerHTML="0"
        document.getElementById(x).disabled=true
       
    }

    else
    {
       console.log("Oddchance")
       add_element(x)
       y=y+1
       document.getElementById(x).innerHTML="x"
       document.getElementById(x).disabled=true

    }
}
function add_element(z)              //fuction to add respective respresentative element in th array
                                     //i.e  1 for player "x" and 2 for player "0"
{
    if(z==='1')
        {
        if(y%2===0)
        {arr1[0]='2'}
        else
        {arr1[0]='1'}  
        }
    if(z==='2')
        {
        if(y%2===0)
        {arr1[1]='2'}
        else
        {arr1[1]='1'}   
        }
    if(z==='3')
        {
        if(y%2===0)
        {arr1[2]='2'}
        else
        {arr1[2]='1'}  
        }
    if(z==='4')
        {
        if(y%2===0)
        {arr2[0]='2'}
        else
        {arr2[0]='1'}   
         }
    if(z==='5')
        {
        if(y%2===0)
        {arr2[1]='2'}
        else
        {arr2[1]='1'}   
        }
    if(z==='6')
        {
        if(y%2===0)
        {arr2[2]='2'}
        else
        {arr2[2]='1'}  
        }
    if(z==='7')
        {
        if(y%2===0)
        {arr3[0]='2'}
        else
        {arr3[0]='1'}  
        }
    if(z==='8')
        {
        if(y%2===0)
        {arr3[1]='2'}
        else
        {arr3[1]='1'}  
        }
    if(z==='9')
        {
        if(y%2===0)
        {arr3[2]='2'}
        else
        {arr3[2]='1'}   
        }

    console.log("arr1=",arr1)     //To check the array at every move 
    console.log("arr2=",arr2)
    console.log("arr3",arr3)
    
    check_result()
    
}

function check_result()          //function for result checking based on the positon of elements in the arrays
{  
    //condion 1 row 1
    if(arr1[0]===arr1[1]&&arr1[1]===arr1[2]&& arr1[0]!=0)
        {
            result=true
            console.log("Won in the first row")
            announce_result(arr1[0])
            
        }
    //condion 2 row 2
    if(arr2[0]===arr2[1]&&arr2[1]===arr2[2]&& arr2[0]!=0)
        {
            result=true
            announce_result(arr2[0])
        }
    //condion 3 row 3
    if(arr3[0]===arr3[1]&&arr3[1]===arr3[2]&& arr3[0]!=0)
        {
            result=true
            announce_result(arr3[0])
        }
    //condion 4 col 1
    if(arr1[0]===arr2[0]&&arr2[0]===arr3[0]&& arr1[0]!=0)
        {
            result=true
            announce_result(arr1[0])
        }
    //condion 5 col 2
    if(arr1[1]===arr2[1]&&arr2[1]===arr3[1]&& arr1[1]!=0)
        {
            result=true
            announce_result(arr1[1])
        }
    //condion 6 col 3
    if(arr1[2]===arr2[2]&&arr2[2]===arr3[2]&& arr1[2]!=0)
        {
            result=true
            announce_result(arr1[2])
        }
    //condion 7 diagonal 1
    if(arr1[0]===arr2[1]&&arr2[1]===arr3[2]&& arr1[0]!=0)
        {
            result=true
            announce_result(arr1[0])
        }
    //condion 8 diagonal 2
    if(arr1[2]===arr2[1]&&arr2[1]===arr3[0]&& arr1[2]!=0)
        {
            result=true
            announce_result(arr1[0])
        }
    // condition for draw
    if(count===9 && result===false)
        {
            //alert("Draw")
            document.getElementById('result').innerHTML="Its a Draw!!"
            document.getElementById('result').className="alert alert-warning mt-3"
        }    
}
function announce_result(k)
{
    if(k==='1')
        {
            //alert('X-wins')
            disable_all()
            document.getElementById('result').innerHTML=" X Wins "
            document.getElementById('result').className="alert alert-warning mt-3"
        }
    if(k==='2')
        {
            //alert('Y-wins')
            disable_all()
            document.getElementById('result').innerHTML="0 Wins"
            document.getElementById('result').className="alert alert-warning mt-3"
        }

        addEventListener('click', function () 
       {
        confetti
        ({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
}

function disable_all()           // function to disable all the buttons once a player wins.
{

    document.getElementById('1').disabled=true
    document.getElementById('2').disabled=true
    document.getElementById('3').disabled=true
    document.getElementById('4').disabled=true
    document.getElementById('5').disabled=true
    document.getElementById('6').disabled=true
    document.getElementById('7').disabled=true
    document.getElementById('8').disabled=true
    document.getElementById('9').disabled=true
}

