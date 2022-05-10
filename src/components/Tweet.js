import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet(props) {
    return (
      <div>
      <div className="tweet">
        <img
          src="https://i.imgur.com/9yw1Fyw.jpg"
          className="profile"
          alt="profile"
        />
  
          <ProfileImage image={props.tweet.user.image} />

          <User userData={props.tweet.user}/>
  
            <Timestamp time={props.tweet.timestamp}/>
          </div>
              
             <Message message={props.tweet.message}/>
  
          <div className="actions">
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-share"></i>
          </div>

          <Actions />

        </div>
    );
  }
