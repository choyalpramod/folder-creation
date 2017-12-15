import React from 'react';

export default class CreateFolder extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            input: ''
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="create-folder-block">
                    <div className="full-width primary-bg-color padding-medium white-fg-color header">
                        <span className="">Create Folder</span> 
                        <i onClick={this.props.close} className="fa fa-times float-right cursor-pointer"></i>
                    </div>
                    <form className="full-width padding-medium" onSubmit={this.saveFolder.bind(this)}>
                        <div className="full-width">
                            <label className="font-xsmall">Folder Name</label>
                            <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="full-width">
                            <button type="submit" className="cursor-pointer">Create Folder</button>
                        </div>
                    </form>
                </div>
                <div className="white-modal" onClick={this.props.close}></div>
            </React.Fragment>
        )
    }

    handleChange(event){
        this.setState({ input: event.target.value });
    }

    saveFolder(event){
        event.preventDefault();
        let obj = {
            key: this.lookForUniqueKey(0),
            label: this.state.input,
            parentKey: this.props.parentKey,
            children: []
        };
        this.props.saveCallback(obj);
    }

    lookForUniqueKey(key){
        let newKey = `idea_${key}`;
        if(this.props.originalData[newKey]){
            return this.lookForUniqueKey(key+1);
        }        
        return newKey;
    }
}