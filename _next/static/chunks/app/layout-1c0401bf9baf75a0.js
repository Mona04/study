(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2863:function(t,e,r){Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.bind(r,1052)),Promise.resolve().then(r.t.bind(r,2769,23)),Promise.resolve().then(r.bind(r,5990)),Promise.resolve().then(r.bind(r,8427)),Promise.resolve().then(r.bind(r,7380)),Promise.resolve().then(r.bind(r,3915)),Promise.resolve().then(r.bind(r,4956)),Promise.resolve().then(r.bind(r,3642)),Promise.resolve().then(r.bind(r,6960)),Promise.resolve().then(r.bind(r,198)),Promise.resolve().then(r.t.bind(r,1355,23)),Promise.resolve().then(r.t.bind(r,4290,23))},8534:function(t,e,r){"use strict";r.d(e,{w_:function(){return l}});var n=r(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),s=function(){return(s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},a=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)0>e.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};function l(t){return function(e){return n.createElement(c,s({attr:s({},t.attr)},e),function t(e){return e&&e.map(function(e,r){return n.createElement(e.tag,s({key:r},e.attr),t(e.child))})}(t.child))}}function c(t){var e=function(e){var r,i=t.attr,o=t.size,l=t.title,c=a(t,["attr","size","title"]),u=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:r,style:s(s({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==o?n.createElement(o.Consumer,null,function(t){return e(t)}):e(i)}},1052:function(t,e,r){"use strict";r.r(e);var n=r(7437),i=r(2265),o=r(198),s=r(9259),a=r.n(s);e.default=function(t){let{className:e}=t,[r,s]=(0,i.useState)(!1),l=(0,i.useContext)(o.Context);return(0,i.useEffect)(()=>{let t=[];return t.push(null==l?void 0:l.statemgr.registerDarkModeEvent(t=>s(t))),null==l||l.statemgr.setDarkMode(null==l?void 0:l.statemgr.IsDarkMode()),()=>{t.map(t=>null==t?void 0:t.dispose())}},[]),(0,n.jsxs)("div",{className:[a().toggleBtn,e].join(" "),children:[(0,n.jsx)("input",{id:"darkmode-btn",name:"darkmode-btn",type:"checkbox",onChange:t=>{null==l||l.statemgr.setDarkMode(null==l||!l.statemgr.IsDarkMode())},checked:r}),(0,n.jsx)("label",{htmlFor:"darkmode-btn",children:"Toggle"})]})}},5990:function(t,e,r){"use strict";r.r(e);var n=r(7437),i=r(2265),o=r(198),s=r(2769),a=r.n(s);e.default=function(){let t=(0,i.useContext)(o.Context),[e,r]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let n=[];return n.push(null==t?void 0:t.statemgr.registMenuEvent(t=>{t!=e&&(l(!0),setTimeout(()=>{r(t),l(!1)},150))})),()=>{n.map(t=>null==t?void 0:t.dispose())}},[s,e]),(0,n.jsx)("button",{className:[a()["menu-btn"],e?a().change:"",s?a().animate:""].join(" "),title:"menu button",id:"menu-toggle-btn",type:"button",onClick:r=>{e?null==t||t.statemgr.closeMenu():null==t||t.statemgr.openMenu()},children:(0,n.jsxs)("div",{className:a()["menu-lines"],children:[(0,n.jsx)("div",{className:[a().line,a().line1].join(" ")}),(0,n.jsx)("div",{className:[a().line,a().line2].join(" ")}),(0,n.jsx)("div",{className:[a().line,a().line3].join(" ")})]})})}},8427:function(t,e,r){"use strict";r.r(e);var n=r(7437),i=r(2265),o=r(198),s=r(976);e.default=function(t){let{className:e}=t,r=(0,i.useContext)(o.Context),[a,l]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let t=[];return t.push(null==r?void 0:r.statemgr.registSearchEvent(t=>l(t))),()=>{t.map(t=>null==t?void 0:t.dispose())}},[]),(0,n.jsx)("button",{className:[e,"hover:tw-text-color-primary"].join(" "),title:"search button",id:"search-open-btn",type:"button",onClick:t=>{a?null==r||r.statemgr.closeSearch():null==r||r.statemgr.openSearch()},children:(0,n.jsx)(s.RB5,{})})}},7380:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(7437),i=r(2265),o=r(198);function s(t){let{className:e}=t,r=(0,i.useContext)(o.Context),[s,a]=(0,i.useState)(0);(0,i.useEffect)(()=>{let t=[];return t.push(null==r?void 0:r.statemgr.registMenuEvent(l)),t.push(null==r?void 0:r.statemgr.registSearchEvent(l)),()=>{t.map(t=>null==t?void 0:t.dispose())}},[]);let l=t=>{a(s+(!0===t?1:-1))};return(0,n.jsx)(n.Fragment,{children:s>0&&(0,n.jsx)("section",{className:"".concat(e," tw-z-10  tw-fixed tw-w-full tw-h-full tw-mt-0 tw-top-nav-height tw-opacity-30 tw-bg-color-text-dimmed"),onClick:t=>{null==r||r.statemgr.closeAll()}})})}},3915:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(7437),i=r(2265),o=r(198);function s(t){let{children:e}=t,[r,s]=(0,i.useState)(!1),a=(0,i.useContext)(o.Context);return(0,i.useEffect)(()=>{let t=[];return t.push(null==a?void 0:a.statemgr.registSearchEvent(t=>{s(t)})),()=>{t.map(t=>null==t?void 0:t.dispose())}},[]),(0,n.jsx)(n.Fragment,{children:r&&e})}},4956:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});var n=r(7437),i=r(2265),o=r(198),s=r(1983),a=r(3991),l=r(5967),c=t=>{let{children:e=null,src:r,alt:i,width:o,height:s,fill:c,priority:u=!1,className:m}=t,d="".concat((0,l.bv)()).concat(r);return(0,n.jsx)(a.default,{src:d,alt:i,className:m,width:o,height:s,fill:c,priority:u,children:e})},u=r(4626);function m(t){let{slug:e,title:r,description:i,thumbnail:o}=t;return(0,n.jsx)(u.WithTooltip,{children:(0,n.jsx)("article",{className:"mobile:tw-h-24 tw-m-1   tw-border-2 tw-rounded-2xl tw-border-color-border   hover:tw-border-color-primary hover:tw-transition-all hover:tw-duration-500",children:(0,n.jsx)(c,{className:"tw-h-full tw-w-full",src:null!=o?o:"/images/empty-300x200.jpg",alt:"Thumbnail",width:256,height:256,priority:!0})})})}function d(t){let{item:e}=t,r=(0,s.h$)(e);return void 0==r?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(m,{slug:r.slug,title:r.title,description:r.description,thumbnail:r.thumbnail})}function h(t){let{items:e}=t;return null==e||e.length<1?(0,n.jsx)("p",{className:"tw-text-color-text-light tw-ml-auto tw-mr-auto",children:"No Results!"}):e.map((t,e)=>(0,n.jsx)(d,{item:t},e))}function _(t){let{children:e}=t;return(0,n.jsx)("div",{className:"tw-grid tw-grid-cols-1 desk:tw-grid-cols-2 medium:tw-grid-cols-3",children:e})}function g(){return(0,n.jsx)("div",{className:"tw-grid",children:(0,n.jsx)("p",{className:"tw-text-color-text-light tw-ml-auto tw-mr-auto",children:"No Results!"})})}function p(t){let{items:e}=t;return null==e||e.length<1?(0,n.jsx)(g,{}):(0,n.jsx)("section",{className:"tw-m-3",children:(0,n.jsx)(_,{children:(0,n.jsx)(h,{items:e})})})}var f=r(2521),b=r.n(f);class y extends i.Component{componentDidMount(){var t,e,r;let n=this.context;this.mSearchManager=n.searchmgr,this.mDisposables.push(null===(t=this.mSearchManager)||void 0===t?void 0:t.registerSearchInputEvent(this.onSearchInput)),this.mDisposables.push(null===(e=this.mSearchManager)||void 0===e?void 0:e.registerSearchOutputEvent(this.onSearchOutput)),null===(r=this.mSearchManager)||void 0===r||r.re_search()}componentWillUnmount(){this.mDisposables.map(t=>null==t?void 0:t.dispose())}onSearchInput(t){this.setState({keyword:null!=t?t:""})}onSearchOutput(t){this.setState({results:t})}onInputChanged(t){this.setState({keyword:t.target.value})}onClickClear(){this.setState({keyword:""})}onClickSearch(t){var e;null===(e=this.mSearchManager)||void 0===e||e.search(this.state.keyword)}onSubmit(t){var e;t.preventDefault(),null===(e=this.mSearchManager)||void 0===e||e.search(this.state.keyword)}render(){return(0,n.jsxs)("div",{className:"".concat(b()["search-popup"]),children:[(0,n.jsxs)("form",{className:"tw-flex tw-flex-row-reverse tw-border-2 tw-rounded-3xl tw-p-1 tw-pl-4 tw-pr-4 tw-m-2",onSubmit:this.onSubmit,children:[(0,n.jsx)("input",{id:"search-btn",name:"search-btn",type:"button",onClick:this.onClickSearch}),(0,n.jsx)("label",{className:"tw_flex tw-cursor-pointer",htmlFor:"search-btn",children:(0,n.jsx)("i",{className:"material-symbols-outlined tw-text-xl tw-align-middle tw-self-center",children:"search"})}),(0,n.jsx)("div",{className:"tw-border-l-2 tw-border-color-border tw-ml-2 tw-mr-2"}),(0,n.jsx)("button",{id:"search-input-clear-btn",name:"clear-btn",type:"button",onClick:this.onClickClear,children:(0,n.jsx)("i",{className:"material-symbols-outlined tw-text-xl tw-align-middle tw-self-center",children:"close"})}),(0,n.jsx)("input",{className:"tw-bg-transparent tw-w-full",id:"search-input",name:"search-input",type:"textbox",onChange:this.onInputChanged,value:this.state.keyword}),(0,n.jsx)("label",{htmlFor:"search-input"})]}),(0,n.jsx)("div",{className:"".concat(b().results),children:(0,n.jsx)(p,{items:this.state.results})})]})}constructor(t){super(t),this.mDisposables=[],this.state={keyword:"",results:null},this.componentWillUnmount=this.componentWillUnmount.bind(this),this.componentDidMount=this.componentDidMount.bind(this),this.onSearchInput=this.onSearchInput.bind(this),this.onSearchOutput=this.onSearchOutput.bind(this),this.onClickSearch=this.onClickSearch.bind(this),this.onClickClear=this.onClickClear.bind(this),this.onInputChanged=this.onInputChanged.bind(this),this.onSubmit=this.onSubmit.bind(this)}}y.contextType=o.Context;var v=y},3642:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(7437),i=r(2265),o=r(5313),s=r(5250),a=r.n(s),l=t=>{let{children:e,href:r,target:i="_self",rel:o,className:s,key:l,onClick:c}=t;return"_blank"==i&&(o="noopener noreferrer"),(0,n.jsx)(a(),{className:s,href:void 0===r?"":r,rel:o,target:i,onClick:c,prefetch:!1,children:e},l)},c=r(198),u=r(3656);function m(t){var e;let{children:r,label:s,refCount:a,slug:m,depth:d}=t,h=(0,o.usePathname)(),_=null!=h&&(null===(e=h.split("/")[d+1])||void 0===e?void 0:e.toUpperCase())===s.toUpperCase(),g=null==r,[p,f]=(0,i.useState)(!_||g),b=(0,i.useContext)(c.Context);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"\n              tw-flex tw-flex-row tw-justify-start\n              tw-mb-1\n              ".concat(d<1?"tw-font-bold":"tw-font-normal","\n              ").concat(d<1?"mobile:tw-text-xl tw-text-lg":d<2?"mobile:tw-text-lg tw-text-lg":"mobile:tw-text-base tw-text-base","\n           "),children:(0,n.jsxs)("button",{className:"tw-flex tw-flex-row tw-grow",onClick:t=>{f(!p)},children:[(0,n.jsx)("div",{className:"tw-self-center tw-w-6",children:g?(0,n.jsx)(n.Fragment,{}):p?(0,n.jsx)(u.jfD,{}):(0,n.jsx)(u.ZXJ,{})}),(0,n.jsx)(l,{className:"tw-font-sans hover:tw-font-bold tw-align-baseline\n                         ".concat(_?"tw-text-color-primary":"tw-text-color-text "),href:m,onClick:()=>{null==b||b.statemgr.closeAll()},children:"".concat(s).concat(a>0?" (".concat(a,")"):"")})]})}),!p&&(0,n.jsx)("div",{className:"tw-border-l-2 tw-ml-1.5 tw-pl-1.5",children:r})]})}},6960:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(7437),i=r(2265),o=r(198);function s(t){let{children:e}=t,[r,s]=(0,i.useState)(!1),a=(0,i.useContext)(o.Context);return(0,i.useEffect)(()=>{let t=[];return t.push(null==a?void 0:a.statemgr.registMenuEvent(t=>{s(t)})),()=>{t.map(t=>null==t?void 0:t.dispose())}},[]),(0,n.jsx)(n.Fragment,{children:r&&e})}},4626:function(t,e,r){"use strict";r.r(e),r.d(e,{Tooltip:function(){return l},WithTooltip:function(){return c}});var n=r(7437),i=r(2265),o=r(5967),s=r(5726),a=r.n(s);function l(t){let{hoverRef:e}=t,[r,s]=(0,i.useState)(),[l,c]=(0,i.useState)(),[u,m]=(0,i.useState)(),[d,h]=(0,i.useState)({top:"auto",left:"auto",right:"auto"}),_=(0,i.useRef)(!0),g=t=>t.current,p=t=>{if(null==e.current)return;let r=e.current,n=t.target,i={top:t.offsetY+n.offsetTop,left:t.offsetX+n.offsetLeft,right:"auto"};r.clientWidth-i.left<r.clientWidth/3?(i.right=r.clientWidth-i.left,i.left="auto",m(!1)):m(!0),s(n.innerHTML),c(!1),setTimeout(()=>{g(_)||(h(i),c(!0))},100)},f=t=>{_.current=!1},b=t=>{_.current=!0,c(!1)};return(0,i.useEffect)(()=>{let t=[],r=e.current,n=t=>f(t),i=(0,o.P2)(t=>p(t),100),s=t=>b(t);return r.querySelectorAll(".tooltip-hover").forEach(e=>{e.addEventListener("mouseenter",n),e.addEventListener("mousemove",i),e.addEventListener("mouseleave",s),t.push(()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mousemove",i),e.removeEventListener("mouseleave",s)})}),()=>{t.forEach(t=>t())}},[]),(0,n.jsx)("div",{className:"".concat(a().tooltip," ").concat(l?a().go:""," ").concat(u?a().left:a().right," "),style:{position:"absolute",...d},children:r})}function c(t){let{children:e}=t,r=(0,i.useRef)(null);return(0,n.jsxs)("div",{className:"tw-relative",ref:r,children:[e,(0,n.jsx)(l,{hoverRef:r})]})}},1355:function(){},9259:function(t){t.exports={toggleBtn:"darkmode-toggle_toggleBtn__XO5La"}},2769:function(t){t.exports={masthead:"masthead_masthead__zVIwm","menu-btn":"masthead_menu-btn__tZ2_W","menu-lines":"masthead_menu-lines__iNcj5",line:"masthead_line__AM5zP",change:"masthead_change__yYYz8",line1:"masthead_line1__NaE01",line2:"masthead_line2__ai3cP",line3:"masthead_line3__g18ZL",animate:"masthead_animate__G8Cab",rotateR:"masthead_rotateR__nudh_",fade:"masthead_fade__NdRim",rotateL:"masthead_rotateL__KcIB6"}},2521:function(t){t.exports={"search-popup":"search-popup_search-popup__rQedv",results:"search-popup_results__eZlJ7"}},4290:function(t){t.exports={sidebar:"sidebar_sidebar__gN2ma",leftone:"sidebar_leftone__Y8AG1","category-item-0":"sidebar_category-item-0__Ozjud","category-item-1":"sidebar_category-item-1__fEo_0","category-item-2":"sidebar_category-item-2__dBodK","category-item-3":"sidebar_category-item-3__62hWU","category-item-4":"sidebar_category-item-4__9Rwgb","category-item-5":"sidebar_category-item-5__Lpgt4","category-item-6":"sidebar_category-item-6__j7ipe","category-item-7":"sidebar_category-item-7__WTwuF","category-item-8":"sidebar_category-item-8__FohA3","category-item-9":"sidebar_category-item-9__hpaJF","category-item-10":"sidebar_category-item-10__KzzBR","category-item-11":"sidebar_category-item-11__B2v41","category-item-12":"sidebar_category-item-12__KW28u","category-item-13":"sidebar_category-item-13__uRtYi","category-item-14":"sidebar_category-item-14__vYYlv","category-item-15":"sidebar_category-item-15__MPn5y","category-item-16":"sidebar_category-item-16__1sIHL","category-item-17":"sidebar_category-item-17__z2_Hf","category-item-18":"sidebar_category-item-18__LkSa3","category-item-19":"sidebar_category-item-19__HPzAK","category-item-20":"sidebar_category-item-20__mcgBU","category-item-21":"sidebar_category-item-21__6aVPU","category-item-22":"sidebar_category-item-22__WQCyO","category-item-23":"sidebar_category-item-23__vq0Vu","category-item-24":"sidebar_category-item-24__qzatx","category-item-25":"sidebar_category-item-25__gXDOM","category-item-26":"sidebar_category-item-26__olnp5","category-item-27":"sidebar_category-item-27__ODXsp","category-item-28":"sidebar_category-item-28__XYFiI","category-item-29":"sidebar_category-item-29__zkZK_","category-item-30":"sidebar_category-item-30__iL7VH","category-item-31":"sidebar_category-item-31__Za_xN","category-item-32":"sidebar_category-item-32__TjLOx","category-item-33":"sidebar_category-item-33___Be4s","category-item-34":"sidebar_category-item-34__3F4S0","category-item-35":"sidebar_category-item-35__TpLIA","category-item-36":"sidebar_category-item-36__IhCjt","category-item-37":"sidebar_category-item-37__6mPwU","category-item-38":"sidebar_category-item-38__rrdQi","category-item-39":"sidebar_category-item-39__HfwHj","category-item-40":"sidebar_category-item-40__c3Bov"}},5726:function(t){t.exports={tooltip:"tooltip_tooltip__5rF2R",go:"tooltip_go__aEkNn",left:"tooltip_left__0bgo3",right:"tooltip_right__Id7PU"}}},function(t){t.O(0,[929,712,991,250,612,198,983,971,69,744],function(){return t(t.s=2863)}),_N_E=t.O()}]);