import * as React from 'react';
import { createStore } from 'redux';
// import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

interface RootState {
  links: {
    title: string,
    url: string
  }[];
  users: {
    id: number,
    name: string
  }[];
}

const rootReducer = (state: RootState) => {
  return {
    links: [
      { title: 'Google', url: 'http://www.google.com' },
      { title: 'Yahoo', url: 'http://www.yahoo.com' },
    ],
    users: [
      { id: 1, name: 'Robot01' },
      { id: 2, name: 'Robot02' }
    ]
  };
};

const store = createStore<RootState>(rootReducer);

interface LinkListProps {
  links: {
    title: string,
    url: string
  }[];
}

const PureLinkList = (props: LinkListProps) => {
  return (
    <div>
      {props.links.map(l => (
        <div>{l.title} - {l.url}</div>
      ))}
    </div>
  );
};

// const mapStateToProp = (state: RootState) => {
//   return {
//     links: state.links
//   };
// };

interface UserProps {
  users: {
    id: number,
    name: string
  }[];
}

const PureUserList = (props: UserProps) => {
  return (
    <div>
      {props.users.map(u => (
        <div>{u.id} : {u.name}</div>
      ))}
    </div>
  );
};

const mapStateToProp = (state: RootState) => {
  return {
    links: state.links,
    users: state.users
  };
};

const LinkList = connect(mapStateToProp)(PureLinkList);
const UserList = connect(mapStateToProp)(PureUserList);

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
      <UserList />
    </div>
  </Provider>
);

export default App;
