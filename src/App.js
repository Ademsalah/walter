import React, { useState, useEffect } from 'react';

function PersonInfo() {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [timer, setTimer] = useState(0);

  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);

    if (!isImageVisible) {
      setTimer(0);
    }
  };

  
  const person = {
    fullName: "Walter White",
    profession: "Rolling meth lab",
    bio: "the heisenberg",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiFlCO_BfIZzgthIIoa9i12Ef1zqzwfHMkg&usqp=CAU",
  };

  
  useEffect(() => {
    let interval;


    if (isImageVisible) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval); 
    }

    return () => {
      clearInterval(interval); 
    };
  }, [isImageVisible]);

  return (
    <div style={styles.container}>
      <div style={styles.centeredContent}>
        <h1>{person.fullName}</h1>
        <p>Profession: {person.profession}</p>
        <p>Bio: {person.bio}</p>
        <p>Timer: {timer} seconds</p>
        <button onClick={toggleImageVisibility}>
          {isImageVisible ? 'Hide Image' : 'Show Image'}
        </button>
        
        {isImageVisible && (
          <img src={person.imgSrc} alt={person.fullName} style={styles.image} />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
  },
  centeredContent: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
  },
};

export default PersonInfo;