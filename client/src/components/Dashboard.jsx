import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import UserInfoCard from './UserInfoCard.jsx';



const Dashboard = ({ user }) => (
<div>
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
    //{user.email && <CardText style={{ fontSize: '16px', color: 'blue' }}>{user.email}</CardText>}
  </Card>

  <UserInfoCard user = {user} />
  </div>

);

// Dashboard.propTypes = {
//   user: PropTypes.string.isRequired
// };

export default Dashboard;
