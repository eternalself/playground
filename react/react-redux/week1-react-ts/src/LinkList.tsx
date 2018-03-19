import * as React from 'react';
import { Link } from './model';

interface LinkListProps {
  links: Link[];
}
export class LinkList extends React.Component<LinkListProps, {}> {
  render() {
    return (
      <div>
        {this.props.links.map(l => (
          <div>
            {l.title} - {l.url}
          </div>
        ))}
      </div>
    );
  }
}