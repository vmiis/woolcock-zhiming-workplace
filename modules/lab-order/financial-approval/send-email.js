//-----------------------------------------
m.send_email=function(o_record,a_record,url,callback){
    var txt1=m.get_order_print_string(o_record)
    var txt2=m.get_approval_print_string(a_record);
    var ddd={};
    for(a in o_record.Data){
        ddd[a]=o_record.Data[a];
    }
    var bk="<p style='page-break-before: always'>&nbsp;</p>";
    ddd['purchase_order']=bk+txt1;
    ddd['approval']="<br><br><br>"+bk+txt2;
    
    open_model__ID();
    $('#msg__ID').text('Sending email ... please wait!');
    $vm.vmpost(url,ddd,function(code){
        close_model__ID();
        callback(code)
    });
    /* 
    var txt=bk+txt1+"<br><br><br>"+bk+txt2;
    console.log(txt);
    callback(200);
    */
}
//-----------------------------------------
