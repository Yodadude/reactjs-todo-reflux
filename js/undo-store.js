(function(Reflux, TodoActions, UndoActions, global) {
    'use strict';

    // some variables and helpers for our fake database stuff
    var undoStore = [];


    global.undoStore = Reflux.createStore({
        // this will set up listeners to all publishers in UndoActions, using onKeyname (or keyname) as callbacks
        listenables: [UndoActions],
        onUndoItem: function() {
            TodoActions.redoItem(undoStore.pop());
            this.trigger(undoStore);
        },
        onAddItem: function(item) {
            undoStore.push(item);
            this.trigger(undoStore);
        }
    });

})(window.Reflux, window.TodoActions, window.UndoActions, window);
