function comenzar1()
    {
        var pregunta4=document.getElementById("textfield").value;
        var pregunta5=document.getElementById("textfield2").value;
        var pregunta6=document.getElementById("textfield3").value;
        if(pregunta4=="camila"&&pregunta5=="fernanda"&&pregunta6=="6" )
        {
           alert("HOLA AMOR");
           location.href="TE_AMO.HTML";
        }
        else
        {
            alert("NO PUEDES ENTRAR LO SIENTO")
        }
       
    }
    window.addEventListener("load",comenzar,false);	