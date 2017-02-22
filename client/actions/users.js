let BASEURL = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users'

export const fetchUsers = () => {
  return(dispatch) => {
    $.ajax({
      type: 'GET',
      url: BASEURL,
      dataType: 'JSON'
    }).done(users => {
      // console.table(users);
      dispatch({ type: 'ALL_USERS', users});
    }).fail(err => {
      console.log(err);
    });
  };
}

export const createUser = (first_name, last_name, phone_number) => {
  return(dispatch) => {
    $.ajax({
      type: 'POST',
      url: BASEURL,
      dataType: 'JSON',
      data: { user: {first_name, last_name, phone_number } }
    }).done(user => {
      console.table(user)
      dispatch({ type: 'CREATE_USER', user})
    }).fail(err => {
      console.log(err);
    });
  };
}

export const deleteUser = (id) => {
  return(dispatch) => {
    $.ajax({
      type: 'DELETE',
      url: BASEURL + `/${id}`,
      dataType: 'JSON'
    }).done( data => {
      dispatch({ type: 'DELETE_USER', id});
    }).fail( err => {
      console.log(err);
    });
  };
}
