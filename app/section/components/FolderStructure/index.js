import React from 'react';
import CreateFolder from './CreateFolder';
import './index.scss';

export default class FolderStructure extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            structure: {
                'root': {
                    label: '',
                    key: 'root',
                    children: []
                }
            },
            active: 'root',
            createFolder: null
        });
    }

    render() {
        return(
            <div className="full-width">
                {this.headerHtml()}
                <div className="full-width">
                    <div className="default-center">
                        <div className="full-width padding-small no-horizontal-padding light-border-bottom">
                            {this.state.active != 'root' &&
                                <i className="fa fa-arrow-left font-medium cursor-pointer" onClick={this.previousFolderkey.bind(this)}></i>
                            }   
                            <span className="float-right create-folder" onClick={this.createNewFolder.bind(this)}>Create Folder</span>
                        </div>
                        {this.renderFolderStructure()}
                    </div>
                    {this.createFolderHtml()}
                </div>
            </div>
        )
    }

    renderFolderStructure(){
        let activeObj = this.state.structure[this.state.active].children; 
        return(
            <React.Fragment>
                { activeObj && activeObj.map((value, index)=>{
                        return this.folderStructure(value);
                    })
                }
            </React.Fragment>
        )
    }

    folderStructure(key){
        if(!key || !this.state.structure[key]){
            return null;
        }

        let { label } = this.state.structure[key];
        return (
            <div className="full-width light-border-bottom padding-small no-horizontal-padding" key={key}>
                <div className="width-90" onClick={this.folderClicked.bind(this, key)}>
                    <i className="fa fa-folder folder-fg-color folder-icon cursor-pointer"></i>
                    <div className="folder-content cursor-pointer">{label}</div>
                </div>
                <div className="width-10 text-align-right padding-xsmall no-horizontal-padding">
                    <i className="fa fa-trash-o cursor-pointer" onClick={this.onDelete.bind(this, key)}></i>                
                </div>
            </div>
        )
    }

    getPath(pKey = this.state.active, url=''){
        if(pKey == 'root' && url.length == 0){ return 'You are in root directory'}
        if(pKey == 'root'){ return url;}
        let { parentKey, label } = this.state.structure[pKey];

        return this.getPath(parentKey, `/${label}${url}`);
    }

    folderClicked(key){
        this.setState({active: key});
    }

    previousFolderkey(){
        this.setState({active: this.state.structure[this.state.active].parentKey});
    }

    onDelete(key){
        let structure = this.state.structure;
        let parentObj = structure[structure[key].parentKey];
        structure = parentObj.children.splice(parentObj.children.indexOf(key), 1);
        this.setState(structure);
    }
        
    createFolderCallback(obj){
        let structure = this.state.structure;
        structure[obj.parentKey].children.push(obj.key);
        structure[obj.key] = obj;

        this.setState({
            structure: structure,
            createFolder: null
        });
    }

    createFolderHtml(){
        if(!this.state.createFolder){
            return null
        }
        return(            
            <CreateFolder
                parentKey={this.state.createFolder.parentKey}
                originalData={this.state.structure} 
                close={this.closePopup.bind(this)}
                saveCallback={this.createFolderCallback.bind(this)}/>
        )
    }

    headerHtml(){
        return(
            <div className="primary-bg-color white-fg-color padding-large font-medium">
                <div className="default-center">{this.getPath()}</div>
            </div>
        )
    }

    closePopup(){
        this.setState({createFolder: null});
    }

    createNewFolder(event){
        this.setState({
            createFolder: {
                parentKey: this.state.active
            }            
        });
    }
}
