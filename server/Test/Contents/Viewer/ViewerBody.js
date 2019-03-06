import React, { Component } from 'react';
import axios from 'axios'
import ViewerSideNav from './ViewerSideNav'
import ViewContents from './ViewContents'


const instance = axios.create({
    baseURL: 'localhost:4300'
})

class ViewerBody extends Component {
    state = {
        data: [],
        text: 'Click any file to load',
        type: ''
    }
    componentDidMount = () => {
        const {data} = this.state
        console.log(data);
        axios.get("/sample")
        .then(res => {
            let { data } = res.data;
            console.log("res", res)
            this.setState({
                data
            }, () => console.log(this.state.data))
        })
    }

    folderClick = (clickedFileName) => {
        const {data} = this.state
        console.log(data.filter((dataFileName) => dataFileName.includes(`${clickedFileName}/`)).length)

        if(data.filter((dataFileName) => dataFileName.includes(`${clickedFileName}/`)).length > 0) {
            var tempArray = []
            data.map((dataFileName) => {
                if(!dataFileName.includes(`${clickedFileName}/`)) {
                    tempArray.push(dataFileName)
                }
            })
            this.setState({
                data: tempArray
            })
        }
        else {
            axios.get("/sample", {
                params:{folder: clickedFileName}
            })
            .then(res => {
                const responsedData  = res.data.data;
                const temp = this.state.data
                const where = temp.indexOf(clickedFileName)
                responsedData.map((filename) => {
                    temp.splice(where + 1, 0, filename)
                })
                    this.setState({
                        data: temp
                    }, () => console.log(this.state.data))
                
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
                type: clickedFileName.slice(clickedFileName.indexOf('.') + 1, clickedFileName.lenght)
            })
        })
    }

    clickHandler = (fileName, index) => {

            axios.get("/sample", {
                params:{filename: fileName}
            })
            .then(res => {
                var temp = ""
                if(fileName.includes('.json')){
                    temp = JSON.stringify(res.data)
                }   
                else
                    temp = res.data.toString()
                console.log(temp)
                this.setState({
                    text: temp,
                    type: fileName.slice(fileName.indexOf('.') + 1, fileName.lenght)
                })
            })

           
        
    }

    render() {
        const {data, text, type} = this.state
        return (
            <div>
                <ViewerSideNav lists={data} fileClick={this.fileClick} folderClick={this.folderClick}/>
                <ViewContents contents={text} type={type}/>
            </div>
        );
    }
}

export default ViewerBody;