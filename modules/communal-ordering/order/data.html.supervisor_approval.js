var load_supervisor_approval=function(query,options){
    //load joined records parent.UID=child.I2
    var cmd="find"; 
    var table=m.supervisor_approval_table;
    var req={cmd:cmd,table:table,query:query,options:options}
    $vm.request(req,function(res){
        if(res.status=='np'){
            $("#grid__ID td[data-id=_Supervisor_Approval]").each(function(index){
                $(this).html('');
            })
        }
        //attach child record
        if(res.result.length!=undefined){
            for(var k=0;k<res.result.length;k++){
                for(var j=0;j<m.records.length;j++){
                    if(m.records[j].UID==res.result[k].I2){
                        m.records[j].sys_child_supervisor=res.result[k];
                        break;
                    }
                }
            }
        }
        //rendering the column
        $("#grid__ID td[data-id=_Supervisor_Approval]").each(function(index){
            if(m.records[index].sys_child_supervisor!=undefined){
                var tt="";
                if(m.records[index].sys_child_supervisor.Data.Action=='approve') tt="<i rid="+index+" style='color:green;padding-left:10px;cursor:pointer' class='fas fa-check'></i>"
                if(m.records[index].sys_child_supervisor.Data.Action=='denay')   tt="<i rid="+index+" style='color:red;padding-left:10px;cursor:pointer' class='fas fa-times'></i>"
                $(this).html(tt);
                $(this).find('i').on('click',function(){
                    var k=parseInt($(this).attr('rid'));
                    $vm.show_module(m.supervisor_approval_module,{readonly:1, record:m.records[k].sys_child_supervisor, parent:m.records[k]});
                })
            }
            if(m.records[index].sys_child_supervisor==undefined || m.records[index].sys_child_supervisor.Data.action=='denay' ){
                $(this).next('td').html('');
                $(this).next('td').next('td').html('');
                $(this).next('td').next('td').next('td').html('');
            }
        });
    })
}
