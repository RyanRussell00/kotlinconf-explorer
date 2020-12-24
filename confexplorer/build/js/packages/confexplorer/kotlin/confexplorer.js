(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'confexplorer'.");
    }root.confexplorer = factory(typeof confexplorer === 'undefined' ? {} : confexplorer, kotlin, this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var getKClass = Kotlin.getKClass;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var equals = Kotlin.equals;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda$lambda$lambda$lambda(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.attrs.videos = unwatchedVideos;
      $receiver.attrs.selectedVideo = this$App.state.currentVideo;
      $receiver.attrs.onSelectVideo = App$render$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda_0(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.attrs.videos = watchedVideos;
      $receiver.attrs.selectedVideo = this$App.state.currentVideo;
      $receiver.attrs.onSelectVideo = App$render$lambda$lambda$lambda_0(this$App);
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('KotlinConf Explorer');
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Videos to Watch');
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver_0_0.child_ssazr1$(getKClass(VideoList), App$render$lambda$lambda(this));
    var $receiver_0_2 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Watched Videos');
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_ssazr1$(getKClass(VideoList), App$render$lambda$lambda_0(this));
    $receiver.child_52psg1$($receiver_0_0.create());
    var $receiver_0_3 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0_3.css;
    set_position($receiver_1, Position.absolute);
    set_top($receiver_1, get_px(10));
    set_right($receiver_1, get_px(10));
    var $receiver_0_4 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_4.unaryPlus_pdl1vz$('John Doe: Building and Breaking things');
    $receiver_0_3.child_52psg1$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(img$lambda(null, null, null));
    $receiver_0_5.attrs.src = 'https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder';
    $receiver_0_3.child_52psg1$($receiver_0_5.create());
    $receiver.child_52psg1$($receiver_0_3.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function VideoList() {
    RComponent_init(this);
  }
  function VideoList$render$lambda$lambda$lambda(this$VideoList, closure$video) {
    return function (it) {
      this$VideoList.props.onSelectVideo(closure$video);
      return Unit;
    };
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0.key = video.id.toString();
      set_onClickFunction($receiver_0.attrs, VideoList$render$lambda$lambda$lambda(this, video));
      if (equals(video, this.props.selectedVideo)) {
        $receiver_0.unaryPlus_pdl1vz$('\u25B6 ');
      }$receiver_0.unaryPlus_pdl1vz$(video.speaker + ' : ' + video.title);
      $receiver.child_52psg1$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoList',
    interfaces: [RComponent]
  };
  function Video(id, title, speaker, videoUrl) {
    this.id = id;
    this.title = title;
    this.speaker = speaker;
    this.videoUrl = videoUrl;
  }
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.id;
  };
  Video.prototype.component2 = function () {
    return this.title;
  };
  Video.prototype.component3 = function () {
    return this.speaker;
  };
  Video.prototype.component4 = function () {
    return this.videoUrl;
  };
  Video.prototype.copy_cgs6fs$ = function (id, title, speaker, videoUrl) {
    return new Video(id === void 0 ? this.id : id, title === void 0 ? this.title : title, speaker === void 0 ? this.speaker : speaker, videoUrl === void 0 ? this.videoUrl : videoUrl);
  };
  Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', speaker=' + Kotlin.toString(this.speaker)) + (', videoUrl=' + Kotlin.toString(this.videoUrl)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.videoUrl, other.videoUrl)))));
  };
  var unwatchedVideos;
  var watchedVideos;
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  _.App = App;
  _.VideoList = VideoList;
  _.Video = Video;
  Object.defineProperty(_, 'unwatchedVideos', {
    get: function () {
      return unwatchedVideos;
    }
  });
  Object.defineProperty(_, 'watchedVideos', {
    get: function () {
      return watchedVideos;
    }
  });
  _.main = main;
  unwatchedVideos = listOf([new Video(1, 'Title', 'Speaker', 'www.youtube.com'), new Video(2, 'Title', 'Speaker', 'www.youtube.com'), new Video(3, 'Title', 'Speaker', 'www.youtube.com')]);
  watchedVideos = listOf_0(new Video(4, 'Seen Video Title', 'Speaker', 'www.youtube.com'));
  main();
  Kotlin.defineModule('confexplorer', _);
  return _;
}));

//# sourceMappingURL=confexplorer.js.map
