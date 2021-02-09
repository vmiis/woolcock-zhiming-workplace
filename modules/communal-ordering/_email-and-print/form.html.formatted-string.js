//-----------------------------------------
m.get_form_print_string=function(record,callback){
    $.get($vm.module_list['communal-ordering-print'].url,function(txt){
        var d=record.Submit_date.substring(0,10).replace(/-/g,'');
        txt=txt.replace('#Purchase Order No#',d+"-"+record.UID);
        txt=txt.replace('#Account No#',record.Data.Supplier_Account_Number);
        txt=txt.replace('#V_Name#',record.Data.Supplier_Name);
        txt=txt.replace('#V_Address#',record.Data.Supplier_Address);
        txt=txt.replace('#V_Phone#',record.Data.Supplier_Phone);
        txt=txt.replace('#V_Fax#',record.Data.Supplier_Fax);
        txt=txt.replace('#D_Name#',record.Data.Requestor_Name);
        txt=txt.replace('#D_Address#',record.Data.Deliver_Address);
        txt=txt.replace('#Q_No#',record.Data.Quotation_Number);
        txt=txt.replace('#P_Code#',record.Data.Project_Code);
        txt=txt.replace('#Sub Total#',record.Data.Sub_Total);
        txt=txt.replace('#SDelivery#',record.Data.Delivery);
        txt=txt.replace('#GST#',record.Data.GST_Amount);
        txt=txt.replace('#Grand Total#',record.Data.Total_Amount);
        var Items=record.Data.items;
        var Len=Items.length;
        for(var i=0;i<15;i++){
            var I=i+1;
            var T1="#No"+I+"#";
            var T2="#D"+I+"#";
            var T3="#Q"+I+"#";
            var T4="#P"+I+"#";
            var T5="#A"+I+"#";
            var T6="#C"+I+"#";
            var T7="#Nm"+I+"#";
            if(i<Len){
                txt=txt.replace(T1,Items[i].Item_No);
                txt=txt.replace(T2,Items[i].Description);
                txt=txt.replace(T3,Items[i].Unit_Price);
                txt=txt.replace(T4,Items[i].Quantity);
                txt=txt.replace(T5,Items[i].Amount);
                txt=txt.replace(T6,Items[i].Project_Code);
                txt=txt.replace(T7,Items[i].Name_of_person_ordering);
            }
            else{
                txt=txt.replace(T1,'&nbsp;');
                txt=txt.replace(T2,'&nbsp;');
                txt=txt.replace(T3,'&nbsp;');
                txt=txt.replace(T4,'&nbsp;');
                txt=txt.replace(T5,'&nbsp;');
                txt=txt.replace(T6,'&nbsp;');
                txt=txt.replace(T7,'&nbsp;');
            }
            var V1=record.Total_Amount
        }
        txt=txt.replace(/undefined/g,'');
        /*
        ddd['form']=txt;
        open_model__ID();
        $('#msg__ID').text('Sending email ... please wait!');
        $vm.vmpost(url,ddd,function(code){
            close_model__ID();
            callback(code)
        });
        */
       callback(txt);
    },'text');
}
//-----------------------------------------
        /*
        var w=window.open('');
        w.document.title="print version";
        w.document.body.innerHTML=txt;
        */
