(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2237:function(e,n,t){Promise.resolve().then(t.t.bind(t,7095,23)),Promise.resolve().then(t.bind(t,1610)),Promise.resolve().then(t.t.bind(t,6964,23))},1610:function(e,n,t){"use strict";t.r(n),t.d(n,{Context:function(){return c},ContextProvider:function(){return l}});var s=t(9268);class r{dispose(){this.owner.unSubscribe(this.event)}constructor(e,n){this.owner=e,this.event=n}}class i{invoke(e){for(var n of this.handlers)n(e)}subscribe(e){return this.handlers.add(e),new r(this,e)}unSubscribe(e){this.handlers.delete(e)}count(){return this.handlers.size}constructor(){this.handlers=new Set}}var u=class{openMenu(){this.mMenuOpenEvent.invoke(!0)}closeMenu(){this.mMenuOpenEvent.invoke(!1)}toggleMenu(){this.bMenuOpened=!this.bMenuOpened,this.mMenuOpenEvent.invoke(this.bMenuOpened)}registMenuEvent(e){return this.mMenuOpenEvent.subscribe(e)}constructor(){this.mMenuOpenEvent=new i,this.bMenuOpened=!1}},o=t(6006);class h{constructor(){this.statemgr=new u}}let c=(0,o.createContext)(null);function l(e){let{children:n}=e;return(0,s.jsx)(c.Provider,{value:new h,children:n})}},6964:function(){}},function(e){e.O(0,[703,253,698,744],function(){return e(e.s=2237)}),_N_E=e.O()}]);