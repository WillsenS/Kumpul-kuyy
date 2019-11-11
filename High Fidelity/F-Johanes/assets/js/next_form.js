
$(function(){
    // $('#first-form-next-btn').click(function(event) {
    //     document.lacation.href = 'http://127.0.0.1:8000/select-calendar.html''
    // })
    
    $('#link-copy-btn').click(function(event) {
        var $temp = $('<input>');
        $("body").append($temp);
        $temp.val($('#link-txt-field')[0].value).select();
        console.log($temp.val());
        document.execCommand("copy");
        $temp.remove();
        
        // console.log($('#link-txt-field')[0].value);
        // ($('#link-txt-field')[0].value).select();
        // document.execCommand("copy");
        
    })
})