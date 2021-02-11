var item_a_list=function(){
    //----------------------------------
    //item a part
    m.item_a_fields="Item_No,Description,Unit_Price,Quantity,Amount,Project_Code,Name_of_person_ordering,_Remove";
    //----------------------------------
    $('#item_a_add__ID').on('click',function(){ m.item_a_add(); })
    //----------------------------------
    m.item_a_cell_render=function(records,I,field,td,set_value,source){
        switch(field){
            case "Amount":
                td.find('div:first').removeAttr('contenteditable');
                break;
            case "GST":
                var html='<input type=checkbox />';
                $vm.render_checkbox_field(records[I],'__ID',td,html)
                td.find('input').on('change',function(){
                    cal();
                })
                break;
        }
    }
    //----------------------------------
    m.item_a_after_change=function(records,I,field,td,set_value,source){
        switch(field){
            case "Unit_Price":
            case "Quantity":
            /*case "GST":*/
                cal();
                break;
        }
    }
    //----------------------------------
    m.item_a_after_remove=function(){
        cal();
    }
    $('#F__ID input[name=Delivery]').on('change',function(){
        cal();
    })
    //----------------------------------
    var cal=function(){
        var total=0,subtotal=0,gst=0,delivery=0;
        for(var i=0;i<m.item_a_records.length;i++){
            var p=parseFloat(m.item_a_records[i].Unit_Price);
            var q=parseFloat(m.item_a_records[i].Quantity);
            if(m.item_a_records[i].Unit_Price=='') p=0;
            if(m.item_a_records[i].Quantity=='') q=0;
            var a=p*q;
            /*
            if(m.item_a_records[i].GST=='1'){
                gst+=a*0.1;
                a=a*1.1;
            }
            */
            m.item_a_records[i].Amount=a.toFixed(2);
            subtotal+=a;
        }
        var dd=$('#F__ID input[name=Delivery]').val();
        if(dd=='') delivery=0;
        else delivery=parseFloat(dd);
        gst=0.1*(subtotal+delivery);
        total=subtotal+delivery+gst;
        $('#F__ID input[name=Sub_Total]').val(subtotal.toFixed(2));
        $('#F__ID input[name=Delivery]').val(delivery.toFixed(2));
        $('#F__ID input[name=GST_Amount]').val(gst.toFixed(2));
        $('#F__ID input[name=Total_Amount]').val(total.toFixed(2));
        m.item_a_render();
    }
    //----------------------------------
}
//-----------------------------------
var item_a_render=function(){
    //-------item a part
    m.item_a_records=[]; if(m.input.record!=undefined && m.input.record.Data.items!=undefined) m.item_a_records=m.input.record.Data.items;
    m.item_a_render();
    //-------
}
//-----------------------------------
