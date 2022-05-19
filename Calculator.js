var clear=false;
var result="";
var cal="";
//$ is a shortcut of document.getElementById
    $(document).ready(function(){
        $("button").click(function(){
        //get value from clicked button
        var text =$(this).attr("value");
        //check the value from the clicked button and enter it to the textbox.
        if(parseInt(text, 10)== text ||
        text==="%"||
        text==="/"||
        text==="*"||
        text==="-"||
        text==="+"||
        text==="."){
        if (clear===false){
            cal += text;
            $(".textBox").val(calc)}
            else{
                cal=text;
                $(".textBox").val(calc);
                clear=false;
            }
           
        }
    switch (text){
        //clear all textbox
        case"C":
        cal="";
        $(".textBox").val("");
        break;
        //clears the last character digited
        case"CE":
        cal=cal.slice(0,-1);
        $(".textBox").val(calc);
        break;
        case"=":
        result=eval(calc);
        $(".textBox").val(result);
        clear=true;
        break;
        //change the signal
        case"+/-":
        if(clear===false){
        cal=cal*-1;
        $(".textBox").val(calc);
        }else{
        result=result*-1;
        $(".textBox").val(result);
    }
        break;
    }
});
});