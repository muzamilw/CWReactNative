import React from 'react';
import LearnMoreServiceComponent from '../../../components/Home/LearnMore/index.services';
import LearnMore from '../../../components/Home/LearnMore/index';

class LearnMoreScreen extends React.Component{
    render() {
        console.log('IntroScreen ',this.props.route.params)
        return (
            <LearnMoreServiceComponent route = {this.props.route.params}>
                {props => (
                    <LearnMore
                        {...props}
                    />
                )}
            </LearnMoreServiceComponent>
        );
    };
}
export default LearnMoreScreen;