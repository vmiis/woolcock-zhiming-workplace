var load_received_confirm=function(query,options){
    //load joined records parent.UID=child.I2
    var cmd="find"; 
    var table=m.receive_table;
    var req={cmd:cmd,table:table,query:query,options:options}
    $vm.request(req,function(res){
        if(res.status=='np'){
            $("#grid__ID td[data-id=_Received]").each(function(index){
                $(this).html('');
            })
        }
        //attach child record
        if(res.result.length!=undefined){
            for(var k=0;k<res.result.length;k++){
                for(var j=0;j<m.records.length;j++){
                    if(m.records[j].UID==res.result[k].I2){
                        m.records[j].sys_child_received=res.result[k];
                        break;
                    }
                }
            }
        }
        //rendering the column
        $("#grid__ID td[data-id=_Received]").each(function(index){
            if(m.records[index].sys_child_received!=undefined){
                var tt="";
                tt="<i rid="+index+" style='color:green;padding-left:10px;cursor:pointer' class='fas fa-check'></i>"
                //if(m.records[index].sys_child_received.Data.Action=='approve') tt="<i rid="+index+" style='color:green;padding-left:10px;cursor:pointer' class='fas fa-check'></i>"
                //if(m.records[index].sys_child_received.Data.Action=='denay')   tt="<i rid="+index+" style='color:red;padding-left:10px;cursor:pointer' class='fas fa-times'></i>"
                $(this).html(tt);
                $(this).find('i').on('click',function(){
                    var k=parseInt($(this).attr('rid'));
                    $vm.show_module(m.receive_module,{readonly:1, record:m.records[k].sys_child_received, parent:m.records[k]});
                })
            }
            if(m.records[index].sys_child_received==undefined || m.records[index].sys_child_received.Data.action=='denay' ){
                //no next
            }
        });
    })
}
