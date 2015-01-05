(function(Reflux, global) {
    'use strict';

    // Each action is like an event channel for one specific event. Actions are called by components.
    // The store is listening to all actions, and the components in turn are listening to the store.
    // Thus the flow is: User interaction -> component calls action -> store reacts and triggers -> components update

    global.UndoActions = Reflux.createActions([
        "undoItem",       // called by link to undo item from undo store and add back to Todo store
        "addItem"         // called by delete to add item to Undo store
    ]);

})(window.Reflux, window);
