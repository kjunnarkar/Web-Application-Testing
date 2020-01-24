export const addStrikes = currentStrikes => {
    if (currentStrikes >= 2) {
      setStrikeCount(0);
      setBallCount(0);
    }
    else {
      setStrikeCount(strikeCount +1);
    }
  }

export const addBalls = currentBalls => {
    if (currentBalls >= 3) {
      setBallCount(0);
      setStrikeCount(0);
    }
    else {
      setBallCount(currentBalls +1)
    }
  }

export const addHit = () => {
    setStrikeCount(0);
    setBallCount(0);
  }

export const addFoul = currentFoul => {
    if (currentFoul < 2) {
      setStrikeCount(currentFoul +1)
    }
  }