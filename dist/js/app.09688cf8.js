(function(e){function t(t){for(var c,n,s=t[0],i=t[1],u=t[2],l=0,_=[];l<s.length;l++)n=s[l],r[n]&&_.push(r[n][0]),r[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(_.length)_.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],c=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},n={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0f0051":"d23388af","chunk-77a6d546":"91621e9e","chunk-162ff1ff":"15a23fae","chunk-21c9e7bf":"9f0142c4","chunk-22f331f4":"0eddfbce","chunk-232f6874":"6dd631a5","chunk-29553eaa":"4ebf8cb5","chunk-5a77cfd8":"5b076632","chunk-768b7ab8":"d647ddc8","chunk-7ef915ac":"ae70a9cd","chunk-8a44c3e0":"5374e90e","chunk-a101e242":"0f232132","chunk-e3695f98":"c0b598d4","chunk-f4b66f66":"eb08a10d"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-21c9e7bf":1,"chunk-8a44c3e0":1,"chunk-e3695f98":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0f0051":"31d6cfe0","chunk-77a6d546":"31d6cfe0","chunk-162ff1ff":"31d6cfe0","chunk-21c9e7bf":"a3c25090","chunk-22f331f4":"31d6cfe0","chunk-232f6874":"31d6cfe0","chunk-29553eaa":"31d6cfe0","chunk-5a77cfd8":"31d6cfe0","chunk-768b7ab8":"31d6cfe0","chunk-7ef915ac":"31d6cfe0","chunk-8a44c3e0":"9e65011b","chunk-a101e242":"31d6cfe0","chunk-e3695f98":"b86ea360","chunk-f4b66f66":"31d6cfe0"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===r))return t()}var _=document.getElementsByTagName("style");for(s=0;s<_.length;s++){u=_[s],l=u.getAttribute("data-href");if(l===c||l===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.request=c,delete n[e],b.parentNode.removeChild(b),a(o)},b.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(b)}).then(function(){n[e]=0}));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise(function(t,a){c=r[e]=[t,a]});t.push(c[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(_);var a=r[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+c+": "+n+")");o.type=c,o.request=n,a[1](o)}r[e]=void 0}};var _=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var _=0;_<u.length;_++)t(u[_]);var b=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var c=a("64a9"),n=a.n(c);n.a},"0351":function(e,t,a){var c={"./Dashboard.vue":["9b1c","chunk-2d0f0051"],"./Layer.vue":["3635","chunk-77a6d546","chunk-21c9e7bf"],"./Login.vue":["dd1d","chunk-77a6d546","chunk-e3695f98"],"./deploy/Apply.vue":["3314","chunk-77a6d546","chunk-162ff1ff"],"./deploy/Deploy.vue":["c75b","chunk-77a6d546","chunk-7ef915ac"],"./deploy/Release.vue":["24bf","chunk-77a6d546","chunk-a101e242"],"./project/Member.vue":["6737","chunk-77a6d546","chunk-22f331f4"],"./project/Project.vue":["882b","chunk-77a6d546","chunk-8a44c3e0"],"./project/Space.vue":["908b","chunk-77a6d546","chunk-5a77cfd8"],"./server/Group.vue":["a34e","chunk-77a6d546","chunk-232f6874"],"./server/Server.vue":["4341","chunk-77a6d546","chunk-f4b66f66"],"./user/Group.vue":["6283","chunk-77a6d546","chunk-29553eaa"],"./user/User.vue":["66b0","chunk-77a6d546","chunk-768b7ab8"]};function n(e){var t=c[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(c)},n.id="0351",e.exports=n},"3dfd":function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"global-container"},[a("router-view")],1)},n=[],r=(a("034f"),a("2877")),o={},s=Object(r["a"])(o,c,n,!1,null,null,null);s.options.__file="App.vue";t["a"]=s.exports},"3fab":function(e,t,a){"use strict";t["a"]={}},4360:function(e,t,a){"use strict";a("cadf"),a("551c"),a("097d");var c=a("2b0e"),n=a("2f62"),r=a("8d81"),o=a.n(r),s={user_id:0,username:"",email:"",mobile:"",privilege:[],role_name:"",truename:""},i={isLogin:function(e){return e.user_id>0},getEmail:function(e){return e.email},getUserName:function(e){return e.username},getUserId:function(e){return e.user_id},getAvatar:function(e){return"https://www.gravatar.com/avatar/"+o()(e.email.toLowerCase())+"? s=512"},getPriv:function(e){return e.privilege?e.privilege:[]},getRoleName:function(e){return e.role_name},getMobile:function(e){return e.mobile},getTrueName:function(e){return e.truename}},u={status:function(e,t){var a=e.commit;a("setUserInfo",{user_id:t.user_id,username:t.username,email:t.email,mobile:t.mobile,privilege:t.privilege,role_name:t.role_name,truename:t.truename})},userSetting:function(e,t){var a=e.commit;a("userSetting",{mobile:t.mobile,truename:t.truename})}},l={setUserInfo:function(e,t){e.user_id=t.user_id,e.username=t.username,e.email=t.email,e.privilege=t.privilege,e.role_name=t.role_name,e.mobile=t.mobile,e.truename=t.truename},userSetting:function(e,t){e.mobile=t.mobile,e.truename=t.truename}},_={namespaced:!0,state:s,getters:i,actions:u,mutations:l};c["default"].use(n["a"]);t["a"]=new n["a"].Store({modules:{account:_}})},4678:function(e,t,a){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){var t=c[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id="4678"},"4f87":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t),function(e){a("cadf"),a("551c"),a("097d");var t,c=a("2b0e"),n=a("5c96"),r=a.n(n),o=(a("0fae"),a("c1df")),s=a.n(o),i=a("3dfd"),u=a("a18c"),l=a("4360"),_=a("9923"),b=a("f1ed"),d=a("9607");a("4f87");e.navigator.language&&(t=e.navigator.language,t=t.toLowerCase()),0!=t.indexOf("en")&&(t="zh-cn"),s.a.locale(t),c["default"].config.productionTip=!1,c["default"].use(r.a),new c["default"]({i18n:_["a"],router:u["a"],store:l["a"],methods:b["a"],data:d["a"],render:function(e){return e(i["a"])}}).$mount("#app")}.call(this,a("c8ba"))},"64a9":function(e,t,a){},"6e41":function(e,t,a){"use strict";var c,n=a("bd86");t["a"]=(c={welcome_to_login_syncd:"欢迎登录 Syncd",username_or_email:"用户名或邮箱",password:"密码",login:"登录",please_input_loginname:"请输入登录名(用户名或邮箱)",please_input_password:"请输入密码",strlen_between:"长度在 {min} 到 {max} 个字符",help:"帮助",contribute_to_syncd:"为 Syncd 做贡献",personal_setting:"个人设置",change_password:"修改密码",sign_out:"退出登录",dashboard:"控制台",deploy:"发布",submit_deploy_apply:"提交发布申请",deploy_manage:"发布单管理",deploying_deploy:"部署发布单",project:"项目",space_manage:"空间管理",project_manage:"项目管理",member_manage:"成员管理",user:"用户",role_manage:"角色管理",user_manage:"用户管理",server:"服务器",cluster_manage:"集群管理",server_manage:"服务器管理",add_cluster:"新增集群",please_input_keyword:"关键词搜索",please_input_keyword_id_or_name:"关键词搜索，支持ID、名称",network_error:"网络错误",unknown_error:"未知错误",operate_success:"操作成功",operate:"操作",name:"名称",edit:"编辑",delete:"删除",server_group_name:"集群名称",name_cannot_empty:"名称不能为空",cancel:"取消",enter:"确定",edit_cluster:"编辑集群",add_server:"新增服务器",edit_server:"编辑服务器",deleted:"已删除",belong_cluster:"所属集群",belong_cluster_cannot_empty:"所属集群不能为空",keyword_search:"关键字搜索",server_name:"服务器名称",please_input_server_name:"请输入服务器名称",IP_HOST_cannot_empty:"IP/HOST不能为空",please_input_server_IP_HOST:"请输入服务器IP/HOST",SSH_port:"SSH端口",SSH_port_cannot_empty:"SSH端口不能为空"},Object(n["a"])(c,"add_server","新增服务器"),Object(n["a"])(c,"edit_server_info","编辑服务器信息"),Object(n["a"])(c,"add_role","新增角色"),Object(n["a"])(c,"edit_role_info","编辑角色信息"),Object(n["a"])(c,"role_name","角色名称"),Object(n["a"])(c,"privilege_setting","权限设置"),Object(n["a"])(c,"check_all","全选"),Object(n["a"])(c,"add_user","新增用户"),Object(n["a"])(c,"cluster","集群"),Object(n["a"])(c,"role","角色"),Object(n["a"])(c,"email","邮箱"),Object(n["a"])(c,"status","状态"),Object(n["a"])(c,"last_login","上次登录"),Object(n["a"])(c,"username","用户名"),Object(n["a"])(c,"role_cannot_empty","角色不能为空"),Object(n["a"])(c,"username_cannot_empty","用户名不能为空"),Object(n["a"])(c,"please_input_username","请输入用户名"),Object(n["a"])(c,"password_cannot_empty","密码不能为空"),Object(n["a"])(c,"please_input_password_length_limit","请输入密码, 6到20个字符"),Object(n["a"])(c,"truename","真实姓名"),Object(n["a"])(c,"mobile","手机号"),Object(n["a"])(c,"allow_login","允许登录"),Object(n["a"])(c,"email_cannot_empty","邮箱不能为空"),Object(n["a"])(c,"please_input_email","请输入邮箱"),Object(n["a"])(c,"normal","正常"),Object(n["a"])(c,"locking","锁定"),Object(n["a"])(c,"last_login_time","上次登录时间"),Object(n["a"])(c,"last_login_ip","上次登录IP"),Object(n["a"])(c,"email_format_wrong","邮箱格式错误"),Object(n["a"])(c,"users_cannot_login_after_being_banned","禁止后用户将无法登录"),Object(n["a"])(c,"data_repeat_reenter_please","数据重复，请重新输入"),Object(n["a"])(c,"in_verification_please_wait","验证中，请稍后"),Object(n["a"])(c,"username_exists_please_reenter","用户名已经存在，请重新输入"),Object(n["a"])(c,"verifying_username_is_being_used_please_wait","正在验证用户名是否被占用，请稍等"),Object(n["a"])(c,"email_is_exists_please_reenter","邮箱已经存在，请重新输入"),Object(n["a"])(c,"verifying_email_is_being_used_please_wait","正在验证邮箱是否被占用，请稍等"),Object(n["a"])(c,"network_error_verify_failed","网络错误, 校验失败"),Object(n["a"])(c,"project_space","项目空间"),Object(n["a"])(c,"add_project_space","新增项目空间"),Object(n["a"])(c,"input_name_to_search","按名称搜索"),Object(n["a"])(c,"edit_project_space_info","编辑项目空间信息"),Object(n["a"])(c,"project_space_name","项目空间名称"),Object(n["a"])(c,"description","描述信息"),Object(n["a"])(c,"add_member_to_space","添加成员到项目空间"),Object(n["a"])(c,"add","添加"),Object(n["a"])(c,"project_member_select_space_tips","成员管理需要指定项目空间，请点击 '选择项目空间' 按钮，在弹出窗口中进行选择。"),Object(n["a"])(c,"prompt_message","提示信息"),Object(n["a"])(c,"select_project_space","选择项目空间"),Object(n["a"])(c,"switch_project_space","切换项目空间"),Object(n["a"])(c,"add_new_member","添加新成员"),Object(n["a"])(c,"looking_for_users","正在查找用户..."),Object(n["a"])(c,"user_not_found","未查找到用户"),Object(n["a"])(c,"search_for_users_by_username_and_email","通过用户名、邮箱搜索用户"),Object(n["a"])(c,"search_and_select_users_before_adding","请先搜索并选择用户后再添加"),Object(n["a"])(c,"member_added_successfully","成员添加成功"),Object(n["a"])(c,"member_already_exists_do_not_add_repeat","成员已经存在，请勿重复添加"),Object(n["a"])(c,"remove","移除"),Object(n["a"])(c,"project_select_space_tips","项目管理需要指定项目空间，请点击 '选择项目空间' 按钮，在弹出窗口中进行选择。"),Object(n["a"])(c,"add_project","新增项目"),Object(n["a"])(c,"project_name","项目名称"),Object(n["a"])(c,"please_input_project_name","请输入项目名称"),Object(n["a"])(c,"please_input_project_description","请输入项目描述信息"),Object(n["a"])(c,"open_audit","开启审核"),Object(n["a"])(c,"if_open_apply_need_audit","开启后，上线单需要审核通过后才能发起上线"),Object(n["a"])(c,"repo_url","仓库地址"),Object(n["a"])(c,"please_input_repo_url","请输入仓库地址"),Object(n["a"])(c,"repo_url_cannot_empty","仓库地址不能为空"),Object(n["a"])(c,"repo_branch","指定上线分支"),Object(n["a"])(c,"online_cluster","线上集群"),Object(n["a"])(c,"online_cluster_cannot_empty","线上集群不能为空"),Object(n["a"])(c,"user","用户"),Object(n["a"])(c,"user_cannot_empty","用户不能为空"),Object(n["a"])(c,"deploy_user","目标机用户"),Object(n["a"])(c,"path","目录"),Object(n["a"])(c,"deploy_path","代码/包部署的目录"),Object(n["a"])(c,"deploy_path_cannot_empty","请设置代码部署目录"),Object(n["a"])(c,"pre_deploy_cmd","部署前运行命令"),Object(n["a"])(c,"pre_deploy_cmd_tips","代码部署之前在目标机运行的命令，每行一个命令"),Object(n["a"])(c,"after_deploy_cmd","部署后运行命令"),Object(n["a"])(c,"after_deploy_cmd_tips","代码部署之后在目标机运行的命令，每行一个命令"),Object(n["a"])(c,"deploy_timeout","部署超时时间(秒)"),Object(n["a"])(c,"deploy_timeout_tips","部署命令最大运行时间"),Object(n["a"])(c,"project_enable","项目启用"),Object(n["a"])(c,"edit_project","编辑项目"),Object(n["a"])(c,"view","查看"),Object(n["a"])(c,"project_id","项目ID"),Object(n["a"])(c,"build","构建"),Object(n["a"])(c,"build_setting","构建设置"),Object(n["a"])(c,"build_script","构建脚本"),Object(n["a"])(c,"view_build_script_eg","查看构建脚本示例"),Object(n["a"])(c,"open","开启"),Object(n["a"])(c,"close","关闭"),Object(n["a"])(c,"repo_setting","仓库设置"),Object(n["a"])(c,"if_not_need_to_assign_branch_name","若不指定，需要在发起上线时手动填写分支名称"),Object(n["a"])(c,"deploy_setting","部署设置"),Object(n["a"])(c,"selected_cluster_list","已选集群列表"),Object(n["a"])(c,"cluster_list","集群列表"),Object(n["a"])(c,"view_project_info","查看项目信息"),Object(n["a"])(c,"base_setting","基本设置"),Object(n["a"])(c,"need_audit","需要审核"),Object(n["a"])(c,"not_audit","不需审核"),Object(n["a"])(c,"audit","审核"),Object(n["a"])(c,"unaudit","待审核"),Object(n["a"])(c,"edit_build_script","编辑构建脚本"),Object(n["a"])(c,"illustrate","说明"),Object(n["a"])(c,"build_script_tips","脚本会在代码下载完成后执行，构建脚本支持的变量"),Object(n["a"])(c,"build_script_env_workspace","代码仓库本地副本目录"),Object(n["a"])(c,"build_script_env_pack_file",'打包文件绝对地址，构建完成后将需要部署到线上的代码打包到此文件中，必须使用 <span class="code">tar -zcf</span> 命令进行打包。部署模块会将此压缩包分发到目标主机并解压缩到指定目录，请按照要求打包，否则会部署失败。'),Object(n["a"])(c,"select_project","选择项目"),Object(n["a"])(c,"project_space_cannot_empty","项目空间不能为空"),Object(n["a"])(c,"project_cannot_empty","项目不能为空"),Object(n["a"])(c,"input_apply_order","填写上线单"),Object(n["a"])(c,"input_deploy_apply","填写上线申请"),Object(n["a"])(c,"deploy_mode","上线模式"),Object(n["a"])(c,"deploy_mode_cannot_empty","上线模式不能为空"),Object(n["a"])(c,"branch_deploy","分支上线"),Object(n["a"])(c,"tag_deploy","Tag上线"),Object(n["a"])(c,"deploy_mode_tips","测试环境推荐分支上线，生产环境推荐tag上线"),Object(n["a"])(c,"apply_name","发布单名称"),Object(n["a"])(c,"apply_order","发布单"),Object(n["a"])(c,"please_input_apply_name","请输入上线单名称"),Object(n["a"])(c,"tag_name","Tag名称"),Object(n["a"])(c,"tag_name_cannot_empty","Tag名称不能为空"),Object(n["a"])(c,"please_input_tag_name","请输入Tag名称"),Object(n["a"])(c,"branch_name_cannot_empty","分支名称不能为空"),Object(n["a"])(c,"please_input_branch_name","请输入分支名称"),Object(n["a"])(c,"branch_name","分支名称"),Object(n["a"])(c,"deploy_illustrate","上线说明"),Object(n["a"])(c,"please_input_deploy_illustrate","请详细填写上线说明"),Object(n["a"])(c,"deploy_illustrate_cannot_empty","上线说明不能为空"),Object(n["a"])(c,"commit_version","选择上线版本"),Object(n["a"])(c,"version","版本"),Object(n["a"])(c,"please_input_commit_version","输入上线版本hash"),Object(n["a"])(c,"branch","分支"),Object(n["a"])(c,"deploy_apply_submit_success","恭喜，上线申请提交成功"),Object(n["a"])(c,"submit_success","提交成功"),Object(n["a"])(c,"submit_time","提交时间"),Object(n["a"])(c,"deploy_status","上线状态"),Object(n["a"])(c,"audit_status","审核状态"),Object(n["a"])(c,"select_project","选择项目"),Object(n["a"])(c,"rollback_apply","绑定回滚单"),Object(n["a"])(c,"belong_to_space","所属空间"),Object(n["a"])(c,"submiter","提交者"),Object(n["a"])(c,"pass","通过"),Object(n["a"])(c,"denied","拒绝"),Object(n["a"])(c,"wait_online","待上线"),Object(n["a"])(c,"onlineing","上线中"),Object(n["a"])(c,"success","成功"),Object(n["a"])(c,"failed","失败"),Object(n["a"])(c,"drop","废弃"),Object(n["a"])(c,"rollback","回滚"),Object(n["a"])(c,"online","上线"),Object(n["a"])(c,"space_name","空间名称"),Object(n["a"])(c,"audit_pass","审核通过"),Object(n["a"])(c,"audit_denied","审核拒绝"),Object(n["a"])(c,"deined_reason","拒绝原因"),Object(n["a"])(c,"edit_apply_order","编辑上线单"),Object(n["a"])(c,"today","今天"),Object(n["a"])(c,"7day","7天内"),Object(n["a"])(c,"within_one_month","1个月内"),Object(n["a"])(c,"within_three_months","3个月内"),Object(n["a"])(c,"within_a_year","一年内"),Object(n["a"])(c,"any_time","时间不限"),Object(n["a"])(c,"not_online","未上线"),Object(n["a"])(c,"online_success","上线成功"),Object(n["a"])(c,"online_failed","上线失败"),Object(n["a"])(c,"deprecated","已废弃"),Object(n["a"])(c,"update_success","更新成功"),Object(n["a"])(c,"audit_success","审核成功"),Object(n["a"])(c,"drop_deploy_apply_tips","此操作将废弃该上线单, 是否继续?"),Object(n["a"])(c,"have_onlined","已上线"),Object(n["a"])(c,"belong_project","所属项目"),Object(n["a"])(c,"forced_termination","强制终止"),Object(n["a"])(c,"last_buid_time","上次构建时间"),Object(n["a"])(c,"cost_time","耗时"),Object(n["a"])(c,"stopping","正在终止"),Object(n["a"])(c,"building","构建中"),Object(n["a"])(c,"build_finish","构建成功"),Object(n["a"])(c,"build_failed","构建失败"),Object(n["a"])(c,"build_ing","构建中"),Object(n["a"])(c,"unbuild","未构建"),Object(n["a"])(c,"uncreate","未生成"),Object(n["a"])(c,"build_log","构建日志"),Object(n["a"])(c,"tar_pack_path","Tar包位置"),Object(n["a"])(c,"deploy","部署"),Object(n["a"])(c,"redeploy","重新部署"),Object(n["a"])(c,"rollback_apply_order_tips","回滚操作将以新发布单的形式对历史代码包进行重新部署"),Object(n["a"])(c,"rollback_created","回滚单已生成"),Object(n["a"])(c,"rollback_unstart","回滚未开始"),Object(n["a"])(c,"rollbacking","回滚中"),Object(n["a"])(c,"rollback_success","回滚成功"),Object(n["a"])(c,"rollback_failed","回滚失败"),Object(n["a"])(c,"rollback_drop","回滚单废弃"),Object(n["a"])(c,"rollback_unknow","回滚状态未知"),Object(n["a"])(c,"click_to_view_rollback_order","点击进入回滚单"),Object(n["a"])(c,"wait_deploy","等待部署"),Object(n["a"])(c,"deploying","部署中"),Object(n["a"])(c,"deploy_success","部署成功"),Object(n["a"])(c,"deploy_failed","部署失败"),Object(n["a"])(c,"be_deined","被终止"),Object(n["a"])(c,"deploy_log","部署日志"),Object(n["a"])(c,"makesure_rollback_order","确定要进行回滚操作吗？"),Object(n["a"])(c,"build_success_and_deploy","请构建成功后再进行部署操作"),Object(n["a"])(c,"deploy_tips","部署提示"),Object(n["a"])(c,"start_build","开始构建"),Object(n["a"])(c,"i_known","知道了"),Object(n["a"])(c,"yes","是"),Object(n["a"])(c,"no","否"),Object(n["a"])(c,"have_enabled","已启用"),Object(n["a"])(c,"not_enable","未启用"),Object(n["a"])(c,"avatar","头像"),Object(n["a"])(c,"current_password","当前密码"),Object(n["a"])(c,"new_password","新密码"),Object(n["a"])(c,"current_password_cannot_empty","当前密码不能为空"),Object(n["a"])(c,"new_password_cannot_empty","新密码不能为空"),Object(n["a"])(c,"apply_type","类型"),Object(n["a"])(c,"rollback_creating","回滚单生成中"),Object(n["a"])(c,"rollback_tips","当前是自动生成的回滚单"),Object(n["a"])(c,"back_apply","返回原发布单"),Object(n["a"])(c,"email_setting","邮箱设置"),Object(n["a"])(c,"audit_notice","审核通知"),Object(n["a"])(c,"audit_notice_tips","请输入接收审核通知的邮箱地址"),Object(n["a"])(c,"audit_notice_explain",'系统通过邮件通知相关负责人审核待审单，多个邮箱地址请用 <span class="app-tag-info">,</span> 相隔'),Object(n["a"])(c,"deploy_notice","上线通知"),Object(n["a"])(c,"deploy_notice_tips","请输入接收上线通知的邮箱地址"),Object(n["a"])(c,"deploy_notice_explain",'接收上线通知的邮箱地址，多个邮箱地址请用 <span class="app-tag-info">,</span> 相隔'),Object(n["a"])(c,"hook","Hook"),Object(n["a"])(c,"edit_hook_script","编辑Hook命令"),Object(n["a"])(c,"build_hook_script","构建完成后执行命令"),Object(n["a"])(c,"deploy_hook_script","部署完成后执行命令"),Object(n["a"])(c,"build_hook_script_tips","命令会在构建完成(成功或失败)后执行，支持的变量"),Object(n["a"])(c,"deploy_hook_script_tips","命令会在部署完成(成功或失败)后执行，支持的变量"),c)},"8e09":function(e,t,a){"use strict";t["a"]={DEPLOY_APPLY:1001,DEPLOY_VIEW:1002,DEPLOY_AUDIT:1003,DEPLOY_DEPLOY:1004,DEPLOY_DROP:1005,DEPLOY_EDIT:1006,PROJECT_SPACE_VIEW:2001,PROJECT_SPACE_NEW:2002,PROJECT_SPACE_EDIT:2003,PROJECT_SPACE_DEL:2004,PROJECT_USER_VIEW:2100,PROJECT_USER_NEW:2101,PROJECT_USER_DEL:2102,PROJECT_VIEW:2201,PROJECT_NEW:2202,PROJECT_EDIT:2203,PROJECT_DEL:2204,PROJECT_AUDIT:2205,PROJECT_BUILD:2206,PROJECT_HOOK:2207,USER_ROLE_VIEW:3001,USER_ROLE_NEW:3002,USER_ROLE_EDIT:3003,USER_ROLE_DEL:3004,USER_VIEW:3101,USER_NEW:3102,USER_EDIT:3103,USER_DEL:3104,SERVER_GROUP_VIEW:4001,SERVER_GROUP_NEW:4002,SERVER_GROUP_EDIT:4003,SERVER_GROUP_DEL:4004,SERVER_VIEW:4101,SERVER_NEW:4102,SERVER_EDIT:4103,SERVER_DEL:4104}},9607:function(e,t,a){"use strict";var c,n=a("bd86"),r=(a("cadf"),a("551c"),a("097d"),a("8e09"));t["a"]=(c={PageSize:0,Page:0,Total:0,DialogSmallWidth:"500px",DialogNormalWidth:"750px",DialogLargeWidth:"900px",DialogNormalTop:"5vh",Priv:r["a"],BuildStatusNone:0,BuildStatusStart:1,BuildStatusSuccess:2,BuildStatusFailed:3,ApplyStatusNone:1,ApplyStatusIng:2,ApplyStatusSuccess:3,ApplyStatusFailed:4,ApplyStatusDrop:5,ApplyStatusRollback:6,DeployModeBranch:1,DeployModelTag:2},Object(n["a"])(c,"BuildStatusNone",0),Object(n["a"])(c,"BuildStatusStart",1),Object(n["a"])(c,"BuildStatusSuccess",2),Object(n["a"])(c,"BuildStatusFailed",3),Object(n["a"])(c,"DeployGroupStatusNone",0),Object(n["a"])(c,"DeployGroupStatusStart",1),Object(n["a"])(c,"DeployGroupStatusSuccess",2),Object(n["a"])(c,"DeployGroupStatusFailed",3),Object(n["a"])(c,"AuditStatusPending",1),Object(n["a"])(c,"AuditStatusOk",2),Object(n["a"])(c,"AuditStatusRefuse",3),c)},9923:function(e,t,a){"use strict";(function(e){var c=a("2b0e"),n=a("a925"),r=a("6e41"),o=a("3fab");c["default"].use(n["a"]);var s,i={"zh-cn":r["a"],en:o["a"]};e.navigator.language&&(s=e.navigator.language,s=s.toLowerCase()),0!=s.indexOf("en")&&(s="zh-cn");var u=new n["a"]({locale:s,messages:i});t["a"]=u}).call(this,a("c8ba"))},a18c:function(e,t,a){"use strict";a.d(t,"b",function(){return u});a("cadf"),a("551c"),a("097d");var c=a("2b0e"),n=a("8c4f"),r=a("9923"),o=a("8e09");c["default"].use(n["a"]);var s=function(e){return function(){return a("0351")("./"+e+".vue")}},i=[{path:"/login",name:"login",component:s("Login")}],u=[{path:"/",component:s("Layer"),name:"main",meta:{},redirect:{name:"dashboard"},children:[{path:"dashboard",name:"dashboard",meta:{title:r["a"].t("dashboard"),icon:"icon-dashboard",single:!0},component:s("Dashboard")}]},{path:"/deploy",name:"deploy",component:s("Layer"),meta:{title:r["a"].t("deploy"),icon:"icon-send"},children:[{path:"apply",name:"deployApply",meta:{title:r["a"].t("submit_deploy_apply"),role:[o["a"].DEPLOY_APPLY]},component:s("deploy/Apply")},{path:"deploy",name:"deployDeploy",meta:{title:r["a"].t("deploy_manage"),role:[o["a"].DEPLOY_VIEW]},component:s("deploy/Deploy")},{path:"release",name:"deployRelease",meta:{title:r["a"].t("deploying_deploy"),hide:!0},component:s("deploy/Release")}]},{path:"/project",name:"project",component:s("Layer"),meta:{title:r["a"].t("project"),icon:"icon-project"},children:[{path:"space",name:"projectSpace",meta:{title:r["a"].t("space_manage"),role:[o["a"].PROJECT_SPACE_VIEW]},component:s("project/Space")},{path:"project",name:"projectProject",meta:{title:r["a"].t("project_manage"),role:[o["a"].PROJECT_VIEW]},component:s("project/Project")},{path:"user",name:"projectUser",meta:{title:r["a"].t("member_manage"),role:[o["a"].PROJECT_USER_VIEW]},component:s("project/Member")}]},{path:"/user",name:"user",component:s("Layer"),meta:{title:r["a"].t("user"),icon:"icon-group"},children:[{path:"group",name:"userGroup",meta:{title:r["a"].t("role_manage"),role:[o["a"].USER_ROLE_VIEW]},component:s("user/Group")},{path:"list",name:"userList",meta:{title:r["a"].t("user_manage"),role:[o["a"].USER_VIEW]},component:s("user/User")}]},{path:"/server",name:"server",component:s("Layer"),meta:{title:r["a"].t("server"),icon:"icon-server"},children:[{path:"group",name:"serverGroup",meta:{title:r["a"].t("cluster_manage"),role:[o["a"].SERVER_GROUP_VIEW]},component:s("server/Group")},{path:"list",name:"serverList",meta:{title:r["a"].t("server_manage"),role:[o["a"].SERVER_VIEW]},component:s("server/Server")}]}],l=new n["a"]({routes:i.concat(u),scrollBehavior:function(){return{y:0}},mode:"history"});t["a"]=l},f1ed:function(e,t,a){"use strict";a("ac6a"),a("6b54");var c=a("8d81"),n=a.n(c),r=a("a78e"),o=a.n(r),s=a("c1df"),i=a.n(s),u="_syd_identity";t["a"]={MessageSuccess:function(e){this.$message({message:this.$t("operate_success"),type:"success",duration:1200,onClose:e})},PageInit:function(){this.$root.PageSize=7,this.$root.Page=1,this.$root.Total=0},PageReset:function(){this.$root.Total--;var e=Math.ceil(this.$root.Total/this.$root.PageSize);this.$root.Page>e&&(this.$root.Page=e),this.$root.Page<1&&(this.$root.Page=1)},PageOffset:function(){return this.$root.PageSize*(this.$root.Page-1)},ConfirmDelete:function(e,t){t||(t="此操作将永久删除该数据, 是否继续?"),this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e()}).catch(function(e){console.log(e)})},Md5Sum:function(e){return n()(e)},FormatDateTime:function(e,t){return e?(t||(t="YYYY-MM-DD HH:mm:ss"),i.a.unix(e).format(t)):"--"},FormatDateDuration:function(e){return i.a.duration(e).humanize(!1)},FormatDateFromNow:function(e){return e?i.a.unix(e).fromNow():"--"},Substr:function(e,t){if("[object String]"!=Object.prototype.toString.call(e))return"";var a="";return e.length>t&&(a="..."),e.substr(0,t)+a},SetLoginToken:function(e){return o.a.set(u,e)},GetLoginToken:function(){return o.a.get(u)},DeleteLoginToken:function(){return o.a.remove(u)},CheckPriv:function(e){return this.$store.getters["account/getPriv"].indexOf(e)>-1},CheckPrivs:function(e){var t=this;if(!e||!e.length)return!1;var a=!1;return e.forEach(function(e){t.CheckPriv(e)&&(a=!0)}),a}}}});
//# sourceMappingURL=app.09688cf8.js.map