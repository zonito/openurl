(ns lt.plugins.openurl
  (:require [lt.object :as object]
            [lt.objs.browser :as browser]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn show-browser []
  (let [cm (pool/last-active)]
    (when-let [ed (editor/->cm-ed cm)]
      (cmd/exec! :add-browser-tab (editor/selection ed)))))

;;**********************************************************
;; command list
;;**********************************************************

(cmd/command {:command ::open-url
              :desc "OpenUrl: Open selected url."
              :exec (fn []
                      (show-browser))})
