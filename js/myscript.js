/*-----------------open menu list--------------------*/
var flag=0;
var arr = {}; 

function toggle(){
    if(flag==0){
        document.getElementById("menulist").style.display="block";
        flag=1;
    }
    else{
        document.getElementById("menulist").style.display="none";
        flag=0;    
    }   
}

/*-----------------open support modal--------------------*/ 
function openContact(){
    document.getElementById("supportContainer").style.display="block";    
}
/*-----------------close support modal--------------------*/ 
function closeContact(){
    document.getElementById("supportContainer").style.display="none";    
}

/*------------------toggle faq tabs------------------------*/
function toggletab(id,tab){
    switch(id){
        case "#buyers": console.log(id);
                        document.getElementById("all").style.display="none";
                        document.getElementById("buyers").style.display="block";
                        document.getElementById("merchants").style.display="none";
                        document.getElementById("developers").style.display="none";
                        document.getElementById("security").style.display="none";
                        document.getElementById("miscellaneous").style.display="none";
                        document.getElementById("ALL").classList.remove("active"); 
                        document.getElementById("MERCHANT").classList.remove("active");
                        document.getElementById("DEVELOPER").classList.remove("active");
                        document.getElementById("SECURITY").classList.remove("active");
                        document.getElementById("MIS").classList.remove("active");
                        document.getElementById(tab).classList.add("active");  
                        break;
        case "#merchants":  console.log(id);
                            document.getElementById("all").style.display="none";
                            document.getElementById("buyers").style.display="none";
                            document.getElementById("merchants").style.display="block";   
                            document.getElementById("developers").style.display="none";
                            document.getElementById("security").style.display="none";
                            document.getElementById("miscellaneous").style.display="none";
                            document.getElementById("ALL").classList.remove("active"); 
                            document.getElementById("BUYER").classList.remove("active");
                            document.getElementById("DEVELOPER").classList.remove("active");
                            document.getElementById("SECURITY").classList.remove("active");
                            document.getElementById("MIS").classList.remove("active");
                            document.getElementById(tab).classList.add("active");
                            break;
        case "#developers":  console.log(id);
                            document.getElementById("all").style.display="none";
                            document.getElementById("buyers").style.display="none";
                            document.getElementById("merchants").style.display="none";
                            document.getElementById("developers").style.display="block"; 
                            document.getElementById("security").style.display="none";
                            document.getElementById("miscellaneous").style.display="none";
                            document.getElementById("ALL").classList.remove("active"); 
                            document.getElementById("BUYER").classList.remove("active");
                            document.getElementById("MERCHANT").classList.remove("active");
                            document.getElementById("SECURITY").classList.remove("active");
                            document.getElementById("MIS").classList.remove("active");
                            document.getElementById(tab).classList.add("active");
                            break;
        case "#security":  console.log(id);
                            document.getElementById("all").style.display="none";
                            document.getElementById("buyers").style.display="none";
                            document.getElementById("merchants").style.display="none";
                            document.getElementById("developers").style.display="none";
                            document.getElementById("security").style.display="block"; 
                            document.getElementById("miscellaneous").style.display="none";
                            document.getElementById("ALL").classList.remove("active"); 
                            document.getElementById("BUYER").classList.remove("active");
                            document.getElementById("MERCHANT").classList.remove("active");
                            document.getElementById("DEVELOPER").classList.remove("active");
                            document.getElementById("MIS").classList.remove("active");
                            document.getElementById(tab).classList.add("active");
                            break;
        case "#miscellaneous":  console.log(id);
                            document.getElementById("all").style.display="none";
                            document.getElementById("buyers").style.display="none";
                            document.getElementById("merchants").style.display="none";
                            document.getElementById("developers").style.display="none";
                            document.getElementById("security").style.display="none";
                            document.getElementById("miscellaneous").style.display="block";
                            document.getElementById("ALL").classList.remove("active"); 
                            document.getElementById("BUYER").classList.remove("active");
                            document.getElementById("MERCHANT").classList.remove("active");
                            document.getElementById("DEVELOPER").classList.remove("active");
                            document.getElementById("SECURITY").classList.remove("active");
                            document.getElementById(tab).classList.add("active");
                            break;
        default : console.log(id);
                  document.getElementById("all").style.display="block";
                  document.getElementById("buyers").style.display="none";
                  document.getElementById("merchants").style.display="none";
                  document.getElementById("developers").style.display="none";
                  document.getElementById("security").style.display="none";
                  document.getElementById("miscellaneous").style.display="none";
                  document.getElementById("BUYER").classList.remove("active"); 
                  document.getElementById("MERCHANT").classList.remove("active");
                  document.getElementById("DEVELOPER").classList.remove("active");
                  document.getElementById("SECURITY").classList.remove("active");
                  document.getElementById("MIS").classList.remove("active");
                  document.getElementById(tab).classList.add("active");
                  break;
    }
}
/*------------------toggle faq tabs------------------------ */
function toggleQuestion(id){
      
    if(arr[id] == undefined)
    {
        arr[id]=0;   
    }
    if(arr[id] == 0){
        document.getElementById(id).style="transform:scaleY(1);margin-top:10px; max-height:500px; height:auto; transition:all 0.5s ease;";
        arr[id]=1;
    } 
    else{
        document.getElementById(id).style="transform:scaleY(0); height:0px; transition:height 0s,transform 0.2s;";
        arr[id]=0;   
    } 
}

