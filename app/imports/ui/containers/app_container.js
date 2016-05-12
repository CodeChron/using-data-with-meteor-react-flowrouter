import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { AppLayout }  from '../layouts/app_layout'

export default createContainer(() => {

	const signedIn = Meteor.user() !== null

	//Our only reactive data source here is Meteor.user(), which returns null if no user is signed in, and the user object if they are.
  return {
    signedIn
  }

//As the second argument, we pass in the component around which we are wrapping this container and which will have access to this data via props
}, AppLayout)
