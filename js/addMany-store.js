(function(Reflux, TodoActions, AddManyActions, global) {
    'use strict';

    // some variables and helpers for our fake database stuff
    var addManyStore = [];

    global.addManyStore = Reflux.createStore({
        // this will set up listeners to all publishers in AddManyActions, using onKeyname (or keyname) as callbacks
        listenables: [AddManyActions],
        onAddMany: function(items) {
            debugger;
            // this.trigger(undoStore);
            TodoActions.addMany(items);
        }
    });

})(window.Reflux, window.TodoActions, window.AddManyActions, window);
