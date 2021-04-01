import React from 'react';
import InviteListServiceComponent from '../../../components/Home/InviteList/index.services';
import InviteList from '../../../components/Home/InviteList/index';

class InviteListScreen extends React.Component{
    render() {
        console.log('IntroScreen ',this.props.route.params)
        return (
            <InviteListServiceComponent route = {this.props.route.params}>
                {props => (
                    <InviteList
                        {...props}
                    />
                )}
            </InviteListServiceComponent>
        );
    };
}
export default InviteListScreen;