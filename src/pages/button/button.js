import React from 'react';
import ReactDOM from 'react-dom/client';

class ParentComponent extends React.Component {
    state = {
        items: [],
        colors: [],
    }

    componentDidMount(){
        this.setState({
            colors: ["red", "green", "blue"],
            items: [
                {
                    id : 1, 
                    content : "item 1", 
                    colorIndex : 0,
                }, 
                {
                    id : 2, 
                    content : "item 2", 
                    colorIndex : 1,
                }, 
                {
                    id : 3, 
                    content : "item 3", 
                    colorIndex : 2,
                },
            ]
        });
        
        console.log('mounted');
    }
    handleOnClick = (itemKey) => {
        const nextItems = this.state.items.map((item) => {
            if(item.id == itemKey){
                return Object.assign({}, item, {
                    colorIndex : (item.colorIndex == 2) ? 0 : item.colorIndex + 1,
                });
            }else{
                return item;
            }
        });

        this.setState({
            items : nextItems,
        });

        console.log('Color has changed');
    }

    render() {
        const itemList = this.state.items.map((item) => (
            <ChildComponent
                key={'Item-'+ item.id}
                id={item.id}
                content={item.content}
                colorIndex={item.colorIndex}
                colorList={this.state.colors}
                onClick = {this.handleOnClick}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {itemList}
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    toggleColor = () => (
        this.props.onClick(this.props.id)
    )

    render() {
        return (
            <div className='ui centered card'>
                <div 
                    className='field'
                    style={{backgroundColor : this.props.colorList[this.props.colorIndex]}}
                >
                    <label>{this.props.content}</label>
                </div>
                <button
                    className='ui basic blue button'
                    onClick={this.toggleColor}
                >
                    Submit!
                </button>
            </div>
        );
    }
}

// ReactDOM.render(
//     <ParentComponent />,
//     document.getElementById("content")
// );

export default ParentComponent;