/*------------------ location page------------------------ */
function suggestmall(){
    var filter, ul, li, a, i, txtValue, norstVal,count=0;
    var auto = document.getElementsByClassName("autocomplete");
    var closeSearch = document.getElementsByClassName("closeSearch");
    var input = document.getElementById("searchmall"); 
    var search = document.getElementsByClassName("search");   
    filter = input.value.toUpperCase();
    ul = document.getElementById("suggestList");
    li = ul.getElementsByTagName("li");
    norstVal = document.getElementsByClassName("noresult");
    //var mall=["Big Bazar, Bharuch","D Mart, Ankleshwar","Gloden Square, Ankleshwar","D Mart, Bharuch","Silver Plaza Shopping, Ankleshwar"];
    
    search[0].style ="border-radius: 10px 10px 0px 0px;";
    auto[0].style="display:block;";
    closeSearch[0].style="display:block";
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText; 
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            count++;
        } else {
            li[i].style.display = "none";
        }
    }
    if(count == 0){
        norstVal[0].style= "display:block;";
    }   
    else{
        norstVal[0].style= "display:none;";   
    } 
}
/*------------------ close suggestion list------------------------ */
function closeMallList(){ 
    var auto = document.getElementsByClassName("autocomplete");
    var closeSearch = document.getElementsByClassName("closeSearch");
    var search = document.getElementsByClassName("search");
    
    search[0].style ="border-radius: 10px;";
    document.getElementById("searchmall").value="";
    auto[0].style = "display:none;";  
    closeSearch[0].style="display:none";    
} 
/*------------------ Particular Mall detail------------------------ */  
function showMallDetail(mallname,mallboxid,popupid){
    
    console.log(window.innerWidth)
    var auto = document.getElementsByClassName("autocomplete");
    var closeSearch = document.getElementsByClassName("closeSearch");
    var search = document.getElementsByClassName("search");
    
    search[0].style ="border-radius: 10px;";
    closeSearch[0].style="display:none";
    document.getElementById("searchmall").value=mallname;
    auto[0].style = "display:none;";
    
    if(window.innerWidth <= 580){
        document.getElementById(mallboxid).style="display:none";
        if(mallname=="Big Bazar, Bharuch"){
            document.getElementById("map").style="transform: scale(2, 1.2) translate(4%, 40px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;top:95px;left:45%;transition: display 5s linear";
            document.getElementById(popupid).onclick=function(){
                document.getElementById(mallboxid).style="display:block";
                document.getElementById(popupid).style= "display:none;";
                search[0].style ="display:none;";     
            } 
        } 
        else if(mallname=="D Mart, Ankleshwar"){
            document.getElementById("map").style="transform:scale(1.2, 1.2) translate(-20px,30px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;bottom:119px;left:64%;transition: display 5s linear;"; 
            document.getElementById(popupid).onclick=function(){
                document.getElementById(mallboxid).style="display:block";
                document.getElementById(popupid).style= "display:none;";
                search[0].style ="display:none;";     
            }
        }
        else if(mallname=="Golden Square,Ankleshwar"){
            document.getElementById("map").style="transform:scale(1.2, 1.3) translate(-20px,-60px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;bottom:56px;left:59%;transition: display 5s linear;";
            document.getElementById(popupid).onclick=function(){
                document.getElementById(mallboxid).style="display:block";
                document.getElementById(popupid).style= "display:none;";
                search[0].style ="display:none;";     
            } 
        }
        else if(mallname=="Hind Shopping Center, Bharuch"){
            document.getElementById("map").style="transform: scale(1.2, 1.2) translate(25px, 50px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;top:93px;left:57%;transition: display 5s linear;"; 
            document.getElementById(popupid).onclick=function(){
                document.getElementById(mallboxid).style="display:block";
                document.getElementById(popupid).style= "display:none;";
                search[0].style ="display:none;";     
            }
        }
        else if(mallname=="Silver Plaza Shopping, Ankleshwar"){
            document.getElementById("map").style="transform: scale(1.2, 1.4) translate(-20px, -90px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;bottom:130px;left:58%;transition: display 5s linear;";
            document.getElementById(popupid).onclick=function(){
                document.getElementById(mallboxid).style="display:block";
                document.getElementById(popupid).style= "display:none;";
                search[0].style ="display:none;";     
            } 
        }     
    }
    else{
        document.getElementById(mallboxid).style="display:block";
     
        if(mallname=="Big Bazar, Bharuch"){
            document.getElementById("map").style="transform: scale(1.2, 1.2) translate(40px, 50px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true); 
            document.getElementById(popupid).style= "display:block;top:106px;left:45%;transition: display 5s linear"; 
        } 
        else if(mallname=="D Mart, Ankleshwar"){
            document.getElementById("map").style="transform:scale(1.2, 1.2) translate(-20px,30px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;bottom:119px;left:64%;transition: display 5s linear;"; 
        }
        else if(mallname=="Golden Square,Ankleshwar"){
            document.getElementById("map").style="transform:scale(1.2, 1.3) translate(-20px,-60px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;bottom:56px;left:59%;transition: display 5s linear;"; 
        }
        else if(mallname=="Hind Shopping Center, Bharuch"){
            document.getElementById("map").style="transform: scale(1.2, 1.2) translate(40px, 50px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;top:93px;left:57%;transition: display 5s linear;"; 
        }
        else if(mallname=="Silver Plaza Shopping, Ankleshwar"){
            document.getElementById("map").style="transform: scale(1.2, 1.4) translate(-20px, -90px);transition: all 0.3s linear 0s;"; 
            document.getElementById(popupid).innerText=mallname;
            document.getElementById("searchmall").setAttribute('readonly',true);
            document.getElementById(popupid).style= "display:block;bottom:130px;left:58%;transition: display 5s linear;"; 
        } 
        
    }
    
}
/*------------------ Close Mall detail------------------------ */  
function closeMallDetail(mallboxid,popupid){
    var search = document.getElementsByClassName("search");
     
    document.getElementById(mallboxid).style="display:none";
    document.getElementById("searchmall").removeAttribute('readonly');
    document.getElementById("searchmall").value=""; 
    document.getElementById(popupid).style= "display:none";
    document.getElementById("map").style="transform:initial; transition: all 0.3s linear";
    search[0].style ="display:flex;";    
}

