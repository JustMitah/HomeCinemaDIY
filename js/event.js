var placeholderText = {
    "Genre": "Drama,Comedy,Romance, etc.",
    "Title": "Title of Movie/TV Show"
};
$("#selectionType").on("change", function () {

    if (this.value != -1) {
        $("#inputBox").attr('placeholder',placeholderText[$("#selectionType option:selected").text()]);
    } else {
        $("#inputBox").attr('placeholder',"Pick a search type first");
    }

});
$("#selectionType").find(":selected").val();
$(document).ready(function(){  
    $('#inputBox').keyup(function(){  
         var selection = $("#selectionType").find(":selected").text().toLowerCase();
         var query = $(this).val();  
         if(query != '')  
         {  
              $.ajax({  
                   url:"php/search.php",  
                   method:"POST",  
                   data:{query:query,selection:selection},  
                   success:function(data)  
                   {  
                        $('#inputBoxList').fadeIn();  
                        $('#inputBoxList').html(data);  
                   }  
              });  
         }  
    });  
    $(document).on('click', 'li', function(){  
        $('#inputBox').val($(this).text().slice(3,));  
        $('#inputBoxList').fadeOut();  
    });  
});  
var ajaxArray = [];
$(document).ready(function(){  
    $("#search-btn").click(function(){
        var userInput = $('#inputBox').val();
        var selection = $("#selectionType").find(":selected").text().toLowerCase();
        if(userInput != '')  
         {  
              $.ajax({  
                   url:"php/search.php",  
                   method:"POST",  
                   data:{userInput:userInput,selection:selection},
                   async : false,  
                   success:function(data)  
                   {   
                    new_p1c1 = data.split(";")[0].split("),")[0]+")";
                    $(".p1c1").css("background-color",new_p1c1);
                    new_p1c2 = data.split(";")[0].split("),")[1]+")";
                    $(".p1c2").css("background-color",new_p1c2);
                    new_p1c3 = data.split(";")[0].split("),")[2]+")";
                    $(".p1c3").css("background-color",new_p1c3);
                    new_p1c4 = data.split(";")[0].split("),")[3]+")";
                    $(".p1c4").css("background-color",new_p1c4);
                    new_p1c5 = data.split(";")[0].split("),")[4]+")";
                    $(".p1c5").css("background-color",new_p1c5);
 
                    new_p2c1 = data.split(";")[1].split("),")[0]+")";
                    $(".p2c1").css("background-color",new_p2c1);
                    new_p2c2 = data.split(";")[1].split("),")[1]+")";
                    $(".p2c2").css("background-color",new_p2c2);
                    new_p2c3 = data.split(";")[1].split("),")[2]+")";
                    $(".p2c3").css("background-color",new_p2c3);
                    new_p2c4 = data.split(";")[1].split("),")[3]+")";
                    $(".p2c4").css("background-color",new_p2c4);
                    new_p2c5 = data.split(";")[1].split("),")[4]+")";
                    $(".p2c5").css("background-color",new_p2c5);
 
                    new_p3c1 = data.split(";")[2].split("),")[0]+")";
                    $(".p3c1").css("background-color",new_p3c1);
                    new_p3c2 = data.split(";")[2].split("),")[1]+")";
                    $(".p3c2").css("background-color",new_p3c2);
                    new_p3c3 = data.split(";")[2].split("),")[2]+")";
                    $(".p3c3").css("background-color",new_p3c3);
                    new_p3c4 = data.split(";")[2].split("),")[3]+")";
                    $(".p3c4").css("background-color",new_p3c4);
                    new_p3c5 = data.split(";")[2].split("),")[4]+")";
                    $(".p3c5").css("background-color",new_p3c5);

                    duration = data.split(";")[3];
                    console.log(duration)
                    $(".Palette1").css("visibility","visible");
                    $(".Palette2").css("visibility","visible");
                    $(".Palette3").css("visibility","visible");
                    $(".draw-border").css("visibility","visible");
                    $(".para").css("visibility","visible");
                   }  
              })
        }

        });
             
});
var ChosenPaletteId = $('input[name=colorpick]:checked').val();

$('input[name=colorpick]').change(function(){
    ChosenPaletteId=$('input[name=colorpick]:checked').val();
    //console.log(ChosenPaletteId);
});
function getStyle(ClassString){
    var colors = [];
    var style;
  
    if (ClassString == "Palette2"){
        color1 = document.querySelector('.Palette2 .p2c1');
        style = getComputedStyle(color1);
        colors.push(style.backgroundColor);
        color2 = document.querySelector('.Palette2 .p2c2');
        style = getComputedStyle(color2);
        colors.push(style.backgroundColor);
        color3 = document.querySelector('.Palette2 .p2c3');
        style = getComputedStyle(color3);
        colors.push(style.backgroundColor);
        color4 = document.querySelector('.Palette2 .p2c4');
        style = getComputedStyle(color4);
        colors.push(style.backgroundColor);
        color5 = document.querySelector('.Palette2 .p2c5');
        style = getComputedStyle(color5);
        colors.push(style.backgroundColor);
        colors.push(duration);
    } else if (ClassString  == "Palette3"){
        color1 = document.querySelector('.Palette3 .p3c1');
        style = getComputedStyle(color1);
        colors.push(style.backgroundColor);
        color2 = document.querySelector('.Palette3 .p3c2');
        style = getComputedStyle(color2);
        colors.push(style.backgroundColor);
        color3 = document.querySelector('.Palette3 .p3c3');
        style = getComputedStyle(color3);
        colors.push(style.backgroundColor);
        color4 = document.querySelector('.Palette3 .p3c4');
        style = getComputedStyle(color4);
        colors.push(style.backgroundColor);
        color5 = document.querySelector('.Palette3 .p3c5');
        style = getComputedStyle(color5);
        colors.push(style.backgroundColor);
        colors.push(duration);
    } else  {
        color1 = document.querySelector('.Palette1 .p1c1');
        style = getComputedStyle(color1);
        colors.push(style.backgroundColor);
        color2 = document.querySelector('.Palette1 .p1c2');
        style = getComputedStyle(color2);
        colors.push(style.backgroundColor);
        color3 = document.querySelector('.Palette1 .p1c3');
        style = getComputedStyle(color3);
        colors.push(style.backgroundColor);
        color4 = document.querySelector('.Palette1 .p1c4');
        style = getComputedStyle(color4);
        colors.push(style.backgroundColor);
        color5 = document.querySelector('.Palette1 .p1c5');
        style = getComputedStyle(color5);
        colors.push(style.backgroundColor);
        colors.push(duration);
    }
    return colors;
}
$(document).ready(function(){  
    $("#submittedColors").click(function(){
        var colors = getStyle(ChosenPaletteId,colors);
        console.log(colors);
        socket.emit("infoarray",colors)
    }
)});
