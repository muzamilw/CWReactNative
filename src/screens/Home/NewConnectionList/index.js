import React from 'react';
import NewConnectionListServiceComponent from '../../../components/Home/NewConnection/index.services';
import NewConnectionList from '../../../components/Home/NewConnection/index';

class NewConnectionListScreen extends React.Component{
    render() {
        console.log('IntroScreen ',this.props.route.params)
        return (
            <NewConnectionListServiceComponent route = {this.props.route.params}>
                {props => (
                    <NewConnectionList
                        {...props}
                    />
                )}
            </NewConnectionListServiceComponent>
        );
    };
}
export default NewConnectionListScreen;