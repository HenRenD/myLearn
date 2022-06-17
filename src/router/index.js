import Vue from 'vue'
import vueRouter from 'vue-router'
import Menu from '../pages/menu/index.vue'
// 我的信息
import MyInfomation from '../pages/myInfomation/index.vue'
// html知识组件
import Html from '../pages/html/index.vue'
import Jianjie from '../pages/html/1-jianjie/jianjie.vue'
import Doctype from '../pages/html/2-doctype/doctype.vue'
import Head from '../pages/html/3-originTag/head.vue'
import Title from '../pages/html/3-originTag/title.vue'
import Style from '../pages/html/3-originTag/style.vue'
import Link from '../pages/html/3-originTag/link.vue'
import Meta from '../pages/html/3-originTag/meta.vue'
import Base from '../pages/html/3-originTag/base.vue'
import Script from '../pages/html/4-scriptTag/scripttag.vue'
import Noscript from '../pages/html/4-scriptTag/noscripttag.vue'
import Canvas from '../pages/html/4-scriptTag/canvastag.vue'
import Body from '../pages/html/5-luojifenlei/bodytag.vue'
import Htag from '../pages/html/5-luojifenlei/h1_h6.vue'
import Address from '../pages/html/5-luojifenlei/address.vue'
import Header from '../pages/html/5-luojifenlei/header.vue'
import Nav from '../pages/html/5-luojifenlei/nav.vue'
import Main from '../pages/html/5-luojifenlei/main.vue'
import Article from '../pages/html/5-luojifenlei/article.vue'
import Aside from '../pages/html/5-luojifenlei/aside.vue'
import Section from '../pages/html/5-luojifenlei/section.vue'
import Footer from '../pages/html/5-luojifenlei/footer.vue'
import Div from '../pages/html/6-zuzhiwenben/div.vue'
import P from '../pages/html/6-zuzhiwenben/p.vue'
import Ul from '../pages/html/6-zuzhiwenben/ul.vue'
import Ol from '../pages/html/6-zuzhiwenben/ol.vue'
import Dl from '../pages/html/6-zuzhiwenben/dl.vue'
import Hr from '../pages/html/6-zuzhiwenben/hr.vue'
import Pre from '../pages/html/6-zuzhiwenben/pre.vue'
import Blockquote from '../pages/html/6-zuzhiwenben/blockquote.vue'
import Figure from '../pages/html/6-zuzhiwenben/figure.vue'
import A from '../pages/html/7-hangneiwenben/a.vue'
import Span from '../pages/html/7-hangneiwenben/span.vue'
import Q_ from '../pages/html/7-hangneiwenben/q.vue'
import Abbr from '../pages/html/7-hangneiwenben/abbr.vue'
import Cite from '../pages/html/7-hangneiwenben/cite.vue'
import Time from '../pages/html/7-hangneiwenben/time.vue'
import Data from '../pages/html/7-hangneiwenben/data.vue'
import Mark from '../pages/html/7-hangneiwenben/mark.vue'
import Small from '../pages/html/7-hangneiwenben/small.vue'
import Br from '../pages/html/7-hangneiwenben/br.vue'
import Wbr from '../pages/html/7-hangneiwenben/wbr.vue'
import Bdi from '../pages/html/7-hangneiwenben/bdi.vue'
import Bdo from '../pages/html/7-hangneiwenben/bdo.vue'
import Sub from '../pages/html/7-hangneiwenben/sub.vue'
import Sup from '../pages/html/7-hangneiwenben/sup.vue'
import Em from '../pages/html/7-hangneiwenben/em.vue'
import Code from '../pages/html/7-hangneiwenben/code.vue'
import Strong from '../pages/html/7-hangneiwenben/strong.vue'
import B from '../pages/html/7-hangneiwenben/b.vue'
import I from '../pages/html/7-hangneiwenben/i.vue'
import Del from '../pages/html/8-bianji/del.vue'
import Ins from '../pages/html/8-bianji/ins.vue'
import Table from '../pages/html/9-table/table.vue'
import TableSon from '../pages/html/9-table/tableson.vue'
import Form from '../pages/html/10-biaodan/form.vue'
import Input from '../pages/html/10-biaodan/input.vue'
import Button from '../pages/html/10-biaodan/button.vue'
import Label from '../pages/html/10-biaodan/label.vue'
import Fieldset_legend from '../pages/html/10-biaodan/fieldset_legened.vue'
import Textarea from '../pages/html/10-biaodan/textarea.vue'
import Option from '../pages/html/10-biaodan/option.vue'
import Select from '../pages/html/10-biaodan/select.vue'
import Optgroup from '../pages/html/10-biaodan/optgroup.vue'
import Datalist from '../pages/html/10-biaodan/datalist.vue'
import Output from '../pages/html/10-biaodan/output.vue'
import Progress from '../pages/html/10-biaodan/progress.vue'
import Meter from '../pages/html/10-biaodan/meter.vue'
import Img from '../pages/html/11-qianru/img.vue'
import Audio from '../pages/html/11-qianru/audio.vue'
import Video from '../pages/html/11-qianru/video.vue'
import Source from '../pages/html/11-qianru/source.vue'
import Geolocation_ from '../pages/html/12-html5api/geolocation.vue'
import Drop from '../pages/html/12-html5api/drop.vue'
import Webstorage from '../pages/html/12-html5api/webstorage.vue'
import ApplicationCache from '../pages/html/12-html5api/applicationcache.vue'
import Webworkers from '../pages/html/12-html5api/webworkers.vue'
import ServerSentEvents from '../pages/html/12-html5api/serversentevents.vue'
import WebSocket_ from '../pages/html/12-html5api/websocket.vue'
// css知识组件
import Css from '../pages/css/index.vue'
import CssJianjie from '../pages/css/1-jianjie/index.vue'
import SelectorBlock from '../pages/css/2-xuanzeqi/index.vue'
import Weilei from '../pages/css/3-weilei/index.vue'
import Fontandtext from '../pages/css/4-style/fontandtext.vue'
import Border from '../pages/css/4-style/border.vue'
import Background from '../pages/css/4-style/background.vue'
import Gradi from '../pages/css/4-style/gradi.vue'
import Trans from '../pages/css/4-style/trans.vue'
import Boxmodel from '../pages/css/5-boxmodel/index.vue'
import Float from '../pages/css/6-float/index.vue'
import Position from '../pages/css/7-position/index.vue'
import Dangbenliu from '../pages/css/8-dangbenliu/index.vue'
import Tiaozhengbox from '../pages/css/9-tiaozhenghezi/index.vue'
import Transform from '../pages/css/10-2d3dtransform/index.vue'
import Transition from '../pages/css/11-transitiondonghua/index.vue'
import Notice from '../pages/css/13-notice/index.vue'
import Flexlayout from '../pages/css/12-loayout/flexlayout.vue'
import Liushilayout from '../pages/css/12-loayout/liushilayout.vue'
import Remlayout from '../pages/css/12-loayout/remlayout.vue'
import Reactivelayout from '../pages/css/12-loayout/reactivelayout.vue'
// javascript知识组件
import Javascript from '../pages/javascirpt/index.vue'
import Whatisjs from '../pages/javascirpt/1-whatisjs/index.vue'
import Jsinhtml from '../pages/javascirpt/2-jsinhtml/index.vue'
import Grammer from '../pages/javascirpt/3-yuyanjichu/grammer.vue'
import Keyword from '../pages/javascirpt/3-yuyanjichu/keyword.vue'
import Variable from '../pages/javascirpt/3-yuyanjichu/variable.vue'
import Functionbase from '../pages/javascirpt/3-yuyanjichu/functionbase.vue'
import Typeof from '../pages/javascirpt/3-yuyanjichu/typeof.vue'
import Undefined_ from '../pages/javascirpt/3-yuyanjichu/undefined.vue'
import Null_ from '../pages/javascirpt/3-yuyanjichu/null.vue'
import Boolean_ from '../pages/javascirpt/3-yuyanjichu/boolean.vue'
import Number_ from '../pages/javascirpt/3-yuyanjichu/number.vue'
import String_ from '../pages/javascirpt/3-yuyanjichu/string.vue'
import Symbol_ from '../pages/javascirpt/3-yuyanjichu/symbol.vue'
import Object_ from '../pages/javascirpt/3-yuyanjichu/object.vue'
import Yiyuan from '../pages/javascirpt/3-yuyanjichu/yiyuan.vue'
import Wei from '../pages/javascirpt/3-yuyanjichu/wei.vue'
import Buer from '../pages/javascirpt/3-yuyanjichu/buer.vue'
import Chengxing from '../pages/javascirpt/3-yuyanjichu/chengxing.vue'
import Zhishu from '../pages/javascirpt/3-yuyanjichu/zhishu.vue'
import Jiaxing from '../pages/javascirpt/3-yuyanjichu/jiaxing.vue'
import Guanxi from '../pages/javascirpt/3-yuyanjichu/guanxi.vue'
import Xiangdeng from '../pages/javascirpt/3-yuyanjichu/xiangdeng.vue'
import Sanmu from '../pages/javascirpt/3-yuyanjichu/sanmu.vue'
import Fuzhi from '../pages/javascirpt/3-yuyanjichu/fuzhi.vue'
import Douhao from '../pages/javascirpt/3-yuyanjichu/douhao.vue'
import Ifyuju from '../pages/javascirpt/3-yuyanjichu/ifyuju.vue'
import Dowhileyuju from '../pages/javascirpt/3-yuyanjichu/dowhileyuju.vue'
import Whileyuju from '../pages/javascirpt/3-yuyanjichu/whileyuju.vue'
import Foryuju from '../pages/javascirpt/3-yuyanjichu/foryuju.vue'
import Forinyuju from '../pages/javascirpt/3-yuyanjichu/forinyuju.vue'
import Forofyuju from '../pages/javascirpt/3-yuyanjichu/forofyuju.vue'
import Labelyuju from '../pages/javascirpt/3-yuyanjichu/labelyuju.vue'
import Breakyuju from '../pages/javascirpt/3-yuyanjichu/breakyuju.vue'
import Withyuju from '../pages/javascirpt/3-yuyanjichu/withyuju.vue'
import Switchyuju from '../pages/javascirpt/3-yuyanjichu/switchyuju.vue'
import Yuanshizhi from '../pages/javascirpt/4-zuoyongyuneicun/yuanshizhi.vue'
import Zuoyongyu from '../pages/javascirpt/4-zuoyongyuneicun/zuoyongyu.vue'
import Lajihuishou from '../pages/javascirpt/4-zuoyongyuneicun/lajihuishou.vue'
import Date_ from '../pages/javascirpt/5-jibenyinyong/date.vue'
import RegExp_ from '../pages/javascirpt/5-jibenyinyong/regexp.vue'
import Bzboolean from '../pages/javascirpt/5-jibenyinyong/bzboolean.vue'
import Bznumber from '../pages/javascirpt/5-jibenyinyong/bznumber.vue'
import Bzstring from '../pages/javascirpt/5-jibenyinyong/bzstring.vue'
import Global_ from '../pages/javascirpt/5-jibenyinyong/global.vue'
import Math_ from '../pages/javascirpt/5-jibenyinyong/math.vue'
import Array_ from '../pages/javascirpt/6-jiheyinyong/array.vue'
import Map_ from '../pages/javascirpt/6-jiheyinyong/map.vue'
import Weakmap_ from '../pages/javascirpt/6-jiheyinyong/weakmap.vue'
import Set_ from '../pages/javascirpt/6-jiheyinyong/set.vue'
import Weakset_ from '../pages/javascirpt/6-jiheyinyong/weakset.vue'
import CreateObject from '../pages/javascirpt/7-object/createObject.vue'
import Proandmethod from '../pages/javascirpt/7-object/proandmethod.vue'
import Es5proto from '../pages/javascirpt/7-object/es5protolian.vue'
import Es5jicheng from '../pages/javascirpt/7-object/es5jicheng.vue'
import Class_ from '../pages/javascirpt/7-object/class.vue'
import Classjicheng from '../pages/javascirpt/7-object/classjicheng.vue'
import CreateFunction from '../pages/javascirpt/8-function/createFunction.vue'
import Es6function from '../pages/javascirpt/8-function/es6function.vue'
import Funcproandmethod from '../pages/javascirpt/8-function/funcproandmethod.vue'
import Lijiefunction from '../pages/javascirpt/8-function/lijiefunction.vue'
import Whatispromise from '../pages/javascirpt/8-function/whatispromise.vue'
import Promisefunction from '../pages/javascirpt/8-function/promisefunction.vue'
import Promiseshili from '../pages/javascirpt/8-function/promiseshili.vue'
import Promisefunctionmethod from '../pages/javascirpt/8-function/promisefunctionmethod.vue'
import Promisequestion from '../pages/javascirpt/8-function/promisequestion.vue'
import Writepromise from '../pages/javascirpt/8-function/writepromise.vue'
import Async_await from '../pages/javascirpt/8-function/async_await.vue'
import Window_ from '../pages/javascirpt/9-BOM/window_.vue'
import Location_ from '../pages/javascirpt/9-BOM/location_.vue'
import Navigator_ from '../pages/javascirpt/9-BOM/navigator_.vue'
import Screen_ from '../pages/javascirpt/9-BOM/screen_.vue'
import Histroy_ from '../pages/javascirpt/9-BOM/histroy_.vue'
import Getelement from '../pages/javascirpt/10-DOM/getelement.vue'
import Documentinfo from '../pages/javascirpt/10-DOM/documentinfo.vue'
import Writedocument from '../pages/javascirpt/10-DOM/writedocument.vue'
import Elementattr from '../pages/javascirpt/10-DOM/elementattr.vue'
import Noderelation from '../pages/javascirpt/10-DOM/noderelation.vue'
import Handlenode from '../pages/javascirpt/10-DOM/handlenode.vue'
import Insertcontent from '../pages/javascirpt/10-DOM/insertcontent.vue'
import Positionsize from '../pages/javascirpt/10-DOM/positionsize.vue'
import Classlist from '../pages/javascirpt/10-DOM/classlist.vue'
import Handlestyle from '../pages/javascirpt/10-DOM/handlestyle.vue'
import Eventliu from '../pages/javascirpt/11-event/eventliu.vue'
import Eventchengxu from '../pages/javascirpt/11-event/eventchengxu.vue'
import Eventobj from '../pages/javascirpt/11-event/eventobj.vue'
import Eventleixing from '../pages/javascirpt/11-event/eventleixing.vue'
import Iterator_ from '../pages/javascirpt/12-iterator/index.vue'
import Generator_ from '../pages/javascirpt/13-generator/index.vue'
import Proxy_ from '../pages/javascirpt/14-proxy/index.vue'
import Reflect_ from '../pages/javascirpt/15-reflect/index.vue'
import ES6module from '../pages/javascirpt/16-module/index.vue'
import Jsjizhi from '../pages/javascirpt/17-jszhixingjizhi/index.vue'
// webpack知识组件
import Webpack from '../pages/webpack_/index.vue'
// http知识组件
import Http_ from '../pages/http/index.vue'
// Vue2知识组件
import Vue2 from '../pages/vue2/index.vue'
import Vue2life from '../pages/vue2/vue2life.vue'
// VueRouter知识组件
import VueRouter from '../pages/vuerouter/index.vue'
// Vuex知识组件
import Vuex from '../pages/vuex/index.vue'
// Vue-cli知识组件
import VueCli from '../pages/vue-cli/index.vue'
// ajax知识组件
import Ajax from '../pages/ajax/index.vue'
// git知识组件
import Git from '../pages/git/index.vue'
// 项目介绍组件
import Project from '../pages/myproject/index.vue'
import Music from '../pages/myproject/music.vue'
import Shop from '../pages/myproject/shop.vue'
import Myblog from '../pages/myproject/myblog.vue'
Vue.use(vueRouter)

