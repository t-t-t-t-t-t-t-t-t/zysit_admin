import{b as N,d as D,E as _,r as y,e as V,f as m,o as B,g as C,w as a,a as l,h as b,i as S,j as U,c as q,k as $}from"./index-DDjioiAb.js";import{U as L}from"./UploadImage-COppiFFJ.js";const R=o=>o?N.get(`${D}/news/newsList/${o}`):N.get(`${D}/news/newsList`),z=({title:o,image:d,url:f})=>N.post(`${D}/news/newsList`,{title:o,image:d,url:f}),F=({title:o,image:d,url:f,_id:u})=>N.put(`${D}/news/newsList`,{title:o,image:d,url:f,_id:u}),I=o=>N.delete(`${D}/news/newsList/${o}`);function k(){return{getNewsList:async(i="")=>{try{const n=await R(i);return _({message:n.msg,type:"success"}),n.data}catch(n){console.log(n)}},addNews:async({title:i,image:n,url:g})=>{try{const e=await z({title:i,image:n,url:g});return _({message:e.msg,type:"success"}),e.data}catch(e){console.log(e)}},putNews:async({_id:i,title:n,image:g,url:e})=>{try{const s=await F({_id:i,title:n,image:g,url:e});return _({message:s.msg,type:"success"}),s.data}catch(s){console.log(s)}},deleteNews:async i=>{try{const n=await I(i);return _({message:n.msg,type:"success"}),n.data}catch(n){console.log(n)}}}}const H={__name:"NewsAdd",props:["isShowDialog"],emits:["addNews","closeBox"],setup(o,{emit:d}){const f=d,u=y(),i=V({title:"",image:"",url:""}),n=V({title:[{required:!0,message:"请输入标题",trigger:"blur"}],image:[{required:!0,message:"请选择图片",trigger:"blur"}],url:[{required:!0,message:"请输入路径",trigger:"blur"}]}),g=()=>{u.value.validate().then(e=>{e&&k().addNews(i).then(s=>{f("addNews",{_id:s._id,title:s.title}),f("closeBox"),u.value&&u.value.resetFields()})}).catch(e=>{console.log(e)})};return(e,s)=>{const r=m("el-input"),t=m("el-form-item"),p=m("el-button"),x=m("el-form"),w=m("el-dialog");return B(),C(w,{"model-value":o.isShowDialog,onSubmit:s[4]||(s[4]=S(()=>{},["prevent"])),title:"添加应用案例类别",width:"500",onClose:s[5]||(s[5]=c=>f("closeBox"))},{default:a(()=>[l(x,{model:i,ref_key:"formRed",ref:u,"label-width":"auto",rules:n,style:{"max-width":"600px"}},{default:a(()=>[l(t,{label:"标题",prop:"title"},{default:a(()=>[l(r,{style:{width:"280px"},modelValue:i.title,"onUpdate:modelValue":s[0]||(s[0]=c=>i.title=c)},null,8,["modelValue"])]),_:1}),l(t,{label:"路径",prop:"url"},{default:a(()=>[l(r,{style:{width:"280px"},modelValue:i.url,"onUpdate:modelValue":s[1]||(s[1]=c=>i.url=c)},null,8,["modelValue"])]),_:1}),l(t,{label:"图片",prop:"image"},{default:a(()=>[l(L,{image:i.image,onUploadImage:s[2]||(s[2]=c=>{i.image=c})},null,8,["image"])]),_:1}),l(p,{type:"primary",onClick:s[3]||(s[3]=c=>g())},{default:a(()=>s[6]||(s[6]=[b(" 确认添加 ")])),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}},M={__name:"NewsEdit",props:["isShowDialog","formData"],emits:["editNews","closeBox"],setup(o,{emit:d}){const f=d;console.log(o.formData);const u=y(),i=V({title:[{required:!0,message:"请输入标题",trigger:"blur"}],image:[{required:!0,message:"请选择图片",trigger:"blur"}],url:[{required:!0,message:"请输入路径",trigger:"blur"}]}),n=()=>{u.value.validate().then(g=>{g&&k().putNews(o.formData).then(e=>{f("editNews",{_id:o.formData._id,title:o.formData.title,url:o.formData.url,image:o.formData.image}),f("closeBox"),u.value&&u.value.resetFields()})}).catch(g=>{console.log(g)})};return(g,e)=>{const s=m("el-input"),r=m("el-form-item"),t=m("el-button"),p=m("el-form"),x=m("el-dialog");return B(),C(x,{"model-value":o.isShowDialog,onSubmit:e[4]||(e[4]=S(()=>{},["prevent"])),title:"编辑新闻",width:"500",onClose:e[5]||(e[5]=w=>f("closeBox"))},{default:a(()=>[l(p,{model:o.formData,ref_key:"formRed",ref:u,"label-width":"auto",rules:i,style:{"max-width":"600px"}},{default:a(()=>[l(r,{label:"标题",prop:"title"},{default:a(()=>[l(s,{style:{width:"280px"},modelValue:o.formData.title,"onUpdate:modelValue":e[0]||(e[0]=w=>o.formData.title=w)},null,8,["modelValue"])]),_:1}),l(r,{label:"路径",prop:"url"},{default:a(()=>[l(s,{style:{width:"280px"},modelValue:o.formData.url,"onUpdate:modelValue":e[1]||(e[1]=w=>o.formData.url=w)},null,8,["modelValue"])]),_:1}),l(r,{label:"图片",prop:"image"},{default:a(()=>[l(L,{image:o.formData.image,onUploadImage:e[2]||(e[2]=w=>{o.formData.image=w})},null,8,["image"])]),_:1}),l(t,{type:"primary",onClick:e[3]||(e[3]=w=>n())},{default:a(()=>e[6]||(e[6]=[b(" 确认编辑 ")])),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}},h={class:"card-header",style:{display:"flex","justify-content":"space-between"}},j={style:{"text-align":"center",margin:"0"}},G={__name:"NewsList",setup(o){const d=y([]),f=r=>{d.value.push(r)},u=y(!1),i=(r,t)=>{k().deleteNews(t._id).then(p=>{d.value.splice(r,1)})},n=y(0),g=(r,t)=>{n.value=r,e.value=!0},e=y(!1),s=r=>{d.value.splice(n.value,1,r)};return U(()=>{k().getNewsList().then(r=>{d.value=r})}),(r,t)=>{const p=m("el-button"),x=m("el-table-column"),w=m("el-popover"),c=m("el-table"),A=m("el-card");return B(),q("div",null,[l(A,null,{header:a(()=>[$("div",h,[t[4]||(t[4]=$("span",null,"新闻",-1)),l(p,{onClick:t[0]||(t[0]=v=>u.value=!0)},{default:a(()=>t[3]||(t[3]=[b("添加新闻")])),_:1})])]),default:a(()=>[l(c,{data:d.value,style:{width:"100%"}},{default:a(()=>[l(x,{prop:"title",label:"标题",width:"180"}),l(x,{fixed:"right",width:"180",label:"选项"},{default:a(v=>[l(p,{size:"small",onClick:E=>g(v.$index,v.row)},{default:a(()=>t[5]||(t[5]=[b(" 编辑 ")])),_:2},1032,["onClick"]),l(w,{trigger:"click",placement:"top",width:160},{reference:a(()=>[l(p,{size:"small",type:"danger"},{default:a(()=>t[8]||(t[8]=[b(" 删除 ")])),_:1})]),default:a(()=>[t[9]||(t[9]=$("p",{style:{"margin-bottom":"20px"}},"你确定要删除吗?",-1)),$("div",j,[l(p,{size:"small"},{default:a(()=>t[6]||(t[6]=[b("取消")])),_:1}),l(p,{size:"small",type:"primary",onClick:E=>i(v.$index,v.row)},{default:a(()=>t[7]||(t[7]=[b(" 确定 ")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),_:1}),l(H,{onAddNews:f,onCloseBox:t[1]||(t[1]=v=>u.value=!1),isShowDialog:u.value},null,8,["isShowDialog"]),l(M,{onEditNews:s,onCloseBox:t[2]||(t[2]=v=>e.value=!1),isShowDialog:e.value,formData:d.value[n.value]},null,8,["isShowDialog","formData"])])}}};export{G as default};
