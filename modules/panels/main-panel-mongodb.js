var mongodb_query=function(UID){
    $vm.request({cmd:"find",table:"mongodb-api",query:{UID:UID},options:{}},function(res){
        var records=res.result;
        if(records!=undefined && records.length==1){
            var name=records[0].Data.Name;
            var table=records[0].Data.Table;
            var cmd=records[0].Data.Command;
            var query=records[0].Data.Query;
            var array=records[0].Data.Array;
            var columns=records[0].Data.Columns;
            
            if(query.indexOf('[INPUT]')!=-1){
                var p=prompt("Input", "");
                if(p==null) return;
                query=query.replace('[INPUT]',p);
            }      
            var array=records[0].Data.Array;
            var columns=records[0].Data.Columns;
            
            var pipeline;
            try{
                pipeline=JSON.parse(query);
            }
            catch(e){
                alert(e);
                return;
            }
            var req={cmd:cmd,table:table,pipeline:pipeline}
            $vm.request(req,function(res){
                console.log(res.result)
                var v=res;
                if(res.status=="err"){
                    $vm.show_module('jsonv',{json_data:v.result})
                }
                else if(array!=""){
                    var type=columns.indexOf('|');
                    if(type!=-1) $vm.show_module('gridv',{name:name,json_data:v,array:array,columns:columns})
                    else $vm.show_module('arrayv',{name:name,json_data:v,array:array,columns:columns})
                }
                else{
                    $vm.show_module('jsonv',{json_data:v})
                }
            });
        }
        else alert('No report.')
    })
}
