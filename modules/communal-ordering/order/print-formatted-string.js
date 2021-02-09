//-----------------------------------------
m.get_order_print_string=function(record){
    var txt=`
        <table style='border-collapse: collapse;'><tr><td width="880">            
                    <table style='width:100%;border-collapse: collapse'>
                        <tr>
                            <td style='width:60%;vertical-align:top;padding-right:30px'>
                                <table style='border-collapse: collapse;'><tr><td style='font-size:150%'><b>Purchase Order</b><br><br></td></tr></table>
                                <table style='width:100%;border-collapse: collapse'>
                                    <tr><td style='width:30%'>Purchase Order No:</td><td style='width:70%;border:1px solid black;padding:4px;'>#Purchase Order No#</td></tr>
                                    <tr><td style='width:30%'><b>Vendor Details:</b></td><td style='width:70%'></td></tr>
                                    <tr><td style='width:30%'>Account No:</td><td style='width:70%;border:1px solid black;padding:4px;'>#Account No#</td></tr>
                                    <tr><td style='width:30%'>Name:</td><td style='width:70%;border:1px solid black;padding:4px;'>#V_Name#</td></tr>
                                    <tr><td style='width:30%'>Address:</td><td style='width:70%;border:1px solid black;padding:4px;'><div style='min-height:60px'>#V_Address#</div></td></tr>
                                    <tr><td style='width:30%'>Phone:</td><td style='width:70%;border:1px solid black;padding:4px;'>#V_Phone#</td></tr>
                                    <tr><td style='width:30%'>Fax:</td><td style='width:70%;border:1px solid black;padding:4px;'>#V_Fax#</td></tr>
                                </table>
                            </td>
                            <td style='width:40%'>
                            <img src='http://image.rt.org.au/logo.jpg' width="300"/>
                            <br>
                                <br>
                                <br>
                                <b>Woolcock Institute of Medical Research Ltd</b><br>
                                ABN: 88002 198 905<br>
                                431, Glebe Point Road, Glebe NSW 2034
                            </td>
                        </tr>
                    </table>
                    <hr>
                    <table style='width:100%;border-collapse: collapse'>
                        <tr>
                            <td style='width:60%;vertical-align:top;padding-right:30px'>
                                <table><tr><td style='font-size:150%'><b>Deliver to:</b></td></tr></table>
                                <table style='width:100%;border-collapse: collapse'>
                                    <tr><td style='width:30%'>Name:</td><td style='width:70%;border:1px solid black;padding:4px;'>#D_Name#</td></tr>
                                    <tr><td style='width:30%'>Address:</td><td style='width:70%;border:1px solid black;padding:4px;'><div style='min-height:60px'>#D_Address#</div></td></tr>
                                </table>
                            </td>
                            <td style='width:40%'>
                                <table><tr><td style='font-size:150%'><b>Billing to:</b></td></tr></table>
                                <table style='border:1px solid black;padding:4px;'>
                                    <tr><td colspan=2><b style='font-size:130%'>Finance Department</b></td></tr>
                                    <tr><td style='width:30%'>Phone:</td><td style='width:70%'>(02) 9114 0354</td></tr>
                                    <tr><td style='width:30%'>Fax:</td><td style='width:70%;'>(02) 9114 0013</td></tr>
                                    <tr><td style='width:30%'>Email:</td><td style='width:70%;'>zennia.murray@woolcock.org.au</td></tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <hr>
                    <table style='width:100%;border-collapse: collapse;font-size:12px'>
                        <tr><th  style='border:1px solid black;padding:4px;'>Item No.</th><th  style='border:1px solid black;padding:4px;'>Description</th><th  style='border:1px solid black;padding:4px;'>Quantity</th><th  style='border:1px solid black;padding:4px;'>Unit Price</th><th  style='border:1px solid black;padding:4px;'>Amount</th><th  style='border:1px solid black;padding:4px;'>Project Code</th><th  style='border:1px solid black;padding:4px;'>Name of Person Ordering</th></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No1#</td><td style='border:1px solid black;padding:4px;'>#D1#</td><td style='border:1px solid black;padding:4px;'>#Q1#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P1#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A1#</td><td style='border:1px solid black;padding:4px;'>#C1#</td><td style='border:1px solid black;padding:4px;'>#Nm1#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No2#</td><td style='border:1px solid black;padding:4px;'>#D2#</td><td style='border:1px solid black;padding:4px;'>#Q2#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P2#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A2#</td><td style='border:1px solid black;padding:4px;'>#C2#</td><td style='border:1px solid black;padding:4px;'>#Nm2#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No3#</td><td style='border:1px solid black;padding:4px;'>#D3#</td><td style='border:1px solid black;padding:4px;'>#Q3#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P3#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A3#</td><td style='border:1px solid black;padding:4px;'>#C3#</td><td style='border:1px solid black;padding:4px;'>#Nm3#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No4#</td><td style='border:1px solid black;padding:4px;'>#D4#</td><td style='border:1px solid black;padding:4px;'>#Q4#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P4#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A4#</td><td style='border:1px solid black;padding:4px;'>#C4#</td><td style='border:1px solid black;padding:4px;'>#Nm4#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No5#</td><td style='border:1px solid black;padding:4px;'>#D5#</td><td style='border:1px solid black;padding:4px;'>#Q5#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P5#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A5#</td><td style='border:1px solid black;padding:4px;'>#C5#</td><td style='border:1px solid black;padding:4px;'>#Nm5#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No6#</td><td style='border:1px solid black;padding:4px;'>#D6#</td><td style='border:1px solid black;padding:4px;'>#Q6#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P6#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A6#</td><td style='border:1px solid black;padding:4px;'>#C6#</td><td style='border:1px solid black;padding:4px;'>#Nm6#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No7#</td><td style='border:1px solid black;padding:4px;'>#D7#</td><td style='border:1px solid black;padding:4px;'>#Q7#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P7#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A7#</td><td style='border:1px solid black;padding:4px;'>#C7#</td><td style='border:1px solid black;padding:4px;'>#Nm7#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No8#</td><td style='border:1px solid black;padding:4px;'>#D8#</td><td style='border:1px solid black;padding:4px;'>#Q8#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P8#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A8#</td><td style='border:1px solid black;padding:4px;'>#C8#</td><td style='border:1px solid black;padding:4px;'>#Nm8#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No9#</td><td style='border:1px solid black;padding:4px;'>#D9#</td><td style='border:1px solid black;padding:4px;'>#Q9#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P9#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A9#</td><td style='border:1px solid black;padding:4px;'>#C9#</td><td style='border:1px solid black;padding:4px;'>#Nm9#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No10#</td><td style='border:1px solid black;padding:4px;'>#D10#</td><td style='border:1px solid black;padding:4px;'>#Q10#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P10#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A10#</td><td style='border:1px solid black;padding:4px;'>#C10#</td><td style='border:1px solid black;padding:4px;'>#Nm10#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No11#</td><td style='border:1px solid black;padding:4px;'>#D11#</td><td style='border:1px solid black;padding:4px;'>#Q11#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P11#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A11#</td><td style='border:1px solid black;padding:4px;'>#C11#</td><td style='border:1px solid black;padding:4px;'>#Nm11#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No12#</td><td style='border:1px solid black;padding:4px;'>#D12#</td><td style='border:1px solid black;padding:4px;'>#Q12#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P12#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A12#</td><td style='border:1px solid black;padding:4px;'>#C12#</td><td style='border:1px solid black;padding:4px;'>#Nm12#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No13#</td><td style='border:1px solid black;padding:4px;'>#D13#</td><td style='border:1px solid black;padding:4px;'>#Q13#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P13#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A13#</td><td style='border:1px solid black;padding:4px;'>#C13#</td><td style='border:1px solid black;padding:4px;'>#Nm13#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No14#</td><td style='border:1px solid black;padding:4px;'>#D14#</td><td style='border:1px solid black;padding:4px;'>#Q14#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P14#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A14#</td><td style='border:1px solid black;padding:4px;'>#C14#</td><td style='border:1px solid black;padding:4px;'>#Nm14#</td></tr>
                        <tr><td style='border:1px solid black;padding:4px;'>#No15#</td><td style='border:1px solid black;padding:4px;'>#D15#</td><td style='border:1px solid black;padding:4px;'>#Q15#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#P15#</td><td style='text-align: right;border:1px solid black;padding:4px;'>#A15#</td><td style='border:1px solid black;padding:4px;'>#C15#</td><td style='border:1px solid black;padding:4px;'>#Nm15#</td></tr>
                        <tr><td style='border-width:0px;padding:4px;'>&nbsp;</td><td  style='border-width:0px'></td><td  style='border-width:0px'></td><td style='border-width:0px;text-align: right;'>Sub total</td><td style='border-width:0px;text-align: right;'><b>$#Sub Total#</b></td></tr>
                        
                        <tr><td style='border-width:0px'><b>Quotation Details:</b></td><td  style='border-width:0px'></td><td  style='border-width:0px'></td><td style='border-width:0px;text-align: right;'>Delivery</td><td style='border-width:0px;text-align: right;'><b>$#SDelivery#</b></td></tr>
                        
                        <tr><td style='border-width:0px'>Quotation No:</td><td style='border:1px solid black;padding:4px;'>#Q_No#</td><td  style='border-width:0px'></td><td style='border-width:0px;text-align: right;'>10% GST</td><td style='border-width:0px;text-align: right;'><b>$#GST#</b></td></tr>
                        
                        <tr><td style='border-width:0px'>Project Code Split (if applicable):</td><td style='border:1px solid black;padding:4px;'>#P_Code#</td><td  style='border-width:0px'></td><td style='border-width:0px;text-align: right;'>Grand Total</td><td style='border-width:0px;text-align: right;'><b>$#Grand Total#</b></td></tr>
                    </table>
        </td></tr></table>
    `
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
    return txt;
}
