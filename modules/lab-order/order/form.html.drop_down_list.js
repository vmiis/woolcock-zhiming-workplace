var drop_down_list=function(){
	jQuery.ajaxSetup({async:false});
	//-------------------------------------
	var list_m_req={cmd:"find",table:m.supplier_table,skip:0,limit:100}
	$vm.request(list_m_req,function(res){
		var supplier=res.result;
		if(res.result.length>0){
			var list=';';
			for(var i=0;i<res.result.length;i++){
				if(list!='') list+=','
				list+=res.result[i].Data.Name;
			}
			$vm.set_dropdown_list_from_text($('#supplier__ID'),list);
			$('#supplier__ID').on('change',function(){
				var name=this.value;
				for(var i=0;i<supplier.length;i++){
					if(supplier[i].Data.Name==name){
						$('#F__ID input[name=Supplier_Email]').val(supplier[i].Data.Email);
						$('#F__ID input[name=Supplier_Phone]').val(supplier[i].Data.Phone);
						$('#F__ID input[name=Supplier_Fax]').val(supplier[i].Data.Fax);
						$('#F__ID input[name=Supplier_Account_Number]').val(supplier[i].Data.Account_Number);
						$('#F__ID textarea[name=Supplier_Address]').val(supplier[i].Data.Address);
						break;
					}
				}
			})
		}
	})
	//-------------------------------------
	var list_m_req={cmd:"find",table:m.supervisor_table,skip:0,limit:100}
	$vm.request(list_m_req,function(res){
		var supervisor=res.result;
		if(res.result.length>0){
			var list=';';
			for(var i=0;i<res.result.length;i++){
				if(list!='') list+=','
				list+=res.result[i].Data.Name;
			}
			$vm.set_dropdown_list_from_text($('#supervisor__ID'),list);
			$('#supervisor__ID').on('change',function(){
				var name=this.value;
				for(var i=0;i<supervisor.length;i++){
					if(supervisor[i].Data.Name==name){
						$('#F__ID input[name=Supervisor_Email]').val(supervisor[i].Data.Email);
						$('#F__ID input[name=Supervisor_Group]').val(supervisor[i].Data.Group);
						$('#F__ID input[name=Project_Code]').val(supervisor[i].Data.Project_Code);
						break;
					}
				}
			})
		}
	})
	//-------------------------------------
	jQuery.ajaxSetup({async:true});
}