/*------------------ Validation of contact form ------------------------ */  
function contactvalidate(){
   var nm = document.contactform.fullname.value;
   var eid = document.contactform.email.value;
   var mssg = document.contactform.message.value;

   if(nm === ""){
       document.getElementById("invalidname").style.display = "block";
       document.contactform.fullname.focus() ;
       return false;
   }
   else if(eid === ""){
       document.getElementById("emailerrormessage").innerText="Please enter your email id.";
       document.getElementById("invalidemail").style.display = "block";
       document.contactform.email.focus() ;
       return false;
   } 
   else if(mssg === ""){
        document.getElementById("invalidmessage").style.display = "block";
        document.contactform.message.focus() ;
        return false;    
   }   
 alert("Thanks for contacting us. We will get back to you soon.");
   return true;
}

function valideachinput(inputid){
    if(inputid === "invalidemail"){
        var eid = document.contactform.email.value;
        atpos = eid.indexOf("@");
        dotpos = eid.lastIndexOf(".");
             
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
                document.getElementById("emailerrormessage").innerText="Invalid Email";
                document.contactform.email.focus() ;
                document.getElementById(inputid).style.display = "block";
                return false;
        }
        document.getElementById(inputid).style.display = "none";
        return( true ); 
    }
    else{
        document.getElementById(inputid).style.display = "none";    
    }   
}