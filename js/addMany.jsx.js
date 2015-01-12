(function(React, ReactRouter, Reflux, AddManyActions, addManyStore, global) {

	// Renders the UNDO link
    var TodoAddMany = React.createClass({
        // mixins: [Reflux.connect(todoStore, "list")],
        getInitialState: function() {
            return {
                text: "hello newman"
            };
        },
        handleAddMany: function(evt) {
            debugger;
            var items = document.getElementById("addmany").value.split("\n");

            // this.setState({text: "????"});

            AddManyActions.addMany(items);

        },
        render: function() {
            return (
                <div>
                    <textarea id="addmany" cols="60" rows="10">{this.state.text}</textarea>
                    <br />
                    <a href="javascript:;" onClick={this.handleAddMany}>Add</a>
                </div>
            );
        }
    });

    React.render(<TodoAddMany />, document.getElementById('addmanycontainer'));

})(window.React, window.ReactRouter, window.Reflux, window.AddManyActions, window.addManyStore, window);

