//-----------------------------------------
m.send_email=function(record,url,callback){
    var txt=m.get_order_print_string(record);
    var ddd={};
    for(a in record.Data){
        ddd[a]=record.Data[a];
    }
    var bk="<p style='page-break-before: always'>&nbsp;</p>";
    ddd['purchase_order']=bk+txt;
    open_model__ID();
    $('#msg__ID').text('Sending email ... please wait!');
    
    m.b64Str_pdf(record,function(s){
        ddd['pdf']=s;
        $vm.vmpost(url,ddd,function(code){
            close_model__ID();
            callback(code)
        });
    });
    //console.log(bk+txt);
}
//-----------------------------------------
