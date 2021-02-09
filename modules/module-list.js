(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) alert(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var modules={
        "main-panel":{url:$vm.hosting_path+"/modules/panels/main-panel.html",description:"main panel",router:1},
        "printers":{url:$vm.hosting_path+"/modules/operations/printers.html",description:"printers",router:1},

        "communal-ordering-data-self":{
            title:'My communal ordering records',
            url:$H+"/communal-ordering/order/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form-self", 
            description:"Communal ordering data",
            self:1,
            
            lab_manager_approval_module:prefix+'communal-ordering-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'communal-ordering-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            financial_approval_module:prefix+'communal-ordering-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'communal-ordering-receive-form',
            receive_table:"communal-ordering-receive",
            print:"communal-ordering-print",
        },
        "communal-ordering-form-self":{
            title:'Communal ordering form',
            url:$H+"/communal-ordering/order/form.html",
            Table:"communal-ordering",
            
            supplier_table:"communal-ordering-company",
            supervisor_table:"communal-ordering-supervisor",
            print:"communal-ordering-print",
            
            description:"Communal ordering form",
            self:1,
            router:1
        },
        "communal-ordering-data":{
            title:'Communal ordering records',
            url:$H+"/communal-ordering/order/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form", 
            description:"Communal ordering data",
            router:1,
            
            lab_manager_approval_module:prefix+'communal-ordering-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'communal-ordering-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            financial_approval_module:prefix+'communal-ordering-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'communal-ordering-receive-form',
            receive_table:"communal-ordering-receive",
            print:"communal-ordering-print",
        },
        "communal-ordering-form":{
            title:'Communal ordering form',
            url:$H+"/communal-ordering/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
            print:"communal-ordering-print",
        },
        "communal-ordering-print-version-template":{
            url:$H+"/communal-ordering/order/print-version-template.html",
        },
        /*
        "communal-ordering-print":{
            title:'Communal ordering form print version',
            url:$H+"/communal-ordering/order/print-version.html",
            description:"Communal ordering form print version",
        },
        */
        "communal-ordering-pdf-form":{
            title:'Communal ordering pdf form',
            url:$H+"/communal-ordering/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering pdf form",
        },
        "communal-ordering-lab-manager-approval-form":{
            title:"Communal ordering lab manager approval",
            url:$H+"/communal-ordering/lab-manager-approval/form.html",
            Table:"communal-ordering-lab-manager-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering lab manager approval",
        },
        "communal-ordering-supervisor-approval-form":{
            title:"Communal ordering supervisor approval",
            url:$H+"/communal-ordering/supervisor-approval/form.html",
            Table:"communal-ordering-supervisor-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering supervisor approval",
        },
        "communal-ordering-financial-approval-form":{
            title:"Communal ordering financial approval",
            url:$H+"/communal-ordering/financial-approval/form.html",
            Table:"communal-ordering-financial-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering financial approval",
        },
        "communal-ordering-receive-form":{
            title:"Communal ordering received form",
            url:$H+"/communal-ordering/receive/form.html",
            Table:"communal-ordering-receive",
            parent_table:"communal-ordering",
            description:"Communal ordering received",
        },

        

        "communal-ordering-diagram":{
            title:"Communal ordering diagram",
            url:$H+"/communal-ordering/diagram/diagram.html",
            description:"Communal ordering diagram",
            router:1,
        },


        "communal-ordering-company-data":{
            title:'Company records',
            url:$H+"/supplier/data.html",
            Table:"communal-ordering-company",
            form_module:"communal-ordering-company-form", 
        },
        "communal-ordering-company-form":{
            title:'Company form',
            url:$H+"/supplier/form.html",
            Table:"communal-ordering-company",
        },
        "communal-ordering-supervisor-data":{
            title:'supervisor records',
            url:$H+"/supervisor/data.html",
            Table:"communal-ordering-supervisor",
            form_module:"communal-ordering-supervisor-form", 
        },
        "communal-ordering-supervisor-form":{
            title:'Supervisor form',
            url:$H+"/supervisor/form.html",
            Table:"communal-ordering-supervisor",
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
