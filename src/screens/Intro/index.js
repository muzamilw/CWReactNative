import React from 'react';
import IntroServiceComponent from '../../components/Intro/index.services';
import Intro from '../../components/Intro/index';

class IntroScreen extends React.Component{
    render() {
        console.log('IntroScreen ',this.props.route.params)
        return (
            <IntroServiceComponent route = {this.props.route.params}>
                {props => (
                    <Intro
                        {...props}
                    />
                )}
            </IntroServiceComponent>
        );
    };
}
export default IntroScreen;