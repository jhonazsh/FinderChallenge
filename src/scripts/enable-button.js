function enableButton(){
    $('#inputSearch').on('keyup', function(){
        var inputSearchEnable = $(this).val();
        if(inputSearchEnable.length>=2){
            $('#buttonSearch').removeAttr('disabled');
        }
        else{
            $('#buttonSearch').attr('disabled','disabled');
        }
    });
}