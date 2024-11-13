import{_ as E,z as O,A,r as f,e as w,j as M,y as c,f as r,o as y,c as x,a as t,w as o,h as d,t as T,v as h,k as V,F as G,l as J}from"./index-DDjioiAb.js";const K={style:{"text-align":"center",margin:"0"}},P={__name:"UserList",setup(Q){const g=O(A),i=f([]),k=({row:s,rowindex:e})=>s._id==g._id?"warning-row":"",N=c(),p=f(),a=w({userName:"",password:"",role:null,_id:null}),U=(s,e)=>{Object.assign(a,e,{index:s}),b()},C=(s,e)=>{c().deleteUser(e._id).then(n=>{i.value.splice(s,1),popoverVisible.value=!1}).catch(n=>{console.log(n)})},m=f(!1),b=()=>{m.value=!m.value};M(()=>{c().getUserList().then(s=>{i.value=s.data}).catch(s=>{console.log(s)})});const D=w({userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"blur"}]}),z=[{value:0,label:"管理员"},{value:1,label:"编辑者"}],$=()=>{p.value.validate().then(s=>{s&&N.editUser(a).then(e=>{Object.assign(i.value[a.index],{_id:a._id,userName:a.userName,role:a.role,password:a.password}),p.value&&(p.value.resetFields(),b())})}).catch(s=>{console.log(s)})};return(s,e)=>{const n=r("el-table-column"),F=r("el-tag"),u=r("el-button"),L=r("el-popover"),R=r("el-table"),S=r("el-card"),v=r("el-input"),_=r("el-form-item"),j=r("el-option"),q=r("el-select"),B=r("el-form"),H=r("el-dialog");return y(),x("div",null,[t(S,null,{default:o(()=>[t(R,{data:i.value,style:{width:"100%"},"row-class-name":k},{default:o(()=>[t(n,{prop:"userName",label:"账户",width:"180"}),t(n,{prop:"password",label:"密码"},{default:o(l=>e[5]||(e[5]=[d(" ********** ")])),_:1}),t(n,{prop:"role",label:"角色"},{default:o(l=>[t(F,{type:l.row.role?"primary":"danger"},{default:o(()=>[d(T(l.row.role?"编辑者":"管理员"),1)]),_:2},1032,["type"])]),_:1}),t(n,{fixed:"right",label:"选项"},{default:o(l=>[t(u,{size:"small",onClick:I=>U(l.$index,l.row)},{default:o(()=>e[6]||(e[6]=[d(" 编辑 ")])),_:2},1032,["onClick"]),t(L,{trigger:"click",placement:"top",width:160,disabled:l.row._id==h(g)._id},{reference:o(()=>[t(u,{size:"small",type:"danger"},{default:o(()=>e[9]||(e[9]=[d(" 删除 ")])),_:1})]),default:o(()=>[e[10]||(e[10]=V("p",{style:{"margin-bottom":"20px"}},"你确定要删除吗?",-1)),V("div",K,[t(u,{size:"small"},{default:o(()=>e[7]||(e[7]=[d("取消")])),_:1}),t(u,{size:"small",type:"primary",onClick:I=>C(l.$index,l.row)},{default:o(()=>e[8]||(e[8]=[d(" 确定 ")])),_:2},1032,["onClick"])])]),_:2},1032,["disabled"])]),_:1})]),_:1},8,["data"])]),_:1}),t(H,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l),title:"编辑用户",width:"500"},{default:o(()=>[t(B,{model:a,ref_key:"formRef",ref:p,"label-width":"auto",rules:D,style:{"max-width":"600px"}},{default:o(()=>[t(_,{label:"用户名",prop:"userName"},{default:o(()=>[t(v,{style:{width:"280px"},modelValue:a.userName,"onUpdate:modelValue":e[0]||(e[0]=l=>a.userName=l)},null,8,["modelValue"])]),_:1}),t(_,{label:"密码",prop:"password"},{default:o(()=>[t(v,{style:{width:"280px"},modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=l=>a.password=l)},null,8,["modelValue"])]),_:1}),t(_,{label:"角色",prop:"role"},{default:o(()=>[t(q,{modelValue:a.role,"onUpdate:modelValue":e[2]||(e[2]=l=>a.role=l),placeholder:"选择角色","default-first-option":""},{default:o(()=>[(y(),x(G,null,J(z,l=>t(j,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(u,{type:"primary",onClick:e[3]||(e[3]=l=>$())},{default:o(()=>e[11]||(e[11]=[d(" 编辑用户 ")])),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}},X=E(P,[["__scopeId","data-v-ed41a234"]]);export{X as default};
