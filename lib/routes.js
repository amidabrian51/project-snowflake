/*jshint esversion: 6 */
Accounts.onLogin(function(){
  if(Meteor.userId() && Profiles.findOne({created_by: Meteor.userId()})){
   FlowRouter.go('main');
  }else{
    FlowRouter.go('profile');
  }
});

Accounts.onLogout(function(){
    FlowRouter.go('home');
});


FlowRouter.route('/', {
  name: 'home',
  action() {

    if(Meteor.userId()) {
      FlowRouter.go('main');
    }

    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Register'});
  }
});

FlowRouter.route('/map', {
  name: 'map',
  action() {
    BlazeLayout.render('MainLayout', {main: 'mapmap'});
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Login'});
  }
});

FlowRouter.route('/main', {
  name: 'main',
  action() {
    BlazeLayout.render('MainLayout', {main: 'ViewProjects'});
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Test'});
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
     if (Profiles.findOne( {created_by: Meteor.userId()})){
      BlazeLayout.render('MainLayout', {main: 'Profile'});
    } else {
      FlowRouter.go('new-profile');
    };
  }
});

FlowRouter.route('/profile/new', {
  name: 'new-profile',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewProfile'});
  }
});

FlowRouter.route('/profile/update', {
  name: 'update-profile',
  action() {
    BlazeLayout.render('MainLayout', {main: 'UpdateProfile'});
  }
});

FlowRouter.route('/profile/:id', {
  name: 'show-profile',
  action(params) {
    if (Profiles.findOne( {_id: params.id})){
      BlazeLayout.render('MainLayout', {main: 'AllProfile'});
    } else {
      BlazeLayout.render('MainLayout', {main: 'ViewProjects'});
    };
  }
});

FlowRouter.route('/project/new', {
  name: 'new-project',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewProject'});
  }
});

FlowRouter.route('/projects', {
    name: "view-projects",
    action() {
      BlazeLayout.render('MainLayout', {main: 'ViewProjects'});
    }
});

FlowRouter.route('/projects/skills', {
    name: "filtered-by-skills",
    action() {
      BlazeLayout.render('MainLayout', {main: 'ProjectsBySkills'});
    }
});

FlowRouter.route('/projects/location', {
    name: "filtered-by-location",
    action() {
      BlazeLayout.render('MainLayout', {main: 'ProjectsByLocation'});
    }
});

FlowRouter.route('/projects/status', {
    name: "filtered-by-status",
    action() {
      BlazeLayout.render('MainLayout', {main: 'ProjectsByStatus'});
    }
});


FlowRouter.route('/project/:id', {
    name: 'project-single',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ProjectSingle'});
    }
});

FlowRouter.route('/project/update/:id', {
  name: 'update-project',
  action() {
    BlazeLayout.render('MainLayout', {main: 'UpdateProject'});
  }
});
