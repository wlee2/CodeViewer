import React, { Component } from 'react';
import axios from 'axios'

import {connect} from 'react-redux'
import actions from '../../../actions'

import ViewerSideNav from './ViewerSideNav'
import ViewContents from './ViewContents'

class ViewerBody extends Component {
    state = {
        text: 'Click any file to load'
    }

    //Get file lists from server

    folderClick = (clickedFileName) => {
        const {lists, update, remove} = this.props

        if(lists.filter((dataFileName) => dataFileName.includes(`${clickedFileName}/`)).length > 0) {
            //remove appended lists
            var from = -1
            var to = 0
            lists.forEach((filename, index) => {
                if(filename.includes(`${clickedFileName}`)) {
                    if(from === -1)
                        from = index + 1
                    else
                        to = index + 1
                }
            })
            remove(from, to)
            
        }
        else {
            //append lists
            axios.get("/sample", {
                params:{folder: clickedFileName}
            })
            .then(res => {
                const responsedData  = res.data.data;
                const temp = lists
                const where = temp.indexOf(clickedFileName)
                responsedData.forEach((filename) => {
                    update(filename, where+1)
                })
                
            })
        }
    }

    fileClick = (clickedFileName) => {
        axios.get("/sample", {
            params:{filename: clickedFileName}
        })
        .then(res => {
            var temp = ""
            if(clickedFileName.includes('.json')){
                temp = JSON.stringify(res.data)
            }   
            else
                temp = res.data.toString()
            console.log(temp)
            this.setState({
                text: temp,
            })
        })
    }

    render() {
        const {text} = this.state
        const {lists} = this.props
        return (
            <div>
                <ViewerSideNav lists={lists} fileClick={this.fileClick} folderClick={this.folderClick}/>
                <ViewContents contents={text}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists
});

const mapDispatchToProps = (dispatch) => ({
    init: (data) => dispatch(actions.init(data)),
    update: (data, index) => dispatch(actions.update({data, index})),
    remove: (from, to) => dispatch(actions.remove({from, to}))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewerBody);