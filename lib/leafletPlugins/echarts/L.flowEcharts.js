/* 2017-6-14 12:29:29 | 版权所有 合肥火星科技有限公司 http://www.marsgis.cn  【联系我们QQ：516584683】 */
window.flowEchartsIndex=999,function(t,e){"function"==typeof define&&define.amd?define(["leaflet"],t):"object"==typeof exports&&(module.exports=t(require("leaflet")),module.exports=t(require("jquery"))),"undefined"!=typeof e&&e.L&&(e.L.flowEcharts=t(L))}(function(t){return t.FlowEcharts=(t.version<"1.0"?t.Class:t.Layer).extend({includes:t.version<"1.0"?t.Mixin.Events:[],_echartsContainer:null,_map:null,_ec:null,_option:null,_echartsOption:null,initialize:function(t,e){this._option=e,this._echartsOption=t},onAdd:function(t){this._map=t,this._initEchartsContainer(),t.on("moveend",this._redraw,this),this._redraw()},onRemove:function(t){this._echartsContainer&&t.getPanes().overlayPane.removeChild(this._echartsContainer),this._ec.dispose(),t.off("moveend",this._redraw,this)},addTo:function(t){return t.addLayer(this),this},_initEchartsContainer:function(){var t=this._map.getSize(),e=document.createElement("div");e.style.position="absolute",e.style.height=t.y+"px",e.style.width=t.x+"px",e.style.zIndex=flowEchartsIndex--,this._echartsContainer=e,this._map.getPanes().overlayPane.appendChild(this._echartsContainer)},_resetCanvasPosition:function(){var e=this._map.getBounds(),n=this._map.latLngToLayerPoint(e.getNorthWest());t.DomUtil.setPosition(this._echartsContainer,n)},_redraw:function(){return this._resetCanvasPosition(),this._echartsContainer.innerHTML="",this.initECharts(),this.setOption(this._echartsOption),this},clear:function(){this._echartsContainer.innerHTML="",this.echartsOption={}},redraw:function(){this._redraw()},geoCoord2Pixel:function(e){var n=new t.latLng(e[1],e[0]),i=this._map.latLngToContainerPoint(n);return[i.x,i.y]},pixel2GeoCoord:function(e){var n=this._map.containerPointToLatLng(t.point(e[0],e[1]));return[n.lng,n.lat]},initECharts:function(){if(this._ec=echarts.init(this._echartsContainer),echarts.version>="3.0"){var e=this;e._ec.Geo.prototype.dataToPoint=function(n){var i=new t.latLng(n[1],n[0]),o=e._map.latLngToContainerPoint(i);return[o.x,o.y]}}this._unbindEvent()},setOption:function(t,e){if(t.series){var n=t.series||{},i={},o=!1;if(echarts.version<"3.0"){for(var r,s=0;r=n[s++];){var a=r.geoCoord;a&&(o=!0,i=a)}for(var r,s=0;r=n[s++];){var h=r.markPoint||{},c=r.markLine||{},d=h.data;if(d&&d.length)for(var u=0,f=d.length;u<f;u++)o&&(d[u].geoCoord=i[d[u].name]),this._AddPos(d[u]);if(d=c.data,d&&d.length)for(var u=0,f=d.length;u<f;u++)o&&(d[u][0].geoCoord=i[d[u][0].name],d[u][1].geoCoord=i[d[u][1].name]),this._AddPos(d[u][0]),this._AddPos(d[u][1])}}this._ec.setOption(t,e)}},_AddPos:function(t){if(echarts.version<"3.0"){var e=echarts.version<"3.0"?t.geoCoord:t.coord,n=this.geoCoord2Pixel(e);t.x=n[0],t.y=n[1]}else{var e=t.coord,n=this.geoCoord2Pixel(e);t.coord=n}},_unbindEvent:function(){echarts.version<"3.0"?(this._ec.getZrender().un("dragstart",function(){}),this._ec.getZrender().un("dragend",function(){}),this._ec.getZrender().un("mouseup",function(){}),this._ec.getZrender().un("mousedown",function(){}),this._ec.getZrender().un("mousewheel",function(){})):(this._ec.getZr().off("dragstart",function(){}),this._ec.getZr().off("dragend",function(){}),this._ec.getZr().off("mouseup",function(){}),this._ec.getZr().off("mousedown",function(){}),this._ec.getZr().off("mousewheel",function(){}))}}),t.flowEcharts=function(e,n){return new t.FlowEcharts(e,n)},t.flowEcharts},window);