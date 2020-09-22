import { connect } from 'react-redux';
import NotificationView from '../notification/notificationView';
import Clear from '../../modules/notification/notificationView';

const mapStateToProps = () => {
    
   notification = state.notification.notification
}

export default connect (mapStateToProps,{Clear})(NotificationView);