const routes = [
    {
        path: '/',
        redirect: '/menu'
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/myinfomation',
        component: MyInfomation
    },
    {
        path: '/myproject',
        redirect: '/myproject/music',
        component: Project,
        children: [
            {
                path: 'music',
                component: Music
            }, {
                path: 'shop',
                component: Shop
            }, {
                path: 'myblog',
                component: Myblog
            }
        ]
    },
    {
        path: '/html',
        component: Html,
        redirect: '/html/jianjie',
        children: [
            {
                path: 'jianjie',
                component: Jianjie
            },
            {
                path: 'doctype',
                component: Doctype
            },
            {
                path: 'headtag',
                component: Head
            },
            {
                path: 'titletag',
                component: Title
            },
            {
                path: 'styletag',
                component: Style
            },
            {
                path: 'linktag',
                component: Link
            },
            {
                path: 'metatag',
                component: Meta
            },
            {
                path: 'basetag',
                component: Base
            },
            {
                path: 'scripttag',
                component: Script
            },
            {
                path: 'noscripttag',
                component: Noscript
            },
            {
                path: 'canvastag',
                component: Canvas
            },
            {
                path: 'bodytag',
                component: Body
            },
            {
                path: 'htag',
                component: Htag
            },
            {
                path: 'addresstag',
                component: Address
            },
            {
                path: 'headertag',
                component: Header
            },
            {
                path: "navtag",
                component: Nav
            },
            {
                path: 'maintag',
                component: Main
            },
            {
                path: 'articletag',
                component: Article
            },
            {
                path: 'asidetag',
                component: Aside
            },
            {
                path: 'sectiontag',
                component: Section
            },
            {
                path: 'footertag',
                component: Footer
            },
            {
                path: 'divtag',
                component: Div
            },
            {
                path: 'ptag',
                component: P
            },
            {
                path: 'ultag',
                component: Ul
            },
            {
                path: 'oltag',
                component: Ol
            },
            {
                path: 'dltag',
                component: Dl
            },
            {
                path: 'hrtag',
                component: Hr
            },
            {
                path: 'pretag',
                component: Pre
            },
            {
                path: 'blockquotetag',
                component: Blockquote
            },
            {
                path: 'figuretag',
                component: Figure
            },
            {
                path: 'atag',
                component: A
            },
            {
                path: 'spantag',
                component: Span
            },
            {
                path: 'qtag',
                component: Q_
            },
            {
                path: 'abbrtag',
                component: Abbr
            },
            {
                path: 'citetag',
                component: Cite
            },
            {
                path: 'timetag',
                component: Time
            },
            {
                path: 'datatag',
                component: Data
            },
            {
                path: 'marktag',
                component: Mark
            },
            {
                path: 'smalltag',
                component: Small
            },
            {
                path: 'brtag',
                component: Br
            },
            {
                path: 'wbrtag',
                component: Wbr
            },
            {
                path: 'bditag',
                component: Bdi
            },
            {
                path: 'bdotag',
                component: Bdo
            },
            {
                path: 'subtag',
                component: Sub
            },
            {
                path: 'suptag',
                component: Sup
            },
            {
                path: 'emtag',
                component: Em
            },
            {
                path: 'strongtag',
                component: Strong
            },
            {
                path: 'codetag',
                component: Code
            },
            {
                path: 'btag',
                component: B
            },
            {
                path: 'itag',
                component: I
            },
            {
                path: 'deltag',
                component: Del
            },
            {
                path: 'instag',
                component: Ins
            },
            {
                path: 'tabletag',
                component: Table
            },
            {
                path: 'tablesontag',
                component: TableSon
            },
            {
                path: 'formtag',
                component: Form
            },
            {
                path: 'inputtag',
                component: Input
            },
            {
                path: 'buttontag',
                component: Button
            },
            {
                path: 'labeltag',
                component: Label
            },
            {
                path: 'fieldset_legendtag',
                component: Fieldset_legend
            },
            {
                path: 'textareatag',
                component: Textarea
            },
            {
                path: 'optiontag',
                component: Option
            },
            {
                path: 'selecttag',
                component: Select
            },
            {
                path: 'optgrouptag',
                component: Optgroup
            },
            {
                path: 'datalisttag',
                component: Datalist
            },
            {
                path: 'outputtag',
                component: Output
            },
            {
                path: 'progresstag',
                component: Progress
            },
            {
                path: 'metertag',
                component: Meter
            },
            {
                path: 'imgtag',
                component: Img
            },
            {
                path: 'audiotag',
                component: Audio
            },
            {
                path: 'videotag',
                component: Video
            },
            {
                path: 'sourcetag',
                component: Source
            },
            {
                path: 'geolocation',
                component: Geolocation_
            }, {
                path: 'drop',
                component: Drop
            }, {
                path: 'webstorage',
                component: Webstorage
            }, {
                path: 'applicationcache',
                component: ApplicationCache
            }, {
                path: 'webworkers',
                component: Webworkers
            }, {
                path: 'serversentevents',
                component: ServerSentEvents
            }, {
                path: 'websocket',
                component: WebSocket_
            }
        ]
    },
    {
        path: '/css',
        component: Css,
        redirect: '/css/jianjie',
        children: [
            {
                path: 'jianjie',
                component: CssJianjie
            },
            {
                path: 'selectorBlock',
                component: SelectorBlock
            },
            {
                path: 'weilei',
                component: Weilei
            },
            {
                path: 'fontandtext',
                component: Fontandtext
            }, {
                path: 'background',
                component: Background
            }, {
                path: 'border',
                component: Border
            }, {
                path: 'gradi',
                component: Gradi
            }, {
                path: 'trans',
                component: Trans
            }, {
                path: 'boxmodel',
                component: Boxmodel
            }, {
                path: 'float',
                component: Float
            }, {
                path: 'position',
                component: Position
            }, {
                path: 'dangbenliu',
                component: Dangbenliu
            }, {
                path: 'changebox',
                component: Tiaozhengbox
            }, {
                path: 'transform',
                component: Transform
            }, {
                path: 'transition',
                component: Transition
            },
            {
                path: 'notice',
                component: Notice
            }, {
                path: 'flexlayout',
                component: Flexlayout
            }, {
                path: 'liushilayout',
                component: Liushilayout
            }, {
                path: 'remlayout',
                component: Remlayout
            }, {
                path: 'reactivelayout',
                component: Reactivelayout
            }
        ]
    },
    {
        path: '/javascript',
        component: Javascript,
        redirect: '/javascript/whatisjs',
        children: [
            {
                path: 'whatisjs',
                component: Whatisjs
            }, {
                path: 'jsinhtml',
                component: Jsinhtml
            }, {
                path: 'grammer',
                component: Grammer
            }, {
                path: 'keyword',
                component: Keyword
            }, {
                path: 'variable',
                component: Variable
            }, {
                path: 'functionbase',
                component: Functionbase
            }, {
                path: 'typeof',
                component: Typeof
            }, {
                path: 'undefined',
                component: Undefined_
            }, {
                path: 'null',
                component: Null_
            }, {
                path: 'boolean',
                component: Boolean_
            }, {
                path: 'number',
                component: Number_
            }, {
                path: 'string',
                component: String_
            }, {
                path: 'symbol',
                component: Symbol_
            }, {
                path: 'object',
                component: Object_
            }, {
                path: 'yiyuan',
                component: Yiyuan
            }, {
                path: 'wei',
                component: Wei
            }, {
                path: 'buer',
                component: Buer
            }, {
                path: 'chengxing',
                component: Chengxing
            }, {
                path: 'zhishu',
                component: Zhishu
            }, {
                path: 'jiaxing',
                component: Jiaxing
            }, {
                path: 'guanxi',
                component: Guanxi
            }, {
                path: 'xiangdeng',
                component: Xiangdeng
            }, {
                path: 'sanmu',
                component: Sanmu
            }, {
                path: 'fuzhi',
                component: Fuzhi
            },
            {
                path: 'douhao',
                component: Douhao
            }, {
                path: 'ifyuju',
                component: Ifyuju
            }, {
                path: 'dowhileyuju',
                component: Dowhileyuju
            }, {
                path: 'whileyuju',
                component: Whileyuju
            }, {
                path: 'foryuju',
                component: Foryuju
            }, {
                path: 'forinyuju',
                component: Forinyuju
            }, {
                path: 'forofyuju',
                component: Forofyuju
            }, {
                path: 'labelyuju',
                component: Labelyuju
            }, {
                path: 'breakyuju',
                component: Breakyuju
            }, {
                path: 'withyuju',
                component: Withyuju
            }, {
                path: 'switchyuju',
                component: Switchyuju
            }, {
                path: 'yuanshizhi',
                component: Yuanshizhi
            }, {
                path: 'zuoyongyu',
                component: Zuoyongyu
            }, {
                path: 'lajihuishou',
                component: Lajihuishou
            },
            {
                path: 'date',
                component: Date_
            }, {
                path: 'regexp',
                component: RegExp_
            }, {
                path: 'bzboolean',
                component: Bzboolean
            }, {
                path: 'bznumber',
                component: Bznumber
            }, {
                path: 'bzstring',
                component: Bzstring
            }, {
                path: 'global',
                component: Global_
            }, {
                path: 'math',
                component: Math_
            }, {
                path: 'array',
                component: Array_
            }, {
                path: 'map',
                component: Map_
            }, {
                path: 'weakmap',
                component: Weakmap_
            }, {
                path: 'set',
                component: Set_
            }, {
                path: 'weakset',
                component: Weakset_
            }, {
                path: 'createobject',
                component: CreateObject
            }, {
                path: 'proandmethod',
                component: Proandmethod
            }, {
                path: 'es5proto',
                component: Es5proto
            }, {
                path: 'es5jicheng',
                component: Es5jicheng
            }, {
                path: 'class',
                component: Class_
            }, {
                path: 'classjicheng',
                component: Classjicheng
            }, {
                path: 'createfunction',
                component: CreateFunction
            }, {
                path: 'es6function',
                component: Es6function
            }, {
                path: 'funcproandmethod',
                component: Funcproandmethod
            }, {
                path: 'lijiefunction',
                component: Lijiefunction
            }, {
                path: 'whatispromise',
                component: Whatispromise
            }, {
                path: 'promisefunction',
                component: Promisefunction
            }, {
                path: 'promiseshili',
                component: Promiseshili
            }, {
                path: 'promisefunctionmethod',
                component: Promisefunctionmethod
            }, {
                path: 'promisequestion',
                component: Promisequestion
            }, {
                path: 'writepromise',
                component: Writepromise
            }, {
                path: 'window_',
                component: Window_
            }, {
                path: 'location_',
                component: Location_
            }, {
                path: 'navigator_',
                component: Navigator_
            }, {
                path: 'screen_',
                component: Screen_
            }, {
                path: 'histroy_',
                component: Histroy_
            }, {
                path: 'asyncawait',
                component: Async_await
            }, {
                path: 'getelement',
                component: Getelement
            }, {
                path: 'documentinfo',
                component: Documentinfo
            }, {
                path: 'writedocument',
                component: Writedocument
            }, {
                path: 'elementattr',
                component: Elementattr
            }, {
                path: 'noderelation',
                component: Noderelation
            }, {
                path: 'handlenode',
                component: Handlenode
            }, {
                path: 'insertcontent',
                component: Insertcontent
            }, {
                path: 'positionsize',
                component: Positionsize
            }, {
                path: 'classlist',
                component: Classlist
            }, {
                path: 'handlestyle',
                component: Handlestyle
            }, {
                path: "eventliu",
                component: Eventliu
            }, {
                path: "eventchengxu",
                component: Eventchengxu
            }, {
                path: "eventobj",
                component: Eventobj
            }, {
                path: "eventleixing",
                component: Eventleixing
            }, {
                path: 'iterator',
                component: Iterator_
            }, {
                path: 'generator',
                component: Generator_
            }, {
                path: 'proxy',
                component: Proxy_
            }, {
                path: 'reflect',
                component: Reflect_
            }, {
                path: 'es6module',
                component: ES6module
            }, {
                path: 'jsjizhi',
                component: Jsjizhi
            }
        ]

    },
    {
        path: '/webpack',
        component: Webpack
    },
    {
        path: '/vue2',
        component: Vue2
    },
    {
        path: '/vue2life',
        component: Vue2life
    },
    {
        path: '/vuerouter',
        component: VueRouter
    },
    {
        path: '/vuex',
        component: Vuex
    },
    {
        path: '/vuecli',
        component: VueCli
    },
    {
        path: '/ajax',
        component: Ajax
    },
    {
        path: '/git',
        component: Git
    },
    {
        path: '/http',
        component: Http_
    }
]

const router = new vueRouter({
    routes,
})
export default router