import * as React from 'react';
import * as Modal from 'react-modal';
import { Link, Tag } from './model';

interface LinkFormProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onSubmit: (link: Link) => void;
}

interface LinkFormState {
    title: string;
    url: string;
    tags: {
        name: string
    }[];
}

export class LinkForm extends React.Component<LinkFormProps, LinkFormState> {
    constructor(props: LinkFormProps) {
        super(props);

        this.state = {
            title: '',
            url: '',
            tags: []
        };
    }

    onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.target.value
        });
    }
    onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            url: e.target.value
        });
    }
    onTagChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        let tags = this.state.tags.slice();
        tags[i].name = e.target.value;
        this.setState({
            tags: tags
        })
    }

    onAddTag = () => {
        let tags = this.state.tags.slice();
        tags.push({
            name: ''
        });
        this.setState({
            tags
        });
    }

    submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let link = new Link(this.state.title, this.state.url, [])
        this.state.tags.forEach(t => {
            link.tags.push(new Tag(t.name));
        })
        
        this.props.onSubmit(link);
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
            >
                <div>
                    <h2>Add link</h2>
                    <form onSubmit={this.submit}>
                        <div className="form-group">
                            <label >Title</label>
                            <input
                                type="text"
                                onChange={this.onTitleChange}
                                value={this.state.title}
                                className="form-control"
                                placeholder="Site"
                            />
                        </div>
                        <div className="form-group">
                            <label>URL</label>
                            <input
                                type="text"
                                onChange={this.onUrlChange}
                                value={this.state.url}
                                className="form-control"
                                placeholder="URL"
                            />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.onAddTag}>Add tag</button>
                            {this.state.tags.map((t, i) => (
                                <div className="form-group">
                                    <label>Tag {i + 1}</label>
                                    <input
                                        type="text"
                                        onChange={this.onTagChange.bind(this, i)}
                                        value={t.name}
                                        className="form-control"
                                    />
                                </div>
                            ))}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Modal>
        );

    }
}
