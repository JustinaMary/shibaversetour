(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"desktopMipmappingEnabled":false,"minWidth":20,"scrollBarMargin":2,"backgroundColorRatios":[0],"backgroundColorDirection":"vertical","gap":10,"overflow":"hidden","width":"100%","scrollBarOpacity":0.5,"paddingTop":0,"scrollBarWidth":10,"backgroundPreloadEnabled":true,"id":"rootPlayer","mouseWheelEnabled":true,"mobileMipmappingEnabled":false,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"left","paddingBottom":0,"toolTipHorizontalAlign":"center","vrPolyfillScale":0.75,"paddingRight":0,"class":"Player","children":["this.MainViewer"],"verticalAlign":"top","scrollBarColor":"#000000","mediaActivationMode":"window","height":"100%","defaultVRPointer":"laser","backgroundColor":["#FFFFFF"],"layout":"absolute","borderRadius":0,"downloadEnabled":false,"backgroundOpacity":1,"scrollBarVisible":"rollOver","definitions": [{"clickAction":"play_pause","displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlayOverlay":true,"id":"MainViewerVideoPlayer"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_A4BF6AE5_A958_A9E2_41CF_43139D5E8580","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_B955CAC3_A958_6825_41DC_58432E63CB57_camera"},{"translationTransitionDuration":1000,"toolTipShadowHorizontalLength":0,"subtitlesTextShadowColor":"#000000","playbackBarBorderSize":0,"toolTipPaddingRight":6,"playbackBarProgressBackgroundColor":["#3399FF"],"width":"100%","subtitlesFontFamily":"Arial","toolTipOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"subtitlesShadow":false,"playbackBarHeadShadowOpacity":0.7,"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","class":"ViewerArea","toolTipFontSize":"1.11vmin","transitionDuration":500,"init":"eval('var _this = this;/** LICENSE *//** Copyright (c) 2021 blaze IT s. r. o. - All Rights Reserved *//** This file and its contents can not be copied and/or distributed without the express permission of Matej Murin *//** Unauthorized copying, distribution and/or usage of this file is strictly prohibited *//** Written by Matej Murin <matej@blazeit.sk> on courtesy of blaze IT s. r. o., May 2021 */console.log(  \"This virtual tour is running a script powered by blaze IT (https://blazeit.sk). Created by Matej Murin <matej@blazeit.sk>, May 2021.\");(()=>{var __webpack_modules__={3383:(t,e,o)=>{o(727),o(6989)},727:()=>{function triggerComponentAction(payload,eventName){var _this=this,action=eventName||\"click\",componentName=void 0;try{var executeBinding=function executeBinding(ctx){return function(){return eval(binding)}.call(ctx)},component=window.blazeIT.getComponent(payload);if(!component)return!1;componentName=component.get(\"data\").name;var binding=window.blazeIT.getComponentClickBinding(component);if(!binding)return window.blazeIT.logger.error(\\'Error in triggerComponentAction: Action of type \"\\'.concat(action,\\'\" was not found on component \"\\').concat(componentName,\\'\".\\')),!1;executeBinding(_this)}catch(t){return window.blazeIT.logger.error(\\'Error in triggerComponentAction: Action of type \"\\'.concat(action,\\'\" could not be triggered on component \"\\').concat(componentName,\\'\".\\')),window.blazeIT.logger.error(t),!1}return!0}window.blazeIT.triggerComponentAction=triggerComponentAction.bind(_this)},6989:()=>{window.blazeIT.triggerHotspotAction=function(t,e){var o=e||\"click\",n=void 0;try{var r=window.blazeIT.getHotspot(t);if(!r)return!1;n=r.get(\"data\").label,this.triggerOverlay(r,o)}catch(t){return window.blazeIT.logger.error(\\'Error in triggerHotspotAction: Action of type \"\\'.concat(o,\\'\" could not be triggered on hotspot \"\\').concat(n,\\'\".\\')),window.blazeIT.logger.error(t),!1}return!0}.bind(_this)},1538:()=>{window.blazeIT.getComponent=function(t){if(!t)return window.blazeIT.logger.error(\"Error in getComponent: No argument was provided.\"),null;var e=void 0,o=void 0;return\"string\"==typeof t?(o=t,e=window.blazeIT.getComponentByName(o)):o=(e=t).get(\"data\").name,e}.bind(_this)},4064:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.getComponentAttributes=function(e){if(!e)return window.blazeIT.logger.error(\"Error in getComponentAttributes: No argument was provided.\"),null;var o=window.blazeIT.getComponent(e);if(!o)return null;var n=Object.keys(o).find((function(e){return\"object\"==t(o[e])&&!!o[e].class&&!!o[e].id}));return n?o[n]:(window.blazeIT.logger.error(\"Error in getComponentAttributes: Could not retrieve the attributes. Please, check the attributes manually - retrieve the component in the Developer Console.\"),null)}.bind(_this)},3906:()=>{window.blazeIT.getComponentByName=function(t){for(var e=this.getByClassName(\"UIComponent\"),o=0;o<e.length;o++){var n=e[o],r=n.get(\"data\");if(r&&r.name==t)return n}return window.blazeIT.logger.error(\\'Error in getComponentByName: Component \"\\'.concat(t,\\'\" was not found.\\')),null}.bind(_this)},2121:()=>{window.blazeIT.getComponentClickBinding=function(t,e){var o=e||\"click\",n=window.blazeIT.getComponent(t);if(!n)return window.blazeIT.logger.error(\"Error in getComponentClickBinding: Component could not be retrieved.\"),null;var r=n.getBindings(o);return 0==r.length||\"string\"!=typeof r[0]?null:r[0]}},5134:()=>{window.blazeIT.getComponents=function(){return this.getByClassName(\"UIComponent\")}.bind(_this)},7417:()=>{window.blazeIT.hideComponent=function(t){if(!t)return window.blazeIT.logger.error(\"Error in hideComponent: No argument was provided.\"),!1;var e=window.blazeIT.getComponent(t);return!!e&&(e.set(\"visible\",!1),!0)}.bind(_this)},9708:(t,e,o)=>{o(3906),o(1538),o(2121),o(5134),o(4064),o(977),o(7417),o(6376)},977:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.setComponentAttributes=function(e,o){if(!e)return window.blazeIT.logger.error(\"Error in setComponentAttributes: No argument was provided.\"),!1;if(!o||\"object\"!=t(o))return window.blazeIT.logger.error(\\'Error in setComponentAttributes: Argument \"attributes\" was not provided or is not an object.\\'),!1;var n=window.blazeIT.getComponent(e);return!!n&&(Object.keys(o).forEach((function(t){n.set(t,o[t])})),!0)}.bind(_this)},6376:()=>{window.blazeIT.showComponent=function(t){if(!t)return window.blazeIT.logger.error(\"Error in showComponent: No argument was provided.\"),!1;var e=window.blazeIT.getComponent(t);return!!e&&(e.set(\"visible\",!0),!0)}.bind(_this)},2214:()=>{window.blazeIT.getElementsByClass=function(t){return this.getByClassName(t)}.bind(_this)},3170:(t,e,o)=>{o(2214),o(3791),o(287)},3791:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.isItemPanorama=function(e){if(!e||\"object\"!=t(e)||!e.get)return window.blazeIT.logger.error(\"Error in isItemPanorama: No valid item provided.\"),!1;var o=e.get(\"class\");return o?[\"Panorama\",\"LivePanorama\",\"HDRPanorama\"].includes(o):(window.blazeIT.logger.error(\"Error in isItemPanorama: Item\\'s class could not be obtained.\"),!1)}.bind(_this)},287:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.isPlayListItemPanorama=function(e){if(!e||\"object\"!=t(e)||!e.get)return window.blazeIT.logger.error(\"Error in isPlayListItemPanorama: No valid item provided.\"),!1;var o=e.get(\"class\");return o?\"PanoramaPlayListItem\"==o:(window.blazeIT.logger.error(\"Error in isPlayListItemPanorama: Item\\'s class could not be obtained.\"),!1)}.bind(_this)},5771:()=>{window.blazeIT.getHotspot=function(t){if(!t)return window.blazeIT.logger.error(\"Error in getHotspot: No argument was provided.\"),null;var e=void 0,o=void 0;return\"string\"==typeof t?(o=t,e=window.blazeIT.getHotspotByName(o)):e=t,e}.bind(_this)},1219:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.getHotspotAttributes=function(e,o){if(!e)return window.blazeIT.logger.error(\"Error in getHotspotAttributes: No argument was provided.\"),!1;var n=window.blazeIT.getHotspot(e);if(!n)return!1;var r=Object.keys(n).find((function(e){return\"object\"==t(n[e])&&!!n[e].class&&!!n[e].id}));return r?n[r]:(window.blazeIT.logger.error(\"Error in getHotspotAttributes: Could not retrieve the attributes. Please, check the attributes manually - retrieve the hotspot in the Developer Console.\"),null)}.bind(_this)},8421:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.getHotspotByName=function(e){return e?\"string\"!=typeof e?(window.blazeIT.logger.error(\\'Error in getHotspotByName: Argument \"hotspotName\" is not a string.\\'),null):window.blazeIT.getHotspots().find((function(o){var n=o.get(\"data\");return!(!n||\"object\"!=t(n))&&n.label==e}))||(window.blazeIT.logger.error(\\'Error in getHotspotByName: Hotspot \"\\'.concat(e,\\'\" was not found.\\')),null):(window.blazeIT.logger.error(\\'Error in getHotspotByName: Argument \"hotspotName\" was not provided.\\'),null)}.bind(_this)},127:()=>{window.blazeIT.getHotspotImageAttribute=function(t,e){if(!t)return window.blazeIT.logger.error(\"Error in getHotspotImageAttribute: No argument was provided.\"),null;if(!e||\"string\"!=typeof e)return window.blazeIT.logger.error(\\'Error in getHotspotImageAttribute: Argument \"attribute\" was not provided or is not a string.\\'),null;var o=window.blazeIT.getHotspot(t);if(!o)return null;if(\"HotspotPanoramaOverlay\"!=o.get(\"class\"))return window.blazeIT.logger.error(\"Error in getHotspotImageAttribute: This function only supports hotspots with class \\'HotspotPanoramaOverlay\\'. Attempted hotspot has a class \\'\".concat(o.get(\"class\"),\"\\'.\")),null;var n=o.get(\"items\").find((function(t){return(t.get(\"data\")||{}).label==o.get(\"data\").label}));return n?n.get(e):(window.blazeIT.logger.error(\"Error in getHotspotImageAttribute: Could not find an item within the hotspot.\"),null)}.bind(_this)},2494:()=>{window.blazeIT.getHotspots=function(){var t=this,e=t.getByClassName(\"Panorama\");e=(e=(e=(e=e.concat(t.getByClassName(\"LivePanorama\"))).concat(t.getByClassName(\"HDRPanorama\"))).concat(t.getByClassName(\"Video360\"))).concat(t.getByClassName(\"Map\"));var o=[];return e.forEach((function(e){var n=t.getOverlays(e);o=o.concat(n)})),o}.bind(_this)},7056:()=>{window.blazeIT.hideHotspot=function(t){if(!t)return window.blazeIT.logger.error(\"Error in hideHotspot: No argument was provided.\"),!1;var e=window.blazeIT.getHotspot(t);return!!e&&(window.blazeIT.setHotspotAttributes(e,{opacity:0,enabled:!1}),!0)}.bind(_this)},2910:(t,e,o)=>{o(2494),o(8421),o(5771),o(127),o(1219),o(7556),o(4464),o(7056),o(428)},7556:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.setHotspotAttributes=function(e,o){if(!e)return window.blazeIT.logger.error(\"Error in setHotspotAttributes: No argument was provided.\"),!1;if(!o||\"object\"!=t(o))return window.blazeIT.logger.error(\\'Error in setHotspotAttributes: Argument \"attributes\" was not provided or is not an object.\\'),!1;var n=window.blazeIT.getHotspot(e);return!!n&&(Object.keys(o).forEach((function(t){n.set(t,o[t])})),!0)}.bind(_this)},4464:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.setHotspotImageAttributes=function(e,o){if(!e)return window.blazeIT.logger.error(\"Error in setHotspotImageAttributes: No argument was provided.\"),!1;if(!o||\"object\"!=t(o))return window.blazeIT.logger.error(\\'Error in setHotspotImageAttributes: Argument \"attributes\" was not provided or is not an object.\\'),!1;var n=window.blazeIT.getHotspot(e);return!!n&&(\"HotspotPanoramaOverlay\"!=n.get(\"class\")?(window.blazeIT.logger.error(\"Error in setHotspotImageAttributes: This function only supports hotspots with class \\'HotspotPanoramaOverlay\\'. Attempted hotspot has a class \\'\".concat(n.get(\"class\"),\"\\'. Retrieve the hospot by name and set the attributes manually using \\'.set(key, value)\\'.\")),!1):(Object.keys(o).forEach((function(t){n.get(\"items\").forEach((function(e){e.set(t,o[t])}))})),!0))}.bind(_this)},428:()=>{window.blazeIT.showHotspot=function(t){if(!t)return window.blazeIT.logger.error(\"Error in showHotspot: No argument was provided.\"),!1;var e=window.blazeIT.getHotspot(t);return!!e&&(window.blazeIT.setHotspotAttributes(e,{opacity:1,enabled:!0}),!0)}.bind(_this)},9392:(t,e,o)=>{o(3170),o(2910),o(9708),o(924),o(1905),o(1478),o(3383)},1478:(t,e,o)=>{o(912),o(1361),o(919)},912:()=>{window.blazeIT.navigateToPanorama=function(t){var e=this;if(!t)return window.blazeIT.logger.error(\\'Error in navigateToPanorama: Argument \"panoramaName\" was not provided.\\'),!1;if(!window.blazeIT.getPanoramaByName(t))return!1;var o=window.blazeIT.getPlayListItemByMediaName(t),n=window.blazeIT.getPlayListItemIndex(o),r=o.get(\"camera\").get(\"initialPosition\");return e.setPanoramaCameraWithSpot(e.mainPlayList,o,r.get(\"yaw\"),r.get(\"pitch\"),r.get(\"hfov\")||110),e.mainPlayList.set(\"selectedIndex\",n),!0}.bind(_this)},919:()=>{window.blazeIT.navigateToPanoramaPlayListItem=function(t){var e=this;if(!t)return window.blazeIT.logger.error(\\'Error in navigateToPanoramaPlayListItem: Argument \"playListItem\" was not provided.\\'),!1;var o=window.blazeIT.getPlayListItemIndex(t);if(-1==o)return!1;var n=t.get(\"camera\");if(n){var r=n.get(\"initialPosition\");e.setPanoramaCameraWithSpot(e.mainPlayList,t,r.get(\"yaw\"),r.get(\"pitch\"),r.get(\"hfov\")||110)}else e.setPanoramaCameraWithSpot(e.mainPlayList,t);return e.mainPlayList.set(\"selectedIndex\",o),!0}.bind(_this)},1361:()=>{window.blazeIT.navigateToPlayListItem=function(t){if(!t)return window.blazeIT.logger.error(\\'Error in navigateToPlayListItem: Argument \"playListItem\" was not provided.\\'),!1;var e=window.blazeIT.getPlayListItemIndex(t);return-1!=e&&(window.blazeIT.isPlayListItemPanorama(t)?window.blazeIT.navigateToPanoramaPlayListItem(t):this.mainPlayList.set(\"selectedIndex\",e),!0)}.bind(_this)},5877:()=>{window.blazeIT.getCurrentMedia=function(){var t=this;try{var e=t.MainViewer||t.MainViewer_mobile||t.MainViewer_vr;return e?t.getActiveMediaWithViewer(e):(window.blazeIT.logger.error(\"Error in getCurrentMedia: Could not access the current viewer.\"),null)}catch(t){return window.blazeIT.logger.error(\"Error in getCurrentMedia: Could not retrieve current media.\"),null}}.bind(_this)},989:()=>{window.blazeIT.getPanoramaByName=function(t){return t?\"string\"!=typeof t?(window.blazeIT.logger.error(\\'Error in getPanoramaByName: Argument \"panoramaName\" is not a string.\\'),null):this.getMediaByName(t)||(window.blazeIT.logger.error(\\'Error in getPanoramaByName: Panorama called \"\\'.concat(t,\\'\" was not found.\\')),null):(window.blazeIT.logger.error(\\'Error in getPanoramaByName: Argument \"panoramaName\" was not provided.\\'),null)}.bind(_this)},3516:()=>{window.blazeIT.getPanoramas=function(){var t=this,e=t.getByClassName(\"Panorama\");return(e=e.concat(t.getByClassName(\"LivePanorama\"))).concat(t.getByClassName(\"HDRPanorama\"))}.bind(_this)},1905:(t,e,o)=>{o(5877),o(989),o(3516)},2296:()=>{window.blazeIT.getCurrentPlayListItem=function(){var t=window.blazeIT.getCurrentMedia().get(\"id\"),e=this.mainPlayList.get(\"items\"),o=e.findIndex((function(e){return e.get(\"media\").get(\"id\")==t}));return e[o]}.bind(_this)},1063:()=>{window.blazeIT.getNextPanoramaPlayListItem=function(){for(var t=this.mainPlayList.get(\"items\"),e=window.blazeIT.getCurrentPlayListItem(),o=window.blazeIT.getPlayListItemIndex(e),n=o==t.length-1?0:o+1,r=t[n],i=0;!window.blazeIT.isPlayListItemPanorama(r);)if(r=t[n=n==t.length-1?0:o+1],++i>2*t.length)return window.blazeIT.logger.error(\"Error in getNextPanoramaPlayListItem: Could not obtain next panorama from the playlist.\"),null;return r}.bind(_this)},9130:()=>{window.blazeIT.getNextPlayListItem=function(){var t=this.mainPlayList.get(\"items\"),e=window.blazeIT.getCurrentPlayListItem(),o=window.blazeIT.getPlayListItemIndex(e);return t[o==t.length-1?0:o+1]}.bind(_this)},1477:()=>{window.blazeIT.getPlayListItemByIndex=function(t){if(\"number\"!=typeof t)return window.blazeIT.logger.error(\\'Error in getPlayListItemByIndex: Argument \"playListItemIndex\" was not provided.\\'),null;var e=this.mainPlayList.get(\"items\");return e[t]?e[t]:(window.blazeIT.logger.error(\\'Error in getPlayListItemByIndex: There is no playlist item on index \"\\'.concat(t,\\'\".\\')),null)}.bind(_this)},6343:()=>{window.blazeIT.getPlayListItemByMediaId=function(t){if(!t)return window.blazeIT.logger.error(\\'Error in getPlayListItemByMediaId: Argument \"mediaId\" was not provided.\\'),null;var e=this.mainPlayList.get(\"items\"),o=e.findIndex((function(e){var o=e.get(\"media\");if(!o)return!1;var n=o.get(\"id\");return!!n&&n==t}));return-1==o?(window.blazeIT.logger.error(\\'Error in getPlayListItemByMediaId: Playlist does not contain any item that has media ID \"\\'.concat(t,\\'\".\\')),null):e[o]}.bind(_this)},7401:()=>{window.blazeIT.getPlayListItemByMediaName=function(t){if(!t)return window.blazeIT.logger.error(\\'Error in getPlayListItemByMediaName: Argument \"mediaName\" was not provided.\\'),null;var e=this.mainPlayList.get(\"items\"),o=e.findIndex((function(e){var o=e.get(\"media\");if(!o)return!1;var n=o.get(\"data\");return!!n&&n.label==t}));return-1==o?(window.blazeIT.logger.error(\\'Error in getPlayListItemByMediaName: Playlist does not contain any item with media called \"\\'.concat(t,\\'\". Make sure the media name is spelled correctly. Also, names are case sensitive.\\')),null):e[o]}.bind(_this)},1104:()=>{function t(e){return(t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(e)}window.blazeIT.getPlayListItemIndex=function(e){return e&&\"object\"==t(e)&&e.get&&e.get(\"media\")?this.mainPlayList.get(\"items\").findIndex((function(t){return t.get(\"media\").get(\"id\")==e.get(\"media\").get(\"id\")})):(window.blazeIT.logger.error(\\'Error in getPlayListItemIndex: Argument \"playListItem\" was not provided or is not a PlayListItem instance.\\'),-1)}.bind(_this)},9533:()=>{window.blazeIT.getPlayListItems=function(){return this.mainPlayList.get(\"items\")}.bind(_this)},7581:()=>{window.blazeIT.getPreviousPanoramaPlayListItem=function(){for(var t=this.mainPlayList.get(\"items\"),e=window.blazeIT.getCurrentPlayListItem(),o=window.blazeIT.getPlayListItemIndex(e),n=0==o?t.length-1:o-1,r=t[n],i=0;!window.blazeIT.isPlayListItemPanorama(nextItem);)if(r=t[n=0==n?t.length-1:n-1],++i>2*t.length)return window.blazeIT.logger.error(\"Error in getPreviousPanoramaPlayListItem: Could not obtain next panorama from the playlist.\"),null;return r}.bind(_this)},5175:()=>{window.blazeIT.getPreviousPlayListItem=function(){var t=this.mainPlayList.get(\"items\"),e=window.blazeIT.getCurrentPlayListItem(),o=window.blazeIT.getPlayListItemIndex(e);return t[0==o?t.length-1:o-1]}.bind(_this)},924:(t,e,o)=>{o(1104),o(2296),o(9130),o(5175),o(1063),o(7581),o(9533),o(6343),o(1477),o(7401)},381:(t,e,o)=>{o(8960),o(9392)},130:()=>{window.blazeIT||(window.blazeIT={}),window.blazeIT.version={id:\"JS LIBRARY\",v:421},window.blazeIT.variables={}},8960:(t,e,o)=>{o(130),o(9076),o(5731)},9076:()=>{function t(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function e(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}window.blazeIT.init=function(t){window.blazeIT||(window.blazeIT={}),window.blazeIT=e(e({},window.blazeIT),t)}},5731:()=>{var t={log:function(t){window.blazeIT.env&&(\"dev\"==window.blazeIT.env.toLowerCase()||window.blazeIT.env.toLowerCase())},error:function(t){window.blazeIT.env&&(\"dev\"==window.blazeIT.env.toLowerCase()||\"development\"==window.blazeIT.env.toLowerCase())&&console.error(t)}};window.blazeIT.logger=t}},__webpack_module_cache__={};function __webpack_require__(t){if(__webpack_module_cache__[t])return __webpack_module_cache__[t].exports;var e=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](e,e.exports,__webpack_require__),e.exports}__webpack_require__(381)})();window.blazeIT.init({env: \"dev\",});');","subtitlesOpacity":1,"height":"100%","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderSize":0,"toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderSize":1,"borderRadius":0,"progressBackgroundColorRatios":[0],"toolTipPaddingTop":4,"playbackBarLeft":0,"subtitlesPaddingLeft":5,"subtitlesGap":0,"progressOpacity":1,"progressRight":0,"playbackBarHeadBorderRadius":0,"toolTipShadowOpacity":1,"playbackBarProgressOpacity":1,"toolTipShadowVerticalLength":0,"progressBarBorderColor":"#000000","playbackBarHeadShadow":true,"progressBarBackgroundColorDirection":"vertical","subtitlesTextShadowBlurRadius":0,"progressBarBackgroundColorRatios":[0],"firstTransitionDuration":0,"borderSize":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadOpacity":1,"minWidth":100,"progressBackgroundColorDirection":"vertical","minHeight":50,"doubleClickAction":"toggle_fullscreen","toolTipShadowColor":"#333333","subtitlesBottom":50,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"toolTipBackgroundColor":"#F6F6F6","progressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","toolTipDisplayTime":600,"progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingRight":5,"subtitlesTop":0,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingLeft":6,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"paddingTop":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipFontWeight":"normal","surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"transitionMode":"blending","propagateClick":false,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"toolTipTextShadowColor":"#000000","progressBackgroundOpacity":1,"progressBottom":0,"paddingBottom":0,"surfaceReticleOpacity":0.6,"progressBarBorderRadius":0,"toolTipBorderColor":"#767676","progressBorderSize":0,"progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarBorderRadius":0,"subtitlesHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowOpacity":0,"subtitlesFontSize":"3vmin","subtitlesFontColor":"#FFFFFF","toolTipShadowBlurRadius":3,"subtitlesBorderSize":0,"progressHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"subtitlesVerticalAlign":"bottom","subtitlesPaddingBottom":5,"playbackBarProgressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderColor":"#FFFFFF","progressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","vrPointerSelectionTime":2000,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowVerticalLength":0,"toolTipFontColor":"#606060","progressLeft":0,"playbackBarBackgroundOpacity":1,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","toolTipFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","subtitlesPaddingTop":5,"subtitlesFontWeight":"normal","toolTipFontStyle":"normal","playbackBarBottom":5,"playbackBarRight":0,"subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadShadowBlurRadius":3,"shadow":false,"playbackBarProgressBorderRadius":0},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_A68371A2_A94F_9867_41CF_8DE4011B4983","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_D1C4DFC8_C156_100E_41DB_D6DF9FEF0CC2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D1C4DFC8_C156_100E_41DB_D6DF9FEF0CC2, 0)"}],"id":"playList_D1C4DFC8_C156_100E_41DB_D6DF9FEF0CC2"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_B955CAC3_A958_6825_41DC_58432E63CB57_camera","media":"this.panorama_B955CAC3_A958_6825_41DC_58432E63CB57","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"video":{"height":644,"width":1144,"hasAudio":false,"class":"VideoResource","levels":[{"height":644,"width":1144,"url":"media/video_A68371A2_A94F_9867_41CF_8DE4011B4983.mp4","posterURL":"media/video_A68371A2_A94F_9867_41CF_8DE4011B4983_poster.jpg","class":"VideoResourceLevel","type":"video/mp4","bitrate":1325,"framerate":23.98}]},"loop":false,"height":720,"thumbnailUrl":"media/video_A68371A2_A94F_9867_41CF_8DE4011B4983_t.jpg","width":1280,"id":"video_A68371A2_A94F_9867_41CF_8DE4011B4983","label":trans('video_A68371A2_A94F_9867_41CF_8DE4011B4983.label'),"autoplay":true,"class":"Video","data":{"label":"forest_trees_pelister_national_park_1090"},"scaleMode":"fit_inside"},{"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2560,"width":15360,"rowCount":5,"url":"media/panorama_B955CAC3_A958_6825_41DC_58432E63CB57_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"tags":"ondemand"},{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_B955CAC3_A958_6825_41DC_58432E63CB57_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand"},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_B955CAC3_A958_6825_41DC_58432E63CB57_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand"},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_B955CAC3_A958_6825_41DC_58432E63CB57_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"]},{"height":2048,"width":12288,"rowCount":1,"url":"media/panorama_B955CAC3_A958_6825_41DC_58432E63CB57_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":"mobilevr2gen"}]},"thumbnailUrl":"media/panorama_B955CAC3_A958_6825_41DC_58432E63CB57_t.jpg"}],"hfov":360,"partial":false,"hfovMax":130,"pitch":0,"id":"panorama_B955CAC3_A958_6825_41DC_58432E63CB57","overlays":["this.overlay_A6FD06B6_A94F_B86F_41D3_BE60A9B1FF00","this.overlay_B3E9C8F5_BCCA_A996_41C7_FA79CB0DE0BE"],"label":trans('panorama_B955CAC3_A958_6825_41DC_58432E63CB57.label'),"vfov":180,"hfovMin":"135%","data":{"label":"panorama-bedroom"},"class":"Panorama","thumbnailUrl":"media/panorama_B955CAC3_A958_6825_41DC_58432E63CB57_t.jpg"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_A4BF6AE5_A958_A9E2_41CF_43139D5E8580"},{"image":"this.res_B9D836BA_A949_9867_41DE_92BFD1462F7B","distance":50,"loop":true,"cues":[],"blending":0.05,"useHandCursor":true,"vertices":[{"class":"PanoramaPoint","yaw":63.23,"pitch":4.43},{"class":"PanoramaPoint","yaw":82.6,"pitch":5.18},{"class":"PanoramaPoint","yaw":82.57,"pitch":-7.33},{"class":"PanoramaPoint","yaw":63.23,"pitch":-6.28}],"video":{"height":644,"width":1144,"hasAudio":false,"class":"VideoResource","levels":[{"height":644,"width":1144,"url":"media/video_A68371A2_A94F_9867_41CF_8DE4011B4983.mp4","posterURL":"media/video_A68371A2_A94F_9867_41CF_8DE4011B4983_poster.jpg","class":"VideoResourceLevel","type":"video/mp4","bitrate":1325,"framerate":23.98}]},"enabledInCardboard":true,"data":{"hasAudio":false},"autoplay":true,"class":"QuadVideoPanoramaOverlay","videoVisibleOnStop":false,"id":"overlay_A6FD06B6_A94F_B86F_41D3_BE60A9B1FF00"},{"rotationX":-11.97,"useHandCursor":true,"height":2000,"vfov":30.26,"hfov":43.6,"rotationY":-0.67,"show":"eval('changeMediaFile()');","width":2000,"transparent":true,"yaw":-170.58,"url":trans('overlay_B3E9C8F5_BCCA_A996_41C7_FA79CB0DE0BE.url'),"data":{"label":"web_hotspot"},"class":"FramePanoramaOverlay","contentInteractive":true,"pitch":8.88,"id":"overlay_B3E9C8F5_BCCA_A996_41C7_FA79CB0DE0BE"},{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":1280,"height":720,"url":"media/res_B9D836BA_A949_9867_41DE_92BFD1462F7B_0.jpg"}],"id":"res_B9D836BA_A949_9867_41DE_92BFD1462F7B"}],"scripts":{"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openLink":TDV.Tour.Script.openLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showWindow":TDV.Tour.Script.showWindow,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowScore":TDV.Tour.Script.quizShowScore,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentByName":TDV.Tour.Script.getComponentByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"existsKey":TDV.Tour.Script.existsKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"shareSocial":TDV.Tour.Script.shareSocial,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"resumePlayers":TDV.Tour.Script.resumePlayers,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"registerKey":TDV.Tour.Script.registerKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizStart":TDV.Tour.Script.quizStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaByName":TDV.Tour.Script.getMediaByName,"playAudioList":TDV.Tour.Script.playAudioList,"getPixels":TDV.Tour.Script.getPixels,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cloneCamera":TDV.Tour.Script.cloneCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMainViewer":TDV.Tour.Script.getMainViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeech":TDV.Tour.Script.textToSpeech,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setValue":TDV.Tour.Script.setValue,"translate":TDV.Tour.Script.translate,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart},"start":"this.init()","contentOpaque":false,"borderSize":0,"shadow":false,"minHeight":20,"data":{"name":"Player518","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Thu Dec 16 2021