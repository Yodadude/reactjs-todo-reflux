(function(React, ReactRouter, Reflux, TodoActions, todoListStore, global) {

	// Renders the UNDO link
    // Used in TodoApp
    // Observe that the toogleall button is NOT rendered here, but in TodoMain (it is then moved up to the header with CSS)
    var TodoUndo = React.createClass({
        render: function() {
            return (
                <div id="undo">
                    <a href="javascript:;" onClick={UndoActions.undoItem}>Undo!!</a>
                </div>
            );
        }
    });

    React.render(<TodoUndo />, document.getElementById('undocontainer'));

})(window.React, window.ReactRouter, window.Reflux, window.TodoActions, window.todoListStore, window);

