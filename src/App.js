import React from "react";

import PropTypes from 'prop-types';
import FeedbackOptions from "./components/FeedbackOption";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import Container from "./components/Container";


class App extends React.Component {

  static defaultProps = {
      initialValue: 0,
  };

  static propTypes = {
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number
  };

  state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue
  };

  varietyOfFeedback = (e) => {
      const {reaction} = e.target;
      this.setState((prevState) => ({
          [reaction]: prevState[reaction] + 1,
    }));
  }


  countTotalFeedback = () => {
      const {good, neutral, bad} = this.state;
      return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
      const { good } = this.state;
      return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render () {
      
      const {good, neutral, bad} = this.state; 
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();       
      return (
          
            <Container>
                 
                <FeedbackOptions  
                    onleaveFeedback = {this.varietyOfFeedback}
                    options = {Object.keys(this.state)}
                    
                />
                  
                
                 {total === 0 ?  (
                    <Notification message="No feedback given"
                />
                
                    ) : (
                        
                        <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />   
                
                    )
                }   
            
            </Container>
        )
    };

};

export default App;
