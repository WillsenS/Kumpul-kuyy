cardHeader = ['#card-structure', '#card-decoration', '#card-accessories']
cardBody = ['#body-structure', '#body-decoration', '#body-accessories']

$(function(){
    
    for (let i = 1; i < cardBody.length; i++) {
        $(cardBody[i]).hide();
    }
    
    for (let i = 0; i < cardHeader.length; i++) {
        
        $(cardHeader[i]).on('click', function(event){
            event.preventDefault();
            $(cardBody[i]).show();
            $(cardHeader[i]).addClass("active");
            
            
            for (let j = 0; j < cardHeader.length; j++) {
                if (j != i) {
                    $(cardBody[j]).hide();
                    $(cardHeader[j]).removeClass("active");
                }
            }
            
        });
    }
    
});