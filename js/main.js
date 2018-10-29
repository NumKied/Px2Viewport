$(document).ready ( function(){
    $("#val").keyup(function() {
        var resolution = $("#resolution").val();
        var res = $("#val").val()/resolution*100;
        $('#result').text(Math.trunc(res * 100)/100);     //(res.toFixed(2))
        if(resolution == '') {
            $('#result').text('Set properly resolution');
        }
    });
});