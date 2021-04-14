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
        "diagram":                                  {url:$H+"/diagram/diagram.html",router:1},
        "lab-order-panel":{url:$vm.hosting_path+"/modules/panels/lab-order-panel.html",description:"lab order panel",router:1},
        "ad-user":{url:$vm.hosting_path+"/modules/it/ad-user.html",description:"AD User",router:1},
        "crm-volunteer-data":{url:$vm.hosting_path+"/modules/it/crm-volunteer-data.html",description:"crm-volunteer",form_module:"crm-form",router:1},
        "crm-project-data":{url:$vm.hosting_path+"/modules/it/crm-project-data.html",description:"crm-project",form_module:"crm-form",router:1},
        "crm-study-data":{url:$vm.hosting_path+"/modules/it/crm-study-data.html",description:"crm-study",form_module:"crm-form",router:1},
        "crm-form":             {url:$vm.hosting_path+"/modules/it/crm-form.html",description:"crm-form"},
        "temperature-reports":  {url:$vm.hosting_path+"/modules/it/temperature-reports.html",description:"Temperature reports"},
        "printers":{url:$vm.hosting_path+"/modules/operations/printers.html",description:"printers",router:1},
        "referrers":{
            url:$vm.hosting_path+"/modules/coreplus/referrers/data.html",
            Table:"referrer",
            form_module:"jsonv",
            description:"Referrers"
        },
        "referrals":{
            url:$vm.hosting_path+"/modules/coreplus/referrals/data.html",
            Table:"referral",
            form_module:"jsonv",
            description:"Referrals",
        },
        "clinics":{
            url:$vm.hosting_path+"/modules/coreplus/clinics/data.html",
            Table:"clinic",
            form_module:"jsonv",
            description:"Clinics"
        },
        "patients":{
            url:$vm.hosting_path+"/modules/coreplus/patients/data.html",
            Table:"patient",
            form_module:"jsonv",
            description:"Patients"
        },
        "coreplus-datatable-relationships":{
            url:$H+"/diagram/coreplus-datatable-relationships.html",
            router:1
        },
        "coreplus-referral-diagram":{
            url:$H+"/diagram/referral.html",
            router:1
        },
        "test": {
            url:$vm.hosting_path+"/modules/excel/test.html",
            Table:"file",
            description:"test"
        },
        "thankq-all-transactions": {
            url:$vm.hosting_path+"/modules/excel/thankq-all-transactions.html",
            Table:"file",
            description:"thankq-all-transactions"
        },
        "thankq-all-people": {
            url:$vm.hosting_path+"/modules/excel/thankq-all-people.html",
            Table:"file",
            description:"thankq-all-people"
        },
        "thankq-people-fields": {
            url:$vm.hosting_path+"/modules/excel/thankq-people-to-re-constituent.html",
            Table:"file",
            description:"thankq-all-people-fields"
        },
        "thankq-t-fields": {
            url:$vm.hosting_path+"/modules/excel/thankq-t-to-gift.html",
            Table:"file",
            description:"thankq-t-fields"
        },
        "database-backup-rt":{
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"research-tools",
        },
        "database-backup-SleepwareG3_Adult":{
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"SleepwareG3_Adult",
        },
        "database-backup-SleepwareG3_Paeds":{
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"SleepwareG3_Paeds",
        },
        "lab-order-data-self":{
            title:'My communal ordering records',
            url:$H+"/lab-order/order/data.html",
            Table:"communal-ordering",
            form_module:"lab-order-form-self", 
            description:"Communal ordering data",
            self:1,
            
            lab_manager_approval_module:prefix+'lab-order-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'lab-order-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            financial_approval_module:prefix+'lab-order-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'lab-order-receive-form',
            receive_table:"communal-ordering-receive",
            print:"lab-order-print",
        },
        "lab-order-form-self":{
            title:'Communal ordering form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            
            supplier_table:"communal-ordering-company",
            supervisor_table:"communal-ordering-supervisor",
            print:"lab-order-print",
            
            description:"Communal ordering form",
            self:1,
            router:1
        },
        "lab-order-data":{
            title:'Communal ordering records',
            url:$H+"/lab-order/order/data.html",
            Table:"communal-ordering",
            form_module:"lab-order-form", 
            description:"Communal ordering data",
            router:1,
            
            lab_manager_approval_module:prefix+'lab-order-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'lab-order-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            financial_approval_module:prefix+'lab-order-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'lab-order-receive-form',
            receive_table:"communal-ordering-receive",
            print:"lab-order-print",
        },
        "lab-order-form":{
            title:'Communal ordering form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
            print:"lab-order-print",
        },
        "lab-order-print-version-template":{
            url:$H+"/lab-order/order/print-version-template.html",
        },
        /*
        "lab-order-print":{
            title:'Communal ordering form print version',
            url:$H+"/lab-order/order/print-version.html",
            description:"Communal ordering form print version",
        },
        */
        "lab-order-pdf-form":{
            title:'Communal ordering pdf form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering pdf form",
        },
        "lab-order-lab-manager-approval-form":{
            title:"Communal ordering lab manager approval",
            url:$H+"/lab-order/lab-manager-approval/form.html",
            Table:"communal-ordering-lab-manager-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering lab manager approval",
        },
        "lab-order-supervisor-approval-form":{
            title:"Communal ordering supervisor approval",
            url:$H+"/lab-order/supervisor-approval/form.html",
            Table:"communal-ordering-supervisor-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering supervisor approval",
        },
        "lab-order-financial-approval-form":{
            title:"Communal ordering financial approval",
            url:$H+"/lab-order/financial-approval/form.html",
            Table:"communal-ordering-financial-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering financial approval",
        },
        "lab-order-receive-form":{
            title:"Communal ordering received form",
            url:$H+"/lab-order/receive/form.html",
            Table:"communal-ordering-receive",
            parent_table:"communal-ordering",
            description:"Communal ordering received",
        },

        

        "lab-order-diagram":{
            title:"Communal ordering diagram",
            url:$H+"/lab-order/diagram/diagram.html",
            description:"Communal ordering diagram",
            router:1,
        },


        "lab-order-company-data":{
            title:'Company records',
            url:$H+"/supplier/data.html",
            Table:"communal-ordering-company",
            form_module:"lab-order-company-form", 
        },
        "lab-order-company-form":{
            title:'Company form',
            url:$H+"/supplier/form.html",
            Table:"communal-ordering-company",
        },
        "lab-order-supervisor-data":{
            title:'supervisor records',
            url:$H+"/supervisor/data.html",
            Table:"communal-ordering-supervisor",
            form_module:"lab-order-supervisor-form", 
        },
        "lab-order-supervisor-form":{
            title:'Supervisor form',
            url:$H+"/supervisor/form.html",
            Table:"communal-ordering-supervisor",
        },
        "cms-sleep-study__":{
            title:"Sleep study",
            url:$H+"/cms/sleep-study/data.html",
            Table:"cms-sleep-study",
            description:"Sleep study",
            router:1,
        },
        "cms-sleep-study":{
            title:"Sleep study",
            url:$H+"/cms/sleep-study/data.html",
            Table:"400448",
            form_module:"jsonv",
            description:"Sleep study",
            router:1,
        },
        "mailchimp-search":{
            title:"Mailchimp",
            url:$H+"/mailchimp/search.html",
            description:"Mailchimp",
            router:1,
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
