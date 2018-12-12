import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const getLines = props.poem.map((line) => {
    return ["The", line.adj1, line.noun1, line.adv, line.verb, "the", line.adj2, line.noun2, "."].join(" ")
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {getLines}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
