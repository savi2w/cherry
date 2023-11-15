import { Post } from "../schema/posts";

const template = `<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><style>@font-face{font-family:iconfont;src:url(https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v-02310261055/v3/fonts/skins/common/iconfont/iconfont.woff2) format("woff2"),url(https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v-02310261055/v3/fonts/skins/common/iconfont/iconfont.ttf) format("truetype"),url(https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v-02310261055/v3/fonts/skins/common/iconfont/iconfont.woff) format("woff"),url(https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v-02310261055/v3/fonts/skins/common/iconfont/iconfont.svg#iconfont) format("svg");font-weight:400;font-style:normal;font-display:block}body{font-size:14px;font-family:sans-serif;line-height:1.5;color:#fff}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.thread-node-children{font-size:14px}body{margin:0}body{font-family:Arial,sans-serif;font-size:12px;line-height:1.5;color:#fff;background-color:#161616}body{font-family:Arial,sans-serif;overflow-y:scroll;padding:4px 8px 8px}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}html{font-size:10px;-webkit-tap-highlight-color:transparent}html{font-size:1rem}html{height:-webkit-calc(100vh - 0px);height:-moz-calc(100vh - 0px);height:calc(100vh - 0px);height:-webkit-calc(var(--vh,1vh) * 100 - 0px);height:-moz-calc(var(--vh,1vh) * 100 - 0px);height:calc(var(--vh,1vh) * 100 - 0px)}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:selection{background:#de2600;color:#fff}.thread-node{font-size:14px;margin:5px 5px 15px;clear:both;min-height:54px}.thread-node{margin-left:0;margin-right:0}.hidden{display:none!important}.thread-node .thread-node-nb-before{clear:both;margin:-5px 0 15px}.thread-node .thread-node-picture{-webkit-box-shadow:0 0 3px rgba(255,255,255,.3);-moz-box-shadow:0 0 3px rgba(255,255,255,.3);box-shadow:0 0 3px rgba(255,255,255,.3);float:left;margin:5px 0 0 0;min-height:24px;position:relative;width:50px}.thread-node-loader{font-size:12.6px}.thread-node-loader{margin-top:10px}.thread-node-error{font-size:12.6px}.thread-node-error{color:#de2600}.thread-node-error{margin-top:10px}.thread-node .thread-node-content{padding-left:68px}.thread-node .thread-node-nb-after{clear:both;margin:10px 0 15px}a{background-color:transparent}a{color:#fff;text-decoration:none}a{text-decoration:underline;background-color:transparent;cursor:pointer}.thread-node .thread-node-picture a{display:block}a:active,a:hover{outline:0}a:hover{color:#d9d9d9;text-decoration:underline}.flag-small{display:inline}.flag-small.flag-us{background-position:0 -226px}.thread-node .thread-node-picture .flag-small{position:absolute;right:3px;bottom:3px}.thread-node .thread-node-content .thread-node-message{margin:5px 0}.thread-node .thread-node-content .thread-node-metadata{color:#888;font-size:85%}.thread-node-children-loader{font-size:12.6px}.thread-node-children-error{font-size:12.6px}.thread-node-children-error{color:#de2600}.thread-node-children-load-next{overflow:hidden}.flag-small.flag-hu{background-position:0 -98px}.flag-small.flag-tt{background-position:-160px -210px}.flag-small.flag-se{background-position:-240px -178px}.flag-small.flag-br{background-position:-224px -18px}img{border:0}img{vertical-align:middle}.thread-node .thread-node-picture img{width:50px;min-height:24px}.thread-node .thread-node-content .thread-node-poster .thread-node-poster-name{font-weight:700}.thread-node .thread-node-content .thread-node-poster .thread-node-date{color:#aaa}.icon-f{font-family:iconfont!important;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;letter-spacing:0;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;font-feature-settings:"liga";-webkit-font-variant-ligatures:discretionary-ligatures;-moz-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.thread-node .thread-node-content .thread-node-metadata .icon-f{cursor:pointer;vertical-align:middle}.icf-thumb-up:before{content:"\\e93e"}.thread-node .thread-node-content .thread-node-metadata .thread-node-nb-votes{font-weight:700;vertical-align:middle}.thread-node .thread-node-content .thread-node-metadata .icf-thumb-down{padding-left:10px}.icf-thumb-down:before{content:"\\e93d"}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-post{padding-left:10px}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-post{text-decoration:none;vertical-align:middle;color:#888}.x-thread .thread-node .thread-node-content .thread-node-metadata .thread-node-btn-post:hover{text-decoration:underline}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-edit{padding-left:10px}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-edit{text-decoration:none;vertical-align:middle;color:#888}.x-thread .thread-node .thread-node-content .thread-node-metadata .thread-node-btn-delete:hover,.x-thread .thread-node .thread-node-content .thread-node-metadata .thread-node-btn-edit:hover,.x-thread .thread-node .thread-node-content .thread-node-metadata .thread-node-btn-post:hover,.x-thread .thread-node .thread-node-content .thread-node-metadata .thread-node-btn-report:hover,.x-thread .thread-node .thread-node-content .thread-node-metadata .thread-node-btn-restore:hover{text-decoration:underline}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-delete{padding-left:10px}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-delete{text-decoration:none;vertical-align:middle;color:#888}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-restore{text-decoration:none;vertical-align:middle;color:#888}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-report{padding-left:10px}.thread-node .thread-node-content .thread-node-metadata .thread-node-btn-report{text-decoration:none;vertical-align:middle;color:#888}.thread-node-children .thread-node-children-show{margin:5px 0}.thread-node-children .thread-node-children-hide{margin:5px 0}.thread-node-btn{background-color:#333;border:1px solid #222;font-size:14px;margin-bottom:2px;padding:4px 8px;text-decoration:none;-webkit-transition:all .15s;-o-transition:all .15s;-moz-transition:all .15s;transition:all .15s}.thread-node-children-load-next .thread-node-btn{display:inline-block}.x-thread .thread-node-btn:hover{background-color:#161616;color:#fff}.x-thread .thread-node-btn a:hover,.x-thread .thread-node-btn:hover{background-color:#161616;color:#fff}[class*=emojione-]{text-indent:-9999em;image-rendering:optimizeQuality;font-size:inherit;height:1.3em;width:1.3em;top:-3px;position:relative;display:inline-block;margin:0 .15em;line-height:normal;vertical-align:middle;background-image:url(https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v-7b4dab389ab/v3/css/default/emojione.sprites.png);-moz-background-size:4100% 4000%;-o-background-size:4100% 4000%;background-size:4100% 4000%;background-repeat:no-repeat}.emojione-1f608{background-position:85% 84.61538%}[class*=emojione-]{background-image:url(https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v-7b4dab389ab/v3/less/libs/emojione_sprites/emojione.sprites.png)!important;width:20px;height:20px}.emojione-1f60b{background-position:5% 87.17949%}.thread-node-children .thread-node-children-show span{cursor:pointer;font-size:92.86%}.thread-node-children .thread-node-children-hide span{cursor:pointer;font-size:92.86%}.thread-node .thread-node-content .thread-node-poster .thread-node-poster-name .verified{vertical-align:text-bottom}.icf-check-circle:before{content:"\\e90a"}.thread-node .thread-node-content .thread-node-poster .thread-node-poster-name .poster-stats{padding-left:10px;padding-right:10px;color:#aaa;font-weight:400}#style-5ENtC.style-5ENtC{display:block}#style-HVUQD.style-HVUQD{display:block}#style-feg8A.style-feg8A{display:block}#style-akgoX.style-akgoX{display:block}#style-Gpj6C.style-Gpj6C{display:block}#style-My6xz.style-My6xz{display:block}#style-mnQqg.style-mnQqg{display:block}#style-Dva6D.style-Dva6D{display:block}#style-an4ha.style-an4ha{display:block}#style-FDJWZ.style-FDJWZ{display:block}</style><style>body{padding:16px}.internal-avatar{filter:blur(2px)}.internal-margin-left-4{margin-left:4px}.internal-flag-br{position:absolute;right:3px;bottom:3px;width:16px;height:11px;background-image:url(https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v-7b4dab389ab/v3/img/flags/flat/flags-16.png);background-position:-224px -18px}.internal-message{max-width:512px;word-break:break-word}</style><div class="thread-node-children-nodes snipcss-5NCCE"id=screenshot style="max-width:512px;padding:1px 8px 1px 8px"><div class="style-an4ha thread-node"id=style-an4ha><div class="hidden thread-node-nb-before"></div><div class=thread-node-picture><a href=/profiles/scarllert_sobrazz><img class=internal-avatar src=##&PIC&## title="Scarllert Sobrazz profile picture"> </a><span class="flag-br flag-small internal-flag-br"title=Brazil></span></div><div class="hidden thread-node-loader"><span class="after x-loader-inline"id=_x_loader_18>Loading comment... <img class=x-loader-inline-img src=https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v3/img/skins/default/xv-inline-loader.gif></span></div><div class="hidden thread-node-error"></div><div class="snipcss0-0-0-1 tether-element-attached-center tether-element-attached-top tether-target-attached-center tether-target-attached-top thread-node-content"><div class="snipcss0-1-1-2 thread-node-poster"><span class="snipcss0-2-2-3 thread-node-poster-name"><a class=snipcss0-3-3-4 href=/profiles/scarllert_sobrazz>##&NAME&## </a></span><span class="internal-margin-left-4 snipcss0-2-2-5 thread-node-date"title="Nov 12, 2023, 5:40 PM">##&TIME_DIFF&##</span></div><div class="internal-message snipcss0-1-1-6 thread-node-message">##&MESSAGE&##</div><div class="snipcss0-1-1-7 thread-node-metadata"><span class="icon-f icf-thumb-up snipcss0-2-7-8"></span> <span class="thread-node-nb-votes snipcss0-2-7-9 votes-up">##&VOTES_NB&## </span><span class="icon-f icf-thumb-down snipcss0-2-7-10"></span> <span class="thread-node-nb-votes snipcss0-2-7-11 votes-down">##&VOTES_NBB&## </span><a class="thread-node-btn-post snipcss0-2-7-12">Reply </a><a class="hidden snipcss0-2-7-13 thread-node-btn-edit">Edit </a><a class="hidden snipcss0-2-7-14 thread-node-btn-delete">Delete </a><a class="hidden snipcss0-2-7-15 thread-node-btn-restore">Restore </a><a class="snipcss0-2-7-16 thread-node-btn-report">Report</a></div><div class="hidden snipcss0-1-1-17 thread-node-children"><div class="snipcss0-2-17-18 thread-node-children-show"><span class=snipcss0-3-18-19>Show ##&RANDOM_REPLIES&## reply</span></div><div class="hidden snipcss0-2-17-20 thread-node-children-hide"><span class=snipcss0-3-20-21>Hide replies</span></div><div class="thread-node-children-nodes snipcss0-2-17-22"style=display:none></div></div><div class="hidden snipcss0-1-1-23 thread-node-children-loader"><span class="after x-loader-inline snipcss0-2-23-24"id=_x_loader_19>Loading replies... <img class="x-loader-inline-img snipcss0-3-24-25"src=https://static-cdn77.##&SERVICE_NAME&##-cdn.com/v3/img/skins/default/xv-inline-loader.gif></span></div><div class="hidden snipcss0-1-1-26 thread-node-children-error"></div><div class="snipcss0-1-1-27 thread-node-children-load-next"><a class="hidden thread-node-btn snipcss0-2-27-28 thread-node-children-load-next-btn"href=#></a> <a class="hidden thread-node-btn snipcss0-2-27-29 thread-node-children-load-all-btn"href=#>Load all replies </a><a class="hidden thread-node-btn snipcss0-2-27-30 thread-node-btn-post"href=#>Reply</a></div></div><div class="hidden thread-node-nb-after"></div></div></div>`;

const getPic = (post: Post) => {
  if (typeof post.pic === "boolean") {
    return "https://static-cdn77.##&SERVICE_NAME&##-cdn.com/img/profile_default_small.jpg";
  }

  return post.pic;
};

export const getTemplate = (post: Post) => {
  if (!process.env.SERVICE_NAME) {
    throw new Error("`SERVICE_NAME` is not defined");
  }

  return template
    .split("##&TIME_DIFF&##")
    .join(post.time_diff)
    .split("##&NAME&##")
    .join(post.name)
    .split("##&PIC&##")
    .join(getPic(post))
    .split("##&MESSAGE&##")
    .join(post.message)
    .split("##&VOTES_NB&##")
    .join(post.votes.nb.toString())
    .split("##&VOTES_NBB&##")
    .join(post.votes.nbb.toString())
    .split("##&SERVICE_NAME&##")
    .join(process.env.SERVICE_NAME);
};
