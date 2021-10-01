var API_URL='https://opentdb.com/api.php?amount=10&fbclid=IwAR0hgfIu94mCZLP-uPSDBMMUz6FQioNKaLTAYUPu9tPimOTHNdm7SImrTjo';
window.onload=function(){
    getnewsData();
};
function getnewsData(){
    fetch(API_URL)
    .then(response=>response.json())
    .then(data=>displaydatafromAPI(data))
    .catch(function(error){
    document.getElementById('loader').style.display='none';
    document.getElementById('error').style.display='block';
    });
}

function retryData(){
    document.getElementById('loader').style.display='block';
    document.getElementById('error').style.display='none'


}
function displaydatafromAPI(data){
    var html='';
    data.results.forEach(function(value){
        html=html+ '<div>'
        +'<div class="category"> Category:'+value.category+'</div>'
        +'<div class="api-footer">'
        +'<div> Question:'+value.question+':</div>'
        +'<div>Type:<br Difficulty:>'+value.difficulty+'</div>'
       
        +'</div>'
        +'<div class="answer"> Answer: '+value.correct_answer+'</div>'
        +'</div>';
        // console.log(value);
    });
    document.getElementById('news').innerHTML=html;
    document.getElementById('loader').style.display='none';


} 