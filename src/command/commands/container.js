/*
 *
 */
"use strict";

goog.require("Entry.Command");
goog.require("Entry.STATIC");

(function(c) {
    c.containerSelectObject = (function() {
        var commandType = "containerSelectObject";
        return {
            type: commandType,
            do: function(name, objectId) {
                Entry.container.selectObject(objectId);
            },
            state: function() {
            },
            log: function() {
                return [];
            },
            undo: "",
            dom: ['container', '&0']
        };
    })();
})(Entry.Command);

