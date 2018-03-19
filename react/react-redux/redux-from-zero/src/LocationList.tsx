import { connect } from 'react-redux';
import * as React from 'react';
import { RootState } from './store';
import { ConnectedLocationForm, LocationFormData } from './LocationForm';
import { addLocation, LocationAction } from './actions/location-action';
import { Dispatch } from 'redux';

interface LocationProps {
    locations: Models.Location[];
    addLocation: (name: string) => void;
}

// class LocationList extends React.Component<LocationProps> {

// }

class LocationList extends React.Component<LocationProps> {
    handleSubmit = (values: LocationFormData) => {
        this.props.addLocation(values.name);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.locations.map(l => (
                        <li key={l.id}>{l.name}</li>
                    ))}
                </ul>
                <ConnectedLocationForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    locations: state.location.locations
});

const mapDispatchToProps = (dispatch: Dispatch<LocationAction>) => ({
    addLocation: (name: string) => { dispatch(addLocation(name)); }
});

export const ConnectedLocationList = connect(mapStateToProps, mapDispatchToProps)(LocationList);
