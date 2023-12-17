function addnewEDfield(){
    // console.log("Add nwgfd");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('EDfield');
    newNode.classList.add('mt-2');
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");
    let edOb=document.getElementById("ed");
    let edAddbuttonOb=document.getElementById("edAddbutton");

    edOb.insertBefore(newNode,edAddbuttonOb);
}
function addnewSKfield(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('SKfield');
    newNode.classList.add('mt-2');

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");
    let skOb=document.getElementById("sk");
    let skAddbuttonOb=document.getElementById("skAddbutton");

    skOb.insertBefore(newNode,skAddbuttonOb);
    
}
function addnewWEfield(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('WEfield');
    newNode.classList.add('mt-2');

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");
    let weOb=document.getElementById("we");
    let weAddbuttonOb=document.getElementById("weAddbutton");

    weOb.insertBefore(newNode,weAddbuttonOb);
}
function generateCV(){
    let name=document.getElementById("namefield").value;
    let chname=document.getElementById("nameT");
    chname.innerHTML=name;

    document.getElementById("URname").innerHTML=name;

    let number=document.getElementById("contactfield").value;
    let chcontact=document.getElementById("contactT");
    chcontact.innerHTML=number;

    let mail=document.getElementById("mailfield").value;
    let chmail=document.getElementById("mailT");
    chmail.innerHTML=mail;

    let address=document.getElementById("addressfield").value;
    let chaddress=document.getElementById("addressT");
    chaddress.innerHTML=address;

    let linkdin=document.getElementById("linkdinfield").value;
    let chlinkdin=document.getElementById("linkdinT");
    chlinkdin.innerHTML=linkdin;

    let about=document.getElementById("aboutfield").value;
    let chabout= document.getElementById("aboutT");
    chabout.innerHTML=about;

    // document.getElementById("aboutT").innerHTML=document.getElementById("aboutfield").value;
    
    
    let edf=document.getElementById("EDfield");
    let str=' ';
    for(let e of edf){
        str=str+<li> ${e.value} </li>;
    }

    document.getElementById("eduT").innerHTML=str;

    // document.getElementById("eduT").innerHTML=document.getElementsByClassName("EDfield").value;

    // document.getElementById("sklT").innerHTML=document.getElementById("skillfield").value;

    // document.getElementById("expT").innerHTML=document.getElementById("experiencefield").value;

}

// function printCV(){

// }