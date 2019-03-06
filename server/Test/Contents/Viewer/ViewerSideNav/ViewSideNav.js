import React, { Component } from 'react';

//style lines
import {FaFile, FaFolder} from 'react-icons/fa'
import {MdKeyboardArrowRight} from 'react-icons/md'
import styles from './ViewSideNav.module.scss'
import ownStyles from '../../../../common/index'

var seleted = -1;

class ViewSideNav extends Component {

    componentWillUnmount() {
        seleted = -1
    }
    
    clickEvent = (clickedFileName, index) => {
        seleted = index
        console.log(clickedFileName.includes('.')? 'file Clicked': 'folder Clicked')
        if(clickedFileName.includes('.'))
            this.props.fileClick(clickedFileName)
        else 
            this.props.folderClick(clickedFileName)
    }

    design = (list, index) => {
        var splitList = list.split('/')
        console.log(splitList.length)
        if(splitList.length === 1) {
            if(list.includes('.')) {
                return (
                    <ownStyles.AnimatedLi className={seleted === index ? styles.active : ""} onClick={() => this.clickEvent(list, index)}>
                        <FaFile/>&ensp;{list}
                    </ownStyles.AnimatedLi>
                )
            }
            else {
                return (
                    <ownStyles.AnimatedLi className={seleted === index ? styles.active  : ""} onClick={() => this.clickEvent(list, index)}>
                        <FaFolder className={styles.Green}/>&ensp;{list}
                    </ownStyles.AnimatedLi>
                )
            }  
        } else {
            if(splitList[splitList.length - 1].includes('.')) {
                return (
                    <ownStyles.AnimatedLi className={seleted === index ? styles.active : ""} onClick={() => this.clickEvent(list, index)}>
                        {
                            splitList.map(data => <>&ensp;</>)
                        }
                        <MdKeyboardArrowRight/><FaFile/>&ensp;{splitList[splitList.length - 1]}
                    </ownStyles.AnimatedLi>
                )
            }
            else {
                return (
                    <ownStyles.AnimatedLi className={seleted === index ? styles.active  : ""} onClick={() => this.clickEvent(list, index)}>
                        {
                            splitList.map(data => <>&ensp;</>)
                        }
                        <MdKeyboardArrowRight/><FaFolder className={styles.Green}/>&ensp;{splitList[splitList.length - 1]}
                    </ownStyles.AnimatedLi>
                )
            }  
        }
        
    }

    render() {
        return (
            <div className={styles.ViewSideNav}>
                <ul>
                    {this.props.lists.map((list, index) => this.design(list, index))} 
                </ul>
            </div>
        );
    }
}

ViewSideNav.defaultProps = {
    lists: "Loading the items..."
}

export default ViewSideNav;