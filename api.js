const search = ()=> {
const serchbox = document.getElementById("serch-item").ariaValueMax.toUpperCase();
const storelement = document.getElementById("phones");
const product = document.querySelectorAll(".product-details");
const name = document.getElementsByTagName("h4");

console.log(name);

for( var i=0; i<name.length ;i++){
    let match = product[i].getElementsByTagName('h4')[0]

    if(match){
       let textvalue =  match.textContent || match.innerHTML
       if(textvalue.toUpperCase().indexOf(erchbox) > -1){
        product[i].getElementsByClassName.display = "";
       }else{
        product[i].getElementsByClassName.display = "none";
       }
    
    }
}
}