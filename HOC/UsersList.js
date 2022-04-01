class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      users: GlobalDataSource.getUsers(),
    };
  }

  componentDidMount() {
    GlobalDataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    GlobalDataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserData user={user} key={user.id} />
        ))}
      </div>
    );
  }
}