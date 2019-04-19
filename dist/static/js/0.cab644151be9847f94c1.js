webpackJsonp([0],{586:function(t,i,a){function n(t){a(626)}var e=a(10)(a(605),a(638),n,"data-v-a24233a2",null);t.exports=e.exports},589:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a(58),e=a.n(n),s=a(69),o=a.n(s),A=a(206),l=a.n(A),r=a(207),d=a.n(r),c=a(133),p=a(50),g=a(89),f=a.i(c.a)("transform");i.default={mixins:[g.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:e()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},a.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),a=1,n=0,e=Math.abs(t/this.imageHeight);t>0&&(a=1+e,n=10),this.$refs.layer.style[f]="translate3d(0,"+i+"px,0)",t<this.minTransalteY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[f]="scale("+a+")",this.$refs.bgImage.style.zIndex=n}},components:{Scroll:o.a,Loading:l.a,SongList:d.a}}},590:function(t,i,a){i=t.exports=a(578)(!0),i.push([t.i,".music-list[data-v-36f0a33d]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-36f0a33d]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-36f0a33d]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-36f0a33d]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-36f0a33d]{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-36f0a33d]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-36f0a33d]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-36f0a33d]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-36f0a33d]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-36f0a33d]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-36f0a33d]{position:relative;height:100%;background:#222}.music-list .list[data-v-36f0a33d]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-36f0a33d]{padding:20px 30px}.music-list .list .loading-container[data-v-36f0a33d]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["C:/Users/lanou/Desktop/音乐/src/components/musicList/musicList.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"musicList.vue",sourcesContent:["\n.music-list[data-v-36f0a33d] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-36f0a33d] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-36f0a33d] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-36f0a33d] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-36f0a33d] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-36f0a33d] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-36f0a33d] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-36f0a33d] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-36f0a33d] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-36f0a33d] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-36f0a33d] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-36f0a33d] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-36f0a33d] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-36f0a33d] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},591:function(t,i,a){var n=a(590);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(579)("b1c88af6",n,!0,{})},592:function(t,i,a){function n(t){a(591)}var e=a(10)(a(589),a(593),n,"data-v-36f0a33d",null);t.exports=e.exports},593:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"music-list"},[a("div",{staticClass:"back",on:{click:t.back}},[a("i",{staticClass:"icon-back"})]),t._v(" "),a("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),a("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[a("div",{staticClass:"play-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[a("i",{staticClass:"icon-play"}),t._v(" "),a("span",{staticClass:"text"},[t._v("随机播放全部")])])])]),t._v(" "),a("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),a("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[a("div",{staticClass:"song-list-wrapper"},[a("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[a("loading")],1)])],1)},staticRenderFns:[]}},596:function(t,i,a){"use strict";function n(){var t=o()({},{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function e(t){var i=o()({},{g_tk:5381,loginUin:0,hostUin:0,format:A.a,inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:200,songstatus:1});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.c)}i.b=n,i.a=e;var s=a(90),o=a.n(s),A=a(205),l=a(68)},605:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a(58),e=a.n(n),s=a(50),o=a(596),A=a(68),l=a(134),r=a(592),d=a.n(r);i.default={data:function(){return{songs:[]}},components:{MusicList:d.a},computed:e()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},a.i(s.a)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id||this.$router.push("/singer"),a.i(o.a)(this.singer.id).then(function(i){i.code===A.a&&(t.songs=t._normalizeSongs(i.data.list))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t,n){var e=t.musicData;e.songid&&e.albummid&&i.push(a.i(l.b)(e))}),i}}}},616:function(t,i,a){i=t.exports=a(578)(!0),i.push([t.i,".slide-enter-active[data-v-a24233a2],.slide-leave-active[data-v-a24233a2]{transition:all .3s}.slide-enter[data-v-a24233a2],.slide-leave-to[data-v-a24233a2]{transform:translate3d(100%,0,0)}","",{version:3,sources:["C:/Users/lanou/Desktop/音乐/src/views/singer/details.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,+BAAmC,CACpC",file:"details.vue",sourcesContent:["\n.slide-enter-active[data-v-a24233a2],\n.slide-leave-active[data-v-a24233a2] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-a24233a2],\n.slide-leave-to[data-v-a24233a2] {\n  transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},626:function(t,i,a){var n=a(616);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(579)("85f80e3c",n,!0,{})},638:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("transition",{attrs:{name:"slide"}},[a("music-list",{attrs:{songs:t.songs,"bg-image":t.bgImage,title:t.title}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.cab644151be9847f94c1.js.map