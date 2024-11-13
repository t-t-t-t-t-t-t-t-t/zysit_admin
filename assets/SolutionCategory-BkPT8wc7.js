import{u as b}from"./SolutionCategoryHooks-Dk6ZlqOz.js";import{r as x,e as c,f as a,o as D,g as k,w as l,a as o,h as y,i as B,j as h,c as E,k as S}from"./index-DDjioiAb.js";const R={__name:"SolutionCategoryAdd",props:["isShowDialog"],emits:["addSolutionCategory","changeBox"],setup(s,{emit:u}){const m=u,r=x(),f=c({title:""}),g=c({title:[{required:!0,message:"请输入标题",trigger:"blur"}]}),p=()=>{r.value.validate().then(t=>{t&&b().addSolutionCategory(f).then(n=>{m("addSolutionCategory",{_id:n._id,title:n.title}),m("closeBox"),r.value&&r.value.resetFields()})}).catch(t=>{console.log(t)})};return(t,n)=>{const i=a("el-input"),e=a("el-form-item"),d=a("el-button"),C=a("el-form"),v=a("el-dialog");return D(),k(v,{"model-value":s.isShowDialog,onSubmit:n[2]||(n[2]=B(()=>{},["prevent"])),title:"添加解决方案类别",width:"500",onClose:n[3]||(n[3]=w=>m("closeBox"))},{default:l(()=>[o(C,{model:f,ref_key:"formRed",ref:r,"label-width":"auto",rules:g,style:{"max-width":"600px"}},{default:l(()=>[o(e,{label:"标题",prop:"title"},{default:l(()=>[o(i,{style:{width:"280px"},modelValue:f.title,"onUpdate:modelValue":n[0]||(n[0]=w=>f.title=w)},null,8,["modelValue"])]),_:1}),o(d,{type:"primary",onClick:n[1]||(n[1]=w=>p())},{default:l(()=>n[4]||(n[4]=[y(" 确认添加 ")])),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}},z={__name:"SolutionCategoryEdit",props:["isShowDialog","formData"],emits:["editSolutionCategory","changeBox"],setup(s,{emit:u}){const m=u,r=x(),f=c({title:[{required:!0,message:"请输入标题",trigger:"blur"}],image:[{required:!0,message:"请上传图片",trigger:"blur"}]}),g=()=>{r.value.validate().then(p=>{p&&b().putSolutionCategory(s.formData).then(t=>{m("editSolutionCategory",{_id:s.formData._id,title:s.formData.title}),m("closeBox"),r.value&&(r.value.resetFields(),onHandleChangeDialog())})}).catch(p=>{console.log(p)})};return(p,t)=>{const n=a("el-input"),i=a("el-form-item"),e=a("el-button"),d=a("el-form"),C=a("el-dialog");return D(),k(C,{"model-value":s.isShowDialog,onSubmit:t[2]||(t[2]=B(()=>{},["prevent"])),title:"编辑解决方案类别",width:"500",onClose:t[3]||(t[3]=v=>m("closeBox"))},{default:l(()=>[o(d,{model:s.formData,ref_key:"formRed",ref:r,"label-width":"auto",rules:f,style:{"max-width":"600px"}},{default:l(()=>[o(i,{label:"标题",prop:"title"},{default:l(()=>[o(n,{style:{width:"280px"},modelValue:s.formData.title,"onUpdate:modelValue":t[0]||(t[0]=v=>s.formData.title=v)},null,8,["modelValue"])]),_:1}),o(e,{type:"primary",onClick:t[1]||(t[1]=v=>g())},{default:l(()=>t[4]||(t[4]=[y(" 确认编辑 ")])),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}},A={class:"card-header",style:{display:"flex","justify-content":"space-between"}},F={style:{"text-align":"center",margin:"0"}},N={__name:"SolutionCategory",setup(s){const u=x([]),m=i=>{u.value.push(i)},r=x(!1),f=(i,e)=>{b().deleteSolutionCategory(e._id).then(d=>{u.value.splice(i,1)})},g=x(0),p=(i,e)=>{g.value=i,t.value=!0},t=x(!1),n=i=>{u.value.splice(g.value,1,i)};return h(()=>{b().getSolutionCategoryList().then(i=>{u.value=i})}),(i,e)=>{const d=a("el-button"),C=a("el-table-column"),v=a("el-popover"),w=a("el-table"),$=a("el-card");return D(),E("div",null,[o($,null,{header:l(()=>[S("div",A,[e[4]||(e[4]=S("span",null,"解决方案类别",-1)),o(d,{onClick:e[0]||(e[0]=_=>r.value=!0)},{default:l(()=>e[3]||(e[3]=[y("添加解决方案类别")])),_:1})])]),default:l(()=>[o(w,{data:u.value,style:{width:"100%"}},{default:l(()=>[o(C,{prop:"title",label:"标题",width:"180"}),o(C,{fixed:"right",width:"180",label:"选项"},{default:l(_=>[o(d,{size:"small",onClick:V=>p(_.$index,_.row)},{default:l(()=>e[5]||(e[5]=[y(" 编辑 ")])),_:2},1032,["onClick"]),o(v,{trigger:"click",placement:"top",width:160},{reference:l(()=>[o(d,{size:"small",type:"danger"},{default:l(()=>e[8]||(e[8]=[y(" 删除 ")])),_:1})]),default:l(()=>[e[9]||(e[9]=S("p",{style:{"margin-bottom":"20px"}},"你确定要删除吗?",-1)),S("div",F,[o(d,{size:"small"},{default:l(()=>e[6]||(e[6]=[y("取消")])),_:1}),o(d,{size:"small",type:"primary",onClick:V=>f(_.$index,_.row)},{default:l(()=>e[7]||(e[7]=[y(" 确定 ")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),_:1}),o(R,{onAddSolutionCategory:m,onCloseBox:e[1]||(e[1]=_=>r.value=!1),isShowDialog:r.value},null,8,["isShowDialog"]),o(z,{onEditSolutionCategory:n,onCloseBox:e[2]||(e[2]=_=>t.value=!1),isShowDialog:t.value,formData:u.value[g.value]},null,8,["isShowDialog","formData"])])}}};export{N as default};