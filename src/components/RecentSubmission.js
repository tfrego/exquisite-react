import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (props.recentLine === undefined || props.end === true) {
    return null;
  }

  const line = `The ${props.recentLine.adj1}
    ${props.recentLine.noun1}
    ${props.recentLine.adv}
    ${props.recentLine.verb} the
    ${props.recentLine.adj2}
    ${props.recentLine.noun2}.`;

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{line}</p>
    </div>
  );
}

export default RecentSubmission;
