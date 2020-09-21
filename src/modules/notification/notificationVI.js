import { connect } from 'react-redux';
import NotificationView from '../notification/notificationView';

const mapStateToProps = () => {
    notification = state.notification.notification
}

export default connect (mapStateToProps)(NotificationView);