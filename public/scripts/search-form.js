function searchForm(url){
	$('#inputSearch').on('keyup', function(_evt){
		var inputText = $(this).val();
		if(_evt.which==13){
			if($('#buttonSearch').is(':disabled')){
		    	//-> No ejecuta nada
		    	loadJSON(JSON_FILE);
		    }
		    else{
		    	$('.results').html('');
		    	searchResult(inputText,url);
		    }
		}
	});
}

function searchResult(value,urlData){
	

	$.ajax({
		url: urlData,
		type: 'GET',
		success: function(data){
			var j=0;
			convertValue = value.toUpperCase();
			for(var i=0; i<data.data.length; i++){
				convertText = data.data[i]['title'].toUpperCase();
				

				
				if (convertText.search(convertValue)!=-1&&j<9) {
					var template = "<div class='column-3'>"
                            +"<div class='result-self'>"
                                +"<div class='figure'>"+data.data[i]['title']+"</div>"
                                +"<h2>"+data.data[i]['title']+"</h2>"
                                +"<div class='description'>"+data.data[i]['teaser']+"</div>"
                            +"</div>"
                        +"</div> ";

                    	$('.results').append(template);	

                    	j=j+1;
                    
				}	

				
				
				
				
			}
		}
	});
}
