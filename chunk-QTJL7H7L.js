import{$ as l,A as X,B as b,Ba as Xe,C as U,D as C,E as B,F as v,Fa as Ke,G as Be,H as $e,I as pe,J as x,K as $,L as A,N as K,O as me,Q as ge,R as He,T as c,U as a,V as ve,X as M,Y as H,Z as y,_ as ye,a as m,aa as u,b as D,ba as L,ca as Le,d as Z,da as We,e as J,ea as qe,f as Ne,fa as h,g as Te,ga as O,h as Y,ha as d,ia as ze,j as g,ja as _,ka as E,la as Q,m as Pe,ma as N,na as w,o as ke,oa as F,pa as Ze,r as je,s as Ge,ta as _e,ua as Je,v as Re,va as Ye,wa as ee,x as Ue,xa as V,y as R}from"./chunk-NFOYLJRS.js";var at=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(ve),a(pe))},e.\u0275dir=v({type:e});let i=e;return i})(),Ot=(()=>{let e=class e extends at{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=He(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[M]});let i=e;return i})(),lt=new A("");var Nt={provide:lt,useExisting:K(()=>le),multi:!0};function Tt(){let i=_e()?_e().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Pt=new A(""),le=(()=>{let e=class e extends at{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Tt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(ve),a(pe),a(Pt,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(p){return o._handleInput(p.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(p){return o._compositionEnd(p.target.value)})},features:[Q([Nt]),M]});let i=e;return i})();var ut=new A(""),ct=new A("");function dt(i){return i!=null}function ht(i){return Ze(i)?Te(i):i}function ft(i){let e={};return i.forEach(n=>{e=n!=null?m(m({},e),n):e}),Object.keys(e).length===0?null:e}function pt(i,e){return e.map(n=>n(i))}function kt(i){return!i.validate}function mt(i){return i.map(e=>kt(e)?e:n=>e.validate(n))}function jt(i){if(!i)return null;let e=i.filter(dt);return e.length==0?null:function(n){return ft(pt(n,e))}}function gt(i){return i!=null?jt(mt(i)):null}function Gt(i){if(!i)return null;let e=i.filter(dt);return e.length==0?null:function(n){let t=pt(n,e).map(ht);return Pe(t).pipe(g(ft))}}function vt(i){return i!=null?Gt(mt(i)):null}function Qe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function yt(i){return i._rawValidators}function _t(i){return i._rawAsyncValidators}function Ce(i){return i?Array.isArray(i)?i:[i]:[]}function ie(i,e){return Array.isArray(i)?i.includes(e):i===e}function et(i,e){let n=Ce(e);return Ce(i).forEach(r=>{ie(n,r)||n.push(r)}),n}function tt(i,e){return Ce(e).filter(n=>!ie(i,n))}var ne=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=gt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=vt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},k=class extends ne{get formDirective(){return null}get path(){return null}},z=class extends ne{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},re=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Rt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ki=D(m({},Rt),{"[class.ng-submitted]":"isSubmitted"}),Ct=(()=>{let e=class e extends re{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(z,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ye("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[M]});let i=e;return i})(),Vt=(()=>{let e=class e extends re{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(k,10))},e.\u0275dir=v({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ye("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[M]});let i=e;return i})();var W="VALID",te="INVALID",T="PENDING",q="DISABLED";function be(i){return(ue(i)?i.validators:i)||null}function Ut(i){return Array.isArray(i)?gt(i):i||null}function Ae(i,e){return(ue(e)?e.asyncValidators:i)||null}function Bt(i){return Array.isArray(i)?vt(i):i||null}function ue(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Dt(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new X(1e3,"");if(!t[n])throw new X(1001,"")}function bt(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new X(1002,"")})}var j=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===W}get invalid(){return this.status===te}get pending(){return this.status==T}get disabled(){return this.status===q}get enabled(){return this.status!==q}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(et(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(et(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(tt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(tt(e,this._rawAsyncValidators))}hasValidator(e){return ie(this._rawValidators,e)}hasAsyncValidator(e){return ie(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=T,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=q,this.errors=null,this._forEachChild(t=>{t.disable(D(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=W,this._forEachChild(t=>{t.enable(D(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===W||this.status===T)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?q:W}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=T,this._hasOwnPendingAsyncValidator=!0;let n=ht(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?q:this.errors?te:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(T)?T:this._anyControlsHaveStatus(te)?te:W}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ue(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ut(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Bt(this._rawAsyncValidators)}},oe=class extends j{constructor(e,n,t){super(be(n),Ae(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){bt(this,!0,e),Object.keys(e).forEach(t=>{Dt(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,o)=>{t=n(t,r,o)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Ve=class extends oe{};var At=new A("CallSetDisabledState",{providedIn:"root",factory:()=>Me}),Me="always";function $t(i,e){return[...e.path,i]}function it(i,e,n=Me){Ee(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Lt(i,e),qt(i,e),Wt(i,e),Ht(i,e)}function nt(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),ae(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function se(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ht(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function Ee(i,e){let n=yt(i);e.validator!==null?i.setValidators(Qe(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=_t(i);e.asyncValidator!==null?i.setAsyncValidators(Qe(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();se(e._rawValidators,r),se(e._rawAsyncValidators,r)}function ae(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=yt(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,i.setValidators(o))}}if(e.asyncValidator!==null){let r=_t(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,i.setAsyncValidators(o))}}}let t=()=>{};return se(e._rawValidators,t),se(e._rawAsyncValidators,t),n}function Lt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Mt(i,e)})}function Wt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Mt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Mt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function qt(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function zt(i,e){i==null,Ee(i,e)}function Zt(i,e){return ae(i,e)}function Jt(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Yt(i){return Object.getPrototypeOf(i.constructor)===Ot}function Xt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Kt(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(o=>{o.constructor===le?n=o:Yt(o)?t=o:r=o}),r||t||n||null}function Qt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function rt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function ot(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var P=class extends j{constructor(e=null,n,t){super(be(n),Ae(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ue(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ot(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){rt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){rt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ot(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ei=i=>i instanceof P;var Et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var wt=new A("");var ti={provide:k,useExisting:K(()=>we)},we=(()=>{let e=class e extends k{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new b,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ae(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return it(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){nt(t.control||null,t,!1),Qt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Xt(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,o=this.form.get(t.path);r!==o&&(nt(r||null,t),ei(o)&&(it(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);zt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&Zt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ee(this.form,this),this._oldForm&&ae(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(ut,10),a(ct,10),a(At,8))},e.\u0275dir=v({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&h("submit",function(p){return o.onSubmit(p)})("reset",function(){return o.onReset()})},inputs:{form:[U.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Q([ti]),M,ge]});let i=e;return i})();var ii={provide:z,useExisting:K(()=>Fe)},Fe=(()=>{let e=class e extends z{set isDisabled(t){}constructor(t,r,o,s,p){super(),this._ngModelWarningConfig=p,this._added=!1,this.name=null,this.update=new b,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Kt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Jt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return $t(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(k,13),a(ut,10),a(ct,10),a(lt,10),a(wt,8))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""]],inputs:{name:[U.None,"formControlName","name"],isDisabled:[U.None,"disabled","isDisabled"],model:[U.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[Q([ii]),M,ge]});let i=e;return i})();var ni=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=$({});let i=e;return i})(),De=class extends j{constructor(e,n,t){super(be(n),Ae(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){bt(this,!1,e),e.forEach((t,r)=>{Dt(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function st(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Ft=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let o=this._reduceControls(t),s={};return st(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new oe(o,s)}record(t,r=null){let o=this._reduceControls(t);return new Ve(o,r)}control(t,r,o){let s={};return this.useNonNullable?(st(r)?s=r:(s.validators=r,s.asyncValidators=o),new P(t,D(m({},s),{nonNullable:!0}))):new P(t,r,o)}array(t,r,o){let s=t.map(p=>this._createControl(p));return new De(s,r,o)}_reduceControls(t){let r={};return Object.keys(t).forEach(o=>{r[o]=this._createControl(t[o])}),r}_createControl(t){if(t instanceof P)return t;if(t instanceof j)return t;if(Array.isArray(t)){let r=t[0],o=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(r,o,s)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ce=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:wt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:At,useValue:t.callSetDisabledState??Me}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=$({imports:[ni]});let i=e;return i})();var Ie=function(i){return i.CHF="CHF",i.EUR="EUR",i}(Ie||{});var f=function(i){return i.SoldOut="SOLD_OUT",i.AlmostConfirmed="ALMOST_CONFIRMED",i.Confirmed="CONFIRMED",i.AlmostFull="ALMOST_FULL",i.Planned="PLANNED",i}(f||{});function It(i){return i.data.map(e=>({id:e.id,code:e.code,startingDate:e.startingDate,endingDate:e.endingDate,ageBadge:e.ageBadge,price:Object.keys(e.price).map(n=>({currency:n,price:e.price[n]})),status:e.salesStatus,facebookGroupUrl:e.extra.facebookGroupUrl,coordinatorName:e.coordinator?.firstName||"",coordinatorLastName:e.coordinator?.lastName||"",tourName:e.travel.title}))}var oi="https://api-catalog.weroad.it/travels",G="maldive-beach-life-weroadx",Se=(()=>{let e=class e{listTours(t=G){let r=document.getElementById("data-tours");return r?(r.src=`${oi}/${t}/tours`,ke(500).pipe(R(()=>{let o=localStorage.getItem("tours");return o?Y(JSON.parse(o)).pipe(g(It)):Y([])}))):Y([])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function xe(i){let e={},n=i;for(;n;)Object.assign(e,n.params,n.queryParams),n=n.firstChild;return e}var ai="WEROAD_ID",S=(()=>{let e=class e{constructor(t,r){this.weroadApiService=t,this.route=r,this._fetchToursSubject$=new Z(void 0),this._tourId$=new J(1),this.tours$=this._tourId$.pipe(Re(),R(o=>this._fetchToursSubject$.pipe(R(s=>this.weroadApiService.listTours(o)))),Ge(o=>Ne)),this.tourId$=this._tourId$.asObservable()}init(){let t=xe(this.route.snapshot);this._tourId$.next(t[ai]||G)}refreshTours(){this._fetchToursSubject$.next()}updateTourId(t){this._tourId$.next(t)}};e.\u0275fac=function(r){return new(r||e)(me(Se),me(Xe))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var de=(()=>{let e=class e{set tours(t){this.tours$.next(t)}constructor(t){this.weroadService=t,this.showToursInfo=new b,this.showingTours=!1,this.tours$=new J(1),this.totalTours$=this.tours$.pipe(g(r=>r.length)),this.toursToConfirm$=this.tours$.pipe(g(r=>r.filter(o=>o.status===f.AlmostConfirmed||o.status===f.Planned)),g(r=>r.length)),this.tourName$=this.tours$.pipe(je(r=>r.length>0),g(r=>r[0].tourName))}refreshTours(){this.weroadService.refreshTours()}showAllTours(){this.showingTours=!this.showingTours,this.showToursInfo.next(this.showingTours)}};e.\u0275fac=function(r){return new(r||e)(a(S))},e.\u0275cmp=C({type:e,selectors:[["existing-tours-actions"]],inputs:{tours:"tours"},outputs:{showToursInfo:"showToursInfo"},standalone:!0,features:[N],decls:15,vars:14,consts:[[1,"tour-container"],[1,"buttons-container"],[1,"refresh-tours",3,"click"],[3,"click"]],template:function(r,o){r&1&&(l(0,"h2"),d(1),w(2,"async"),u(),l(3,"div",0)(4,"span"),d(5),w(6,"async"),u(),l(7,"span"),d(8),w(9,"async"),u()(),l(10,"div",1)(11,"button",2),h("click",function(){return o.refreshTours()}),d(12),u(),l(13,"button",3),h("click",function(){return o.showAllTours()}),d(14),u()()),r&2&&(c(),E("","Nome tour: "," ",F(2,8,o.tourName$),""),c(4),E(" ","Tours totali pubblicati: "," ",F(6,10,o.totalTours$)," "),c(3),E(" ","Tours non confermati: "," ",F(9,12,o.toursToConfirm$)," "),c(4),_(" ","Aggiorna Dati",""),c(2),_(" ","Mostra tour",""))},dependencies:[V,ee],styles:[".tour-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.buttons-container[_ngcontent-%COMP%]{display:flex;margin-top:10px}.refresh-tours[_ngcontent-%COMP%]{margin-right:20px}"]});let i=e;return i})();var he=(()=>{let e=class e{constructor(t,r){this.weroadService=t,this.formBuilder=r,this.form=this.formBuilder.group({tourId:new P(G,{nonNullable:!0})})}updateTourId(){let t=this.form.controls.tourId.value;this.weroadService.updateTourId(t)}};e.\u0275fac=function(r){return new(r||e)(a(S),a(Ft))},e.\u0275cmp=C({type:e,selectors:[["tour-id"]],standalone:!0,features:[N],decls:6,vars:3,consts:[[3,"formGroup"],["formControlName","tourId",1,"input-tour"],[1,"update-tour",3,"click"]],template:function(r,o){r&1&&(l(0,"h2"),d(1),u(),l(2,"form",0),L(3,"input",1),u(),l(4,"button",2),h("click",function(){return o.updateTourId()}),d(5),u()),r&2&&(c(),ze("Inserisci nome tour"),c(),y("formGroup",o.form),c(3),_(" ","Cerca tour"," "))},dependencies:[V,ce,Et,le,Ct,Vt,we,Fe],styles:[".input-tour[_ngcontent-%COMP%]{width:300px}.update-tour[_ngcontent-%COMP%]{margin-top:10px}"]});let i=e;return i})();function ci(i,e){if(i&1&&(l(0,"div")(1,"div",1)(2,"div",2)(3,"h3"),d(4,"Tour code"),u(),l(5,"span"),d(6),u()(),l(7,"div",2)(8,"h3"),d(9,"Data"),u(),l(10,"span"),d(11),u()(),l(12,"div",2)(13,"h3"),d(14,"Nome e cognome"),u(),l(15,"span"),d(16),u()(),l(17,"div",2)(18,"h3"),d(19,"status"),u(),l(20,"span"),d(21),u()(),l(22,"div",2)(23,"h3"),d(24,"Prezzo"),u(),l(25,"span"),d(26),u()()()()),i&2){let n=e.$implicit,t=O();c(6),_(" ",n.code," "),c(5),E(" ",n.startingDate,"/",n.endingDate," "),c(5),E(" ",n.coordinatorName," ",n.coordinatorLastName," "),c(5),_(" ",t.getStatusText(n.status)," "),c(5),_(" ",t.getEURPrice(n.price)," ")}}var fe=(()=>{let e=class e{constructor(){this.tours=[]}trackByTour(t,r){return r.id}getStatusText(t){switch(t){case f.AlmostConfirmed:return"Quasi confermato";case f.AlmostFull:return"Almost full";case f.Confirmed:return"Confermato";case f.Planned:return"Pianificato";case f.SoldOut:return"Sold out";default:return t}}getEURPrice(t){return t.find(r=>r.currency===Ie.EUR)?.price}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=C({type:e,selectors:[["tour-info"]],inputs:{tours:"tours"},standalone:!0,features:[N],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[1,"tour-table"],[1,"column"]],template:function(r,o){r&1&&H(0,ci,27,7,"div",0),r&2&&y("ngForOf",o.tours)("ngForTrackBy",o.trackByTour)},dependencies:[V,Je],styles:[".tour-table[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;border:solid 1px black;border-top:0;border-right:0;border-left:0;padding-bottom:5px}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:170px}"]});let i=e;return i})();function hi(i,e){if(i&1&&L(0,"tour-info",3),i&2){let n=O().ngIf;y("tours",n)}}function fi(i,e){if(i&1){let n=qe();Le(0),l(1,"existing-tours-actions",1),h("showToursInfo",function(r){Be(n);let o=O();return $e(o.showTourInfo(r))}),u(),H(2,hi,1,1,"tour-info",2),w(3,"async"),We()}if(i&2){let n=e.ngIf,t=O();c(),y("tours",n),c(),y("ngIf",F(3,2,t.showTourInfo$))}}var xt=(()=>{let e=class e{constructor(t){this.weroadService=t,this.tours$=this.weroadService.tours$.pipe(Ue({refCount:!0,bufferSize:1})),this.showTourInfo$=new Z(!1)}ngOnInit(){this.weroadService.init()}showTourInfo(t){this.showTourInfo$.next(t)}};e.\u0275fac=function(r){return new(r||e)(a(S))},e.\u0275cmp=C({type:e,selectors:[["verify-tours"]],decls:3,vars:3,consts:[[4,"ngIf"],[3,"tours","showToursInfo"],[3,"tours",4,"ngIf"],[3,"tours"]],template:function(r,o){r&1&&(L(0,"tour-id"),H(1,fi,4,4,"ng-container",0),w(2,"async")),r&2&&(c(),y("ngIf",F(2,1,o.tours$)))},dependencies:[Ye,he,de,fe,ee],changeDetection:0});let i=e;return i})();var pi=[{path:"",component:xt}],En=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=$({imports:[V,Ke.forChild(pi),ce,he,de,fe]});let i=e;return i})();export{pi as ROUTES,En as VerifyToursModule};
