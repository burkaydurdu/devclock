import { Component } from 'preact';
import styles from './index.css';

export default class Clock extends Component {

  constructor(props) {
    super(props)
    this.state = {time: this.setDate()};
  }

  setDate() {
    var now = new Date();
    
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    return hour + ":" + min + ":" + sec;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setTimer(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  setTimer() {
    this.setState({
      time: this.setDate()
    });
  }
  
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <span>{this.state.time}</span>
        </div>
      </div>
    );
  }
}