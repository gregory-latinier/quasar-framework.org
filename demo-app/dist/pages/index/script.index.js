module.exports=function(e){function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}({0:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";function a(){var e=$.extend(!0,{},quasar.data.manifest.pages);return delete e.index,e}var i=t(24);e.exports={template:i,data:{pages:a()},methods:{navigateTo:function(e){quasar.navigate.to.route("#/"+e)}}}},24:function(e,n){e.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Framework</div>\n\n<div class="list bordered inner-delimiter">\n  <div class="item" v-for="page in pages">\n    <i>{{page.icon}}</i>\n    <div class="item-content cursor-pointer" @click="navigateTo(page.name)">\n      <div class="item-label">{{page.label}}</div>\n      <i>chevron_right</i>\n    </div>\n  </div>\n</div>\n'}});