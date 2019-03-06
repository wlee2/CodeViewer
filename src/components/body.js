import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import axios from 'axios'

import {connect} from 'react-redux'
import actions from '../actions'

//Components
import Header from './Header'
import Nav from './Nav'
import Portfolio from './Contents/Portfolio'
import Viewer from './Contents/Viewer'
import Footer from './Footer/Footer'
//Styles
import styles from './body.module.scss'

class body extends Component {
    componentDidMount() {
        axios.get("/sample")
        .then(res => {
            const { data } = res.data;
            console.log("res", res)
            this.props.init(data)
        })
    }

    render() {
        return (
                <div className={styles.body}>
                    <Header title={'Welcome'}/>
                    <BrowserRouter>
                        <>
                            <Nav/>
                            <Switch>
                                <Route path="/view" component={Viewer}></Route>
                                <Route exact path="/" component={Portfolio}></Route>
                            </Switch>
                        </>
                    </BrowserRouter>
                    <Footer Footer={'this is footer Copyright@wooseok'}></Footer>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists
});

const mapDispatchToProps = (dispatch) => ({
    init: (data) => dispatch(actions.init(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(body);
