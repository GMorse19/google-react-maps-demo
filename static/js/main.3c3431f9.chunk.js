(this["webpackJsonpteam-project-5"]=this["webpackJsonpteam-project-5"]||[]).push([[0],{15:function(e,t,a){e.exports=a(41)},20:function(e,t,a){},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=(a(20),a(10)),i=a.n(s),l=a(5),u=a(6),p=a(8),d=a(7),m=a(9),h=(a(22),a(4)),f=a(11),g=a.n(f),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={test:!0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"test component"),o.a.createElement("p",null,this.props.placeData.place_id))}}]),t}(o.a.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).setQuery=function(t){e.setState({query:t})},e.handleAutocompleteSelect=function(t){var a,n;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,i.a.awrap(Object(f.geocodeByAddress)(t));case 2:return a=o.sent,o.next=5,i.a.awrap(Object(f.getLatLng)(a[0]));case 5:n=o.sent,e.setState({coordinates:n}),e.setState({placeData:a[0]});case 8:case"end":return o.stop()}}))},e.onMarkerClick=function(t,a,n){e.setState({selectedMarker:a}),e.setState({showWindow:!0})},e.onInfoWindowClose=function(){e.setState({showWindow:!1})},e.state={center:"",coordinates:{lat:null,lng:null},query:"",selectedMarker:null,placeData:"",showWindow:!1,userLocation:{lat:42.3601,lng:-71.0589}},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{value:this.state.query,onChange:this.setQuery,onSelect:this.handleAutocompleteSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,r=e.loading;return o.a.createElement("div",null,o.a.createElement("input",Object.assign({style:{height:"40px",width:"100%",fontSize:"16px"}},t({placeholder:"Search Places ...",className:"location-search-input"}))),o.a.createElement("div",{className:"autocomplete-dropdown-container"},r&&o.a.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return o.a.createElement("div",n(e,{className:t,style:a}),o.a.createElement("span",null,e.description))}))))})),o.a.createElement(h.Map,{google:this.props.google,center:this.state.coordinates,initialCenter:this.state.userLocation,zoom:14},o.a.createElement(h.Marker,{onClick:this.onMarkerClick,position:this.state.coordinates,name:"Current location"}),o.a.createElement(h.InfoWindow,{marker:this.state.selectedMarker,position:this.state.coordinates,visible:this.state.showWindow,onClose:this.onInfoWindowClose},o.a.createElement("div",null,o.a.createElement("h1",null,this.state.query),o.a.createElement("p",null,this.state.placeData.formatted_address),o.a.createElement("a",{href:"https://developers.google.com/maps/documentation/javascript/tutorial",target:"_blank"},o.a.createElement("button",null,"display link to create a review")),o.a.createElement(v,{placeData:this.state.placeData})))))}}]),t}(o.a.Component),E=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyBr0KBe6OYC3MKAmWh4nfTPQrCQT6ei-O8"})(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3c3431f9.chunk.js.map