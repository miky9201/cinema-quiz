import React from 'react';

const Question = ({ trueAssociation, wrongAssociation, typeOfAssociation }) => 
      <p>
            Did {typeOfAssociation ? trueAssociation.actor : wrongAssociation.actor} play in {typeOfAssociation ? trueAssociation.movie : wrongAssociation.movie} ?
      </p>

export default Question

