
$(window).load(function () {
    var slider = {
        "pic2" : {
            "id": "1",
            "url":"images/slider2.jpg"
        },
        "pic3" : {
            "id": "2",
            "url":"images/slider3.jpg"
        },
        "pic4" : {
            "id": "3",
            "url":"images/slider4.jpg"
        },
        "pic5" : {
            "id": "4",
            "url":"images/slider5.jpg"
        },
        "pic6" : {
            "id": "5",
            "url":"images/slider6.jpg"
        },
        "pic7" : {
            "id": "6",
            "url":"images/slider7.jpg"
        }
    };
     


for(var key in slider){
    var activeclass = "";
    var picid = slider[key].id
    var picurl = slider[key].url;
    if(picid === 0){
             $(".carousel-indicators").append(
                "<li data-target='#ead-carousel' data-slide-to='"+picid+"' class='active'></li>"
            );
             $(".carousel-inner").append(
                "<div class='item active'><img src='"+picurl+"'></div>"
                );
           
        }else{
            $(".carousel-indicators").append(
                "<li data-target='#ead-carousel' data-slide-to='"+picid+"'></li>"
            );
        
            $(".carousel-inner").append(
                "<div class='item'><img src='"+picurl+"'></div>"
            );
                
        }

}





});
