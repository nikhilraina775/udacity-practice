var all = {
"cats":[
{
    "catName":"cat1",
    "catCount":0,
    "catImage":"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?h=350&auto=compress&cs=tinysrgb"
 },
 {
    "catName":"cat2",
    "catCount":0,
    "catImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXhgkC523CD5DIdvfwFl3G_S1Hc3oHzh8NUTXPeRSfYv1i8rA"
 },
 {
    "catName":"cat3",
    "catCount":0,
    "catImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKr6YlGNsqgJzvgBBkq1648_HsuDizVn_ZXC6iQp9kjXFzLvs1BA"
 }
 ]};
 var text='<li onClick="onClick(%index%)" id="catList" >%data%</li>';
 var catPic = '<img src="%data%" onClick="catClick(%index%)" class="biopic">';
var black = {'color': '#000'};


function displayWork(){
for(i in all.cats){
    // for(var i=0;i<all.cats.length;i++){
   //    console.log(i);
    var formattedtext = text.replace("%data%",all.cats[i].catName);
    formattedtext=formattedtext.replace("%index%",i);
    $("#cat-list").append(formattedtext);

 }
}
 displayWork();

    
    function onClick(index) {
         $('#cat-list li').css('background-color','white');
        document.getElementById("clicks").innerHTML = all.cats[index].catCount;
        var formattedPic = catPic.replace("%data%",all.cats[index].catImage);
         formattedPic = formattedPic.replace("%index%",index);
         $($('#cat-list li')[index]).css('background-color','red');
       $("#cat-all").html('');
    $("#cat-all").append(formattedPic);
  

     // all.cats[index].catName.fontcolor("green");
    
  //  document.getElementById("catList")[index].style.color = "blue";
  // document.getElementById("cat-list").style.color = "blue";
    };

      function catClick(count) {
         all.cats[count].catCount++;
        document.getElementById("clicks").innerHTML = all.cats[count].catCount;
    };
