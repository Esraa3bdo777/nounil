let stars =document.getElementById("stars");
let moon2 =document.getElementById("moon");
let mountains3 =document.getElementById("mountain3");
let mountains4 =document.getElementById("mountain4");
let river5 =document.getElementById("river");
let boat6 =document.getElementById("boot");
let nouvil =document.querySelector(".nouvil");

window.onscroll =function( )  {


  
    let value =scrollY;
    stars.style.left =value +'px';
    moon2.style.top =value *4  +'px';
    mountains3.style.top =value*2 +'px';
    mountains4.style.top =value*1.5  +'px';
    river5.style.top =value  +'px';
    boat6.style.top =value  +'px';
    boat6.style.left =value *3 +'px';
    nouvil.style.fontsize =value +'px';

    if(scrollY >= 375){
    nouvil.style.fontsize = 375 +'px';
    nouvil.style.position = 'fixed';

    if(scrollY >= 761 ){
        nouvil.style.display = 'none'; 
    }
    else {
        nouvil.style.display ='block';
    }
    if(scrollY >=670){
        document.querySelector('main').style.background ="linear-gradient(#b1438e,#3d0076);"
    }else{
        document.querySelector('main').style.background ='linear-gradient(#b8d9e4,#6d8bdc)'

    }




   
   }


}