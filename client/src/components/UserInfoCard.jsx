import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const UserInfoCard = ({ user }) => (
  <Card className="mdc-card">
    <CardTitle
      title = {"Welcome " + user.info.name}
    />
    {user && <CardText style={{ fontSize: '14ps', color: 'blue' }}>{"Specialty: " + user.info.specialty}</CardText>}
    {user && <CardText style={{ fontSize: '14ps', color: 'blue' }}>{"id: " + user._id}</CardText>}
    <div class="mdc-card__actions">
  		<button class="mdc-button mdc-card__action mdc-card__action--button">Action 1</button>
  	</div>
  	<div class="mdc-card__action-icons">
      <i class="material-icons mdc-card__action mdc-card__action--icon" tabindex="0" role="button" title="Share">share</i>
     </div>
  </Card>

  );

export default UserInfoCard;
