//-----------------------------------------
m.get_approval_print_string=function(record){
    var txt=`
    <table style='border-collapse: collapse;'><tr><td width="880">            
        <span style='font-size:150%'><b>Approval/Deny</b></span>
        <br>
        <br>
        I, #Name#, #Action# this request.
        <br>Date: #Date#
        <br>
        <br>
        If denied what is the reason?<br>
        #Reason#
        <br>
    </td></tr></table>
    `
    var nm=record.Submit_name;
    if(nm==undefined) nm=record.Submitted_by;
    
    txt=txt.replace('#Name#',nm);
    txt=txt.replace('#Action#',record.Data.Action);
    txt=txt.replace('#Date#',record.Submit_date);
    txt=txt.replace('#Reason#',record.Data.Reason);
    txt=txt.replace(/undefined/g,'');

    return txt;
}