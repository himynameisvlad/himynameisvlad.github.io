(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(50)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n.n(a),c=n(18),u=n.n(c),i=n(7),s=n(8),p=n(10),l=n(9),E=n(11),d=n(28),f=n(13),O=n(6);!function(e){e.LOAD_MAP_REQUEST="LOAD_MAP_REQUEST",e.LOAD_MAP_SUCCESS="LOAD_MAP_SUCCESS",e.CREATE_MAP="CREATE_MAP",e.CREATE_MAP_SUCCESS="CREATE_MAP_SUCCESS",e.DESTROY_MAP="DESTROY_MAP",e.DESTROY_MAP_SUCCESS="DESTROY_MAP_SUCCESS",e.CREATE_ROUTE="CREATE_ROUTE",e.CREATE_ROUTE_SUCCESS="CREATE_ROUTE_SUCCESS",e.SET_ROUTE_POINTS="SET_ROUTE_POINTS",e.ADD_ROUTE_POINT="ADD_ROUTE_POINT",e.SWAP_ROUTE_POINT="SWAP_ROUTE_POINT",e.MOVE_ROUTE_POINT="MOVE_ROUTE_POINT",e.MOVE_ROUTE_POINT_SUCCESS="MOVE_ROUTE_POINT_SUCCESS",e.DELETE_ROUTE_POINT="DELETE_ROUTE_POINT",e.SEARCH_ROUTE_POINT_REQUEST="SEARCH_ROUTE_POINT_REQUEST",e.SEARCH_ROUTE_POINT_SUCCESS="SEARCH_ROUTE_POINT_SUCCESS",e.REQUEST_FAIL="REQUEST_FAIL"}(r||(r={}));var m,_=function(){return{type:r.LOAD_MAP_REQUEST}},b=function(e){return{type:r.CREATE_MAP,payload:e}},S=function(e){return{type:r.CREATE_MAP_SUCCESS,payload:e}},y=function(){return{type:r.DESTROY_MAP}},T=function(e){return{type:r.CREATE_ROUTE_SUCCESS,payload:e}},h=function(e){return{type:r.SET_ROUTE_POINTS,payload:e}},R=function(e){return{type:r.SEARCH_ROUTE_POINT_REQUEST,payload:e}},P=function(e){return{type:r.SEARCH_ROUTE_POINT_SUCCESS,payload:e}},v=function(e){return{type:r.SWAP_ROUTE_POINT,payload:e}},C=function(e){return{type:r.MOVE_ROUTE_POINT,payload:e}},g=function(e){return{type:r.MOVE_ROUTE_POINT_SUCCESS,payload:e}},w=function(e){return{type:r.DELETE_ROUTE_POINT,payload:e}},j=function(e){return{type:r.REQUEST_FAIL,payload:e}},U=(n(40),Object(a.memo)(function(e){var t=e.onClick;return o.a.createElement("button",{className:"fb-delete-icon",onClick:t})})),A=(n(41),Object(a.memo)(function(e){var t=e.children,n=e.isDragging,r=e.onDragStart,a=e.onDrop,c=e.onDragEnd;return o.a.createElement("li",{draggable:!0,className:"fb-draggable ".concat(n?"fb-draggable--is-dragging":""),onDragStart:r,onDragOver:function(e){e.preventDefault()},onDrop:a,onDragEnd:c},t)})),x=(n(42),Object(a.memo)(function(e){var t=e.title,n=e.children;return o.a.createElement("div",{className:"fb-plate"},o.a.createElement("span",null,t),o.a.createElement("div",{className:"fb-plate__icon"},n))})),D=Object(a.memo)(function(){return o.a.createElement("div",null,"Loading...")}),M=(n(43),Object(a.memo)(function(e){var t=e.formErrors,n=Object.keys(t).map(function(e,n){return t[e].length>0?o.a.createElement("p",{key:n},t[e]):null});return o.a.createElement("div",{className:"fb-form-errors"},n)})),I=(n(44),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={inputValue:"",formErrors:{}},n.handleInputChange=function(e){n.state.formErrors.inputError&&n.setState({formErrors:{}}),n.setState({inputValue:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.state.inputValue.length<=0?n.setState({formErrors:{inputError:"Value must not be empty"}}):(n.props.onSubmit(n.state.inputValue),n.setState({inputValue:""}))},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"fb-form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:this.props.placeholder,className:"fb-form__input",value:this.state.inputValue,onChange:this.handleInputChange}),o.a.createElement(M,{formErrors:this.state.formErrors}))}}]),t}(a.PureComponent)),k=function(e){var t=e.apiKey,n=void 0===t?"":t,r=e.apiUrl,a=void 0===r?"":r;return m||(m=new Promise(function(e,t){if(n)if(a)if(window.ymaps)e(window.ymaps);else{window.__on_yandex_map_init__=function(){delete window.__on_yandex_map_init__,e(window.ymaps)};var r=document.createElement("script");r.src="".concat(a,"?apikey=").concat(n,"&lang=ru_RU&onload=__on_yandex_map_init__"),document.body.appendChild(r)}else t(new Error("There must be url!"));else t(new Error("There must be a key!"))}))},N=n(5),L=n.n(N),V=n(26),W=n(27),Q=function(e){try{var t=e.geometry;return{id:W.Guid.create().toString(),name:e.properties.get("name",null).toString(),coordinates:t.getCoordinates(),address:e.getAddressLine()}}catch(n){throw new Error(n)}},H=function(){var e=Object(V.a)(L.a.mark(function e(t,n){var r,a,o;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((r=window.ymaps)&&r.geocode&&"function"===typeof r.geocode){e.next=3;break}throw new Error("Yandex maps must be initialized");case 3:if(t){e.next=5;break}throw new Error("There must be a route name");case 5:return e.prev=5,a=r.geocode(t,n),e.next=9,a;case 9:return o=e.sent,e.abrupt("return",Q(o.geoObjects.get(0)));case 13:throw e.prev=13,e.t0=e.catch(5),new Error("Sorry, we can't find the route point");case 16:case"end":return e.stop()}},e,null,[[5,13]])}));return function(t,n){return e.apply(this,arguments)}}(),F=n(16),Y=function(e,t,n){if(!e||!e.length||"undefined"===typeof e[t]||"undefined"===typeof e[n])return e;var r=Object(F.a)(e);return r.splice(n,0,r.splice(t,1)[0]),r},q=function(e){var t={};return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=JSON.stringify(r);return t[o]=t[o]||e.apply(void 0,r),t[o]}},z=function(e){window.ymaps.geoObject.addon.balloon.get(e),e.options.set({iconContentLayout:window.ymaps.templateLayoutFactory.createClass(""),balloonContentLayout:window.ymaps.templateLayoutFactory.createClass("{{ properties.address|raw }}")})},J=(n(46),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={draggingItemIndex:null},n.handleDeleteRoutePoint=q(function(e){return function(t){t.preventDefault(),n.props.deleteRoutePoint(e)}}),n.handleDragStart=q(function(e){return function(){n.setState({draggingItemIndex:e})}}),n.handleDrop=q(function(e){return function(){n.state.draggingItemIndex!==e&&n.props.swapRoutePoint({from:n.state.draggingItemIndex,to:e})}}),n.handleDragEnd=function(){n.setState({draggingItemIndex:null})},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.routePoints.map(function(t,n){return o.a.createElement(A,{key:t.id,isDragging:e.state.draggingItemIndex===n,onDragStart:e.handleDragStart(n),onDrop:e.handleDrop(n),onDragEnd:e.handleDragEnd},o.a.createElement(x,{title:t.name},o.a.createElement(U,{onClick:e.handleDeleteRoutePoint(t)})))});return o.a.createElement("ul",{className:"fb-route-list"},t)}}]),t}(a.Component)),K=Object(f.b)(function(e){return{routePoints:e.routePoints}},function(e){return Object(O.bindActionCreators)({swapRoutePoint:v,deleteRoutePoint:w},e)})(J),B=(n(47),Object(f.b)(null,function(e){return Object(O.bindActionCreators)({onSubmit:R},e)})(function(e){var t=e.onSubmit;return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{placeholder:"Enter point name",onSubmit:t}),o.a.createElement("div",{className:"fb-routes-aside__list"},o.a.createElement(K,null)))})),G=(n(48),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).mapRef=Object(a.createRef)(),n.onWaypointDragEnd=function(e){return function(t){var r=t.get("wayPoint");n.props.onDragPointEnd({index:e.getWayPoints().toArray().indexOf(r),newPoint:r})}},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.setRoutePoints(e.routePoints)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentDidMount",value:function(){this.props.createMap({element:this.mapRef.current,onWaypointDragEnd:this.onWaypointDragEnd})}},{key:"componentWillUnmount",value:function(){this.props.destroyMap()}},{key:"render",value:function(){return o.a.createElement("div",{className:"google-map",ref:this.mapRef})}}]),t}(a.Component)),X=(n(49),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.loadMapRequest()}},{key:"render",value:function(){var e=this.props,t=e.routePoints,n=e.moveRoutePoint,r=e.createMap,a=e.setRoutePoints,c=e.destroyMap;return e.isMapScriptLoaded?o.a.createElement("main",null,o.a.createElement("aside",{className:"app__aside"},o.a.createElement(B,null)),o.a.createElement("div",{className:"app__map"},o.a.createElement(G,{routePoints:t,onDragPointEnd:n,createMap:r,setRoutePoints:a,destroyMap:c}))):o.a.createElement(D,null)}}]),t}(a.Component)),Z=Object(d.hot)(Object(f.b)(function(e){return{isMapScriptLoaded:e.isMapScriptLoaded,routePoints:e.routePoints}},function(e){return Object(O.bindActionCreators)({loadMapRequest:_,moveRoutePoint:C,createMap:b,setRoutePoints:h,destroyMap:y},e)})(X)),$=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),console.error(t)}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("div",null,"Something went wrong"):this.props.children}}]),t}(a.Component),ee=n(3),te=L.a.mark(function e(t){var n,r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.payload)&&n instanceof Error)){e.next=5;break}return r=n.message,e.next=5,Object(ee.b)(alert,r);case 5:case"end":return e.stop()}},e)}),ne=L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.e)(r.REQUEST_FAIL,te);case 2:case"end":return e.stop()}},e)}),re=L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ee.b)(k,{apiKey:"3dd8e6c0-82aa-46ac-bcab-1369c7ba1d92",apiUrl:"https://api-maps.yandex.ru/2.1"});case 3:return e.next=5,Object(ee.c)({type:r.LOAD_MAP_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(ee.c)(j(e.t0));case 11:case"end":return e.stop()}},e,null,[[0,7]])}),ae=L.a.mark(function e(t){var n,a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,new window.ymaps.Map(n.element,{center:[55.755,37.617],zoom:6,controls:["zoomControl"]});case 4:return a=e.sent,e.next=7,Object(ee.c)(S(a));case 7:return e.next=9,Object(ee.c)((o=n.onWaypointDragEnd,{type:r.CREATE_ROUTE,payload:o}));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(1),e.next=15,Object(ee.c)(j(e.t0));case 15:case"end":return e.stop()}var o},e,null,[[1,11]])}),oe=L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([Object(ee.f)(r.LOAD_MAP_REQUEST,re),Object(ee.f)(r.CREATE_MAP,ae)]);case 2:case"end":return e.stop()}},e)}),ce=L.a.mark(function e(t){var n,r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(ee.b)(H,n,{results:1});case 4:return r=e.sent,e.next=7,Object(ee.c)(P(r));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),e.next=13,Object(ee.c)(j(e.t0));case 13:case"end":return e.stop()}},e,null,[[1,9]])}),ue=L.a.mark(function e(t){var n,r,a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,r=n.newPoint.geometry,e.next=5,Object(ee.b)(H,r.getCoordinates(),{results:1});case 5:return a=e.sent,e.next=8,Object(ee.c)(g({newPoint:a,index:n.index}));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(ee.c)(j(e.t0));case 14:case"end":return e.stop()}},e,null,[[1,10]])}),ie=L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([Object(ee.f)(r.SEARCH_ROUTE_POINT_REQUEST,ce),Object(ee.f)(r.MOVE_ROUTE_POINT,ue)]);case 2:case"end":return e.stop()}},e)}),se=L.a.mark(function e(t){var n,r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,new window.ymaps.multiRouter.MultiRoute({referencePoints:[],params:{results:1}},{mapStateAutoApply:!0,boundsAutoApply:!0});case 4:return(r=e.sent).editor.start({editWayPoints:!0,addViaPoints:!1}),r.editor.events.add("waypointdragend",n(r)),e.next=9,Object(ee.c)(T(r));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(1),e.next=15,Object(ee.c)(j(e.t0));case 15:case"end":return e.stop()}},e,null,[[1,11]])}),pe=L.a.mark(function e(t){var n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(ee.d)(function(e){return e.map});case 4:e.sent.geoObjects.add(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(1),e.next=12,Object(ee.c)(j(e.t0));case 12:case"end":return e.stop()}},e,null,[[1,8]])}),le=L.a.mark(function e(t){var n,r,a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.next=3,Object(ee.d)(function(e){return e.route});case 3:r=e.sent,a=n.map(function(e){return e.name}),r.model.setReferencePoints(a),r.model.events.once("requestsuccess",function(){r.getWayPoints().each(z)});case 7:case"end":return e.stop()}},e)}),Ee=L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([Object(ee.f)(r.CREATE_ROUTE,se),Object(ee.f)(r.CREATE_ROUTE_SUCCESS,pe),Object(ee.f)(r.SET_ROUTE_POINTS,le)]);case 2:case"end":return e.stop()}},e)}),de=L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([ie(),oe(),ne(),Ee()]);case 2:case"end":return e.stop()}},e)}),fe=(n(29),n(30)),Oe=n(12),me={routePoints:[],isMapScriptLoaded:!1,map:null,route:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.LOAD_MAP_SUCCESS:return Object(Oe.a)({},e,{isMapScriptLoaded:!0});case r.CREATE_MAP_SUCCESS:return Object(Oe.a)({},e,{map:t.payload});case r.DESTROY_MAP_SUCCESS:return Object(Oe.a)({},e,{map:null,route:null});case r.CREATE_ROUTE_SUCCESS:return Object(Oe.a)({},e,{route:t.payload});case r.SEARCH_ROUTE_POINT_SUCCESS:return Object(Oe.a)({},e,{routePoints:[].concat(Object(F.a)(e.routePoints),[t.payload])});case r.SWAP_ROUTE_POINT:return Object(Oe.a)({},e,{routePoints:Y(e.routePoints,t.payload.from,t.payload.to)});case r.MOVE_ROUTE_POINT_SUCCESS:return e.routePoints[t.payload.index]=t.payload.newPoint,Object(Oe.a)({},e,{routePoints:Object(F.a)(e.routePoints)});case r.DELETE_ROUTE_POINT:return Object(Oe.a)({},e,{routePoints:e.routePoints.filter(function(e){return e.id!==t.payload.id})});default:return e}},be=Object(fe.a)(),Se=Object(O.createStore)(_e,Object(O.applyMiddleware)(be));be.run(de),u.a.render(o.a.createElement(f.a,{store:Se},o.a.createElement($,null,o.a.createElement(Z,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d1e1f937.chunk.js.map