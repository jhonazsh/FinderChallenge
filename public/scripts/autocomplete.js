function autocomplete(url){
    
    $.ajax({
        url: url,
        type:'GET',
        success: function(data){
            var arrayData = [];
            for(var i=0; i<data.data.length; i++){
                arrayData[i]=data.data[i]['title'];
            }
            console.log(arrayData);

            var input = document.getElementById("inputSearch");
            new Awesomplete(input, {
                minChars: 3,
                maxItems: 7,
                list: arrayData
            });
        }
    });
    
}