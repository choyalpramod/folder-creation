import React from 'react';
import FolderStructure from '../../section/components/FolderStructure';
import * as constants from '../../section/constants/constants';

export default class Home extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return <FolderStructure />
    }
}