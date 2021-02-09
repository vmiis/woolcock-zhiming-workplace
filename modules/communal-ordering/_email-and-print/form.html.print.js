//-----------------------------------------
m.print=function(record){
    m.get_form_print_string(record,function(txt){
        var w=window.open('');
        w.document.title="print version";
        w.document.body.innerHTML=txt;
    })
}
//-----------------------------------------
