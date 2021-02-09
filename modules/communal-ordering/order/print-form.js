//-----------------------------------------
m.get_pdf=function(txt,callback){
    $('#_g_container').html(txt);
    var CH=document.getElementById('_g_container').clientHeight;
    var CW=document.getElementById('_g_container').clientWidth;
    html2canvas(document.querySelector('#_g_container')).then(function(canvas){
        var pdf = new jsPDF('p', 'mm', 'a4');
        var mH=10,mW=8;
        var W=210;
        var H=297;
        var pW=CW;
        var pH=pW*(H-2*mH)/(W-2*mW);
        var pages=CH/pH;
        for(var i=0;i<pages;i++){
            var ccc=document.createElement("canvas");
            ccc.setAttribute('width', pW);
            ccc.setAttribute('height', pH);
            var ctx = ccc.getContext('2d');
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(0,0,pW,pH);						
            ctx.drawImage(canvas,0,i*pH,pW,pH,0,0,pW,pH);
            var canvasDataURL = ccc.toDataURL("image/png", 1.0);
            if(i>0) pdf.addPage();
            pdf.addImage(canvasDataURL, 'PNG', mW, mH, W-2*mW, H-2*mH);
        }
        callback(pdf);
    })   
}
//-----------------------------------------
m.print_html=function(record){
    var txt=m.get_order_print_string(record);
    var w=window.open('');
    w.document.title="print version";
    w.document.body.innerHTML=txt;
}
//-----------------------------------------
m.print_pdf=function(record){
    var txt=m.get_order_print_string(record);
    m.get_pdf(txt,function(pdf){
        window.open(pdf.output('bloburl'));
    })
}
//-----------------------------------------
m.b64Str_pdf=function(record,callback){
    var txt=m.get_order_print_string(record);
    m.get_pdf(txt,function(pdf){
        callback( pdf.output('datauristring').split(';base64,').pop());
    })
}
//-----------------------------------------
    /*
    $('#_g_container').html(txt);
    var CH=document.getElementById('_g_container').clientHeight;
    var CW=document.getElementById('_g_container').clientWidth;
    html2canvas(document.querySelector('#_g_container')).then(function(canvas){
        var pdf = new jsPDF('p', 'mm', 'a4');
        var mH=10,mW=8;
        var W=210;
        var H=297;
        var pW=CW;
        var pH=pW*(H-2*mH)/(W-2*mW);
        var pages=CH/pH;
        for(var i=0;i<pages;i++){
            var ccc=document.createElement("canvas");
            ccc.setAttribute('width', pW);
            ccc.setAttribute('height', pH);
            var ctx = ccc.getContext('2d');
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(0,0,pW,pH);						
            ctx.drawImage(canvas,0,i*pH,pW,pH,0,0,pW,pH);
            var canvasDataURL = ccc.toDataURL("image/png", 1.0);
            if(i>0) pdf.addPage();
            pdf.addImage(canvasDataURL, 'PNG', mW, mH, W-2*mW, H-2*mH);
        }
        window.open(pdf.output('bloburl'),name)
        //pdf.save(name);
    })
    */   
    /*
    $('#_g_container').html(txt);
    var CH=document.getElementById('_g_container').clientHeight;
    var CW=document.getElementById('_g_container').clientWidth;
    html2canvas(document.querySelector('#_g_container')).then(function(canvas){
        var pdf = new jsPDF('p', 'mm', 'a4');
        var mH=10,mW=8;
        var W=210;
        var H=297;
        var pW=CW;
        var pH=pW*(H-2*mH)/(W-2*mW);
        var pages=CH/pH;
        for(var i=0;i<pages;i++){
            var ccc=document.createElement("canvas");
            ccc.setAttribute('width', pW);
            ccc.setAttribute('height', pH);
            var ctx = ccc.getContext('2d');
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(0,0,pW,pH);						
            ctx.drawImage(canvas,0,i*pH,pW,pH,0,0,pW,pH);
            var canvasDataURL = ccc.toDataURL("image/png", 1.0);
            if(i>0) pdf.addPage();
            pdf.addImage(canvasDataURL, 'PNG', mW, mH, W-2*mW, H-2*mH);
        }
        var s2 = pdf.output('datauristring');
        s2=s2.split(';base64,').pop()
        callback(s2);
    })   
    */
