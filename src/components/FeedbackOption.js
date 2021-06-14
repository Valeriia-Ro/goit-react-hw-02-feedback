import React from 'react';
import Section from './Section';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    
    <Section title="Please leave feedback">
        
        <div>
            {options.map((option, id) => 
            <button
                style ={{
                    marginRight: '5px'
                }}
                key={id}            
                type="button"
                
                onClick={onLeaveFeedback}
                name={option}
                
            >{option}</button>)}
                        
        </div>
    </Section>
    
);

export default FeedbackOptions;