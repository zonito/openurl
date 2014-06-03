if(!lt.util.load.provided_QMARK_('lt.plugins.openurl')) {
goog.provide('lt.plugins.openurl');
goog.require('cljs.core');
goog.require('lt.objs.browser');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.browser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.openurl.show_browser = (function show_browser(){var cm = lt.objs.editor.pool.last_active.call(null);var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,cm);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),lt.objs.editor.selection.call(null,ed));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.openurl","open-url","lt.plugins.openurl/open-url",4012834425),new cljs.core.Keyword(null,"desc","desc",1016984067),"OpenUrl: Open selected url.",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.openurl.show_browser.call(null);
})], null));
}

//# sourceMappingURL=openurl_compiled.js.map