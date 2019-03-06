import React, { Component } from 'react';

//style lines
import {IconContext} from 'react-icons'
import {FaFile, FaFolder} from 'react-icons/fa'
import {IoMdReturnRight} from 'react-icons/io'
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
                    <ownStyles.AnimatedLi key={index} className={seleted === index ? styles.active : ""} onClick={() => this.clickEvent(list, index)}>
                        <FaFile/>&ensp;{list}
                    </ownStyles.AnimatedLi>
                )
            }
            else {
                return (
                    <ownStyles.AnimatedLi key={index} className={seleted === index ? styles.active  : ""} onClick={() => this.clickEvent(list, index)}>
                        <FaFolder className={styles.Green}/>&ensp;{list}
                    </ownStyles.AnimatedLi>
                )
            }  
        } else {
            if(splitList[splitList.length - 1].includes('.')) {
                return (
                    <ownStyles.AnimatedLi key={index} className={seleted === index ? styles.active : ""} onClick={() => this.clickEvent(list, index)}>
                        {
                            splitList.map(data => <>&emsp;</>)
                        }
                        <IconContext.Provider value={{size: "13px"}}>
                            <IoMdReturnRight/>
                        </IconContext.Provider>
                        <FaFile/>&ensp;{splitList[splitList.length - 1]}
                    </ownStyles.AnimatedLi>
                )
            }
            else {
                return (
                    <ownStyles.AnimatedLi key={index} className={seleted === index ? styles.active  : ""} onClick={() => this.clickEvent(list, index)}>
                        {
                            splitList.map(data => <>&emsp;</>)
                        }
                        <IconContext.Provider value={{size: "13px"}}>
                            <IoMdReturnRight/>
                        </IconContext.Provider>
                        <FaFolder className={styles.Green}/>&ensp;{splitList[splitList.length - 1]}
                    </ownStyles.AnimatedLi>
                )
            }  
        }
        
    }

    render() {
        const {lists} = this.props
        return (
            <div className={styles.ViewSideNav}>
                <ul>
                    {Array.isArray(lists) ? lists.map((list, index) => this.design(list, index)) : "hi"} 
                </ul>
            </div>
        );
    }
}

ViewSideNav.defaultProps = {
    lists: "Loading the items..."
}

export default ViewSideNav;