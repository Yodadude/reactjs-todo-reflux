(function(React, TodoActions, global) {


	// Renders the UNDO link
    var TodoAddMany = React.createClass({
        getInitialState: function() {
            return {
                hide: true,
                text: ""
            };
        },
        handleAddMany: function(evt) {
            var items = this.refs.addmany.getDOMNode().value.split("\n");
            TodoActions.addMany(items);
            this.swapVisibilityState();
        },
        showAddMany: function() {
            this.swapVisibilityState();
            debugger;
//            var currentState = this.state;
//            currentState.text = "";
//            this.setState({text: ""});
            this.refs.addmany.getDOMNode().value = "";
        },
        swapVisibilityState: function() {
            var currentState = this.state;
            currentState.hide = !currentState.hide;
            this.setState(currentState);
        },
        render: function() {
    
            var showPanel = {
                visibility: this.state.hide ? 'hidden' : 'visible',
                margin: 0,
                padding: 0,
                'vertical-align': top
            }
            var showLink = {
                display: this.state.hide ? 'block' : 'none'
            }
            
            return (
                <section>
                    <a style={showLink} ref="addmanylink" href="javascript:;" onClick={this.showAddMany}>Add Many</a>
                    <div style={showPanel}>
                        <textarea id="addmany" ref="addmany" cols="60" rows="10">{this.state.text}</textarea>
                        <div>
                            <a href="javascript:;" onClick={this.handleAddMany}>Add</a>&nbsp;&nbsp;
                            <a href="javascript:;" onClick={this.swapVisibilityState}>Cancel</a>
                        </div>
                    </div>
                </section>
            );
        }
    });

    React.render(<TodoAddMany />, document.getElementById('addmanycontainer'));

})(window.React, window.TodoActions, window);

