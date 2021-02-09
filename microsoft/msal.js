$vm.m365_init=function(){
    var h=window.location.href.substring(0, window.location.href.split('?')[0].lastIndexOf('/'));
    $vm.m365_scope={
        scopes: ["user.read"]
    };
    $vm.msalConfig={
        auth: {
            clientId: '2219c626-e431-469b-857b-9df33fd7fb6e', 
            authority: "https://login.microsoftonline.com/common",
            redirectUri:h+"/microsoft/msal.html",
        },
        cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: true
        },
    };
    $vm.m365_msal=new msal.PublicClientApplication($vm.msalConfig);
    $vm.m365_signin=function (){
        $vm.m365_msal.loginPopup($vm.m365_scope).then(function (resp) {  
            if (resp!==null) {
                $vm.microsoft_token=resp.idToken;
                $vm.user_name_3rd=resp.account.name;
                $vm.issuer_3rd="microsoft";
                if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
            } else {
            }
        })
    }
    $vm.m365_signout=function() {
        $vm.m365_msal.logout();
    }
    //------------------------------------
    if(window.location.href.indexOf("signout=1")!=-1){
        $vm.m365_signout();
    }
    //------------------------------------
}
$vm.m365_init();

