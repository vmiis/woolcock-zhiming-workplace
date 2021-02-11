//-----------------------------------------
m.get_approval_print_string=function(record){
    var txt=`
    <table style='border-collapse: collapse;'><tr><td width="880">            
        <span style='font-size:150%'><b>Approval/Deny</b></span>
        <br>
        <br>
        I, #Name#, have received this request.
        <br>Date: #Date#
        <br>
        <br>
        #Notes#
        <br>
    </td></tr></table>
    `
    var nm=record.Submit_name;
    if(nm==undefined) nm=record.Submitted_by;
    
    txt=txt.replace('#Name#',nm);
    txt=txt.replace('#Date#',record.Submit_date);
    txt=txt.replace('#Notes#',record.Data.Notes);
    txt=txt.replace(/undefined/g,'');

    return txt;
}