import React from 'react';
import MessageSentServiceComponent from '../../../components/Home/MessageSent/index.services';
import MessageSent from '../../../components/Home/MessageSent/index';

class MessageSentScreen extends React.Component{
    render() {
        console.log('IntroScreen ',this.props.route.params)
        return (
            <MessageSentServiceComponent route = {this.props.route.params}>
                {props => (
                    <MessageSent
                        {...props}
                    />
                )}
            </MessageSentServiceComponent>
        );
    };
}
export default MessageSentScreen;