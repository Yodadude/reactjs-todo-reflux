(function(React, ReactRouter, Reflux, TodoActions, undoStore, global, UndoActions) {

	// Renders the UNDO link
    var TodoUndo = React.createClass({
        mixins: [Reflux.connect(undoStore, "undo")],
        getInitialState: function() {
            return {
                undo: []
            };
        },
        render: function() {
            
            var classes = React.addons.classSet({
                hidden: this.state.undo.length === 0
            });

            return (
                <div id="undo" className={classes}>
                    <a href="javascript:;" onClick={UndoActions.undoItem}>Undo</a>
                </div>
            );
        }
    });

    React.render(<TodoUndo />, document.getElementById('undocontainer'));

})(window.React, window.ReactRouter, window.Reflux, window.TodoActions, window.undoStore, window, window.UndoActions);

