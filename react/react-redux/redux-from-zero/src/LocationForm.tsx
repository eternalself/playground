import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

export interface LocationFormData {
    name: string;
}

const LocationForm = (props: InjectedFormProps) => {
    const { handleSubmit } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export const ConnectedLocationForm = reduxForm({
    form: 'locationform'
})(LocationForm);
