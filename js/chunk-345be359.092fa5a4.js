(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-345be359"],{"1fae":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var o=c("7a23"),a={class:"container"},i={id:"app"},n={class:"container"},r={class:"row py-3"},l={class:"col-md-8"},d={class:"d-flex"},s=Object(o["h"])("h2",null,"商品",-1),u={class:"table table-hover mt-4"},b=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{width:"200"},"商品"),Object(o["h"])("th",{width:"120"}," 元の金額 "),Object(o["h"])("th",{width:"120"}," 今の金額 "),Object(o["h"])("th",{width:"120"}," 起用 "),Object(o["h"])("th",{width:"120"}," 詳細 "),Object(o["h"])("th",{width:"120"}," 編輯 "),Object(o["h"])("th",{width:"120"})])],-1),h={width:"200"},p={width:"120"},O={width:"120"},j={width:"120"},m={key:0,class:"text-success"},f={key:1},g={width:"120"},v=["onClick"],P={width:"120"},w=["onClick"],y={width:"120"},k=["onClick"],U=Object(o["j"])("このページは "),x=Object(o["j"])(" 個の商品があります。"),A={class:"col-md-4"},N=Object(o["h"])("h2",null,"商品詳細",-1),$={class:"card mb-3"},M=["src"],C={class:"card-body"},F={class:"card-title"},I={class:"badge bg-primary ms-2"},S={class:"card-text"},V={class:"card-text"},_={class:"d-flex"},D={class:"card-text me-2"},L={class:"card-text text-secondary"},T=["src"],Z={key:1,class:"text-secondary"};function J(t,e,c,J,z,R){var K=Object(o["K"])("Loading"),E=Object(o["K"])("PaginationView"),B=Object(o["K"])("ProductModal"),q=Object(o["K"])("DeleteProductModal");return Object(o["A"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(K,{active:z.isLoading},null,8,["active"]),Object(o["h"])("div",a,[Object(o["h"])("div",i,[Object(o["h"])("div",n,[Object(o["h"])("div",r,[Object(o["h"])("div",l,[Object(o["h"])("div",d,[s,Object(o["h"])("button",{type:"button",class:"btn btn-primary mx-4",onClick:e[0]||(e[0]=function(t){return R.openModal("new")})}," 商品を増やす ")]),Object(o["h"])("table",u,[b,Object(o["h"])("tbody",null,[(Object(o["A"])(!0),Object(o["g"])(o["a"],null,Object(o["I"])(z.showProducts,(function(t){return Object(o["A"])(),Object(o["g"])("tr",{key:t.id},[Object(o["h"])("td",h,Object(o["N"])(t.title),1),Object(o["h"])("td",p,Object(o["N"])(t.origin_price),1),Object(o["h"])("td",O,Object(o["N"])(t.price),1),Object(o["h"])("td",j,[t.is_enabled?(Object(o["A"])(),Object(o["g"])("span",m,"起用")):(Object(o["A"])(),Object(o["g"])("span",f,"起用していない"))]),Object(o["h"])("td",g,[Object(o["h"])("button",{type:"button",class:"btn btn-success",onClick:function(e){return z.showOneProduct=t}}," 詳細 ",8,v)]),Object(o["h"])("td",P,[Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:function(e){return R.openModal("edit",t)}}," 編輯 ",8,w)]),Object(o["h"])("td",y,[Object(o["h"])("button",{type:"button",class:"btn btn-danger",onClick:function(e){return R.openModal("delete",t)}}," 取り消し ",8,k)])])})),128))])]),Object(o["h"])("p",null,[U,Object(o["h"])("span",null,Object(o["N"])(z.showProducts.length),1),x]),Object(o["k"])(E,{class:"d-flex justify-content-center",pages:z.pagination,onEmitPages:R.showProduct},null,8,["pages","onEmitPages"]),Object(o["k"])(B,{product:z.tempProduct,"is-new":z.isNew,onUpdate:R.showProduct,ref:"modal"},null,8,["product","is-new","onUpdate"]),Object(o["k"])(q,{item:z.tempProduct,onDelItem:R.delProduct,ref:"delModal"},null,8,["item","onDelItem"])]),Object(o["h"])("div",A,[N,z.showOneProduct.id?(Object(o["A"])(),Object(o["g"])(o["a"],{key:0},[Object(o["h"])("div",$,[Object(o["h"])("img",{src:z.showOneProduct.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,M),Object(o["h"])("div",C,[Object(o["h"])("h5",F,[Object(o["j"])(Object(o["N"])(z.showOneProduct.title)+" ",1),Object(o["h"])("span",I,Object(o["N"])(z.showOneProduct.category),1)]),Object(o["h"])("p",S," 商品について："+Object(o["N"])(z.showOneProduct.description),1),Object(o["h"])("p",V," 商品內容："+Object(o["N"])(z.showOneProduct.content),1),Object(o["h"])("div",_,[Object(o["h"])("p",D,Object(o["N"])(z.showOneProduct.price),1),Object(o["h"])("p",L,[Object(o["h"])("del",null,Object(o["N"])(z.showOneProduct.origin_price),1)]),Object(o["j"])(" "+Object(o["N"])(z.showOneProduct.unit)+" / 円 ",1)])])]),z.showOneProduct.imagesUrl?(Object(o["A"])(!0),Object(o["g"])(o["a"],{key:0},Object(o["I"])(z.showOneProduct.imagesUrl,(function(t){return Object(o["A"])(),Object(o["g"])("div",{key:t.id},[t?(Object(o["A"])(),Object(o["g"])("img",{key:0,src:t,alt:"productImg",class:"images m-2"},null,8,T)):Object(o["f"])("",!0)])})),128)):Object(o["f"])("",!0)],64)):(Object(o["A"])(),Object(o["g"])("p",Z,"ご商品を確認してください。"))])])])])])],64)}c("99af"),c("e9c4"),c("ac1f"),c("5319");var z=c("ca8d"),R={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},K={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},q={id:"productModalLabel",class:"modal-title"},G={key:0},H={key:1},Q=Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},X={class:"row mb-3"},Y={class:"col-sm-4"},tt={class:"form-group mb-3"},et=Object(o["h"])("label",{for:"imageUrl",class:"form-label"},"商品写真",-1),ct={class:"mb-3"},ot=Object(o["h"])("label",{for:"image",class:"form-label"},"商品写真URL",-1),at={class:"mb-3"},it={for:"customFile",class:"form-label"},nt=Object(o["j"])("或は写真アップロード "),rt={key:0,class:"fas fa-spinner fa-spin"},lt=["src"],dt={key:0},st={class:"form-group"},ut=Object(o["h"])("label",{for:"imageUrl",class:"form-label"},"写真URL",-1),bt=["onUpdate:modelValue"],ht=["src"],pt={key:0},Ot={key:1},jt={key:1},mt={class:"col-sm-8"},ft={class:"form-group mb-3"},gt=Object(o["h"])("label",{for:"title",class:"form-label"},"タイトル",-1),vt={class:"row mb-3"},Pt={class:"form-group col-md-6"},wt=Object(o["h"])("label",{for:"category",class:"form-label"},"商品種類",-1),yt={class:"form-group col-md-6"},kt=Object(o["h"])("label",{for:"price",class:"form-label"},"数量詞",-1),Ut={class:"row mb-3"},xt={class:"form-group col-md-6"},At=Object(o["h"])("label",{for:"origin_price",class:"form-label"},"元の金額",-1),Nt={class:"form-group col-md-6"},$t=Object(o["h"])("label",{for:"price",class:"form-label"},"今の金額",-1),Mt=Object(o["h"])("hr",null,null,-1),Ct={class:"form-group mb-3"},Ft=Object(o["h"])("label",{for:"description",class:"form-label"},"商品について",-1),It={class:"form-group mb-3"},St=Object(o["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),Vt={class:"form-group mb-3"},_t={class:"form-check"},Dt=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"起用",-1),Lt={class:"modal-footer"},Tt=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," キャンセル ",-1);function Zt(t,e,c,a,i,n){return Object(o["A"])(),Object(o["g"])("div",R,[Object(o["h"])("div",K,[Object(o["h"])("div",E,[Object(o["h"])("div",B,[Object(o["h"])("h5",q,[c.isNew?(Object(o["A"])(),Object(o["g"])("span",G,"商品増やす")):(Object(o["A"])(),Object(o["g"])("span",H,"商品編集"))]),Q]),Object(o["h"])("div",W,[Object(o["h"])("div",X,[Object(o["h"])("div",Y,[Object(o["h"])("div",tt,[et,Object(o["h"])("div",ct,[ot,Object(o["Z"])(Object(o["h"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=function(t){return i.editProduct.imageUrl=t}),placeholder:"商品写真URL"},null,512),[[o["T"],i.editProduct.imageUrl]])]),Object(o["h"])("div",at,[Object(o["h"])("label",it,[nt,i.status.fileUploading?(Object(o["A"])(),Object(o["g"])("i",rt)):Object(o["f"])("",!0)]),Object(o["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544)]),Object(o["h"])("img",{class:"img-fluid",src:i.editProduct.imageUrl},null,8,lt)]),Array.isArray(i.editProduct.imagesUrl)?(Object(o["A"])(),Object(o["g"])("div",dt,[(Object(o["A"])(!0),Object(o["g"])(o["a"],null,Object(o["I"])(i.editProduct.imagesUrl,(function(t,e){return Object(o["A"])(),Object(o["g"])("div",{class:"mb-1",key:e},[Object(o["h"])("div",st,[ut,Object(o["Z"])(Object(o["h"])("input",{"onUpdate:modelValue":function(t){return i.editProduct.imagesUrl[e]=t},type:"text",class:"form-control",placeholder:"写真URL"},null,8,bt),[[o["T"],i.editProduct.imagesUrl[e]]])]),Object(o["h"])("img",{class:"img-fluid",src:t},null,8,ht)])})),128)),!i.editProduct.imagesUrl.length||i.editProduct.imagesUrl[i.editProduct.imagesUrl.length-1]?(Object(o["A"])(),Object(o["g"])("div",pt,[Object(o["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=function(t){return i.editProduct.imagesUrl.push("")})}," 写真を増やす ")])):(Object(o["A"])(),Object(o["g"])("div",Ot,[Object(o["h"])("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=function(t){return i.editProduct.imagesUrl.pop()})}," 写真を取り消す ")]))])):(Object(o["A"])(),Object(o["g"])("div",jt,[Object(o["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=function(){return n.createImages&&n.createImages.apply(n,arguments)})}," 写真を増やす ")]))]),Object(o["h"])("div",mt,[Object(o["h"])("div",ft,[gt,Object(o["Z"])(Object(o["h"])("input",{id:"title","onUpdate:modelValue":e[5]||(e[5]=function(t){return i.editProduct.title=t}),type:"text",class:"form-control",placeholder:"タイトル"},null,512),[[o["T"],i.editProduct.title]])]),Object(o["h"])("div",vt,[Object(o["h"])("div",Pt,[wt,Object(o["Z"])(Object(o["h"])("input",{id:"category","onUpdate:modelValue":e[6]||(e[6]=function(t){return i.editProduct.category=t}),type:"text",class:"form-control",placeholder:"商品種類"},null,512),[[o["T"],i.editProduct.category]])]),Object(o["h"])("div",yt,[kt,Object(o["Z"])(Object(o["h"])("input",{id:"unit","onUpdate:modelValue":e[7]||(e[7]=function(t){return i.editProduct.unit=t}),type:"text",class:"form-control",placeholder:"数量詞"},null,512),[[o["T"],i.editProduct.unit]])])]),Object(o["h"])("div",Ut,[Object(o["h"])("div",xt,[At,Object(o["Z"])(Object(o["h"])("input",{id:"origin_price","onUpdate:modelValue":e[8]||(e[8]=function(t){return i.editProduct.origin_price=t}),type:"number",min:"0",class:"form-control",placeholder:"元の金額"},null,512),[[o["T"],i.editProduct.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",Nt,[$t,Object(o["Z"])(Object(o["h"])("input",{id:"price","onUpdate:modelValue":e[9]||(e[9]=function(t){return i.editProduct.price=t}),type:"number",min:"0",class:"form-control",placeholder:"今の金額"},null,512),[[o["T"],i.editProduct.price,void 0,{number:!0}]])])]),Mt,Object(o["h"])("div",Ct,[Ft,Object(o["Z"])(Object(o["h"])("textarea",{id:"description","onUpdate:modelValue":e[10]||(e[10]=function(t){return i.editProduct.description=t}),type:"text",class:"form-control",placeholder:"商品について"},"\r\n                ",512),[[o["T"],i.editProduct.description]])]),Object(o["h"])("div",It,[St,Object(o["Z"])(Object(o["h"])("textarea",{id:"description","onUpdate:modelValue":e[11]||(e[11]=function(t){return i.editProduct.content=t}),type:"text",class:"form-control",placeholder:"說明內容"},"\r\n                ",512),[[o["T"],i.editProduct.content]])]),Object(o["h"])("div",Vt,[Object(o["h"])("div",_t,[Object(o["Z"])(Object(o["h"])("input",{id:"is_enabled","onUpdate:modelValue":e[12]||(e[12]=function(t){return i.editProduct.is_enabled=t}),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[o["R"],i.editProduct.is_enabled]]),Dt])])])])]),Object(o["h"])("div",Lt,[Tt,Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=function(){return n.updateProduct&&n.updateProduct.apply(n,arguments)})}," 確認 ")])])])],512)}var Jt=c("7c2b"),zt=c.n(Jt),Rt="",Kt={props:["product","isNew"],data:function(){return{modal:null,editProduct:{},status:{}}},mounted:function(){Rt=new zt.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})},watch:{product:function(){this.editProduct=this.product}},methods:{updateProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("wei-z","/admin/product"),c="post";this.isNew||(e="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("wei-z","/admin/product/").concat(this.product.id),c="put"),this.$http[c](e,{data:this.editProduct}).then((function(e){alert(e.data.message),t.hideModal(),t.$emit("update")})).catch((function(t){alert(t.response.data.message)}))},createImages:function(){this.editProduct.imagesUrl=[],this.editProduct.imagesUrl.push("")},uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0];console.log(this.$refs.fileInput.files[0]);var c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("wei-z","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.status.fileUploading=!1,e.data.success?(t.editProduct.imageUrl=e.data.imageUrl,t.$refs.fileInput.value=""):t.$refs.fileInput.value=""})).catch((function(e){t.status.fileUploading=!1,alert(e.response.data.message)}))},openModal:function(){Rt.show()},hideModal:function(){Rt.hide()}}},Et=c("6b0d"),Bt=c.n(Et);const qt=Bt()(Kt,[["render",Zt]]);var Gt=qt,Ht=c("3a8c"),Qt={data:function(){return{isNew:!1,showProducts:[],showOneProduct:[],pagination:{},isLoading:!1,tempProduct:{imagesUrl:[]}}},components:{PaginationView:z["a"],ProductModal:Gt,DeleteProductModal:Ht["a"]},methods:{showProduct:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("wei-z","/admin/products?page=").concat(e);this.$http.get(c).then((function(e){var c=e.data,o=c.products,a=c.pagination;t.showProducts=o,t.pagination=a,t.isLoading=!1,t.showOneProduct=""})).catch((function(e){alert(e.response.data.message),t.$router.push("/")}))},openModal:function(t,e){"new"===t?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.modal.openModal()):"edit"===t?(this.tempProduct=JSON.parse(JSON.stringify(e)),this.isNew=!1,this.$refs.modal.openModal()):"delete"===t&&(this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.delModal.openModal())},delProduct:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("wei-z","/admin/product/").concat(this.tempProduct.id)).then((function(e){t.$refs.delModal.hideModal(),t.showProduct(t.pagination.current_page)})).catch((function(t){alert(t.data.message)}))}},mounted:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,t&&this.showProduct()}};const Wt=Bt()(Qt,[["render",J]]);e["default"]=Wt},e01a:function(t,e,c){"use strict";var o=c("23e7"),a=c("83ab"),i=c("da84"),n=c("e330"),r=c("1a2d"),l=c("1626"),d=c("3a9b"),s=c("577e"),u=c("9bf2").f,b=c("e893"),h=i.Symbol,p=h&&h.prototype;if(a&&l(h)&&(!("description"in p)||void 0!==h().description)){var O={},j=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),e=d(p,this)?new h(t):void 0===t?h():h(t);return""===t&&(O[e]=!0),e};b(j,h),j.prototype=p,p.constructor=j;var m="Symbol(test)"==String(h("test")),f=n(p.toString),g=n(p.valueOf),v=/^Symbol\((.*)\)[^)]+$/,P=n("".replace),w=n("".slice);u(p,"description",{configurable:!0,get:function(){var t=g(this),e=f(t);if(r(O,t))return"";var c=m?w(e,7,-1):P(e,v,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:j})}},e9c4:function(t,e,c){var o=c("23e7"),a=c("da84"),i=c("d066"),n=c("2ba4"),r=c("e330"),l=c("d039"),d=a.Array,s=i("JSON","stringify"),u=r(/./.exec),b=r("".charAt),h=r("".charCodeAt),p=r("".replace),O=r(1..toString),j=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,f=/^[\uDC00-\uDFFF]$/,g=function(t,e,c){var o=b(c,e-1),a=b(c,e+1);return u(m,t)&&!u(f,a)||u(f,t)&&!u(m,o)?"\\u"+O(h(t,0),16):t},v=l((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&o({target:"JSON",stat:!0,forced:v},{stringify:function(t,e,c){for(var o=0,a=arguments.length,i=d(a);o<a;o++)i[o]=arguments[o];var r=n(s,null,i);return"string"==typeof r?p(r,j,g):r}})}}]);
//# sourceMappingURL=chunk-345be359.092fa5a4.js.map