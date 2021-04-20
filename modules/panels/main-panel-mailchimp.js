var mailchimp_query=function(UID){
    var t=sessionStorage.getItem("mailchimp_oauth");
    if(t==null){
        alert("You haven't login!");
        return "";
    }
    t=JSON.parse(t);
    var access_token=t.access_token;
    $vm.request({cmd:"find",table:"mailchimp-api",query:{UID:UID},options:{}},function(res){
        var records=res.result;
        if(records!=undefined && records.length==1){
            var host='us3.api.mailchimp.com';
            var name=records[0].Data.Name;
            var path=records[0].Data.Path;
            if(path.indexOf('[INPUT]')!=-1){
                var p=prompt("Input", "");
                if(p==null) return;
                path=path.replace('[INPUT]',p);
            }      
            var array=records[0].Data.Array;
            var columns=records[0].Data.Columns;
            path=path.replace(/ /g,'%20');
            path=path.replace(/\n/g,'').replace(/\r/g,'');
            
            $vm.request({cmd:'mailchimp-api',access_token:access_token,host:host,path:"/3.0"+path},function(res){
                var v={};
                try{
                    v=JSON.parse(res.result);
                }
                catch(e){
                    $vm.show_module('jsonv',{json_data:{err:v}});
                    return;
                }
                if(array!=""){
                    var type=columns.indexOf('|');
                    if(type!=-1) $vm.show_module('gridv',{name:name,json_data:v,array:array,columns:columns})
                    else $vm.show_module('arrayv',{name:name,json_data:v,array:array,columns:columns})
                }
                else{
                    $vm.show_module('jsonv',{json_data:v})
                }
            })
        }
        else alert('No report.')
    })
}
