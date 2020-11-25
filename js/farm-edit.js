
function sumit(){
    var plot = document.forms['form']['plot-size'];
    var green = document.forms['form']['green-time'];
    var longitude = document.forms['form']['longitude'];
    var latitude = document.forms['form']['latitude'];
    
    var text;

    var ploterror = document.getElementById('plot-error');
    var greenerror = document.getElementById('green-error');
    var longerror = document.getElementById('long-error');
    var latierror = document.getElementById('lati-error');
    
    if(plot.value==""){
        ploterror.innerHTML="The Plot size field is required.";
        document.getElementById('plot-size').classList.add("is-invalid");
        return false;
    }else{
        document.getElementById('plot-size').classList.add("is-valid");
    }

    if(green.value==""){
        greenerror.innerHTML="The Green Time field is required.";
        document.getElementById('green-time').classList.add("is-invalid");
        return false;
    }else{
        document.getElementById('green-time').classList.add("is-valid");
    }

    if(longitude.value==""){
        longerror.innerHTML="The longitude field is required.";
        document.getElementById('longitude').classList.add("is-invalid");
        return false;
    }else{
        document.getElementById('longitude').classList.add("is-valid");
    }
    
    if(latitude.value==""){
        latierror.innerHTML="The latitude field is required.";
        document.getElementById('latitude').classList.add("is-invalid");
        return false;
    }else{
        document.getElementById('latitude').classList.add("is-valid");
    }
   
    


}
