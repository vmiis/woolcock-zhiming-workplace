m.pdf_data=function(data,callback){
    $('#F__ID')[0].reset();
    //var mm=$vm.module_list[name];
    $vm.deserialize(data,'#F__ID');
    //-------item a part
    m.item_a_records=[]; if(data!=undefined && data.Data.items!=undefined) m.item_a_records=data.Data.items;
    m.item_a_render();
    //-------
    $('#F__ID .c_print').hide();
    var CH=document.getElementById('form_container__ID').clientHeight;
    var CW=document.getElementById('form_container__ID').clientWidth;
    html2canvas(document.querySelector("#form_container__ID")).then(function(canvas){
        var canvasImg = canvas.toDataURL("image/jpg");
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
        $('#F__ID .c_print').show();
        var ddd = pdf.output('arraybuffer');
        var s=$vm.getB64Str(ddd);
        callback({
            pdf:pdf,
            b64str:s
        });
    })
}
//-------------------------------------
