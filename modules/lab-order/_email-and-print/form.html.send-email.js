//-----------------------------------------
m.send_email=function(record,url,callback){
    m.get_form_print_string(record,function(txt){
        var ddd={};
        for(a in record.Data){
            ddd[a]=record.Data[a];
        }
        var bk="<p style='page-break-before: always'>&nbsp;</p>";
        ddd['purchase_order']=bk+txt;
        open_model__ID();
        $('#msg__ID').text('Sending email ... please wait!');
        $vm.vmpost(url,ddd,function(code){
            close_model__ID();
            callback(code)
        });
        //console.log(txt);
    })
}
//-----------------------------------------
