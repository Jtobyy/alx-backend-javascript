interface MajorCredits {
  credits: number,
  __majorCreditsBrand: number, // Acts as brand property
}

interface MinorCredits {
  credits: number,
  __minorCreditsBrand: number,
}

// If the brands weren't included, MajorCredits will
// be structurally identical to MinorCredits. (Difference
// between structural typing(ts) and norminal typing(e.g java).

function sumMajorCredits(subject1, subject2): MajorCredits {
  const sum: MajorCredits = subject1 + subject2;
  return sum;
}

function sumMinorCredits(subject1, subject2): MinorCredits {
  const sum: MinorCredits = subject1 + subject2;
  return sum;
}
