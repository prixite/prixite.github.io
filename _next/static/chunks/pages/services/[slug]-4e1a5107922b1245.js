(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{1775:function(e,t,a){"use strict";var o=a(4836);t.Z=void 0;var n=o(a(4938)),r=a(5893),i=(0,n.default)((0,r.jsx)("path",{d:"m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z"}),"SendOutlined");t.Z=i},3321:function(e,t,a){"use strict";a.d(t,{Z:function(){return I}});var o=a(3366),n=a(7462),r=a(7294),i=a(6010),l=a(7925),s=a(4780),d=a(1796),c=a(948),p=a(1657),u=a(7739),h=a(8216),v=a(1588),x=a(4867);function m(e){return(0,x.Z)("MuiButton",e)}let b=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=r.createContext({});var S=a(5893);let f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],z=e=>{let{color:t,disableElevation:a,fullWidth:o,size:r,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(r)}`,`${i}Size${(0,h.Z)(r)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(r)}`]},c=(0,s.Z)(d,m,l);return(0,n.Z)({},l,c)},Z=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,h.Z)(a.color)}`],t[`size${(0,h.Z)(a.size)}`],t[`${a.variant}Size${(0,h.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var a,o;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}),w=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e))),C=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e))),$=r.forwardRef(function(e,t){let a=r.useContext(g),s=(0,l.Z)(a,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:c,color:u="primary",component:h="button",className:v,disabled:x=!1,disableElevation:m=!1,disableFocusRipple:b=!1,endIcon:Z,focusVisibleClassName:$,fullWidth:I=!1,size:j="medium",startIcon:k,type:N,variant:R="text"}=d,_=(0,o.Z)(d,f),E=(0,n.Z)({},d,{color:u,component:h,disabled:x,disableElevation:m,disableFocusRipple:b,fullWidth:I,size:j,type:N,variant:R}),M=z(E),W=k&&(0,S.jsx)(w,{className:M.startIcon,ownerState:E,children:k}),L=Z&&(0,S.jsx)(C,{className:M.endIcon,ownerState:E,children:Z});return(0,S.jsxs)(y,(0,n.Z)({ownerState:E,className:(0,i.Z)(a.className,M.root,v),component:h,disabled:x,focusRipple:!b,focusVisibleClassName:(0,i.Z)(M.focusVisible,$),ref:t,type:N},_,{classes:M,children:[W,c,L]}))});var I=$},7173:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/[slug]",function(){return a(4658)}])},3487:function(e,t,a){"use strict";var o=a(5893);a(7294);var n=a(7357),r=a(3321),i=a(1775),l=a(1163);let s=e=>{let{text:t,width:a}=e,s=(0,l.useRouter)();return(0,o.jsx)(n.Z,{children:(0,o.jsx)(r.Z,{fullWidth:a,variant:"contained",endIcon:(0,o.jsx)(i.Z,{}),className:"contact-us-button",onClick:()=>s.push("/contact-us"),children:t})})};t.Z=s},4658:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return h}});var o=a(5893);a(7294);var n=a(9520),r=a(7357),i=a(5861),l=a(9008),s=a.n(l),d=a(3487),c=a(9980),p=a.n(c);let u=e=>{let{frontmatter:{title:t,header:a,description:l},content:c}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"prixite",content:"Prixte"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)(n.Z,{maxWidth:"xl",className:"page-header",children:[(0,o.jsxs)(r.Z,{className:"header",children:[(0,o.jsxs)(r.Z,{className:"heading",children:[(0,o.jsx)(i.Z,{className:"heading-text",children:a}),(0,o.jsx)(i.Z,{children:l})]}),(0,o.jsx)(r.Z,{children:(0,o.jsx)(d.Z,{text:"Contact Us"})})]}),(0,o.jsx)(r.Z,{className:"page-content",children:(0,o.jsx)(n.Z,{disableGutters:!0,maxWidth:"xl",children:(0,o.jsx)("div",{className:"post-body",children:(0,o.jsx)("div",{className:"service-content",dangerouslySetInnerHTML:{__html:p()().render(c)}})})})})]})]})};var h=!0;t.default=u}},function(e){e.O(0,[980,774,888,179],function(){return e(e.s=7173)}),_N_E=e.O()}]);