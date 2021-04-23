var dynamics_365_query=function(UID){
    var t=sessionStorage.getItem("microsoft_oauth");
    if(t==null){
        alert("You haven't login!");
        return "";
    }
    t=JSON.parse(t);
    var access_token=t.a.access_token;
    var dt=$vm.jwt_decode(access_token);
    var exp=dt.exp;
    if(Date.now() >= exp * 1000){
        alert("Microsoft access token is expired! Please refresh.");
        return;
    }
    $vm.request({cmd:"find",table:"microsoft-api",query:{UID:UID},options:{}},function(res){
        var records=res.result;
        if(records!=undefined && records.length==1){
            var host='woolcock.crm6.dynamics.com';
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
            if(path.indexOf("$top=")==-1 && path.indexOf("$count=true")!=-1 ) $vm.show_module('microsoft-data',{name:name,path:path,array:array,columns:columns})
            else{            
                $vm.request({cmd:'microsoft-api',access_token:access_token,host:host,path:path},function(res){
                    var v=res.result;
                    if(res.status=="err"){
                        $vm.show_module('jsonv',{json_data:v})
                    }
                    else if(array!=""){
                        //$vm.show_module('gridv',{name:name,json_data:JSON.parse(v),array:array,columns:columns})
                        var type=columns.indexOf('|');
                        if(type!=-1) $vm.show_module('gridv',{name:name,json_data:JSON.parse(v),array:array,columns:columns})
                        else $vm.show_module('arrayv',{name:name,json_data:JSON.parse(v),array:array,columns:columns})
                    }
                    else{
                        $vm.show_module('jsonv',{json_data:JSON.parse(v)})
                    }
                })
            }
        }
        else alert('No report.')
        console.log(res);
    })
}
