(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{7091:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/management/shoechecks",function(){return r(2528)}])},2528:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Q}});var t=r(5893),o=r(9008),c=r.n(o),i=r(8853),a=r(6886),l=r(5861);var s=function(){return(0,t.jsx)(a.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:(0,t.jsxs)(a.ZP,{item:!0,children:[(0,t.jsx)(l.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Shoe Check"}),(0,t.jsxs)(l.Z,{variant:"subtitle2",children:["Staff",", these are your recent shoes checked"]})]})})},u=r(8273),d=r(9520),h=r(6242),f=r(6225),x=r(4051),g=r.n(x),p=r(7294),m=r(2734),j=r(7357),Z=r(8445),y=r(4054),b=r(7312),v=r(315),k=r(8972),C=r(7720),w=r(2882),S=r(7906),O=r(3184),P=r(3816),E=r(3252),N=r(9368),I=r(295),W=r(4834),A=r(4674),D=r(8462),_=r(1057),B=r(8896),R=r(1664),z=r.n(R),T=r(8586),G=r(100),H=r(422),K=r(2521),M=r(7988);function L(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function F(n,e,r,t,o,c,i){try{var a=n[c](i),l=a.value}catch(s){return void r(s)}a.done?e(l):Promise.resolve(l).then(t,o)}function U(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function X(n){return function(n){if(Array.isArray(n))return L(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return L(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var q=function(n){var e={CHECKED:{text:"CHECKED",color:"success"},CHECKING:{text:"CHECKING",color:"warning"},PROCESSING:{text:"PROCESSING",color:"secondary"}}[n],r=e.text,o=e.color;return(0,t.jsx)(G.Z,{color:o,children:r})},J=function(){var n=(0,p.useState)(),e=n[0],r=n[1],o=(0,p.useState)([]),c=o[0],i=o[1],a=(0,p.useState)([]),s=a[0],u=a[1];console.log(e);var d=s.length>0,f=(0,p.useState)(0),x=f[0],R=f[1],L=(0,p.useState)(5),J=L[0],$=L[1],Q=(0,p.useState)({status:null}),V=Q[0],Y=Q[1];(0,p.useEffect)((function(){fetch("https://soleauthenticity.azurewebsites.net/api/shoe-checks/admin?page=1&pageSize=30").then((function(n){return n.json()})).then((function(n){r(n.data),i(n.data),console.log(n.data)}))}),[]);var nn,en,rn,tn=function(){var n,e=(n=g().mark((function n(e){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,fetch("https://soleauthenticity.azurewebsites.net/api/shoe-checks/shoe-check/"+e,{method:"PUT",body:JSON.stringify({})});case 3:r=n.sent,location.reload(),console.log(r);case 6:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var c=n.apply(e,r);function i(n){F(c,t,o,i,a,"next",n)}function a(n){F(c,t,o,i,a,"throw",n)}i(void 0)}))});return function(n){return e.apply(this,arguments)}}(),on=(nn=V,c.filter((function(n){var e=!0;return nn.status&&n.statusChecking!==nn.status&&(e=!1),e}))),cn=(en=x,rn=J,c.slice(en*rn,en*rn+rn)),an=s.length>0&&s.length<c.length,ln=s.length===c.length,sn=(0,m.Z)();return(0,t.jsxs)(h.Z,{children:[d&&(0,t.jsx)(j.Z,{flex:1,p:2,children:(0,t.jsx)(M.Z,{})}),!d&&(0,t.jsx)(Z.Z,{action:(0,t.jsx)(j.Z,{width:150,children:(0,t.jsxs)(y.Z,{fullWidth:!0,variant:"outlined",children:[(0,t.jsx)(b.Z,{children:"Status"}),(0,t.jsx)(v.Z,{value:V.status||"all",onChange:function(n){var e=null;"all"!==n.target.value&&(e=n.target.value),Y((function(n){return function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){U(n,e,r[e])}))}return n}({},n,{status:e})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"PROCESSING",name:"PROCESSING"},{id:"CHECKING",name:"CHECKING"},{id:"CHECKED",name:"CHECKED"}].map((function(n){return(0,t.jsx)(k.Z,{value:n.id,children:n.name},n.id)}))})]})}),title:"Recent Checks"}),(0,t.jsx)(C.Z,{}),(0,t.jsx)(w.Z,{children:(0,t.jsxs)(S.Z,{children:[(0,t.jsx)(O.Z,{children:(0,t.jsxs)(P.Z,{children:[(0,t.jsx)(E.Z,{padding:"checkbox",children:(0,t.jsx)(N.Z,{color:"primary",checked:ln,indeterminate:an,onChange:function(n){u(n.target.checked?c.map((function(n){return n.id})):[])}})}),(0,t.jsx)(E.Z,{children:"ID"}),(0,t.jsx)(E.Z,{children:"Shoe Name"}),(0,t.jsx)(E.Z,{children:"Name"}),(0,t.jsx)(E.Z,{children:"Date Submitted"}),(0,t.jsx)(E.Z,{children:"Date Completed"}),(0,t.jsx)(E.Z,{align:"right",children:"Authentic"}),(0,t.jsx)(E.Z,{align:"right",children:"Active"}),(0,t.jsx)(E.Z,{align:"right",children:"Status"}),(0,t.jsx)(E.Z,{align:"right",children:"Actions"}),(0,t.jsx)(E.Z,{align:"right"})]})}),(0,t.jsx)(I.Z,{children:cn.map((function(n){var e=s.includes(n.id);return(0,t.jsxs)(P.Z,{hover:!0,selected:e,children:[(0,t.jsx)(E.Z,{padding:"checkbox",children:(0,t.jsx)(N.Z,{color:"primary",checked:e,onChange:function(e){return r=n.id,void(s.includes(r)?u((function(n){return n.filter((function(n){return n!==r}))})):u((function(n){return X(n).concat([r])})));var r},value:e})}),(0,t.jsx)(E.Z,{children:(0,t.jsx)(l.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:n.id})}),(0,t.jsxs)(E.Z,{children:[(0,t.jsx)(l.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:n.shoeName}),(0,t.jsxs)(l.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:["Code: ",n.code]})]}),(0,t.jsx)(E.Z,{children:(0,t.jsx)(l.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:n.customerName})}),(0,t.jsx)(E.Z,{children:(0,t.jsx)(l.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:n.dateSubmitted})}),(0,t.jsx)(E.Z,{children:(0,t.jsx)(l.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:n.dateCompletedChecking})}),(0,t.jsx)(E.Z,{children:(0,t.jsx)(l.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:1==n.isAuthentic?(0,t.jsx)(G.Z,{color:"success",children:"Authentic"}):(0,t.jsx)(G.Z,{color:"error",children:"Replica"})})}),(0,t.jsx)(E.Z,{children:(0,t.jsx)(l.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:1==n.isActive?(0,t.jsx)(G.Z,{color:"primary",children:"Active"}):(0,t.jsx)(G.Z,{color:"secondary",children:"Inactive"})})}),(0,t.jsx)(E.Z,{align:"right",children:q(n.statusChecking)}),(0,t.jsxs)(E.Z,{align:"right",children:[(0,t.jsx)(W.Z,{title:"Edit Order",arrow:!0,children:(0,t.jsx)(A.Z,{sx:{"&:hover":{background:sn.colors.primary.lighter},color:sn.palette.primary.main},color:"inherit",size:"small",children:(0,t.jsx)(z(),{href:"/management/shoechecks/details/".concat(n.id),children:(0,t.jsx)(H.Z,{fontSize:"small"})})})}),(0,t.jsx)(W.Z,{title:"Delete Order",arrow:!0,children:(0,t.jsx)(A.Z,{sx:{"&:hover":{background:sn.colors.error.lighter},color:sn.palette.error.main},color:"inherit",size:"small",children:(0,t.jsx)(K.Z,{fontSize:"small"})})})]}),(0,t.jsx)(E.Z,{align:"right",children:(0,t.jsx)(D.Z,{component:j.Z,display:"flex",justifyContent:"space-between",children:(0,t.jsx)(_.Z,{variant:"contained",onClick:function(){return tn(n.id)},component:T.C,href:"/management/shoechecks/details/".concat(n.id),children:"Checking"})})})]},n.id)}))})]})}),(0,t.jsx)(j.Z,{p:2,children:(0,t.jsx)(B.Z,{component:"div",count:on.length,onPageChange:function(n,e){R(e)},onRowsPerPageChange:function(n){$(parseInt(n.target.value))},page:x,rowsPerPage:J,rowsPerPageOptions:[5,10,25,30]})})]})};function $(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c(),{children:(0,t.jsx)("title",{children:"ShoesCheck - Lists"})}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(s,{})}),(0,t.jsx)(d.Z,{maxWidth:"lg",children:(0,t.jsx)(a.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsx)(h.Z,{children:(0,t.jsx)(J,{})})})})}),(0,t.jsx)(f.Z,{})]})}$.getLayout=function(n){return(0,t.jsx)(i.Z,{children:n})};var Q=$},6225:function(n,e,r){"use strict";var t=r(5893),o=r(948),c=r(9520),i=r(7357),a=r(5861),l=(0,o.ZP)(c.Z)((function(n){var e=n.theme;return"\n        margin-top: ".concat(e.spacing(4),";\n")}));e.Z=function(){return(0,t.jsx)(l,{className:"footer-wrapper",children:(0,t.jsx)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:(0,t.jsx)(i.Z,{children:(0,t.jsx)(a.Z,{variant:"subtitle1",children:"\xa9 2023 - SoleAuthenticity Staff Dashboard"})})})})}},100:function(n,e,r){"use strict";var t=r(5893),o=r(5697),c=r.n(o);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},c=Object.keys(n);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var l=(0,r(948).ZP)("span")((function(n){var e=n.theme;return"\n      background-color: ".concat(e.colors.alpha.black[5],";\n      padding: ").concat(e.spacing(.5,1),";\n      font-size: ").concat(e.typography.pxToRem(13),";\n      border-radius: ").concat(e.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(e.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(e.colors.primary.lighter,";\n          color: ").concat(e.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(e.colors.alpha.black[100],";\n          color: ").concat(e.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(e.colors.secondary.lighter,";\n          color: ").concat(e.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(e.colors.success.lighter,";\n          color: ").concat(e.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(e.colors.warning.lighter,";\n          color: ").concat(e.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(e.colors.error.lighter,";\n          color: ").concat(e.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(e.colors.info.lighter,";\n          color: ").concat(e.palette.info.main,"\n        }\n      }\n")})),s=function(n){n.className;var e=n.color,r=void 0===e?"secondary":e,o=n.children,c=a(n,["className","color","children"]);return(0,t.jsx)(l,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){i(n,e,r[e])}))}return n}({className:"MuiLabel-"+r},c,{children:o}))};s.propTypes={children:c().node,className:c().string,color:c().oneOf(["primary","black","secondary","error","warning","success","info"])},e.Z=s},8273:function(n,e,r){"use strict";var t=r(5893),o=r(5697),c=r.n(o),i=r(948),a=r(7357),l=r(9520),s=(0,i.ZP)(a.Z)((function(n){var e=n.theme;return"\n        padding: ".concat(e.spacing(4),";\n")})),u=function(n){var e=n.children;return(0,t.jsx)(s,{className:"MuiPageTitle-wrapper",children:(0,t.jsx)(l.Z,{maxWidth:"lg",children:e})})};u.propTypes={children:c().node.isRequired},e.Z=u},7988:function(n,e,r){"use strict";var t=r(5893),o=r(7294),c=r(1057),i=r(7357),a=r(5861),l=r(4674),s=r(4347),u=r(8462),d=r(7212),h=r(9334),f=r(948),x=r(2521),g=r(3046),p=(0,f.ZP)(c.Z)((function(n){var e=n.theme;return"\n     background: ".concat(e.colors.error.main,";\n     color: ").concat(e.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(e.colors.error.dark,";\n     }\n    ")}));e.Z=function(){var n=(0,o.useState)(!1),e=n[0],r=n[1],c=(0,o.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,t.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,t.jsx)(a.Z,{variant:"h5",color:"text.secondary",children:"Bulk actions:"}),(0,t.jsx)(p,{sx:{ml:1},startIcon:(0,t.jsx)(x.Z,{}),variant:"contained",children:"Delete"})]}),(0,t.jsx)(l.Z,{color:"primary",onClick:function(){r(!0)},ref:c,sx:{ml:2,p:1},children:(0,t.jsx)(g.Z,{})})]}),(0,t.jsx)(s.Z,{keepMounted:!0,anchorEl:c.current,open:e,onClose:function(){r(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:(0,t.jsxs)(u.Z,{sx:{p:1},component:"nav",children:[(0,t.jsx)(d.ZP,{button:!0,children:(0,t.jsx)(h.Z,{primary:"Bulk delete selected"})}),(0,t.jsx)(d.ZP,{button:!0,children:(0,t.jsx)(h.Z,{primary:"Bulk edit selected"})})]})})]})}}},function(n){n.O(0,[173,472,193,976,422,835,917,907,853,774,888,179],(function(){return e=7091,n(n.s=e);var e}));var e=n.O();_N_E=e}]);