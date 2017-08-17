/*
  constants and global functions
*/

var JSON_FILE = '/books-schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
// var loadJSON = function(url, callback){
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open("GET", url, true);
//     xobj.onreadystatechange = function(responseText){
//         if(xobj.readyState == 4 && xobj.status == "200"){
//             var content = JSON.parse(xobj.responseText);
//             callback.call(this, content);
//             console.log(content);
//         }
//     };
//     xobj.send(null);
// };

function loadJSON(url){
    $.getJSON(url, function(data){
        for(var i=0; i<data.data.length; i++){
            template = "<div class='column-3'>"
                            +"<div class='result-self'>"
                                +"<div class='figure'>"+data.data[i]['title']+"</div>"
                                +"<h2>"+data.data[i]['title']+"</h2>"
                                +"<div class='description'>"+data.data[i]['teaser']+"</div>"
                            +"</div>"
                        +"</div> ";

            $('.results').append(template);

        }
    });
}



