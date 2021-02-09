var load_financial_approval=function(query,options){
    //load joined records parent.UID=child.I2
    var cmd="find"; 
    var table=m.financial_approval_table;
    var req={cmd:cmd,table:table,query:query,options:options}
    $vm.request(req,function(res){
        if(res.status=='np'){
            $("#grid__ID td[data-id=_Financial_Approval]").each(function(index){
                $(this).html('');
            })
        }
        //attach child record
        if(res.result.length!=undefined){
            for(var k=0;k<res.result.length;k++){
                for(var j=0;j<m.records.length;j++){
                    if(m.records[j].UID==res.result[k].I2){
                        m.records[j].sys_child_financial=res.result[k];
                        break;
                    }
                }
            }
        }
        //rendering the column
        $("#grid__ID td[data-id=_Financial_Approval]").each(function(index){
            if(m.records[index].sys_child_financial!=undefined){
                var tt="";
                if(m.records[index].sys_child_financial.Data.Action=='approve') tt="<i rid="+index+" style='color:green;padding-left:10px;cursor:pointer' class='fas fa-check'></i>"
                if(m.records[index].sys_child_financial.Data.Action=='denay')   tt="<i rid="+index+" style='color:red;padding-left:10px;cursor:pointer' class='fas fa-times'></i>"
                $(this).html(tt);
                $(this).find('i').on('click',function(){
                    var k=parseInt($(this).attr('rid'));
                    $vm.show_module(m.financial_approval_module,{readonly:1, record:m.records[k].sys_child_financial, parent:m.records[k]});
                })
            }
            if(m.records[index].sys_child_financial==undefined || m.records[index].sys_child_financial.Data.action=='denay' ){
                if(parseFloat(m.records[index].Data.Total_Amount)>3000){
                    $(this).next('td').html('');
                    $(this).next('td').next('td').html('');
                }
            }
        });
    })
}